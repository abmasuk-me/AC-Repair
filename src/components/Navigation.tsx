import React from 'react';
import { Home, Grid, Calendar, Phone } from 'lucide-react';
import { Translation } from '../types';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  t: Translation;
}

export default function Navigation({ activeSection, setActiveSection, t }: NavigationProps) {
  const navItems = [
    { id: 'home', icon: Home, label: t.nav.home },
    { id: 'services', icon: Grid, label: t.nav.services },
    { id: 'book', icon: Calendar, label: t.nav.book },
    { id: 'contact', icon: Phone, label: t.nav.contact },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-around border-t border-neutral-100 bg-white px-2 py-3 pb-safe shadow-[0_-4px_24px_rgba(0,0,0,0.04)]">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={() => setActiveSection(item.id)}
          className={`flex flex-col items-center gap-1 transition-colors ${
            activeSection === item.id ? 'text-blue-600' : 'text-neutral-400 hover:text-neutral-600'
          }`}
        >
          <item.icon size={22} strokeWidth={activeSection === item.id ? 2.5 : 2} />
          <span className="text-[10px] font-medium">{item.label}</span>
          {activeSection === item.id && (
            <div className="h-1 w-1 rounded-full bg-blue-600 mt-0.5" />
          )}
        </a>
      ))}
    </nav>
  );
}
