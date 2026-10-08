import { QuestionStep } from '../types';

export const QUESTION_STEPS: QuestionStep[] = [
  {
    id: 'domain',
    titleEn: 'What is your business domain?',
    titleSi: 'ඔබගේ ව්‍යාපාරික ක්ෂේත්‍රය කුමක්ද?',
    subtitleEn: 'Select the field that best describes your venture:',
    subtitleSi: 'ඔබගේ ව්‍යාපාරයට වඩාත්ම ගැලපෙන ක්ෂේත්‍රය තෝරන්න:',
    options: [
      {
        id: 'bakery',
        labelEn: 'Bakery, Pastry & Confectionery',
        labelSi: 'බේකරි, කේක් සහ රසකැවිලි',
        icon: 'Croissant',
        descriptionEn: 'Daily fresh bakes, custom cakes, takeaway & local delivery',
        descriptionSi: 'දෛනික නැවුම් නිෂ්පාදන, අභිරුචි කේක් සහ ක්ෂණික බෙදාහැරීම්',
        suggestedDemoId: 'bakery'
      },
      {
        id: 'cafe',
        labelEn: 'Cafe, Bistro & Coffee Shop',
        labelSi: 'කැෆේ, බිස්ට්‍රෝ සහ කෝපි හල්',
        icon: 'Coffee',
        descriptionEn: 'QR dine-in menus, table bookings, specialty coffee & brunch',
        descriptionSi: 'QR ඩිජිටල් මෙනු, මේස වෙන්කිරීම් සහ සුවිශේෂී කෝපි අත්දැකීම්',
        suggestedDemoId: 'cafe'
      },
      {
        id: 'flora',
        labelEn: 'Florist, Flowers & Luxury Gifting',
        labelSi: 'මල් සැරසිලි සහ සුඛෝපභෝගී තිළිණ',
        icon: 'Flower2',
        descriptionEn: 'Bouquet customizers, same-day delivery calendar, event decor',
        descriptionSi: 'නැවුම් මල් කළඹ, එදිනම බෙදාහැරීම් සහ උත්සව සැරසිලි',
        suggestedDemoId: 'flora'
      },
      {
        id: 'fitness',
        labelEn: 'Personal Trainer & Fitness Coach',
        labelSi: 'පුද්ගලික පුහුණුකරු & යෝග්‍යතා සේවා',
        icon: 'Dumbbell',
        descriptionEn: 'Transformation proof, intake assessment, coaching memberships',
        descriptionSi: 'පෙර/පසු සාක්ෂි, සේවාදායක අයදුම්පත් සහ සාමාජිකත්ව පද්ධති',
        suggestedDemoId: 'fitness'
      },
      {
        id: 'realtors',
        labelEn: 'Luxury Real Estate & Properties',
        labelSi: 'දේපළ වෙළඳාම් & සුඛෝපභෝගී නිවාස',
        icon: 'Building2',
        descriptionEn: 'Prime listings, 360 walkthroughs, VIP investor lead screening',
        descriptionSi: 'සුඛෝපභෝගී නිවාස, 360 අතථ්‍ය චාරිකා සහ VIP ආයෝජකයන් පෙරීම',
        suggestedDemoId: 'realtors'
      },
      {
        id: 'salon',
        labelEn: 'Salon, Barber & Luxury Spa',
        labelSi: 'රූපලාවන්‍යාගාර, බාබර් සහ ස්පා',
        icon: 'Scissors',
        descriptionEn: 'Stylist chair calendar, service lookbook, advance deposits',
        descriptionSi: 'ශිල්පීන්ගේ වේලාවන් වෙන්කිරීම, සේවා නාමාවලිය සහ අත්තිකාරම්',
        suggestedDemoId: 'salon'
      },
      {
        id: 'ecommerce',
        labelEn: 'Retail Brand / E-Commerce Store',
        labelSi: 'වෙළඳසැල් / ඊ-වාණිජ්‍ය නිෂ්පාදන',
        icon: 'ShoppingBag',
        descriptionEn: 'Product catalogue, payment gateways, automated inventory',
        descriptionSi: 'භාණ්ඩ නාමාවලිය, ගෙවීම් පද්ධති සහ ස්වයංක්‍රීය ඉන්වෙන්ටරි',
        suggestedDemoId: 'bakery'
      },
      {
        id: 'corporate',
        labelEn: 'Tech, SaaS & Professional Services',
        labelSi: 'තාක්ෂණික, SaaS සහ ආයතනික සේවා',
        icon: 'Cpu',
        descriptionEn: 'High-authority digital positioning, demo booking, B2B funnels',
        descriptionSi: 'ආයතනික ගෞරවය, B2B විකුණුම් මාර්ග සහ සජීවී ආදර්ශන',
        suggestedDemoId: 'realtors'
      }
    ]
  },
  {
    id: 'goal',
    titleEn: 'What is your primary commercial goal?',
    titleSi: 'ඔබගේ ප්‍රධාන ව්‍යාපාරික ඉලක්කය කුමක්ද?',
    subtitleEn: 'Tell us the main result you want this system to generate:',
    subtitleSi: 'මෙම පද්ධතියෙන් ඔබ බලාපොරොත්තු වන ප්‍රධානම ප්‍රතිඵලය තෝරන්න:',
    options: [
      {
        id: 'online-orders',
        labelEn: 'Direct Online Orders & Rapid WhatsApp Sales',
        labelSi: 'සෘජු මාර්ගගත ඇනවුම් සහ WhatsApp විකුණුම්',
        icon: 'Zap',
        descriptionEn: 'Frictionless checkout straight into your WhatsApp or dispatch',
        descriptionSi: 'කිසිදු බාධාවකින් තොරව WhatsApp හෝ ඩිස්පැච් වෙත ඇනවුම් ලබාගැනීම'
      },
      {
        id: 'high-ticket-leads',
        labelEn: 'High-Value Inquiries & Qualified VIP Leads',
        labelSi: 'ඉහළ වටිනාකම් සහිත VIP ගැනුම්කරුවන් ආකර්ෂණය කරගැනීම',
        icon: 'Target',
        descriptionEn: 'Filter tire-kickers and capture high-intent serious buyers',
        descriptionSi: 'නියම ගැනුම්කරුවන් පෙරහන් කර ඔවුන්ගේ විස්තර ලබාගැනීම'
      },
      {
        id: 'automated-bookings',
        labelEn: '24/7 Automated Bookings & Chair Reservation',
        labelSi: '24/7 ස්වයංක්‍රීය වේලාවන් වෙන්කිරීමේ ක්‍රමය',
        icon: 'CalendarCheck',
        descriptionEn: 'Eliminate phone tag; let clients book confirmed times directly',
        descriptionSi: 'දුරකථන ඇමතුම් අවශ්‍ය නැත; පාරිභෝගිකයාම නිශ්චිත වේලාව තෝරාගනී'
      },
      {
        id: 'brand-authority',
        labelEn: 'World-Class Brand Prestige & Global Credibility',
        labelSi: 'ජාත්‍යන්තර මට්ටමේ සන්නාම ගෞරවය සහ විශ්වාසය',
        icon: 'ShieldCheck',
        descriptionEn: 'Position your business as the undisputed leader in your niche',
        descriptionSi: 'ඔබේ ක්ෂේත්‍රයේ ප්‍රමුඛතම සන්නාමය ලෙස පෙනී සිටීම'
      },
      {
        id: 'ai-automation',
        labelEn: 'AI Automated Customer Support & Instant Replies',
        labelSi: 'AI පාරිභෝගික සහය සහ ක්ෂණික පිළිතුරු පද්ධතිය',
        icon: 'Bot',
        descriptionEn: 'Intelligent 24/7 AI conversational agent handling questions',
        descriptionSi: 'දිවා රෑ නොබලා පාරිභෝගික ප්‍රශ්න වලට පිළිතුරු දෙන AI සහායක'
      }
    ]
  },
  {
    id: 'features',
    titleEn: 'Which power capabilities do you require?',
    titleSi: 'ඔබට අවශ්‍ය තාක්ෂණික පහසුකම් මොනවාද?',
    subtitleEn: 'Select one or more essential components:',
    subtitleSi: 'අවශ්‍ය පහසුකම් එකක් හෝ කිහිපයක් තෝරන්න:',
    options: [
      {
        id: 'whatsapp-checkout',
        labelEn: 'WhatsApp Smart Checkout with Cart Token',
        labelSi: 'WhatsApp ක්ෂණික මිලදී ගැනීමේ කරත්තය',
        icon: 'MessageSquareText'
      },
      {
        id: 'calendar-booking',
        labelEn: 'Live Slot Booking Engine & Google Cal Sync',
        labelSi: 'සජීවී වේලාවන් වෙන්කිරීම සහ Calendar Sync',
        icon: 'Calendar'
      },
      {
        id: 'payment-gateway',
        labelEn: 'Payment Gateway (LKR Cards, Stripe, Bank Transfer)',
        labelSi: 'ක්‍රෙඩිට් කාඩ්පත් සහ බැංකු ගෙවීම් පද්ධතිය',
        icon: 'CreditCard'
      },
      {
        id: 'ai-assistant',
        labelEn: 'Custom AI Chatbot & Knowledge Assistant',
        labelSi: 'ව්‍යාපාරයට විශේෂිත AI බුද්ධිමත් චැට්බොට්',
        icon: 'Sparkles'
      },
      {
        id: 'multilingual',
        labelEn: 'Sinhala + English Bilingual Switching',
        labelSi: 'සිංහල සහ ඉංග්‍රීසි ද්විභාෂා පහසුකම',
        icon: 'Languages'
      },
      {
        id: 'seo-speed',
        labelEn: 'Sub-Second Page Load & Google SEO Domination',
        labelSi: 'අධිවේගී පැටවීම (0.5s) සහ Google SEO ප්‍රශස්තිකරණය',
        icon: 'Gauge'
      }
    ]
  },
  {
    id: 'timeline',
    titleEn: 'What is your target launch velocity?',
    titleSi: 'දියත් කිරීමට අපේක්ෂිත කාලසීමාව කුමක්ද?',
    subtitleEn: 'Select your preferred deployment timeframe:',
    subtitleSi: 'ඔබට ව්‍යාපෘතිය අවශ්‍ය කාල සීමාව තෝරන්න:',
    options: [
      {
        id: 'rapid',
        labelEn: 'Rapid Sprint (7 – 14 Days)',
        labelSi: 'ක්ෂණිකව දියත් කිරීම (දින 7 - 14)',
        icon: 'Rocket',
        descriptionEn: 'Fast-track deployment with pre-engineered modules and core features',
        descriptionSi: 'මූලික අංග සහිතව හැකි ඉක්මනින් ක්‍රියාත්මක කිරීම'
      },
      {
        id: 'standard',
        labelEn: 'Signature Build (3 – 4 Weeks)',
        labelSi: 'සම්මත සම්පූර්ණ නිර්මාණය (සති 3 - 4)',
        icon: 'Layers',
        descriptionEn: 'Full custom design, conversion optimization, animations & integrations',
        descriptionSi: 'සුවිශේෂී මෝස්තරය, පූර්ණ ඒකාබද්ධතාව සහ සවිස්තර පරීක්ෂාව'
      },
      {
        id: 'enterprise',
        labelEn: 'Enterprise Architecture (4 – 6+ Weeks)',
        labelSi: 'මහා පරිමාණ ව්‍යුහය (සති 4 - 6+)',
        icon: 'Globe',
        descriptionEn: 'Complex multi-tier system, bespoke AI workflows and custom backend',
        descriptionSi: 'සංකීර්ණ බහු-ස්ථර පද්ධති සහ අභිරුචි AI කාර්ය ප්‍රවාහ'
      }
    ]
  }
];
