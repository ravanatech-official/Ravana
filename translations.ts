import { Language } from '../types';

export const TRANSLATIONS = {
  en: {
    systemTitle: 'RAVANA TECH',
    systemTagline: 'DIGITAL SOLUTION ARCHITECT',
    systemOnline: 'SYSTEM ONLINE',
    systemNode: 'NODE: LK-COLOMBO-CORE',
    reception: 'DIGITAL RECEPTION',
    coreTitle: 'RAVANA TECH CORE',
    coreSubtitle: 'INTENT RESOLUTION ENGINE',
    founderRole: 'Founder & Principal Architect: Shanthapriya Silva',
    howCanWeHelp: 'HOW CAN WE HELP YOU?',
    howCanWeHelpDesc: 'Select an intent below or speak your business requirements. We will engineer an exact digital blueprint.',
    intents: {
      website: {
        title: 'BUILD A WEBSITE / WEB APP',
        desc: 'High-conversion websites, modern web apps & business portals.',
        badge: '01 CORE'
      },
      ai: {
        title: 'AI & AUTOMATION',
        desc: 'Custom AI chatbots, intelligent CRM workflows & zero-touch automations.',
        badge: '02 SMART'
      },
      demos: {
        title: 'EXPLORE DEMOS / LAB',
        desc: 'Explore 6 live business solution blueprints (Bakery, Cafe, Salon, Real Estate, etc.).',
        badge: '03 PROOF'
      },
      sales: {
        title: 'IMPROVE SALES & CONVERSION',
        desc: 'Funnels, high-retention landing pages & WhatsApp order checkout systems.',
        badge: '04 GROWTH'
      },
      consultation: {
        title: 'VIP ARCHITECTURE CONSULT',
        desc: '1-on-1 strategic architecture session with Shanthapriya Silva.',
        badge: '05 VIP'
      }
    },
    systemStatus: {
      title: 'RT SYSTEM TELEMETRY',
      receptionStatus: 'RECEPTION CORE',
      solutionLab: 'SOLUTION LAB (6 DEMOS)',
      architectureEngine: 'ARCHITECTURE ENGINE',
      quoteEngine: 'SNAPSHOT / QUOTATION',
      founderHandoff: 'HUMAN HANDOFF',
      statusOnline: 'ONLINE',
      statusReady: 'READY',
      statusVerified: 'VERIFIED',
      uptime: 'UPTIME: 99.98%',
      latency: 'LATENCY: 14ms'
    },
    globalReception: {
      title: 'GLOBAL RECEPTION',
      detectedLocation: 'LOCATION DETECTED',
      language: 'INTERFACE LANGUAGE',
      currency: 'CURRENCY PROTOCOL',
      directChannels: 'DIRECT CHANNELS',
      whatsappDirect: 'WhatsApp VIP Desk',
      callDirect: 'Direct Direct Phone',
      emailDirect: 'Priority Dispatch'
    },
    commandBar: {
      promptPlaceholder: 'Type or click a prompt e.g., "Build an online bakery with WhatsApp orders"...',
      listening: 'LISTENING... SPEAK YOUR REQUIREMENTS',
      clickToSpeak: 'VOICE INTENT',
      micActive: 'AUDIO INPUT ACTIVE',
      quickChips: [
        'Bakery with WhatsApp Orders',
        'Salon Booking & Appointments',
        'Luxury Real Estate Showcase',
        'AI Customer Chatbot',
        'Cafe Digital QR Menu',
        'Personal Trainer Coaching Funnel'
      ]
    },
    journey: {
      stepOf: 'STAGE',
      of: 'OF',
      back: 'PREVIOUS',
      reset: 'RESTART ANALYSIS',
      step1Title: 'Select Your Business Domain',
      step1Desc: 'What kind of business or organisation are we architecting for?',
      step2Title: 'Identify Your Primary Goal',
      step2Desc: 'What metric or breakthrough matters most right now?',
      step3Title: 'Required Power Features',
      step3Desc: 'Select key digital capabilities to integrate (select one or multiple):',
      step4Title: 'Launch Timeline & Velocity',
      step4Desc: 'What is your planned delivery window?',
      generateSnapshot: 'GENERATE PROJECT BLUEPRINT',
      calculating: 'ENGINEERING SPECIFICATION...'
    },
    snapshot: {
      title: 'PROJECT ARCHITECTURAL BLUEPRINT',
      subtitle: 'Engineered by Ravana Tech Core for your business specifications',
      idLabel: 'BLUEPRINT TOKEN',
      domainLabel: 'BUSINESS DOMAIN',
      primaryGoal: 'PRIMARY GOAL',
      selectedFeatures: 'ENGINEERED CAPABILITIES',
      timelineLabel: 'ESTIMATED VELOCITY',
      budgetGuidance: 'ESTIMATED INVESTMENT',
      recommendedSolution: 'ARCHITECTURAL RECOMMENDATION',
      matchedProof: 'PROVEN CONCEPT BLUEPRINT',
      viewMatchingDemo: 'VIEW CORRESPONDING LIVE DEMO',
      actionTitle: 'INITIALIZE HUMAN HANDOFF & LOCK SCOPE',
      whatsappAction: 'LAUNCH VIA WHATSAPP (INSTANT)',
      callAction: 'CALL PRINCIPAL ARCHITECT',
      inquiryAction: 'SUBMIT OFFICIAL DISPATCH',
      copyBlueprint: 'COPY BLUEPRINT TEXT',
      copied: 'COPIED TO CLIPBOARD!',
      officialInquirySuccess: 'DISPATCH TRANSMITTED SUCCESSFULLY!'
    },
    demoModal: {
      title: 'RAVANA SOLUTION LAB',
      subtitle: '6 battle-tested business conceptual blueprints engineered for high conversion',
      backToHub: 'CLOSE LAB',
      previewDevice: 'DEVICE SIMULATION',
      desktop: 'DESKTOP VIEW',
      mobile: 'MOBILE VIEW',
      liveInteractiveProof: 'LIVE INTERACTIVE DEMO PREVIEW',
      adoptBlueprint: 'ADOPT THIS BLUEPRINT FOR MY PROJECT',
      featuresHeading: 'INCLUDED CONVERSION CAPABILITIES',
      conversionTech: 'ENGINEERED WITH',
      provenMetrics: 'PROVEN PERFORMANCE TARGETS',
      sampleCatalogue: 'INTERACTIVE SAMPLE INVENTORY / SERVICES'
    },
    founderModal: {
      title: 'FOUNDER & PRINCIPAL ARCHITECT',
      name: 'Shanthapriya Silva',
      role: 'Lead Digital Solution Architect',
      philosophyTitle: 'THE RAVANA TECH PHILOSOPHY',
      philosophy: 'We do not sell cookie-cutter templates or generic websites that get zero business results. Every system is built from the ground up as a high-performance conversion engine tailored precisely to your customers psychology and workflow.',
      credentials: [
        'Full-Stack Architecture & Next-Gen Frontends',
        'Conversion Rate Optimization (CRO) & Funnel Engineering',
        'Custom AI Workflow Integration & Intelligent Chatbots',
        'Sub-second Performance & Ultra-Clean Code Architecture'
      ],
      directContactBtn: 'CONNECT WITH SHANTHAPRIYA SILVA',
      closeBtn: 'CLOSE DOSSIER'
    }
  },
  si: {
    systemTitle: 'රාවණා ටෙක්',
    systemTagline: 'ඩිජිටල් විසඳුම් නිර්මාණ ශිල්පී',
    systemOnline: 'පද්ධතිය සක්‍රීයයි',
    systemNode: 'නෝඩ්: ශ්‍රී ලංකා - කොළඹ මධ්‍යස්ථානය',
    reception: 'ඩිජිටල් පිළිගැනීමේ මැදිරිය',
    coreTitle: 'රාවණා ටෙක් ඩිජිටල් හරය',
    coreSubtitle: 'අවශ්‍යතා විශ්ලේෂණ පද්ධතිය',
    founderRole: 'නිර්මාතෘ සහ ප්‍රධාන වාස්තු විද්‍යාඥ: ශාන්තප්‍රිය සිල්වා',
    howCanWeHelp: 'ඔබට අපෙන් අවශ්‍ය සහය කුමක්ද?',
    howCanWeHelpDesc: 'පහතින් ඔබේ අවශ්‍යතාව තෝරන්න, නැතහොත් හඬ මගින් විස්තර කරන්න. ඔබේ ව්‍යාපාරයට ගැලපෙනම නිශ්චිත ඩිජිටල් සැලැස්ම අපි සකස් කරන්නෙමු.',
    intents: {
      website: {
        title: 'වෙබ් අඩවි & වෙබ් යෙදුම් නිර්මාණය',
        desc: 'ඉහළ ප්‍රතිඵල ලබාදෙන නවීන වෙබ් අඩවි, ඊ-වාණිජ්‍යය සහ ව්‍යාපාරික පද්ධති.',
        badge: '01 මූලික'
      },
      ai: {
        title: 'AI විසඳුම් & ස්වයංක්‍රීයකරණය',
        desc: 'AI Chatbots, ස්වයංක්‍රීය පාරිභෝගික සේවා සහ කාර්ය ප්‍රවාහ ස්වයංක්‍රීයකරණය.',
        badge: '02 බුද්ධිමත්'
      },
      demos: {
        title: 'සම්පූර්ණ DEMO නිරීක්ෂණය (LAB)',
        desc: 'බේකරි, කැෆේ, සැලූන්, දේපළ වෙළඳාම් ආදී සාර්ථක ව්‍යාපාරික ආකෘති 6ක් සජීවීව බලන්න.',
        badge: '03 සාක්ෂි'
      },
      sales: {
        title: 'විකුණුම් & ආදායම් වැඩිදියුණු කිරීම',
        desc: 'Sales funnels, WhatsApp ක්ෂණික ඇනවුම් ක්‍රම සහ ආකර්ෂණීය පිටු.',
        badge: '04 වර්ධනය'
      },
      consultation: {
        title: 'VIP විශේෂ උපදේශන සේවාව',
        desc: 'ශාන්තප්‍රිය සිල්වා සමඟ සෘජු ව්‍යාපාරික හා තාක්ෂණික සාකච්ඡාව.',
        badge: '05 VIP'
      }
    },
    systemStatus: {
      title: 'RT පද්ධති තොරතුරු',
      receptionStatus: 'පිළිගැනීමේ පද්ධතිය',
      solutionLab: 'ආදර්ශනගාරය (DEMOS 6)',
      architectureEngine: 'තාක්ෂණික සැලසුම් එන්ජිම',
      quoteEngine: 'මිල ගණන් සහ බ්ලූප්‍රින්ට්',
      founderHandoff: 'මිනිස් සබඳතාව',
      statusOnline: 'සක්‍රීයයි',
      statusReady: 'සූදානම්',
      statusVerified: 'තහවුරුයි',
      uptime: 'ක්‍රියාකාරීත්වය: 99.98%',
      latency: 'ප්‍රමාදය: 14ms'
    },
    globalReception: {
      title: 'ගෝලීය සබඳතා මැදිරිය',
      detectedLocation: 'හඳුනාගත් ප්‍රදේශය',
      language: 'භාෂා තේරීම',
      currency: 'මුදල් ඒකකය',
      directChannels: 'සෘජු සබඳතා මාර්ග',
      whatsappDirect: 'WhatsApp ක්ෂණික සේවාව',
      callDirect: 'සෘජු දුරකථන ඇමතුම',
      emailDirect: 'ප්‍රමුඛ ඊමේල් යොමුව'
    },
    commandBar: {
      promptPlaceholder: 'ඔබේ අවශ්‍යතාව ලියන්න (උදා: "බේකරියකට WhatsApp ඇණවුම් සහිත වෙබ් අඩවියක්")...',
      listening: 'සවන්දෙමින් පවතී... ඔබේ අවශ්‍යතාව පවසන්න',
      clickToSpeak: 'හඬ විධානය',
      micActive: 'ශ්‍රව්‍ය ආදානය සක්‍රීයයි',
      quickChips: [
        'WhatsApp ඇණවුම් සහිත බේකරියක්',
        'සැලූන් වේලාවන් වෙන්කිරීමේ ක්‍රමය',
        'සුඛෝපභෝගී නිවාස ප්‍රදර්ශනය',
        'AI පාරිභෝගික චැට්බොට්',
        'කැෆේ QR ඩිජිටල් මෙනුව',
        'ෆිට්නස් කෝචින් වෙබ් අඩවිය'
      ]
    },
    journey: {
      stepOf: 'පියවර',
      of: 'න්',
      back: 'ආපසු',
      reset: 'නැවත මුල සිට',
      step1Title: 'ඔබගේ ව්‍යාපාරික ක්ෂේත්‍රය තෝරන්න',
      step1Desc: 'අප ඩිජිටල් විසඳුම නිර්මාණය කරන්නේ කුමන ව්‍යාපාරය සඳහාද?',
      step2Title: 'ඔබගේ ප්‍රධාන ඉලක්කය කුමක්ද?',
      step2Desc: 'මෙමගින් ඔබ බලාපොරොත්තු වන වැදගත්ම ප්‍රතිඵලය කුමක්ද?',
      step3Title: 'අවශ්‍ය විශේෂ තාක්ෂණික අංග',
      step3Desc: 'ඇතුළත් විය යුතු පහසුකම් එකක් හෝ කිහිපයක් තෝරන්න:',
      step4Title: 'දියත් කිරීමට අපේක්ෂිත කාලසීමාව',
      step4Desc: 'ව්‍යාපෘතිය නිමකිරීමට ඔබ බලාපොරොත්තු වන වේගය කුමක්ද?',
      generateSnapshot: 'ව්‍යාපෘති බ්ලූප්‍රින්ට් එක සකසන්න',
      calculating: 'තාක්ෂණික පිරිවිතර විශ්ලේෂණය වෙමින් පවතී...'
    },
    snapshot: {
      title: 'ව්‍යාපෘති සැලසුම් බ්ලූප්‍රින්ට් (PROJECT BLUEPRINT)',
      subtitle: 'රාවණා ටෙක් මගින් ඔබේ නිශ්චිත අවශ්‍යතාව වෙනුවෙන්ම නිර්මාණය කරන ලදී',
      idLabel: 'සැලසුම් අංකය',
      domainLabel: 'ව්‍යාපාරික ක්ෂේත්‍රය',
      primaryGoal: 'ප්‍රධාන ඉලක්කය',
      selectedFeatures: 'තෝරාගත් විශේෂාංග',
      timelineLabel: 'ඇස්තමේන්තුගත කාලය',
      budgetGuidance: 'ඇස්තමේන්තුගත ආයෝජනය',
      recommendedSolution: 'නිර්දේශිත ඩිජිටල් විසඳුම',
      matchedProof: 'ගැලපෙන ආදර්ශන සැලැස්ම',
      viewMatchingDemo: 'අදාළ සජීවී DEMO එක බලන්න',
      actionTitle: 'මීළඟ පියවර - ව්‍යාපෘතිය ආරම්භ කිරීම',
      whatsappAction: 'WHATSAPP හරහා ක්ෂණිකව කතාබස් කරන්න',
      callAction: 'ප්‍රධාන වාස්තු විද්‍යාඥ අමතන්න',
      inquiryAction: 'නිල විස්තර පත්‍රිකාව යවන්න',
      copyBlueprint: 'සැලසුම් විස්තර කොපි කරන්න',
      copied: 'සාර්ථකව කොපි විය!',
      officialInquirySuccess: 'තොරතුරු සාර්ථකව සම්ප්‍රේෂණය විය!'
    },
    demoModal: {
      title: 'රාවණා සොලියුෂන් ලැබ් (DEMO LAB)',
      subtitle: 'ඉහළ විකුණුම් ලබාදෙන, පරීක්ෂා කර තහවුරු කරන ලද ආකෘති 6ක්',
      backToHub: 'වසන්න',
      previewDevice: 'උපාංග දර්ශනය',
      desktop: 'පරිගණක දර්ශනය',
      mobile: 'ජංගම දුරකථන දර්ශනය',
      liveInteractiveProof: 'සජීවී අන්තර්ක්‍රියාකාරී පෙරදසුන',
      adoptBlueprint: 'මේ ආකෘතිය මගේ ව්‍යාපෘතියට තෝරාගන්න',
      featuresHeading: 'ඇතුළත් කර ඇති ප්‍රධාන අංග',
      conversionTech: 'භාවිතා වන තාක්ෂණයන්',
      provenMetrics: 'තහවුරු වූ ප්‍රතිඵල දර්ශක',
      sampleCatalogue: 'නියැදි භාණ්ඩ සහ සේවා ලැයිස්තුව'
    },
    founderModal: {
      title: 'නිර්මාතෘ සහ ප්‍රධාන වාස්තු විද්‍යාඥ',
      name: 'ශාන්තප්‍රිය සිල්වා (Shanthapriya Silva)',
      role: 'ඩිජිටල් සොලියුෂන් ආකිටෙක්ට් & නිර්මාතෘ',
      philosophyTitle: 'රාවණා ටෙක් ව්‍යාපාරික දර්ශනය',
      philosophy: 'අපි සාමාන්‍ය සරල වෙබ් අඩවි හෝ අන්තර්ජාලයේ ඇති template පිටපත් කරන්නේ නැත. අප ගොඩනගන සෑම පද්ධතියක්ම ඔබගේ සැබෑ පාරිභෝගිකයින් ආකර්ෂණය කර, ඔවුන්ව සැබෑ ගෙවන ගනුදෙනුකරුවන් බවට පත්කිරීමට ඉංජිනේරු විද්‍යාත්මකව සැලසුම් කර ඇත.',
      credentials: [
        'Full-Stack Architecture & නවීනතම Frontend තාක්ෂණයන්',
        'Conversion Rate Optimization (CRO) සහ Sales Funnel සැලසුම්',
        'ව්‍යාපාරික AI Automation සහ Smart Chatbots නිර්මාණය',
        'අධිවේගී ක්‍රියාකාරීත්වය සහ ඉහළම ආරක්ෂණ ප්‍රමිතීන්'
      ],
      directContactBtn: 'ශාන්තප්‍රිය සිල්වා සමඟ සෘජුව සම්බන්ධ වන්න',
      closeBtn: 'ලේඛනය වසන්න'
    }
  }
};
