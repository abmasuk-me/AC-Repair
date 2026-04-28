export type Language = 'en' | 'ar';

export interface Service {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  icon: string;
  image: string;
}

export interface Translation {
  nav: {
    home: string;
    services: string;
    book: string;
    contact: string;
  };
  hero: {
    slogan: string;
    motto: string;
    promise: string;
    typing: string[];
    callNow: string;
    whatsapp: string;
  };
  booking: {
    title: string;
    name: string;
    phone: string;
    location: string;
    service: string;
    description: string;
    submit: string;
    success: string;
  };
  about: {
    title: string;
    experience: string;
    stats: {
      label: string;
      value: string;
    }[];
  };
  engineer: {
    title: string;
    name: string;
    role: string;
    education: string;
    experience: string;
  };
  contact: {
    title: string;
    email: string;
    phone: string;
    address: string;
  };
}
