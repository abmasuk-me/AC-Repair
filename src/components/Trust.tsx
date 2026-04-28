import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'motion/react';
import { Translation, Language } from '../types';

interface TrustProps {
  lang: Language;
  t: Translation;
}

function StatCounter({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState("0");
  const numberPart = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');
  const isPrefix = value.startsWith(suffix) && suffix !== '';
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numberPart, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          const rounded = Math.floor(latest);
          setDisplayValue(isPrefix ? `${suffix}${rounded}` : `${rounded}${suffix}`);
        }
      });
      return () => controls.stop();
    }
  }, [isInView, numberPart, suffix, isPrefix]);

  return <span ref={ref}>{displayValue}</span>;
}

export default function Trust({ lang, t }: TrustProps) {
  const showcaseImages = ['w1.jpg', 'w2.jpg', 'w3.jpg', 'w4.jpg', 'w5.jpg', 'w6.jpg'];
  const experienceImages = ['exp1.jpg', 'exp2.jpg', 'exp3.jpg', 'exp4.jpg'];

  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="mb-16 flex flex-col items-center text-center">
        <h2 className="text-3xl font-black tracking-tight text-slate-900">{t.about.title}</h2>
        <div className="mt-4 h-1.5 w-16 rounded-full bg-orange-500/80 shadow-sm" />
        <p className="mt-6 mx-auto max-w-md text-base leading-relaxed text-slate-500">{t.about.experience}</p>
      </div>

      <div className="mb-20 grid grid-cols-2 gap-6 md:grid-cols-4">
        {t.about.stats.map((stat, i) => (
          <div key={i} className="group flex flex-col items-center rounded-[2rem] bg-slate-50 p-8 text-center transition-all hover:bg-blue-600 hover:text-white">
            <span className="mb-2 text-3xl font-black tracking-tight text-blue-600 transition-colors group-hover:text-white">
              <StatCounter value={stat.value} />
            </span>
            <span className="text-[11px] font-black uppercase tracking-[0.15em] text-slate-400 group-hover:text-blue-100">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Experience Scroller */}
      <div className="mb-16 flex justify-center gap-5 overflow-x-auto pb-8 scrollbar-hide">
        {experienceImages.map((src, i) => (
          <motion.div 
            key={i} 
            whileHover={{ scale: 1.05 }}
            className="group h-24 w-24 shrink-0 overflow-hidden rounded-3xl bg-slate-100 ring-4 ring-slate-50 transition-all hover:ring-blue-100"
          >
            <img 
              src={src} 
              alt="Experience"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
              onError={(e) => (e.currentTarget.src = `https://picsum.photos/seed/${i+10}/200`)} 
            />
          </motion.div>
        ))}
      </div>

      {/* Work Showcase Grid */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
        {showcaseImages.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`group relative overflow-hidden rounded-[2rem] ${
              i % 3 === 1 ? 'aspect-[4/5] sm:-mt-12 sm:mb-12' : 'aspect-square'
            }`}
          >
            <img
              src={src}
              alt={`Showcase ${i + 1}`}
              className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
              onError={(e) => (e.currentTarget.src = `https://picsum.photos/seed/${i}/400/600`)}
            />
            {/* Soft Transparent Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            
            {/* View Project Floating Tag */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 transition-all group-hover:bottom-6 group-hover:opacity-100">
               <div className="rounded-full bg-white/90 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-slate-900 backdrop-blur-md shadow-xl">
                  View Work
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
