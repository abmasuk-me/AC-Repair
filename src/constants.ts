import { Language, Service, Translation } from './types';

export const services: Service[] = [
  {
    id: 'ac-repair',
    title: { en: 'AC Repair', ar: 'تصليح مكيفات' },
    description: { en: 'Expert AC repair for all models.', ar: 'إصلاح المكيفات بجميع الموديلات.' },
    icon: 'AirVent',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ec4?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'installation',
    title: { en: 'Installation', ar: 'تركيب' },
    description: { en: 'Professional AC installation services.', ar: 'خدمات تركيب المكيفات الاحترافية.' },
    icon: 'Hammer',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'gas-refill',
    title: { en: 'Gas Refill', ar: 'تعبئة فريون' },
    description: { en: 'High quality refrigerant refill.', ar: 'تعبئة فريون عالي الجودة.' },
    icon: 'Wind',
    image: 'https://images.unsplash.com/photo-1599939575322-792a12b33562?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'refrigerator',
    title: { en: 'Refrigerator Repair', ar: 'تصليح ثلاجات' },
    description: { en: 'Fridge and freezer maintenance.', ar: 'صيانة الثلاجات والفريزر.' },
    icon: 'Refrigerator',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'electrical',
    title: { en: 'Electrical Wiring', ar: 'توصيلات كهربائية' },
    description: { en: 'Safe and secure electrical solutions.', ar: 'حلول كهربائية آمنة ومضمونة.' },
    icon: 'Zap',
    image: 'https://images.unsplash.com/photo-1621905252507-b354bcadcabc?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'fan-repair',
    title: { en: 'Fan Repair', ar: 'تصليح مراوح' },
    description: { en: 'Repairs for all types of ceiling fans.', ar: 'إصلاح جميع أنواع مراوح السقف.' },
    icon: 'Fan',
    image: 'https://images.unsplash.com/photo-1591185520173-063992a9a734?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'light-installation',
    title: { en: 'Light Installation', ar: 'تركيب إضاءة' },
    description: { en: 'Modern lighting setup for your home.', ar: 'تركيب إضاءة حديثة لمنزلك.' },
    icon: 'Lightbulb',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'tv-repair',
    title: { en: 'TV Repair', ar: 'تصليح تلفزيون' },
    description: { en: 'Screen and internal component repairs.', ar: 'إصلاح الشاشات والمكونات الداخلية.' },
    icon: 'Tv',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'emergency',
    title: { en: 'Emergency', ar: 'حالات الطوارئ' },
    description: { en: '24/7 emergency repair services.', ar: 'خدمات إصلاح الطوارئ على مدار الساعة.' },
    icon: 'AlertCircle',
    image: 'https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?auto=format&fit=crop&q=80&w=800',
  },
];

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      book: 'Book',
      contact: 'Contact',
    },
    hero: {
      slogan: 'Comfort You Deserve, Service You Can Trust.',
      motto: 'Reliable Service, Lasting Comfort.',
      promise: 'Fast, Honest, Professional — Every Time.',
      typing: ['Fast Repair', '24/7 Emergency', 'Trusted Experts'],
      callNow: 'Call Now',
      whatsapp: 'WhatsApp',
    },
    booking: {
      title: 'Book a Service',
      name: 'Full Name',
      phone: 'Phone Number',
      location: 'Your Location',
      service: 'Select Service',
      description: 'Issue Description',
      submit: 'Send Request',
      success: 'Request sent successfully! We will contact you soon.',
    },
    about: {
      title: 'Why Choose Us',
      experience: 'Over 15 years of excellence in Saudi Arabia.',
      stats: [
        { label: 'Happy Clients', value: '5000+' },
        { label: 'Technicians', value: '50+' },
        { label: 'Years Exp', value: '15+' },
        { label: 'Response', value: '30m' },
      ],
    },
    engineer: {
      title: 'Expert Engineering',
      name: 'Abu Bakkar',
      role: 'Mechanical Engineer',
      education: 'B.Sc in Mechanical Engineering',
      experience: '10+ years of industrial & residential HVAC experience.',
    },
    contact: {
      title: 'Contact Us',
      email: 'abu.bakkar.ac.service@gmail.com',
      phone: '+966 50 000 0000', // Placeholder for user's number
      address: 'Saudi Arabia, Riyadh (AB Cooling & Appliance)',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'خدماتنا',
      book: 'احجز الآن',
      contact: 'اتصل بنا',
    },
    hero: {
      slogan: 'الراحة التي تستحقها، الخدمة التي يمكنك الوثوق بها.',
      motto: 'خدمة موثوقة، راحة دائمة.',
      promise: 'سريع، صادق، محترف - في كل مرة.',
      typing: ['إصلاح سريع', 'طوارئ 24/7', 'خبراء موثوقون'],
      callNow: 'اتصل الآن',
      whatsapp: 'واتساب',
    },
    booking: {
      title: 'احجز خدمة',
      name: 'الاسم الكامل',
      phone: 'رقم الهاتف',
      location: 'موقعك',
      service: 'اختر الخدمة',
      description: 'وصف المشكلة',
      submit: 'إرسال الطلب',
      success: 'تم إرسال الطلب بنجاح! سنتصل بك قريباً.',
    },
    about: {
      title: 'لماذا تختارنا',
      experience: 'أكثر من 15 عاماً من التميز في المملكة العربية السعودية.',
      stats: [
        { label: 'عميل سعيد', value: '+5000' },
        { label: 'فني محترف', value: '+50' },
        { label: 'سنة خبرة', value: '+15' },
        { label: 'سرعة استجابة', value: '30د' },
      ],
    },
    engineer: {
      title: 'هندسة خبيرة',
      name: 'أبو بكر',
      role: 'مهندس ميكانيكي',
      education: 'بكالوريوس هندسة ميكانيكية',
      experience: 'أكثر من 10 سنوات من الخبرة في أنظمة التكييف الصناعية والسكنية.',
    },
    contact: {
      title: 'تواصل معنا',
      email: 'abu.bakkar.ac.service@gmail.com',
      phone: '+966 50 000 0000',
      address: 'المملكة العربية السعودية، الرياض (أيه بي للتبريد والأجهزة)',
    },
  },
};
