import React, { useState } from 'react';
import { 
  X, 
  Monitor, 
  Smartphone, 
  Sparkles, 
  Check, 
  ArrowRight, 
  TrendingUp, 
  Layers, 
  ExternalLink,
  ShoppingBag,
  Clock,
  PhoneCall,
  Calendar,
  Croissant,
  Coffee,
  Flower2,
  Dumbbell,
  Building2,
  Scissors
} from 'lucide-react';
import { Language, Currency, ConceptualProject, ProjectSnapshotData } from '../types';
import { CONCEPTUAL_PROJECTS } from '../data/solutions';
import { TRANSLATIONS } from '../data/translations';
import { hudAudio } from '../utils/audio';

interface SolutionLabModalProps {
  language: Language;
  currency: Currency;
  initialDemoId?: string;
  onClose: () => void;
  onAdoptBlueprint: (snapshot: ProjectSnapshotData) => void;
}

export const SolutionLabModal: React.FC<SolutionLabModalProps> = ({
  language,
  currency,
  initialDemoId,
  onClose,
  onAdoptBlueprint,
}) => {
  const [selectedDemoId, setSelectedDemoId] = useState<string>(initialDemoId || 'bakery');
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [interactiveCartCount, setInteractiveCartCount] = useState<number>(0);
  const [selectedBookingSlot, setSelectedBookingSlot] = useState<string | null>(null);

  const t = TRANSLATIONS[language];
  const project = CONCEPTUAL_PROJECTS.find(p => p.id === selectedDemoId) || CONCEPTUAL_PROJECTS[0];

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Croissant': return <Croissant className="w-4 h-4" />;
      case 'Coffee': return <Coffee className="w-4 h-4" />;
      case 'Flower2': return <Flower2 className="w-4 h-4" />;
      case 'Dumbbell': return <Dumbbell className="w-4 h-4" />;
      case 'Building2': return <Building2 className="w-4 h-4" />;
      case 'Scissors': return <Scissors className="w-4 h-4" />;
      default: return <Layers className="w-4 h-4" />;
    }
  };

  const handleAdopt = () => {
    hudAudio.playConfirm();

    let baseLKR = 75000;
    let baseUSD = 250;
    if (project.id === 'realtors') {
      baseLKR = 120000;
      baseUSD = 400;
    } else if (project.id === 'fitness') {
      baseLKR = 85000;
      baseUSD = 290;
    }

    const priceFormatted = currency === 'LKR' 
      ? `Rs. ${baseLKR.toLocaleString()} – ${(baseLKR * 1.25).toLocaleString()}`
      : `$${baseUSD} – $${Math.round(baseUSD * 1.25)}`;

    const snapshot: ProjectSnapshotData = {
      industry: project.category,
      goal: project.tagline,
      features: project.keyFeatures,
      timeline: '2–3 Weeks (Pre-Engineered Lab Fast-Track)',
      budgetRange: `${currency} Fast-Track Tier`,
      currency,
      estimatedPrice: priceFormatted,
      recommendedSolution: `Pre-Engineered Ravana Solution Lab: ${project.title}`,
      conceptMatch: project.id,
      timestamp: new Date().toISOString(),
      snapshotId: `RT-${project.id.toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`
    };

    onAdoptBlueprint(snapshot);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#010409]/95 backdrop-blur-xl flex flex-col p-2 sm:p-4 overflow-y-auto">
      {/* Top HUD Modal Bar */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between border-b border-[#00BFFF]/30 pb-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-sm bg-[#00BFFF]/20 border border-[#00BFFF] flex items-center justify-center text-[#16CFFF]">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h2 className="font-orbitron font-extrabold text-base sm:text-lg text-[#D9F5FF] tracking-wider">
              {t.demoModal.title}
            </h2>
            <p className="font-tech text-xs text-[#8FB8C8]">
              {t.demoModal.subtitle}
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            hudAudio.playClick();
            onClose();
          }}
          className="p-2 rounded-xs bg-[#031525] hover:bg-[#00BFFF]/20 border border-[#00BFFF]/40 text-[#8FB8C8] hover:text-[#16CFFF] transition-all"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col lg:flex-row gap-4 pb-6">
        {/* Left Column: Solution Selector Navigation Tabs */}
        <div className="w-full lg:w-72 flex flex-col gap-2 flex-shrink-0">
          <span className="text-[10px] font-tech text-[#00BFFF] tracking-widest uppercase mb-1">
            6 PROVEN BUSINESS LABS
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2">
            {CONCEPTUAL_PROJECTS.map((proj) => (
              <button
                key={proj.id}
                onClick={() => {
                  hudAudio.playClick();
                  setSelectedDemoId(proj.id);
                  setInteractiveCartCount(0);
                  setSelectedBookingSlot(null);
                }}
                className={`p-3 rounded-xs border text-left transition-all flex items-center gap-2.5 ${
                  selectedDemoId === proj.id
                    ? 'bg-[#00BFFF]/20 border-[#16CFFF] text-[#D9F5FF] shadow-[0_0_12px_rgba(0,191,255,0.3)]'
                    : 'bg-[#02070D] border-[#00BFFF]/20 text-[#8FB8C8] hover:border-[#00BFFF]/50 hover:bg-[#031525]'
                }`}
              >
                <div 
                  className="w-7 h-7 rounded-xs flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${proj.accentColor}25`, color: proj.accentColor }}
                >
                  {renderIcon(proj.iconName)}
                </div>
                <div className="overflow-hidden">
                  <div className="font-orbitron font-bold text-xs truncate text-[#D9F5FF]">
                    {language === 'en' ? proj.title : proj.titleSi}
                  </div>
                  <div className="font-tech text-[10px] text-[#8FB8C8] truncate">
                    {language === 'en' ? proj.category : proj.categorySi}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Quick Metrics of Active Project */}
          <div className="hud-card p-3 rounded-xs mt-2 border border-[#00BFFF]/25">
            <span className="text-[10px] font-tech text-[#00BFFF] uppercase tracking-wider block mb-2">
              {t.demoModal.provenMetrics}
            </span>
            <div className="space-y-1.5 text-xs font-tech">
              <div className="flex justify-between">
                <span className="text-[#8FB8C8]">CONVERSION GAIN</span>
                <span className="text-emerald-400 font-bold">{project.metrics.conversionRate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8FB8C8]">LOAD SPEED</span>
                <span className="text-[#16CFFF] font-bold">{project.metrics.loadSpeed}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8FB8C8]">ESTIMATED ROI</span>
                <span className="text-amber-400 font-bold">{project.metrics.roiExpectation}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center/Right: Live Interactive Simulator & Architecture Details */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Active Project Title & Adopt Action */}
          <div className="hud-card p-4 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-gradient-to-r from-[#031525] to-[#010409]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span 
                  className="px-2 py-0.5 text-[10px] font-tech rounded-xs uppercase font-bold"
                  style={{ backgroundColor: `${project.accentColor}30`, color: project.accentColor }}
                >
                  {language === 'en' ? project.category : project.categorySi}
                </span>
                <span className="text-xs font-tech text-emerald-400">● VERIFIED BLUEPRINT</span>
              </div>
              <h3 className="font-orbitron font-extrabold text-lg sm:text-xl text-[#D9F5FF]">
                {language === 'en' ? project.title : project.titleSi}
              </h3>
              <p className="font-rajdhani text-xs sm:text-sm text-[#8FB8C8] mt-1 max-w-2xl">
                {language === 'en' ? project.description : project.descriptionSi}
              </p>
            </div>

            <button
              onClick={handleAdopt}
              className="px-4 py-2.5 bg-gradient-to-r from-[#008CFF] to-[#00BFFF] hover:from-[#16CFFF] hover:to-[#00BFFF] text-[#010409] font-orbitron font-bold text-xs tracking-wider rounded-xs transition-all shadow-[0_0_15px_rgba(0,191,255,0.4)] flex items-center gap-2 flex-shrink-0 cursor-pointer"
            >
              <span>{t.demoModal.adoptBlueprint}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Interactive Mockup Simulation Frame */}
          <div className="hud-card p-3 sm:p-4 rounded-sm">
            <div className="flex items-center justify-between border-b border-[#00BFFF]/20 pb-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-orbitron font-bold text-[#16CFFF]">
                  {t.demoModal.liveInteractiveProof}
                </span>
                <span className="text-[10px] font-tech text-[#8FB8C8]">(Interactive Prototype)</span>
              </div>

              {/* Device Mode Switcher */}
              <div className="flex items-center gap-1 bg-black/60 p-1 rounded-xs border border-[#00BFFF]/30">
                <button
                  onClick={() => {
                    hudAudio.playClick();
                    setDeviceMode('desktop');
                  }}
                  className={`p-1.5 rounded-xs transition-all ${
                    deviceMode === 'desktop'
                      ? 'bg-[#00BFFF]/30 text-[#16CFFF]'
                      : 'text-[#8FB8C8] hover:text-[#D9F5FF]'
                  }`}
                  title={t.demoModal.desktop}
                >
                  <Monitor className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => {
                    hudAudio.playClick();
                    setDeviceMode('mobile');
                  }}
                  className={`p-1.5 rounded-xs transition-all ${
                    deviceMode === 'mobile'
                      ? 'bg-[#00BFFF]/30 text-[#16CFFF]'
                      : 'text-[#8FB8C8] hover:text-[#D9F5FF]'
                  }`}
                  title={t.demoModal.mobile}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Embedded Interactive Mockup Viewport */}
            <div className={`mx-auto transition-all duration-300 ${
              deviceMode === 'mobile' ? 'max-w-sm' : 'w-full'
            }`}>
              <div className="rounded-sm border-2 border-[#00BFFF]/40 bg-[#02070D] overflow-hidden shadow-2xl relative">
                {/* Browser/Device Shell Chrome */}
                <div className="bg-[#031525] px-3 py-1.5 border-b border-[#00BFFF]/30 flex items-center justify-between text-[11px] font-tech text-[#8FB8C8]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/70" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/70" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
                  </div>
                  <span className="text-[#00BFFF] truncate max-w-xs font-mono">
                    https://demo.ravanatech.com/{project.id}
                  </span>
                  <span className="text-[10px] text-emerald-400">SSL 256</span>
                </div>

                {/* Mockup Canvas */}
                <div className="p-4 sm:p-6 bg-gradient-to-b from-[#02070D] via-[#031525]/60 to-[#010409]">
                  {/* Hero Banner inside prototype */}
                  <div className="p-4 rounded-sm border border-white/10 bg-gradient-to-r from-black/80 to-[#031525]/90 mb-4 relative overflow-hidden">
                    <div 
                      className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-30"
                      style={{ backgroundColor: project.accentColor }}
                    />
                    <div className="relative z-10">
                      <span className="text-[10px] font-tech text-white/70 uppercase tracking-widest block mb-1">
                        DEMO CONCEPT
                      </span>
                      <h4 className="font-orbitron font-extrabold text-base sm:text-lg text-white mb-1">
                        {language === 'en' ? project.title : project.titleSi}
                      </h4>
                      <p className="font-rajdhani text-xs text-white/80 max-w-md">
                        {language === 'en' ? project.tagline : project.taglineSi}
                      </p>
                    </div>
                  </div>

                  {/* Interactive Item Showcase */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-xs font-tech text-[#8FB8C8] mb-2.5">
                      <span>{t.demoModal.sampleCatalogue}</span>
                      <span className="text-[#16CFFF] font-bold">
                        Cart items: {interactiveCartCount}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {project.sampleItems.map((item, idx) => (
                        <div 
                          key={idx}
                          className="p-2.5 rounded-xs bg-black/40 border border-white/10 hover:border-[#00BFFF]/40 transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <span className="font-orbitron font-bold text-xs text-[#D9F5FF]">
                                {item.name}
                              </span>
                              <span className="font-tech text-xs text-[#16CFFF] font-semibold whitespace-nowrap">
                                {item.price}
                              </span>
                            </div>
                            <p className="font-rajdhani text-[11px] text-[#8FB8C8] leading-tight mb-2">
                              {item.detail}
                            </p>
                          </div>

                          <div className="flex items-center gap-2 pt-1 border-t border-white/5">
                            <button
                              onClick={() => {
                                hudAudio.playClick();
                                setInteractiveCartCount(prev => prev + 1);
                              }}
                              className="w-full py-1 bg-[#00BFFF]/15 hover:bg-[#00BFFF]/30 border border-[#00BFFF]/40 text-[#16CFFF] rounded-xs font-tech text-[10px] transition-all flex items-center justify-center gap-1.5"
                            >
                              <ShoppingBag className="w-3 h-3" />
                              <span>TEST ADD TO CART</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Live Simulation Trigger (e.g. WhatsApp checkout or Calendar preview) */}
                  <div className="p-3 rounded-xs bg-[#031525]/80 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <Clock className="w-4 h-4 flex-shrink-0" />
                      <span className="font-tech text-[11px]">
                        {project.id === 'salon' 
                          ? 'Slot Matrix: 10:30 AM / 2:00 PM / 4:30 PM open today'
                          : 'Order Dispatch: Average response time < 3 minutes via WhatsApp'}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        hudAudio.playConfirm();
                        alert(`Ravana Simulator: "${project.title}" order dispatch payload compiled with ${interactiveCartCount} items.`);
                      }}
                      className="px-3 py-1.5 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500 text-emerald-300 rounded-xs font-tech text-xs transition-all flex items-center gap-1.5 whitespace-nowrap"
                    >
                      <span>TEST DISPATCH PAYLOAD</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features & Conversion Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="hud-card p-3.5 rounded-sm">
              <span className="text-[10px] font-tech text-[#00BFFF] uppercase tracking-wider block mb-2">
                {t.demoModal.featuresHeading}
              </span>
              <ul className="space-y-1.5 text-xs font-rajdhani text-[#D9F5FF]">
                {(language === 'en' ? project.keyFeatures : project.keyFeaturesSi).map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hud-card p-3.5 rounded-sm">
              <span className="text-[10px] font-tech text-[#00BFFF] uppercase tracking-wider block mb-2">
                {t.demoModal.conversionTech}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.conversionTech.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-2 py-1 text-[11px] font-tech text-[#16CFFF] bg-[#00BFFF]/10 border border-[#00BFFF]/30 rounded-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-3 pt-2.5 border-t border-[#00BFFF]/15 text-[11px] font-tech text-[#8FB8C8]">
                <span>Architecture Lead: Shanthapriya Silva</span>
                <span className="text-[#00BFFF] block">Guaranteed SLA & Conversion Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
