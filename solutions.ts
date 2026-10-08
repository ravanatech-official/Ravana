import { ConceptualProject } from '../types';

export const CONCEPTUAL_PROJECTS: ConceptualProject[] = [
  {
    id: 'bakery',
    title: 'Crumb & Crust Artisan Bakery',
    titleSi: 'ක්‍රම්බ් & ක්‍රස්ට් ආර්ටිසන් බේකරිය',
    category: 'Food & Beverage / E-Commerce',
    categorySi: 'ආහාර සහ පාන / ඊ-වාණිජ්‍යය',
    tagline: 'Fresh morning bake pre-orders & instant WhatsApp checkout system',
    taglineSi: 'උදෑසන නැවුම් බේක් කල ඇනවුම් සහ ක්ෂණික WhatsApp ගෙවීම් පද්ධතිය',
    description: 'Engineered for high-volume artisan bakeries and confectioneries. Solves the daily stock sellout challenge by enabling customers to reserve fresh croissants, sourdough breads, and custom celebratory cakes 24 hours in advance with direct mobile WhatsApp order fulfillment.',
    descriptionSi: 'දෛනිකව නැවුම්ව පිළිස්සෙන බේකරි නිෂ්පාදන සහ විශේෂ කේක් ඇනවුම් කලින් වෙන්කරවා ගැනීමේ සහ සෘජු WhatsApp හරහා ක්ෂණික ඇනවුම් ලබාගැනීමේ අධිවේගී ඩිජිටල් පද්ධතියකි.',
    keyFeatures: [
      'Live Daily Fresh Bake Inventory Counter',
      'One-Click WhatsApp Order Cart with dynamic token',
      'Custom Cake Builder & Layer Visualizer',
      'Pickup Slot & Local Delivery Route Scheduler',
      'Automated SMS / WhatsApp Notification Hook'
    ],
    keyFeaturesSi: [
      'දෛනික නැවුම් නිෂ්පාදන තත්‍ය කාලීන තොග ගණකය',
      'තනි ක්ලික් කිරීමකින් WhatsApp හරහා ඇනවුම් කරත්තය',
      'අභිරුචි කේක් නිර්මාණකරු සහ විෂුවල් සංරචකය',
      'පිකප් වේලාවන් සහ බෙදාහැරීම් මාර්ග සැලසුම්කරු',
      'ස්වයංක්‍රීය WhatsApp / SMS තහවුරු කිරීමේ දැනුම්දීම්'
    ],
    conversionTech: ['Next-Gen Mobile First UI', 'WhatsApp Business Webhooks', 'Stripe / LKR Gateway Ready', 'Sub-second Page Load (0.6s)'],
    metrics: {
      conversionRate: '+42% WhatsApp orders',
      loadSpeed: '0.6s Lighthouse 99',
      roiExpectation: '2.8x Average Order Value'
    },
    sampleItems: [
      { name: 'Sourdough Country Loaf (750g)', price: 'Rs. 950 / $3.20', detail: '36-hour slow fermented, blistered crust, organic flour' },
      { name: 'Almond Twice-Baked Croissant', price: 'Rs. 680 / $2.30', detail: 'French butter pastry filled with rich almond frangipane' },
      { name: 'Dark Chocolate Ganache Tart', price: 'Rs. 820 / $2.75', detail: '70% Belgian dark chocolate, sea salt flake crust' },
      { name: 'Custom Birthday / Event Cake', price: 'From Rs. 5,500 / $18', detail: '3-tiered custom flavor, fresh floral decorations' }
    ],
    heroGradient: 'from-amber-600/30 to-amber-950/20',
    accentColor: '#F59E0B',
    iconName: 'Croissant'
  },
  {
    id: 'cafe',
    title: 'Aura Specialty Coffee & Bistro',
    titleSi: 'ඕරා ස්පෙෂල්ටි කෝපි & බිස්ට්‍රෝ',
    category: 'Hospitality / Restaurant Tech',
    categorySi: 'ආගන්තුක සත්කාර / ආපනශාලා තාක්ෂණය',
    tagline: 'QR digital dine-in menu, table reservation & specialty brew showcase',
    taglineSi: 'QR ඩිජිටල් මෙනුව, මේස වෙන්කිරීම් සහ සුවිශේෂී කෝපි අත්දැකීම් වේදිකාව',
    description: 'Designed for boutique specialty cafes and brunch spots. Features instant zero-wait QR digital menus, smart VIP table booking engine with real-time floor availability, barista brew profiles, and automated loyalty rewards.',
    descriptionSi: 'සුවිශේෂී කැෆේ සහ බිස්ට්‍රෝ ආපනශාලා සඳහා විශේෂිතව සැකසූ, වේලාව ඉතිරි කරන QR ඩිජිටල් මෙනු සහ සජීවී මේස වෙන්කිරීමේ නවීන පද්ධතියකි.',
    keyFeatures: [
      'Interactive Zero-App QR Digital Menu with dietary filters',
      'Real-time Table Reservation & Time-Slot Allocator',
      'Barista Single-Origin Bean Tasting Notes & Brew Guides',
      'VIP Loyalty Points & Digital Stamp Card',
      'Direct Kitchen Display Order Dispatch'
    ],
    keyFeaturesSi: [
      'බාගත කිරීම් රහිත අන්තර්ක්‍රියාකාරී QR ඩිජිටල් මෙනුව',
      'සජීවී මේස වෙන්කිරීම් සහ වේලාවන් කළමනාකරණය',
      'කෝපි රස සටහන් සහ බෘවින් මාර්ගෝපදේශ',
      'ඩිජිටල් VIP පක්ෂපාතීත්ව ලකුණු පද්ධතිය',
      'මුළුතැන්ගෙයි ඇණවුම් සංදර්ශක සම්බන්ධතාව'
    ],
    conversionTech: ['Instant PWA Menu', 'Google Calendar Sync', 'POS Integration Hook', 'Cloud Table Matrix'],
    metrics: {
      conversionRate: '3.2x Table Bookings',
      loadSpeed: '0.5s Mobile Speed',
      roiExpectation: '+35% Weekend Revenue'
    },
    sampleItems: [
      { name: 'Ethiopian Yirgacheffe Pour-Over', price: 'Rs. 850 / $2.90', detail: 'Light roast, jasmine floral aroma with lemon bergamot notes' },
      { name: 'Avocado Tartine with Poached Eggs', price: 'Rs. 1,650 / $5.50', detail: 'Hass avocado, toasted brioche, organic microgreens' },
      { name: 'Cold Brew Cascara Tonic', price: 'Rs. 750 / $2.50', detail: '18-hour steep, sparkling citrus tonic with rosemary sprig' },
      { name: 'Matcha Blossom Basque Cheesecake', price: 'Rs. 1,200 / $4.00', detail: 'Uji ceremonial grade matcha, caramelized burnt top' }
    ],
    heroGradient: 'from-emerald-600/30 to-emerald-950/20',
    accentColor: '#10B981',
    iconName: 'Coffee'
  },
  {
    id: 'flora',
    title: 'Verdant Petals Floral Atelier',
    titleSi: 'වර්ඩන්ට් පෙටල්ස් මල් කලාව සහ අත්කම්',
    category: 'Luxury Boutique / Gifting E-Commerce',
    categorySi: 'සුඛෝපභෝගී තිළිණ / මල් සැරසිලි ඊ-වාණිජ්‍යය',
    tagline: 'High-end botanical styling, bespoke bouquets & guaranteed same-day delivery',
    taglineSi: 'සුඛෝපභෝගී නැවුම් මල් කළඹ, අභිරුචි සැරසිලි සහ එදිනම බෙදාහැරීමේ ක්‍රමය',
    description: 'A sensory, high-aesthetic e-commerce experience tailored for premium florists and luxury event stylists. Delivers seamless flower bouquet customizers, greeting card message personalization, delivery date countdowns, and corporate subscription billing.',
    descriptionSi: 'සුවිශේෂී උත්සව සහ සුඛෝපභෝගී මල් නිර්මාණ සඳහා පුද්ගලීකරණය කළ සුභපැතුම් පත් සහ නියමිත වේලාවට මල් බෙදාහැරීමේ විශ්වාසනීය ඩිජිටල් විසඳුමකි.',
    keyFeatures: [
      'Visual Bouquet Mood & Color Palette Customizer',
      'Personalized Handwritten Card Message Video/Audio Preview',
      'Date & Time-Sensitive Flower Delivery Calendar',
      'Subscription Gifting Engine (Weekly / Monthly Office Blooms)',
      'Wedding & Corporate Floral Consultation Booking Funnel'
    ],
    keyFeaturesSi: [
      'මල් කළඹ වර්ණ සහ විලාසිතා අභිරුචිකරණය',
      'පුද්ගලීකරණය කල සුභපැතුම් පත් සහ වීඩියෝ පණිවිඩ එක්කිරීම',
      'නිරවද්‍ය දිනය සහ වේලාව අනුව බෙදාහැරීමේ දිනදර්ශනය',
      'සතිපතා / මාසික කාර්යාල මල් දායකත්ව ක්‍රමය',
      'විවාහ මංගල්‍ය සහ ආයතනික උපදේශන වෙන්කිරීම්'
    ],
    conversionTech: ['Immersive Editorial Layout', 'Dynamic Delivery Distance Matrix', 'Multi-currency LKR/USD', 'Real-time Stock Freshness Tracker'],
    metrics: {
      conversionRate: '+58% Gift Basket Conversions',
      loadSpeed: '0.7s Fluid Animations',
      roiExpectation: '4.1x Valentine/Holiday Peak Sales'
    },
    sampleItems: [
      { name: 'The Midnight Orchid Luxury Box', price: 'Rs. 12,500 / $42', detail: 'Black calla lilies, imported purple vanda orchids in velvet keepsake box' },
      { name: 'Morning Glow Pastel Peony Bouquet', price: 'Rs. 8,900 / $30', detail: 'Soft pink peonies, eucalyptus, white lisianthus, satin ribbon wrap' },
      { name: 'Modern Minimalist Bonsai & Succulent', price: 'Rs. 4,500 / $15', detail: 'Handcrafted ceramic pot, 4-year aged ficus bonsai, stone mulch' },
      { name: 'Bespoke Wedding Arch Consultation', price: 'Custom Quote', detail: 'Full venue floral styling, bride bouquet + 6 bridesmaid posies' }
    ],
    heroGradient: 'from-pink-600/30 to-rose-950/20',
    accentColor: '#EC4899',
    iconName: 'Flower2'
  },
  {
    id: 'fitness',
    title: 'Apex Performance & Elite Coaching',
    titleSi: 'ඒපෙක්ස් පර්ෆෝමන්ස් & ෆිට්නස් කෝචින්',
    category: 'Health, Wellness & Personal Brand',
    categorySi: 'සෞඛ්‍ය, ශාරීරික යෝග්‍යතාව සහ පුහුණුකරු',
    tagline: 'High-ticket personal training funnel, workout portal & intake assessment',
    taglineSi: 'පෞද්ගලික පුහුණුකරු සේවා, ව්‍යායාම සැලසුම් සහ සේවාදායක කළමනාකරණය',
    description: 'Transform fitness coaches from trading hours for money into scalable digital fitness authorities. Integrates a smart client intake fitness audit, transformation proof sliders, subscription coaching memberships, and direct 1-on-1 strategy call booking.',
    descriptionSi: 'පුද්ගලික පුහුණුකරුවන් සහ ශාරීරික යෝග්‍යතා මධ්‍යස්ථාන සඳහා සේවාදායකයින් බඳවා ගැනීමේ, ප්‍රතිඵල ප්‍රදර්ශනය කිරීමේ සහ මාසික සාමාජිකත්ව විකිණීමේ සම්පූර්ණ පද්ධතියකි.',
    keyFeatures: [
      'Interactive 60-Second Fitness Goals & Calorie Calculator',
      'High-Conversion Transformation Proof Matrix with interactive sliders',
      'VIP Coaching Application Funnel with qualification gatekeeper',
      'Subscription Tier Checkout (Weekly 1-on-1, Nutrition + Workouts)',
      'Direct Calendar Integration (Calendly / Google Meet / Zoom)'
    ],
    keyFeaturesSi: [
      'තත්පර 60ක ඉලක්ක සහ කැලරි ගණනය කිරීමේ මෙවලම',
      'පෙර සහ පසු සිරුරු වෙනස්වීම් විශ්වසනීය සාක්ෂි ගැලරිය',
      'තෝරාගත් VIP පුහුණු අයදුම්පත් පෙරහන',
      'මාසික සාමාජිකත්ව ස්වයංක්‍රීය අයකිරීම් පද්ධතිය',
      'Zoom සහ Google Meet සෘජු සම්මුඛ සාකච්ඡා දිනදර්ශනය'
    ],
    conversionTech: ['Video Testimonial Optimization', 'High-Trust Social Proof Widgets', 'Automated Application Triage', 'Mobile Fast Intake'],
    metrics: {
      conversionRate: '+67% Call Bookings',
      loadSpeed: '0.4s Optimized Video',
      roiExpectation: '5x Return on Ad Spend (ROAS)'
    },
    sampleItems: [
      { name: '12-Week Lean Hypertrophy Blueprint', price: 'Rs. 45,000 / $150', detail: 'Complete phased training split, custom macro plan, weekly form checks' },
      { name: '1-on-1 Elite Private Coaching (Monthly)', price: 'Rs. 32,000 / $105/mo', detail: 'Daily WhatsApp support, biometric tracking, customized habit coaching' },
      { name: 'Nutrition Mastery & Body Recomp Plan', price: 'Rs. 18,000 / $60', detail: 'Targeted caloric breakdown, grocery cheat-sheets, supplement stack' },
      { name: 'In-Person VIP Gym Training Session', price: 'Rs. 4,500 / $15/hr', detail: 'Biomechanics movement screening, direct hands-on coaching in Colombo' }
    ],
    heroGradient: 'from-orange-600/30 to-red-950/20',
    accentColor: '#F97316',
    iconName: 'Dumbbell'
  },
  {
    id: 'realtors',
    title: 'Sovereign Haven Luxury Real Estate',
    titleSi: 'සොවරින් හේවන් සුඛෝපභෝගී නිවාස & ඉඩම්',
    category: 'Real Estate / High-Ticket Lead Gen',
    categorySi: 'දේපළ වෙළඳාම් / ඉහළ වටිනාකම් සහිත ගනුදෙනු',
    tagline: 'Ultra-prime architectural showcase, 360 virtual tours & verified investor leads',
    taglineSi: 'සුඛෝපභෝගී වාස්තු විද්‍යාත්මක නිවාස, 360 අතථ්‍ය චාරිකා සහ ආයෝජක මගපෙන්වීම',
    description: 'Engineered specifically for luxury property developers, villas, realtors, and commercial brokers. Built to establish immediate sovereign trust, filter casual visitors from serious high-net-worth investors, and schedule exclusive private viewings with NDA verification.',
    descriptionSi: 'සුඛෝපභෝගී විලාස්, නිවාස සහ වාණිජ දේපළ ආයෝජකයින්ට ආකර්ෂණය වන අයුරින් 360 අතථ්‍ය චාරිකා, සවිස්තර පිරිවිතර සහ පෞද්ගලික නැරඹුම් වෙන්කිරීම් සහිත ප්‍රභූ පද්ධතියකි.',
    keyFeatures: [
      'Interactive Architectural Floor Plan Explorer & Specification Sheet',
      '360 Virtual Tour & Drone 4K Video Integration',
      'Mortgage & ROI Rental Yield Investment Calculator',
      'Qualified VIP Buyer Screening Gatekeeper with WhatsApp concierge',
      'Automated PDF Property Brochure Generator (Instant Download)'
    ],
    keyFeaturesSi: [
      'අන්තර්ක්‍රියාකාරී ගෘහ නිර්මාණ බිම් සැලසුම් සහ පිරිවිතර',
      '360 අතථ්‍ය සංචාරය සහ ඩ්‍රෝන වීඩියෝ සම්මිශ්‍රණය',
      'කුලී ආදායම් ROI සහ ණය ගෙවීම් ගණනය කිරීමේ මෙවලම',
      'සුදුසුකම් ලත් ආයෝජකයින් පෙරීමේ VIP පද්ධතිය',
      'දේපළ තොරතුරු ඇතුලත් PDF විස්තර පත්‍රිකා බාගත කිරීම'
    ],
    conversionTech: ['Mapbox / Google Maps API Layer', 'Instant PDF Engine', 'WhatsApp VIP Concierge', 'High-Res Asset Lazy Loading'],
    metrics: {
      conversionRate: '+84% Qualified Leads',
      loadSpeed: '0.8s High-Res Imagery',
      roiExpectation: 'Over $250k Closed Sales Attributed'
    },
    sampleItems: [
      { name: 'The Pinnacle Sea-Facing Penthouse', price: 'Rs. 185,000,000 / $620k', detail: '4 Beds, 5 Baths, 4,800 sq ft, private infinity pool, Colombo 03 skyline' },
      { name: 'Villa Seraphina Eco Luxury Sanctuary', price: 'Rs. 95,000,000 / $315k', detail: '3 Acres cinnamon grove, Galle inland, solar micro-grid, designer pool' },
      { name: 'Kandy Hillside Modernist Glass Villa', price: 'Rs. 72,000,000 / $240k', detail: 'Cantilevered architecture, cloud forest panorama, automated climate' },
      { name: 'Commercial High-Street Retail Pavilion', price: 'Rs. 220,000,000 / $730k', detail: 'Prime location, 10,000 sq ft, 9.2% guaranteed net rental yield' }
    ],
    heroGradient: 'from-cyan-600/30 to-blue-950/20',
    accentColor: '#00BFFF',
    iconName: 'Building2'
  },
  {
    id: 'salon',
    title: 'Atelier Noir Luxury Salon & Grooming',
    titleSi: 'ඇටලියර් නුවාර් සුඛෝපභෝගී රූපලාවන්‍යාගාරය',
    category: 'Beauty, Wellness & Salon Booking',
    categorySi: 'රූපලාවන්‍ය, ස්පා සහ සැලූන් වෙන්කිරීම්',
    tagline: 'Precision stylist calendar, treatment lookbooks & zero-no-show deposits',
    taglineSi: 'ප්‍රවීණ ශිල්පීන්ගේ වේලාවන් වෙන්කිරීම, ප්‍රතිකාර නාමාවලිය සහ රූපලාවන්‍ය සේවා',
    description: 'Solves the #1 salon pain point: phone tag and missed bookings. Enables clients to select their exact preferred senior stylist or colorist, view visual treatment lookbooks, pick exact open chairs, pay an advance booking deposit, and receive automated WhatsApp reminders.',
    descriptionSi: 'දුරකථන ඇමතුම් මගින් සිදුවන කාලය නාස්තිය අවම කර, පාරිභෝගිකයාට තමා කැමති ප්‍රවීණ ශිල්පියා සහ නිශ්චිත වේලාව තෝරාගෙන සෘජුවම වෙන්කරවා ගැනීමේ පහසුකම ලබාදෙයි.',
    keyFeatures: [
      'Stylist-by-Stylist Real-Time Available Slot Matrix',
      'Visual Hair & Skin Treatment Lookbook with Transparent Pricing',
      'Automated Zero-No-Show WhatsApp Appointment Confirmations',
      'Integrated Advance Deposit Payment Gateway (LKR / Cards)',
      'Client Grooming History & Preference Record System'
    ],
    keyFeaturesSi: [
      'ප්‍රවීණ ශිල්පීන්ගේ සජීවී වේලාවන් දැක්වෙන දිනදර්ශනය',
      'පැහැදිලි මිල ගණන් සහිත ප්‍රතිකාර සහ කොණ්ඩා විලාසිතා පොත',
      'පැමිණීම සහතික කරන ස්වයංක්‍රීය WhatsApp සිහිකැඳවීම්',
      'අත්තිකාරම් ගෙවීම් කාඩ්පත් සහ බැංකු පද්ධති සම්බන්ධතාව',
      'සේවාදායකයාගේ පෙර විලාසිතා සහ කැමැත්ත සටහන් කර තැබීම'
    ],
    conversionTech: ['Cal Sync Engine', 'SMS & WhatsApp Gateway', 'Deposit Protection', 'Speedy One-Thumb Booking'],
    metrics: {
      conversionRate: 'Zero Phone Interruption',
      loadSpeed: '0.5s Mobile UI',
      roiExpectation: '-92% No-Show Cancellations'
    },
    sampleItems: [
      { name: 'Balayage Color & Signature Gloss Treatment', price: 'Rs. 18,500 / $62', detail: 'Custom hand-painted highlights, Olaplex bond repair, blow dry & style' },
      { name: 'Executive Precision Cut & Beard Sculpting', price: 'Rs. 4,500 / $15', detail: 'Consultation, scalp massage, hot towel treatment, straight razor finish' },
      { name: 'Hydra-Infusion Glow Facial (75 mins)', price: 'Rs. 12,000 / $40', detail: 'Deep pore vacuum, hyaluronic acid infusion, LED light rejuvenation' },
      { name: 'Bridal Couture Hair & Makeup Package', price: 'Rs. 55,000 / $185', detail: 'Pre-trial session, day-of bridal look with premium luxury cosmetics' }
    ],
    heroGradient: 'from-purple-600/30 to-violet-950/20',
    accentColor: '#A855F7',
    iconName: 'Scissors'
  }
];
