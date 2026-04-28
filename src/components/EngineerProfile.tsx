import React from 'react';
import { motion } from 'motion/react';
import { Translation, Language } from '../types';
import { GraduationCap, Award, Briefcase } from 'lucide-react';

interface EngineerProfileProps {
  lang: Language;
  t: Translation;
}

export default function EngineerProfile({ lang, t }: EngineerProfileProps) {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="mb-16 flex flex-col items-center text-center">
        <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">{t.engineer.title}</h2>
        <div className="mt-5 h-2 w-20 rounded-full bg-brand-blue shadow-[0_0_20px_rgba(37,99,235,0.4)]" />
      </div>

      <div className="group relative overflow-hidden rounded-[5rem] bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 p-10 md:p-20 ring-1 ring-white/15 shadow-[0_50px_120px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
        {/* Animated Background Mesh - More Subtle & Layered */}
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-blue-600/5 blur-[120px] anima-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-orange-600/5 blur-[120px] opacity-30" />
        <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="relative z-10 flex flex-col items-center gap-14 lg:grid lg:grid-cols-[auto_1fr] lg:items-start lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ rotateY: 15, rotateX: -8, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            style={{ perspective: 1000 }}
            className="relative shrink-0"
          >
            <div className="relative h-72 w-72 overflow-hidden rounded-[4rem] border-[14px] border-slate-800/95 bg-slate-800 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)] transition-all duration-700 hover:shadow-brand-blue/10">
              <img
                src="https://images.unsplash.com/photo-1621905252507-b354bc2a196e?auto=format&fit=crop&q=80&w=600"
                alt={t.engineer.name}
                className="h-full w-full object-cover grayscale-[0.2] transition-all duration-700 hover:grayscale-0 hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581092162384-8987c1794713?auto=format&fit=crop&q=80&w=600";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-brand-blue/10 mix-blend-overlay" />
            </div>
            {/* Status Batch - Award Icon with Bounce */}
            <motion.div 
              initial={{ scale: 0, rotate: -90 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.2, 
                rotate: 15,
                filter: "brightness(1.2) contrast(1.1)",
                boxShadow: "0 25px 50px -12px rgba(37, 99, 235, 0.6)"
              }}
              transition={{ 
                type: 'spring', 
                stiffness: 400, 
                damping: 12, // High bounce
                delay: 0.7 
              }}
              className="absolute -bottom-2 -right-2 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-blue to-blue-700 text-white shadow-2xl ring-8 ring-slate-900 cursor-pointer"
            >
              <Award size={40} />
            </motion.div>
          </motion.div>

          <div className="space-y-8 text-center lg:text-left">
            <div>
              <h3 className="text-4xl font-black tracking-tight text-white md:text-6xl">{t.engineer.name}</h3>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-4 inline-flex items-center gap-3 rounded-full bg-brand-blue/10 px-6 py-2 ring-1 ring-brand-blue/30 backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
                </span>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-400">
                  {t.engineer.role}
                </p>
              </motion.div>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-slate-400">
              {t.engineer.experience}
            </p>

            <div className="grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
              <motion.div 
                whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.08)" }}
                className="flex items-center gap-6 rounded-[2.5rem] bg-white/5 p-6 ring-1 ring-white/10 transition-all duration-300 group/item backdrop-blur-md"
              >
                <motion.div 
                  initial={{ scale: 0.2, opacity: 0, y: 20 }}
                  whileInView={{ scale: 1, opacity: 1, y: 0 }}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: -10,
                    filter: "brightness(1.3) saturate(1.2)",
                    boxShadow: "0 15px 30px -10px rgba(37, 99, 235, 0.5)" 
                  }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 400, 
                    damping: 12, // Vibrant bounce
                    mass: 0.9
                  }}
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-blue/20 text-brand-blue group-hover/item:bg-brand-blue group-hover/item:text-white transition-all duration-300 shadow-inner shadow-blue-500/10"
                >
                  <GraduationCap size={28} />
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">{lang === 'ar' ? 'التعليم' : 'Education'}</span>
                  <span className="text-lg font-bold tracking-tight text-white/95 leading-tight">{t.engineer.education}</span>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.08)" }}
                className="flex items-center gap-6 rounded-[2.5rem] bg-white/5 p-6 ring-1 ring-white/10 transition-all duration-300 group/item backdrop-blur-md"
              >
                <motion.div 
                  initial={{ scale: 0.2, opacity: 0, y: 20 }}
                  whileInView={{ scale: 1, opacity: 1, y: 0 }}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: 10,
                    filter: "brightness(1.3) saturate(1.2)",
                    boxShadow: "0 15px 30px -10px rgba(249, 115, 22, 0.5)" 
                  }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 400, 
                    damping: 12, // Vibrant bounce
                    mass: 0.9,
                    delay: 0.15 
                  }}
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-orange/20 text-brand-orange group-hover/item:bg-brand-orange group-hover/item:text-white transition-all duration-300 shadow-inner shadow-orange-500/10"
                >
                  <Briefcase size={28} />
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">{lang === 'ar' ? 'الخبرة' : 'Experience'}</span>
                  <span className="text-lg font-bold tracking-tight text-white/95 leading-tight">{lang === 'ar' ? 'خبرة أكثر من 10 سنوات' : '10+ Years Professional Exp'}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
