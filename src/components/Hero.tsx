import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Translation, Language } from '../types';
import { Phone, MessageCircle } from 'lucide-react';

interface HeroProps {
  lang: Language;
  t: Translation;
}

export default function Hero({ lang, t }: HeroProps) {
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTypingIndex((prev) => (prev + 1) % t.hero.typing.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [t.hero.typing.length]);

  return (
    <div className="relative overflow-hidden px-6 pt-12 pb-16 text-center">
      {/* Background Glows */}
      <div className="absolute -top-24 -left-20 h-96 w-96 rounded-full bg-blue-400/10 blur-[100px]" />
      <div className="absolute -bottom-24 -right-20 h-96 w-96 rounded-full bg-orange-400/10 blur-[100px]" />

      {/* 3D Circular Logo Animation */}
      <div className="relative mx-auto mb-10 h-64 w-64 md:h-72 md:w-72">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full border-[2px] border-dashed border-blue-200/50"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-6 rounded-full border-[1.5px] border-dashed border-orange-200/50"
        />
        
        <motion.div
          animate={{ 
            y: [0, -12, 0],
            scale: [1, 1.04, 1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative flex h-full w-full items-center justify-center"
        >
          <div className="group relative h-48 w-48 overflow-hidden rounded-full border-[6px] border-white bg-white shadow-[0_20px_50px_rgba(37,99,235,0.15)] transition-transform hover:scale-105 active:scale-95 md:h-56 md:w-56">
             {/* Center Logo - 3D Animated Vector */}
             <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-tr from-brand-blue via-blue-600 to-blue-400 text-white">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ rotateY: 25, rotateX: -15 }}
                  style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
                  className="flex flex-col items-center justify-center p-8 active:scale-95 transition-transform"
                >
                  <motion.div
                    style={{ transform: "translateZ(50px)" }}
                    className="relative"
                  >
                    <motion.span 
                      animate={{ 
                        textShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 30px rgba(255,255,255,0.6)", "0 0 0px rgba(255,255,255,0)"]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="relative block text-7xl font-black md:text-8xl tracking-tighter"
                    >
                      AB
                      <motion.div
                        animate={{ x: ["-150%", "300%"] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12"
                      />
                    </motion.span>
                  </motion.div>

                  <motion.div 
                    style={{ transform: "translateZ(30px)" }}
                    className="relative mt-4 flex h-2 w-24 overflow-hidden rounded-full bg-white/30 backdrop-blur-sm"
                  >
                    <motion.div 
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="h-full w-2/3 bg-brand-orange shadow-[0_0_15px_rgba(249,115,22,0.8)]" 
                    />
                  </motion.div>

                  <motion.span 
                    style={{ transform: "translateZ(20px)" }}
                    className="mt-5 text-[14px] font-black uppercase tracking-[0.4em] text-white/95 drop-shadow-xl"
                  >
                    Cooling
                  </motion.span>
                </motion.div>
             </div>
             {/* Glossy Overlay */}
             <div className="absolute -inset-20 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-40 blur-2xl group-hover:animate-pulse" />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-2xl"
      >
        <span className="mb-3 inline-block rounded-full bg-orange-50 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-orange-600 shadow-sm">
          {t.hero.motto}
        </span>
        <h1 className="mb-6 text-4xl font-black leading-[1.1] tracking-tight text-slate-900 md:text-6xl">
          {t.hero.slogan}
        </h1>
        
        <div className="mb-8 h-10">
          <AnimatePresence mode="wait">
            <motion.p
              key={typingIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="text-xl font-bold text-blue-600 md:text-2xl"
            >
              • {t.hero.typing[typingIndex]} •
            </motion.p>
          </AnimatePresence>
        </div>

        <p className="mb-12 text-base leading-relaxed text-slate-500 md:text-lg">
          {t.hero.promise}
        </p>

        <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
          <motion.a
            whileHover={{ scale: 1.02, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
            href={`tel:${t.contact.phone}`}
            className="flex flex-1 items-center justify-center gap-3 rounded-2xl bg-blue-600 py-4.5 text-sm font-black uppercase tracking-widest text-white shadow-[0_12px_30px_rgba(37,99,235,0.25)] transition-all hover:bg-blue-700"
          >
            <Phone size={18} />
            {t.hero.callNow}
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
            href={`https://wa.me/${t.contact.phone.replace(/\s+/g, '')}`}
            className="flex flex-1 items-center justify-center gap-3 rounded-2xl border-2 border-slate-100 bg-white py-4.5 text-sm font-black uppercase tracking-widest text-slate-700 shadow-sm transition-all hover:border-blue-100 hover:bg-slate-50"
          >
            <MessageCircle size={18} className="text-green-500" />
            {t.hero.whatsapp}
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
