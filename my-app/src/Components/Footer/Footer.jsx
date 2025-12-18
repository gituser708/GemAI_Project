import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { RiGeminiFill } from "react-icons/ri";
import { SiGooglecloud } from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='w-full bg-gray-950 border-t border-white/5'>
      <div className='mx-auto max-w-5xl px-4 py-6 sm:py-8'>
        {/* Top: Brand + Short text */}
        <div className='flex flex-col items-center gap-2 sm:flex-row sm:justify-between'>
          <div className='text-center sm:text-left'>
            <Link to='/' className='flex items-center gap-x-2 text-white'>
              <RiGeminiFill className='h-6 w-6 text-red-500' />
              <span className='text-lg font-semibold tracking-tight'>
                GemAI
              </span>
            </Link>
            <p className='text-xs sm:text-sm text-gray-200 fw-medium mt-2'>
              AI-powered content generation for modern creators.
            </p>
          </div>

          {/* Social icons */}
          <div className='mt-3 flex items-center gap-4 sm:mt-0'>
            <a
              href='#'
              aria-label='GemAI on GitHub'
              className='rounded-full bg-white/5 p-2 text-gray-300 transition hover:bg-violet-500/20 hover:text-violet-400'>
              <FaGithub className='h-7 w-7' />
            </a>
            <a
              href='#'
              aria-label='GemAI on Twitter'
              className='rounded-full bg-white/5 p-2 text-gray-300 transition hover:bg-violet-500/20 hover:text-violet-400'>
              <FaTwitter className='h-7 w-7' />
            </a>
            <a
              href='#'
              aria-label='GemAI on LinkedIn'
              className='rounded-full bg-white/5 p-2 text-gray-300 transition hover:bg-violet-500/20 hover:text-violet-400'>
              <FaLinkedin className='h-7 w-7' />
            </a>
            <a
              href='#'
              aria-label='GemAI on LinkedIn'
              className='rounded-full bg-white/5 p-2 text-gray-300 transition hover:bg-violet-500/20 hover:text-violet-400'>
              <SiGooglecloud className='h-7 w-7' />
            </a>
            <a
              href='#'
              aria-label='GemAI on LinkedIn'
              className='rounded-full bg-white/5 p-2 text-gray-300 transition hover:bg-violet-500/20 hover:text-violet-400'>
              <IoLogoFirebase className='h-7 w-7' />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className='my-4 h-px w-full bg-white/5' />

        {/* Bottom: Centered copyright */}
        <div className='flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left'>
          <p className='text-xs sm:text-sm text-gray-300'>
            © {year} <span className='font-medium text-gray-200'>GemAI</span>.
            All rights reserved.
          </p>

          <div className='flex flex-wrap items-center justify-center gap-3 text-[11px] sm:text-xs text-gray-200'>
            <button className='transition hover:text-violet-400'>Terms</button>
            <span className='h-1 w-1 rounded-full bg-gray-300' />
            <button className='transition hover:text-violet-400'>
              Privacy
            </button>
            <span className='h-1 w-1 rounded-full bg-gray-300' />
            <button className='transition hover:text-violet-400'>
              Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
