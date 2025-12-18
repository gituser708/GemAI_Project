# GemAI Project — AI Content Generator Web App

GemAI is a full-stack AI-powered content generation platform built using **Google Gemini AI**. It allows users to generate and summarize content using prompts, authenticate securely, and subscribe to paid plans via **Stripe** to receive additional usage credits.

---

## 🌐 Live Links

* **Frontend:** [https://gemai-web-app.onrender.com](https://gemai-web-app.onrender.com)
* **Backend API:** [https://gemai-server.onrender.com](https://gemai-server.onrender.com)

---

## 🧱 Project Structure

```
GemAI/
├── GemAI_Web_App/     # Frontend (React)
└── GemAI_Server/      # Backend (Node + Express)
```

---

## 🧰 Tech Stack

### Frontend

* React.js
* React Router DOM
* Vite (npm)
* Tailwind CSS
* Formik
* Yup
* React Icons
* Firebase (Google Auth)
* Stripe
* HttpOnly Cookies
* CORS
* Render (Deployment)

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* HttpOnly Cookies
* Bcrypt
* Stripe
* Firebase (Google Auth)
* Node Cron
* CORS
* Postman
* Render (Deployment)

---

## 🔐 Core Features

* AI-powered content generation & summarization using **Gemini AI**
* Prompt-based content generation
* Secure authentication using JWT stored in **HttpOnly cookies**
* Google authentication via Firebase
* Stripe subscription system for paid plans & credit management
* Protected frontend routes
* Cross-origin authentication with proper CORS & cookie configuration
* Fully responsive UI (mobile-friendly)

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repositories

```bash
git clone 'https://github.com/gituser708/GemAI_Project.git'
```

---

### 2️⃣ Frontend Setup

```bash
cd my-app
npm install
npm run dev
```

---

### 3️⃣ Backend Setup

```bash
cd Node
npm install
npm run dev
```

Create a `.env` file and configure:

* MongoDB URI
* JWT secret
* Firebase credentials
* Stripe secret key
* Gemini AI API key

---

## 🚀 Deployment

Both frontend and backend are deployed on **Render** with:

* Secure cookie handling
* Proper CORS configuration
* Environment-based variables

---

## 🧪 API Testing

* Use **Postman** to test backend APIs
* Stripe webhooks supported
* Auth & payment routes protected

---

## 📌 Notes

* Cookies are configured for cross-origin usage
* Subscription plans control available AI credits
* Cron jobs manage recurring tasks (credit refresh, cleanup, etc.)

---

## 🙏 Acknowledgements

* Google Gemini AI
* Stripe
* Firebase

---

**Thank you for your valuable attention.**
