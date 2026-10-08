import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Sparkles, 
  Cpu, 
  Croissant, 
  Coffee, 
  Flower2, 
  Dumbbell, 
  Building2, 
  Scissors, 
  ShoppingBag, 
  RotateCcw,
  Zap,
  Target,
  CalendarCheck,
  ShieldCheck,
  Bot,
  MessageSquareText,
  Calendar,
  CreditCard,
  Languages,
  Gauge,
  Rocket,
  Layers,
  Globe
} from 'lucide-react';
import { Language, Currency, ProjectSnapshotData, IntentType } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { QUESTION_STEPS } from '../data/questions';
import { hudAudio } from '../utils/audio';

interface JourneyEngineProps {
  language: Language;
  currency: Currency;
  initialIntent?: IntentType;
  onFinishJourney: (snapshot: ProjectSnapshotData) => void;
  onCancel: () => void;
}

export const JourneyEngine: React.FC<JourneyEngineProps> = ({
  language,
  currency,
  initialIntent,
  onFinishJourney,
  onCancel,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedDomain, setSelectedDomain] = useState<string>('bakery');
  const [selectedGoal, setSelectedGoal] = useState<string>(
    initialIntent === 'sales' ? 'online-orders' : initialIntent === 'ai' ? 'ai-automation' : 'online-orders'
  );
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'whatsapp-checkout',
    'multilingual'
  ]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>('standard');
  const [isSynthesizing, setIsSynthesizing] = useState(false);

  const t = TRANSLATIONS[language];
  const step = QUESTION_STEPS[currentStepIndex];

  // Helper icon renderer
  const renderIcon = (name?: string) => {
    switch (name) {
      case 'Croissant': return <Croissant className="w-5 h-5" />;
      case 'Coffee': return <Coffee className="w-5 h-5" />;
      case 'Flower2': return <Flower2 className="w-5 h-5" />;
      case 'Dumbbell': return <Dumbbell className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'Scissors': return <Scissors className="w-5 h-5" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Target': return <Target className="w-5 h-5" />;
      case 'CalendarCheck': return <CalendarCheck className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Bot': return <Bot className="w-5 h-5" />;
      case 'MessageSquareText': return <MessageSquareText className="w-5 h-5" />;
      case 'Calendar': return <Calendar className="w-5 h-5" />;
      case 'CreditCard': return <CreditCard className="w-5 h-5" />;
      case 'Languages': return <Languages className="w-5 h-5" />;
      case 'Gauge': return <Gauge className="w-5 h-5" />;
      case 'Rocket': return <Rocket className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      default: return <Cpu className="w-5 h-5" />;
    }
  };

  const handleToggleFeature = (id: string) => {
    hudAudio.playClick();
    if (selectedFeatures.includes(id)) {
      if (selectedFeatures.length > 1) {
        setSelectedFeatures(selectedFeatures.filter(f => f !== id));
      }
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const handleNext = () => {
    hudAudio.playClick();
    if (currentStepIndex < QUESTION_STEPS.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      handleFinalize();
    }
  };

  const handleBack = () => {
    hudAudio.playClick();
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    } else {
      onCancel();
    }
  };

  const handleFinalize = () => {
    setIsSynthesizing(true);
    hudAudio.playScan();

    setTimeout(() => {
      hudAudio.playConfirm();

      // Estimate pricing based on parameters & currency
      let baseLKR = 65000;
      let baseUSD = 220;

      if (selectedFeatures.includes('ai-assistant')) {
        baseLKR += 45000;
        baseUSD += 150;
      }
      if (selectedFeatures.includes('payment-gateway')) {
        baseLKR += 25000;
        baseUSD += 85;
      }
      if (selectedFeatures.includes('calendar-booking')) {
        baseLKR += 30000;
        baseUSD += 100;
      }
      if (selectedTimeline === 'rapid') {
        baseLKR += 20000;
        baseUSD += 65;
      }
      if (selectedTimeline === 'enterprise') {
        baseLKR += 80000;
        baseUSD += 270;
      }

      let priceFormatted = '';
      if (currency === 'LKR') {
        priceFormatted = `Rs. ${baseLKR.toLocaleString()} – ${(baseLKR * 1.3).toLocaleString()}`;
      } else if (currency === 'USD') {
        priceFormatted = `$${baseUSD} – $${Math.round(baseUSD * 1.3)}`;
      } else if (currency === 'EUR') {
        const eur = Math.round(baseUSD * 0.92);
        priceFormatted = `€${eur} – €${Math.round(eur * 1.3)}`;
      } else {
        const gbp = Math.round(baseUSD * 0.79);
        priceFormatted = `£${gbp} – £${Math.round(gbp * 1.3)}`;
      }

      const domainMapName: Record<string, string> = {
        bakery: 'Artisan Bakery & Confectionery Direct System',
        cafe: 'Specialty Bistro & Digital Table Booking Experience',
        flora: 'Luxury Atelier Floral & Gifting Engine',
        fitness: 'High-Ticket Elite Coaching & Member Intake Funnel',
        realtors: 'Prime Sovereign Real Estate & Investor Gateway',
        salon: 'Luxury Salon & Stylist Chair Booking System',
        ecommerce: 'High-Conversion Digital Retail Store',
        corporate: 'Enterprise Solution & SaaS Authority Portal'
      };

      const snapshot: ProjectSnapshotData = {
        industry: domainMapName[selectedDomain] || selectedDomain,
        goal: selectedGoal,
        features: selectedFeatures,
        timeline: selectedTimeline === 'rapid' ? '7–14 Days (Fast-Track)' : selectedTimeline === 'standard' ? '3–4 Weeks (Signature Build)' : '4–6+ Weeks (Enterprise)',
        budgetRange: `${currency} Tier Architecture`,
        currency,
        estimatedPrice: priceFormatted,
        recommendedSolution: `Ravana High-Conversion Architecture for ${domainMapName[selectedDomain] || selectedDomain}`,
        conceptMatch: ['bakery', 'cafe', 'flora', 'fitness', 'realtors', 'salon'].includes(selectedDomain) ? selectedDomain : undefined,
        timestamp: new Date().toISOString(),
        snapshotId: `RT-${Math.random().toString(36).substring(2, 8).toUpperCase()}`
      };

      setIsSynthesizing(false);
      onFinishJourney(snapshot);
    }, 1400);
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-2 sm:p-4 max-w-3xl mx-auto w-full">
      {/* Synthesizing HUD Loading Overlay */}
      {isSynthesizing && (
        <div className="fixed inset-0 z-50 bg-[#010409]/95 backdrop-blur-xl flex flex-col items-center justify-center">
          <div className="relative w-36 h-36 flex items-center justify-center mb-6">
            <div className="absolute inset-0 rounded-full border-2 border-[#00BFFF]/30 animate-radar" />
            <div className="absolute inset-2 rounded-full border-2 border-dashed border-[#16CFFF] animate-radar-reverse" />
            <div className="w-16 h-16 rounded-full bg-[#00BFFF]/20 border border-[#00BFFF] flex items-center justify-center text-[#16CFFF]">
              <Cpu className="w-8 h-8 animate-pulse" />
            </div>
          </div>
          <h3 className="font-orbitron font-bold text-lg text-[#16CFFF] tracking-widest text-glow-cyan mb-2">
            {t.journey.calculating}
          </h3>
          <p className="font-tech text-xs text-[#8FB8C8] animate-pulse">
            SYNTHESIZING CONVERSION BLUEPRINT • MAPPING STACK • GENERATING SPEC
          </p>
        </div>
      )}

      {/* Progress & Header */}
      <div className="w-full mb-4">
        <div className="flex items-center justify-between text-xs font-tech text-[#8FB8C8] mb-2">
          <div className="flex items-center gap-2">
            <button
              onClick={handleBack}
              className="flex items-center gap-1 text-[#00BFFF] hover:text-[#16CFFF] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{t.journey.back}</span>
            </button>
            <span>•</span>
            <span className="text-[#D9F5FF]">
              {t.journey.stepOf} {currentStepIndex + 1} {t.journey.of} {QUESTION_STEPS.length}
            </span>
          </div>

          <button
            onClick={() => {
              hudAudio.playClick();
              onCancel();
            }}
            className="flex items-center gap-1 text-[#8FB8C8] hover:text-red-400 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>{t.journey.reset}</span>
          </button>
        </div>

        {/* HUD Progress Bar */}
        <div className="w-full h-1.5 bg-[#031525] border border-[#00BFFF]/30 rounded-xs overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#008CFF] to-[#16CFFF] transition-all duration-300"
            style={{ width: `${((currentStepIndex + 1) / QUESTION_STEPS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="w-full hud-card p-4 sm:p-6 rounded-sm mb-4">
        <div className="mb-5">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-xs bg-[#00BFFF]/10 border border-[#00BFFF]/30 text-[#16CFFF] text-[10px] font-tech mb-2">
            <Sparkles className="w-3 h-3 text-[#00BFFF]" />
            <span>DISCOVERY PROTOCOL</span>
          </div>
          <h2 className="font-orbitron font-bold text-lg sm:text-2xl text-[#D9F5FF] mb-1">
            {language === 'en' ? step.titleEn : step.titleSi}
          </h2>
          <p className="font-rajdhani text-sm text-[#8FB8C8]">
            {language === 'en' ? step.subtitleEn : step.subtitleSi}
          </p>
        </div>

        {/* Question Options */}
        {step.id === 'domain' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[380px] overflow-y-auto pr-1">
            {step.options.map((opt) => (
              <div
                key={opt.id}
                onClick={() => {
                  hudAudio.playClick();
                  setSelectedDomain(opt.id);
                }}
                className={`p-3 rounded-xs border text-left cursor-pointer transition-all flex items-start gap-3 ${
                  selectedDomain === opt.id
                    ? 'bg-[#00BFFF]/20 border-[#16CFFF] text-[#D9F5FF] shadow-[0_0_12px_rgba(0,191,255,0.3)]'
                    : 'bg-black/40 border-[#00BFFF]/20 text-[#8FB8C8] hover:border-[#00BFFF]/50 hover:bg-[#031525]'
                }`}
              >
                <div className={`p-2 rounded-xs border flex-shrink-0 ${
                  selectedDomain === opt.id 
                    ? 'border-[#16CFFF] bg-[#00BFFF]/20 text-[#16CFFF]' 
                    : 'border-[#00BFFF]/25 bg-black/30 text-[#00BFFF]'
                }`}>
                  {renderIcon(opt.icon)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-orbitron font-bold text-xs text-[#D9F5FF]">
                      {language === 'en' ? opt.labelEn : opt.labelSi}
                    </span>
                    {selectedDomain === opt.id && (
                      <Check className="w-4 h-4 text-[#16CFFF]" />
                    )}
                  </div>
                  <p className="font-rajdhani text-[11px] text-[#8FB8C8] leading-tight">
                    {language === 'en' ? opt.descriptionEn : opt.descriptionSi}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {step.id === 'goal' && (
          <div className="space-y-2.5">
            {step.options.map((opt) => (
              <div
                key={opt.id}
                onClick={() => {
                  hudAudio.playClick();
                  setSelectedGoal(opt.id);
                }}
                className={`p-3 rounded-xs border text-left cursor-pointer transition-all flex items-center justify-between gap-3 ${
                  selectedGoal === opt.id
                    ? 'bg-[#00BFFF]/20 border-[#16CFFF] text-[#D9F5FF] shadow-[0_0_12px_rgba(0,191,255,0.3)]'
                    : 'bg-black/40 border-[#00BFFF]/20 text-[#8FB8C8] hover:border-[#00BFFF]/50 hover:bg-[#031525]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xs border flex-shrink-0 ${
                    selectedGoal === opt.id 
                      ? 'border-[#16CFFF] bg-[#00BFFF]/20 text-[#16CFFF]' 
                      : 'border-[#00BFFF]/25 bg-black/30 text-[#00BFFF]'
                  }`}>
                    {renderIcon(opt.icon)}
                  </div>
                  <div>
                    <h4 className="font-orbitron font-bold text-xs text-[#D9F5FF]">
                      {language === 'en' ? opt.labelEn : opt.labelSi}
                    </h4>
                    <p className="font-rajdhani text-xs text-[#8FB8C8]">
                      {language === 'en' ? opt.descriptionEn : opt.descriptionSi}
                    </p>
                  </div>
                </div>
                {selectedGoal === opt.id && (
                  <Check className="w-4 h-4 text-[#16CFFF]" />
                )}
              </div>
            ))}
          </div>
        )}

        {step.id === 'features' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {step.options.map((opt) => {
              const isSelected = selectedFeatures.includes(opt.id);
              return (
                <div
                  key={opt.id}
                  onClick={() => handleToggleFeature(opt.id)}
                  className={`p-3 rounded-xs border text-left cursor-pointer transition-all flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-[#00BFFF]/20 border-[#16CFFF] text-[#D9F5FF] shadow-[0_0_12px_rgba(0,191,255,0.3)]'
                      : 'bg-black/40 border-[#00BFFF]/20 text-[#8FB8C8] hover:border-[#00BFFF]/50 hover:bg-[#031525]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`p-1.5 rounded-xs border flex-shrink-0 ${
                      isSelected 
                        ? 'border-[#16CFFF] bg-[#00BFFF]/20 text-[#16CFFF]' 
                        : 'border-[#00BFFF]/25 bg-black/30 text-[#00BFFF]'
                    }`}>
                      {renderIcon(opt.icon)}
                    </div>
                    <span className="font-rajdhani font-semibold text-xs text-[#D9F5FF]">
                      {language === 'en' ? opt.labelEn : opt.labelSi}
                    </span>
                  </div>
                  <div className={`w-4 h-4 rounded-xs border flex items-center justify-center ${
                    isSelected ? 'bg-[#16CFFF] border-[#16CFFF] text-black' : 'border-[#00BFFF]/40'
                  }`}>
                    {isSelected && <Check className="w-3 h-3 text-black stroke-[3]" />}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {step.id === 'timeline' && (
          <div className="space-y-3">
            {step.options.map((opt) => (
              <div
                key={opt.id}
                onClick={() => {
                  hudAudio.playClick();
                  setSelectedTimeline(opt.id);
                }}
                className={`p-3.5 rounded-xs border text-left cursor-pointer transition-all flex items-start gap-3.5 ${
                  selectedTimeline === opt.id
                    ? 'bg-[#00BFFF]/20 border-[#16CFFF] text-[#D9F5FF] shadow-[0_0_12px_rgba(0,191,255,0.3)]'
                    : 'bg-black/40 border-[#00BFFF]/20 text-[#8FB8C8] hover:border-[#00BFFF]/50 hover:bg-[#031525]'
                }`}
              >
                <div className={`p-2 rounded-xs border flex-shrink-0 ${
                  selectedTimeline === opt.id 
                    ? 'border-[#16CFFF] bg-[#00BFFF]/20 text-[#16CFFF]' 
                    : 'border-[#00BFFF]/25 bg-black/30 text-[#00BFFF]'
                }`}>
                  {renderIcon(opt.icon)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-orbitron font-bold text-xs sm:text-sm text-[#D9F5FF]">
                      {language === 'en' ? opt.labelEn : opt.labelSi}
                    </span>
                    {selectedTimeline === opt.id && (
                      <Check className="w-4 h-4 text-[#16CFFF]" />
                    )}
                  </div>
                  <p className="font-rajdhani text-xs text-[#8FB8C8]">
                    {language === 'en' ? opt.descriptionEn : opt.descriptionSi}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Navigation Footer */}
      <div className="w-full flex items-center justify-between gap-3">
        <button
          onClick={handleBack}
          className="px-4 py-2 bg-black/40 hover:bg-[#031525] border border-[#00BFFF]/30 text-[#8FB8C8] hover:text-[#D9F5FF] rounded-xs font-tech text-xs transition-all flex items-center gap-1.5"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{t.journey.back}</span>
        </button>

        <button
          onClick={handleNext}
          className="px-6 py-2.5 bg-gradient-to-r from-[#008CFF] to-[#00BFFF] hover:from-[#0099FF] hover:to-[#16CFFF] text-[#010409] font-orbitron font-bold text-xs tracking-wider rounded-xs transition-all shadow-[0_0_15px_rgba(0,191,255,0.4)] hover:shadow-[0_0_25px_rgba(0,191,255,0.6)] flex items-center gap-2 cursor-pointer"
        >
          <span>
            {currentStepIndex === QUESTION_STEPS.length - 1
              ? t.journey.generateSnapshot
              : (language === 'en' ? 'CONTINUE →' : 'ඊළඟ පියවර →')}
          </span>
          {currentStepIndex < QUESTION_STEPS.length - 1 && (
            <ArrowRight className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
};
