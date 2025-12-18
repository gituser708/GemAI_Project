require('dotenv').config({ quiet: true });
const asyncHandler = require('express-async-handler');
const axios = require('axios');
const ContentHistory = require('../models/ContentHistory');
const User = require('../models/User');

const MODEL_ORDER = ['gemini-2.5-pro', 'gemini-2.5-flash', 'gemini-2.0-flash'];

const callGemini = async (prompt, model) => {
  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.7, maxOutputTokens: 2048 },
    },
    { headers: { 'Content-Type': 'application/json' } }
  );
  return response.data;
};

const extractContent = (data) => {
  let content = '';
  if (Array.isArray(data?.candidates)) {
    for (const c of data.candidates) {
      const parts = c?.content?.parts;
      if (Array.isArray(parts)) {
        for (const p of parts) {
          if (typeof p.text === 'string') content += p.text + '\n';
        }
      } else if (c.content?.text) {
        content += c.content.text + '\n';
      } else if (c.thoughts?.text) {
        content += c.thoughts.text + '\n';
      }
    }
  }
  return content.trim();
};

const tryModels = async (prompt) => {
  for (const model of MODEL_ORDER) {
    try {
      const data = await callGemini(prompt, model);
      const content = extractContent(data);
      if (content) return { content, modelUsed: model };
    } catch (err) {
      console.log(`Model ${model} failed:`, err.message);
    }
  }
  return { content: null, modelUsed: null };
};

const myAICtrl = {
  geminiAI: asyncHandler(async (req, res) => {
    const { prompt } = req.body;
    if (!prompt || typeof prompt !== 'string' || !prompt.trim()) {
      return res
        .status(400)
        .json({ error: 'Prompt is required and must be a string' });
    }

    const enhancedPrompt = `${prompt.trim()} Write a detailed, multi-paragraph response with examples.`;
    let { content, modelUsed } = await tryModels(enhancedPrompt);

    if (!content) {
      const retryPrompt =
        enhancedPrompt + ' Expand further with real-world applications.';
      ({ content, modelUsed } = await tryModels(retryPrompt));
    }

    if (!content) {
      return res.status(500).json({
        error:
          'Gemini did not generate any content. Try a longer or more specific prompt.',
      });
    }

    const newContent = await ContentHistory.create({
      user: req.user?._id,
      content,
    });

    if (req.user) {
      await User.findByIdAndUpdate(
        req.user.id,
        { $push: { history: newContent._id }, $inc: { apiRequestCount: 1 } },
        { new: true }
      );
    }

    res.status(200).json({ content, modelUsed });
  }),
};

module.exports = myAICtrl;
