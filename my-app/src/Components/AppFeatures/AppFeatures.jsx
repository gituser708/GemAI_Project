import React from 'react';
import {
  Sparkles,
  PenTool,
  Workflow,
  Settings2,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import Footer from '../Footer/Footer';

export default function HomeFeatures() {
  const features = [
    {
      title: 'AI‑Powered Content Creation',
      desc: 'Generate high‑quality, engaging content instantly with intelligent algorithms.',
      icon: <Sparkles className='w-8 h-8 text-purple-400' />,
      color: 'from-purple-600/20 to-purple-900/10',
    },
    {
      title: 'Customizable Output',
      desc: 'Tailor tone, style, and structure to match your exact needs.',
      icon: <Settings2 className='w-8 h-8 text-yellow-400' />,
      color: 'from-yellow-600/20 to-yellow-900/10',
    },
    {
      title: 'Streamlined Workflow',
      desc: 'Integrates naturally into your daily workflow for maximum efficiency.',
      icon: <Workflow className='w-8 h-8 text-green-400' />,
      color: 'from-green-600/20 to-green-900/10',
    },
    {
      title: 'Creative Assistance',
      desc: 'Rewrite, improve, or expand ideas with AI‑powered creativity.',
      icon: <PenTool className='w-8 h-8 text-blue-400' />,
      color: 'from-blue-600/20 to-blue-900/10',
    },
    {
      title: 'Secure & Reliable',
      desc: 'Your data stays protected with enterprise‑grade security.',
      icon: <ShieldCheck className='w-8 h-8 text-teal-400' />,
      color: 'from-teal-600/20 to-teal-900/10',
    },
    {
      title: 'Lightning Fast',
      desc: 'Optimized for speed so you get results instantly.',
      icon: <Zap className='w-8 h-8 text-orange-400' />,
      color: 'from-orange-600/20 to-orange-900/10',
    },
  ];

  return (
    <React.Fragment>
    <section className='relative py-20 bg-gray-950 overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-b from-gray-900/40 via-gray-950 to-black pointer-events-none' />

      <div className='relative container mx-auto px-6'>
        <h2 className='text-center text-4xl md:text-5xl font-bold text-white mb-14'>
          Powerful Features to Boost Your Workflow
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((f, i) => (
            <div
              key={i}
              className={`
                backdrop-blur-xl bg-gradient-to-br ${f.color}
                border border-white/10 rounded-2xl p-6 shadow-xl
                hover:shadow-purple-500/20 hover:-translate-y-1
                transition-all duration-300 cursor-pointer
              `}>
              <div className='flex items-center justify-center w-16 h-16 rounded-xl bg-white/5 mb-6'>
                {f.icon}
              </div>

              <h3 className='text-xl font-semibold text-white mb-3'>
                {f.title}
              </h3>

              <p className='text-gray-400 text-base leading-relaxed'>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      </section>
      <Footer />
      </React.Fragment>
  );
};
