import React from 'react';
import { Language } from '../types';
import { motion } from 'motion/react';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function Header({ lang, setLang }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-white/80 px-6 py-4 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <motion.div 
          whileHover={{ rotate: 10, scale: 1.1 }}
          className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-brand-blue font-black text-white text-xl shadow-lg shadow-blue-100"
        >
          AB
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
          />
        </motion.div>
        <div className="flex flex-col">
          <span className="text-sm font-black leading-none tracking-tight text-slate-800">AB Cooling</span>
          <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest"> & Services</span>
        </div>
      </div>

      <button
        onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
        className="flex h-9 items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 text-xs font-semibold transition-colors hover:bg-neutral-100"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        {lang === 'en' ? 'العربية' : 'English'}
      </button>
    </header>
  );
}
