import React from 'react';
import { motion } from 'motion/react';
import { Translation, Language } from '../types';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

interface ContactProps {
  lang: Language;
  t: Translation;
}

export default function Contact({ lang, t }: ContactProps) {
  const contactItems = [
    { 
      icon: Phone, 
      label: 'Call', 
      value: t.contact.phone, 
      href: `tel:${t.contact.phone}`,
      color: 'bg-blue-600 text-white',
      accent: 'text-blue-600'
    },
    { 
      icon: Mail, 
      label: 'Email', 
      value: t.contact.email, 
      href: `mailto:${t.contact.email}`,
      color: 'bg-slate-900 text-white',
      accent: 'text-slate-900'
    },
    { 
      icon: MapPin, 
      label: 'Visit', 
      value: t.contact.address, 
      href: 'https://maps.app.goo.gl/W7HqRzRhLsVByejM9',
      color: 'bg-orange-500 text-white',
      accent: 'text-orange-500'
    },
  ];

  return (
    <div className="mx-auto max-w-3xl px-6">
      <div className="mb-12 flex flex-col items-center text-center">
        <h2 className="text-3xl font-black tracking-tight text-slate-900">{t.contact.title}</h2>
        <div className="mt-4 h-1.5 w-16 rounded-full bg-blue-600 shadow-sm" />
      </div>

      <div className="grid grid-cols-1 gap-6">
        {contactItems.map((item, i) => (
          <motion.a
            key={i}
            href={item.href}
            whileHover={{ x: 8, backgroundColor: 'rgba(255, 255, 255, 1)' }}
            className="flex items-center gap-6 rounded-[2.5rem] bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-50 transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
          >
            <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.5rem] shadow-lg ${item.color}`}>
              <item.icon size={28} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="mb-1 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
                {item.label}
              </p>
              <p className="truncate text-lg font-black text-slate-900">{item.value}</p>
            </div>
            <div className={`h-10 w-10 rounded-full flex items-center justify-center bg-slate-50 ${item.accent}`}>
              <ExternalLink size={18} />
            </div>
          </motion.a>
        ))}
      </div>

      {/* Map Section */}
      <div className="mt-12 group relative overflow-hidden rounded-[3rem] border-[8px] border-white bg-slate-100 shadow-2xl">
        <div className="relative aspect-video w-full">
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800"
            alt="Maps"
            className="h-full w-full object-cover grayscale opacity-60 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
          
          <div className="absolute inset-0 flex items-center justify-center p-6">
             <motion.div 
               whileHover={{ scale: 1.05 }}
               className="flex items-center gap-4 rounded-3xl bg-white p-5 text-sm font-black text-slate-900 shadow-2xl backdrop-blur-md"
             >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 to-red-100 text-red-500">
                  <MapPin size={22} fill="currentColor" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-slate-400">Our HQ</span>
                  <span>Riyadh, Saudi Arabia</span>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
      
      <footer className="mt-20 text-center pb-8">
        <div className="flex justify-center gap-4 mb-4">
           {['fb', 'tw', 'ig'].map(s => (
             <div key={s} className="h-8 w-8 rounded-full bg-slate-200" />
           ))}
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
          © 2026 AB Cooling & Appliance Services
        </p>
      </footer>
    </div>
  );
}
