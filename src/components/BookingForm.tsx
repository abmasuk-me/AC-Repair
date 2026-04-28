import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Translation, Language } from '../types';
import * as Icons from 'lucide-react';
import { services } from '../constants';

interface BookingFormProps {
  lang: Language;
  t: Translation;
}

export default function BookingForm({ lang, t }: BookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="mx-auto max-w-3xl px-6">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-black tracking-tight text-slate-900">{t.booking.title}</h2>
        <div className="mx-auto mt-4 h-1.5 w-12 rounded-full bg-blue-600" />
      </div>

      <div className="relative overflow-hidden rounded-[3rem] bg-white p-8 md:p-12 shadow-[0_20px_80px_rgba(0,0,0,0.06)] border border-slate-50">
        {/* Subtle Brand Watermark */}
        <div className="absolute -top-10 -right-10 opacity-[0.03] select-none pointer-events-none">
          <Icons.ShieldCheck size={200} className="text-blue-900" />
        </div>

        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center justify-center py-16 text-center"
            >
              <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-green-50 text-green-500 shadow-[inset_0_2px_10px_rgba(34,197,94,0.1)]">
                <Icons.CheckCircle size={48} />
              </div>
              <h3 className="max-w-xs text-2xl font-black leading-tight text-slate-900">
                {t.booking.success}
              </h3>
              <p className="mt-4 text-sm text-slate-500">We usually respond within 30 minutes.</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="relative z-10 space-y-8"
            >
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400">
                    <Icons.User size={12} className="text-blue-400" />
                    {t.booking.name}
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full rounded-2xl border-2 border-slate-50 bg-slate-50 px-5 py-4.5 text-sm font-medium outline-none transition-all placeholder:text-slate-400 focus:border-blue-200 focus:bg-white focus:ring-[6px] focus:ring-blue-50/50"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400">
                    <Icons.Phone size={12} className="text-blue-400" />
                    {t.booking.phone}
                  </label>
                  <input
                    required
                    type="tel"
                    className="w-full rounded-2xl border-2 border-slate-50 bg-slate-50 px-5 py-4.5 text-sm font-medium outline-none transition-all placeholder:text-slate-400 focus:border-blue-200 focus:bg-white focus:ring-[6px] focus:ring-blue-50/50"
                    placeholder="+966"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400">
                  <Icons.MapPin size={12} className="text-blue-400" />
                  {t.booking.location}
                </label>
                <div className="group relative">
                  <input
                    required
                    type="text"
                    className="w-full rounded-2xl border-2 border-slate-50 bg-slate-50 px-5 py-4.5 text-sm font-medium outline-none transition-all placeholder:text-slate-400 focus:border-blue-200 focus:bg-white focus:ring-[6px] focus:ring-blue-50/50"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300">
                    <Icons.Navigation size={16} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400">
                    <Icons.Settings size={12} className="text-blue-400" />
                    {t.booking.service}
                  </label>
                  <div className="relative">
                    <select className="w-full appearance-none rounded-2xl border-2 border-slate-50 bg-slate-50 px-5 py-4.5 text-sm font-medium outline-none transition-all focus:border-blue-200 focus:bg-white focus:ring-[6px] focus:ring-blue-50/50">
                      {services.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title[lang]}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <Icons.ChevronDown size={18} />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400">
                    <Icons.MessageSquare size={12} className="text-blue-400" />
                    {t.booking.description}
                  </label>
                  <textarea
                    rows={1}
                    className="w-full rounded-2xl border-2 border-slate-50 bg-slate-50 px-5 py-4.5 text-sm font-medium outline-none transition-all placeholder:text-slate-400 focus:border-blue-200 focus:bg-white focus:ring-[6px] focus:ring-blue-50/50"
                  ></textarea>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.01, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="group relative flex w-full items-center justify-center gap-4 overflow-hidden rounded-[1.5rem] bg-blue-600 py-6 text-sm font-black uppercase tracking-widest text-white shadow-[0_20px_40px_rgba(37,99,235,0.2)] transition-all hover:bg-blue-700 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="h-6 w-6 animate-spin rounded-full border-[3px] border-white/20 border-t-white" />
                ) : (
                  <>
                    <Icons.ShieldCheck size={20} className="transition-transform group-hover:scale-110" />
                    {t.booking.submit}
                    <Icons.ArrowRight size={18} className="translate-x-0 transition-transform group-hover:translate-x-2" />
                  </>
                )}
                {/* Button Shine Effect */}
                <div className="absolute -inset-20 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
