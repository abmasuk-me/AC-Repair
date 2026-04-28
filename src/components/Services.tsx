import React from 'react';
import { motion } from 'motion/react';
import { Translation, Language } from '../types';
import { services } from '../constants';
import * as Icons from 'lucide-react';

interface ServicesProps {
  lang: Language;
  t: Translation;
}

export default function Services({ lang, t }: ServicesProps) {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="mb-12 flex flex-col items-center text-center">
        <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">{t.nav.services}</h2>
        <div className="mt-4 h-1.5 w-16 rounded-full bg-blue-600 shadow-sm" />
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const IconComponent = (Icons as any)[service.icon] || Icons.HelpCircle;
          const isEmergency = service.id === 'emergency';
          
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`group relative overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] ${
                isEmergency ? 'ring-2 ring-red-100' : ''
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-slate-50">
                <img
                  src={service.image}
                  alt={service.title[lang]}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  onError={(e) => (e.currentTarget.src = `https://picsum.photos/seed/${service.id}/800/500`)}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent transition-opacity group-hover:from-blue-900/80`} />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                   <div className="h-16 w-16 overflow-hidden rounded-full bg-white/20 p-4 backdrop-blur-md">
                     <IconComponent size={32} className="text-white" />
                   </div>
                </div>

                <div className="absolute top-4 left-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors backdrop-blur-md ${
                    isEmergency ? 'bg-red-500 text-white' : 'bg-white/90 text-blue-600'
                  }`}>
                    <IconComponent size={24} />
                  </div>
                </div>
              </div>
              
              <div className="px-5 py-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-black tracking-tight text-slate-900">
                    {service.title[lang]}
                  </h3>
                  {isEmergency && (
                    <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  )}
                </div>
                <p className="mb-6 text-sm leading-relaxed text-slate-500">
                  {service.description[lang]}
                </p>
                <div className="flex items-center justify-between border-t border-slate-50 pt-5">
                  <motion.a
                    href="#book"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`rounded-2xl px-6 py-2.5 text-[11px] font-black uppercase tracking-widest transition-all ${
                      isEmergency 
                        ? 'bg-red-500 text-white shadow-lg shadow-red-100 hover:bg-red-600' 
                        : 'bg-slate-900 text-white hover:bg-blue-600'
                    }`}
                  >
                    {t.nav.book}
                  </motion.a>
                  <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <Icons.Clock size={12} />
                    {isEmergency ? 'Fast' : 'Standard'}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
