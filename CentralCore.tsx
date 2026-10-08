import React from 'react';
import { Globe, Bot, FlaskConical, TrendingUp, Sparkles, Shield, ChevronRight } from 'lucide-react';
import { Language, IntentType } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { hudAudio } from '../utils/audio';

interface CentralCoreProps {
  language: Language;
  onSelectIntent: (intent: IntentType) => void;
  onOpenDemos: () => void;
  onOpenFounder: () => void;
}

export const CentralCore: React.FC<CentralCoreProps> = ({
  language,
  onSelectIntent,
  onOpenDemos,
  onOpenFounder,
}) => {
  const t = TRANSLATIONS[language];

  return (
    <div className="flex-1 flex flex-col items-center justify-center py-2 px-2 sm:px-4 max-w-4xl mx-auto w-full select-none">
      {/* Central JARVIS Reactor / HUD Core Visual */}
      <div className="relative mb-5 flex items-center justify-center">
        {/* Outer Rotating HUD Rings */}
        <div className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-[#00BFFF]/20 animate-radar pointer-events-none" />
        <div className="absolute w-40 h-40 sm:w-52 sm:h-52 rounded-full border border-dashed border-[#00BFFF]/30 animate-radar-reverse pointer-events-none" />
        <div className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-[#16CFFF]/15 pointer-events-none" />

        {/* Outer Glow Halo */}
        <div className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#00BFFF]/10 blur-xl pointer-events-none" />

        {/* Center Digital Core Badge */}
        <div 
          onClick={() => {
            hudAudio.playScan();
            onOpenFounder();
          }}
          className="relative z-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#010409] border-2 border-[#00BFFF] flex flex-col items-center justify-center p-2 cursor-pointer group shadow-[0_0_25px_rgba(0,191,255,0.4)] hover:border-[#16CFFF] hover:shadow-[0_0_35px_rgba(22,207,255,0.6)] transition-all"
        >
          {/* Subtle concentric inner ring */}
          <div className="absolute inset-1.5 rounded-full border border-[#00BFFF]/30 pointer-events-none" />

          {/* Central Logo & Monogram */}
          <div className="relative flex flex-col items-center text-center">
            <span className="text-[#16CFFF] text-xs font-tech tracking-widest uppercase mb-0.5 group-hover:scale-110 transition-transform">
              ◉ RT CORE
            </span>
            <span className="font-orbitron font-black text-sm sm:text-base tracking-widest text-[#D9F5FF] group-hover:text-[#16CFFF] transition-colors">
              RAVANA
            </span>
            <span className="text-[9px] font-tech text-[#8FB8C8] tracking-wider mt-0.5">
              RECEPTION
            </span>
          </div>

          {/* Live Ping indicator */}
          <div className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        </div>
      </div>

      {/* Main Reception Heading */}
      <div className="text-center mb-6 max-w-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00BFFF]/10 border border-[#00BFFF]/30 text-[#16CFFF] text-xs font-tech mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#00BFFF]" />
          <span>{t.coreSubtitle}</span>
        </div>
        <h2 className="font-orbitron font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-wider text-[#D9F5FF] text-glow-cyan mb-2">
          {t.howCanWeHelp}
        </h2>
        <p className="font-rajdhani text-sm sm:text-base text-[#8FB8C8] max-w-lg mx-auto leading-relaxed">
          {t.howCanWeHelpDesc}
        </p>
      </div>

      {/* The 5 Core Intent Choice Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-2xl mb-4">
        {/* 01: BUILD A WEBSITE / WEB APP */}
        <button
          onClick={() => {
            hudAudio.playConfirm();
            onSelectIntent('website');
          }}
          className="hud-card p-4 rounded-sm text-left group transition-all hover:border-[#16CFFF] hover:bg-[#031525]/90 hover:shadow-[0_0_16px_rgba(0,191,255,0.3)] flex items-start gap-3.5 relative overflow-hidden"
        >
          <div className="w-10 h-10 rounded-sm bg-[#00BFFF]/10 border border-[#00BFFF]/40 flex items-center justify-center text-[#00BFFF] group-hover:text-[#16CFFF] group-hover:scale-105 transition-all flex-shrink-0">
            <Globe className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-tech text-[#00BFFF] tracking-widest font-bold">
                {t.intents.website.badge}
              </span>
              <ChevronRight className="w-4 h-4 text-[#8FB8C8] group-hover:text-[#16CFFF] group-hover:translate-x-1 transition-all" />
            </div>
            <h3 className="font-orbitron font-bold text-sm text-[#D9F5FF] group-hover:text-[#16CFFF] transition-colors mb-1">
              {t.intents.website.title}
            </h3>
            <p className="font-rajdhani text-xs text-[#8FB8C8] leading-snug">
              {t.intents.website.desc}
            </p>
          </div>
        </button>

        {/* 02: AI & AUTOMATION */}
        <button
          onClick={() => {
            hudAudio.playConfirm();
            onSelectIntent('ai');
          }}
          className="hud-card p-4 rounded-sm text-left group transition-all hover:border-[#16CFFF] hover:bg-[#031525]/90 hover:shadow-[0_0_16px_rgba(0,191,255,0.3)] flex items-start gap-3.5 relative overflow-hidden"
        >
          <div className="w-10 h-10 rounded-sm bg-[#00BFFF]/10 border border-[#00BFFF]/40 flex items-center justify-center text-[#00BFFF] group-hover:text-[#16CFFF] group-hover:scale-105 transition-all flex-shrink-0">
            <Bot className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-tech text-[#00BFFF] tracking-widest font-bold">
                {t.intents.ai.badge}
              </span>
              <ChevronRight className="w-4 h-4 text-[#8FB8C8] group-hover:text-[#16CFFF] group-hover:translate-x-1 transition-all" />
            </div>
            <h3 className="font-orbitron font-bold text-sm text-[#D9F5FF] group-hover:text-[#16CFFF] transition-colors mb-1">
              {t.intents.ai.title}
            </h3>
            <p className="font-rajdhani text-xs text-[#8FB8C8] leading-snug">
              {t.intents.ai.desc}
            </p>
          </div>
        </button>

        {/* 03: EXPLORE DEMOS (SOLUTION LAB) */}
        <button
          onClick={() => {
            hudAudio.playScan();
            onOpenDemos();
          }}
          className="hud-card p-4 rounded-sm text-left group transition-all hover:border-emerald-400 hover:bg-[#031525]/90 hover:shadow-[0_0_16px_rgba(16,185,129,0.3)] flex items-start gap-3.5 relative overflow-hidden border-emerald-500/40"
        >
          <div className="w-10 h-10 rounded-sm bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-all flex-shrink-0">
            <FlaskConical className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-tech text-emerald-400 tracking-widest font-bold">
                {t.intents.demos.badge}
              </span>
              <span className="px-1.5 py-0.2 text-[9px] font-tech bg-emerald-500/20 text-emerald-300 rounded-xs">
                6 LIVE
              </span>
            </div>
            <h3 className="font-orbitron font-bold text-sm text-[#D9F5FF] group-hover:text-emerald-300 transition-colors mb-1">
              {t.intents.demos.title}
            </h3>
            <p className="font-rajdhani text-xs text-[#8FB8C8] leading-snug">
              {t.intents.demos.desc}
            </p>
          </div>
        </button>

        {/* 04: IMPROVE SALES & CONVERSION */}
        <button
          onClick={() => {
            hudAudio.playConfirm();
            onSelectIntent('sales');
          }}
          className="hud-card p-4 rounded-sm text-left group transition-all hover:border-[#16CFFF] hover:bg-[#031525]/90 hover:shadow-[0_0_16px_rgba(0,191,255,0.3)] flex items-start gap-3.5 relative overflow-hidden"
        >
          <div className="w-10 h-10 rounded-sm bg-[#00BFFF]/10 border border-[#00BFFF]/40 flex items-center justify-center text-[#00BFFF] group-hover:text-[#16CFFF] group-hover:scale-105 transition-all flex-shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-tech text-[#00BFFF] tracking-widest font-bold">
                {t.intents.sales.badge}
              </span>
              <ChevronRight className="w-4 h-4 text-[#8FB8C8] group-hover:text-[#16CFFF] group-hover:translate-x-1 transition-all" />
            </div>
            <h3 className="font-orbitron font-bold text-sm text-[#D9F5FF] group-hover:text-[#16CFFF] transition-colors mb-1">
              {t.intents.sales.title}
            </h3>
            <p className="font-rajdhani text-xs text-[#8FB8C8] leading-snug">
              {t.intents.sales.desc}
            </p>
          </div>
        </button>
      </div>

      {/* 05: VIP CONSULTATION (Centered wide button) */}
      <div className="w-full max-w-2xl">
        <button
          onClick={() => {
            hudAudio.playScan();
            onSelectIntent('consultation');
          }}
          className="w-full hud-card p-3.5 rounded-sm text-left group transition-all hover:border-[#16CFFF] hover:bg-[#031525]/95 hover:shadow-[0_0_20px_rgba(0,191,255,0.4)] flex items-center justify-between border-[#00BFFF]/40"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform flex-shrink-0">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-tech text-amber-400 font-bold">
                  {t.intents.consultation.badge}
                </span>
                <span className="font-orbitron font-bold text-xs sm:text-sm text-[#D9F5FF] group-hover:text-[#16CFFF] transition-colors">
                  {t.intents.consultation.title}
                </span>
              </div>
              <p className="font-rajdhani text-xs text-[#8FB8C8]">
                {t.intents.consultation.desc}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-tech text-[#00BFFF] group-hover:text-[#16CFFF]">
            <span className="hidden sm:inline">BOOK SESSION</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>
      </div>
    </div>
  );
};
