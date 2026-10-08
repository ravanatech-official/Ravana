import React, { useState } from 'react';
import { MapPin, MessageCircle, Phone, Mail, Compass, Wifi, Radio } from 'lucide-react';
import { Language, Currency } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { hudAudio } from '../utils/audio';

interface GlobalReceptionPanelProps {
  language: Language;
  currency: Currency;
  onOpenSnapshot: () => void;
  onOpenFounder: () => void;
}

export const GlobalReceptionPanel: React.FC<GlobalReceptionPanelProps> = ({
  language,
  currency,
  onOpenSnapshot,
  onOpenFounder,
}) => {
  const [activeLocation, setActiveLocation] = useState<'LK' | 'GLOBAL'>('LK');
  const t = TRANSLATIONS[language];

  const handleWhatsAppDirect = () => {
    hudAudio.playConfirm();
    const phone = '94771234567'; // Ravana Tech VIP Line
    const msg = encodeURIComponent(
      `Hello Ravana Tech & Shanthapriya Silva! I am reaching out from your Digital Reception regarding a high-impact digital project.`
    );
    window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
  };

  const handleCallDirect = () => {
    hudAudio.playConfirm();
    window.open('tel:+94771234567', '_self');
  };

  const handleEmailDirect = () => {
    hudAudio.playClick();
    window.open('mailto:hello.srcreations@gmail.com?subject=Ravana%20Tech%20Project%20Inquiry', '_self');
  };

  return (
    <aside className="w-full lg:w-68 flex flex-col gap-3 font-tech">
      {/* Global Node Card */}
      <div className="hud-card p-3.5 rounded-sm">
        <div className="flex items-center justify-between border-b border-[#00BFFF]/20 pb-2 mb-3">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-[#00BFFF] animate-pulse" />
            <span className="font-orbitron font-bold text-xs tracking-wider text-[#D9F5FF]">
              {t.globalReception.title}
            </span>
          </div>
          <span className="text-[10px] text-[#00BFFF] font-tech">NODE 01</span>
        </div>

        {/* Location Radar Telemetry */}
        <div className="p-2.5 bg-black/40 border border-[#00BFFF]/25 rounded-xs mb-3 relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5 text-xs text-[#16CFFF]">
              <MapPin className="w-3.5 h-3.5 text-[#00BFFF]" />
              <span className="font-bold tracking-wide">
                {activeLocation === 'LK' ? 'SRI LANKA (COLOMBO)' : 'GLOBAL ENTERPRISE NODE'}
              </span>
            </div>
            <button
              onClick={() => {
                hudAudio.playClick();
                setActiveLocation(activeLocation === 'LK' ? 'GLOBAL' : 'LK');
              }}
              className="text-[10px] text-[#00BFFF] hover:text-[#16CFFF] underline cursor-pointer"
            >
              [SWITCH]
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px] text-[#8FB8C8]">
            <div>
              <span className="text-[#8FB8C8]/70 block text-[9px]">COORDINATES</span>
              <span className="text-[#D9F5FF] font-mono">
                {activeLocation === 'LK' ? '6.9271° N, 79.8612° E' : 'GLOBAL ANYCAST'}
              </span>
            </div>
            <div>
              <span className="text-[#8FB8C8]/70 block text-[9px]">TIMEZONE</span>
              <span className="text-[#D9F5FF] font-mono">
                {activeLocation === 'LK' ? 'UTC+05:30 (SL)' : 'AUTO-ALIGNED'}
              </span>
            </div>
            <div>
              <span className="text-[#8FB8C8]/70 block text-[9px]">ACTIVE CURRENCY</span>
              <span className="text-[#16CFFF] font-mono font-bold">{currency}</span>
            </div>
            <div>
              <span className="text-[#8FB8C8]/70 block text-[9px]">STATUS</span>
              <span className="text-emerald-400 font-mono font-bold">READY / OPTIMAL</span>
            </div>
          </div>

          {/* Mini radar circular ring */}
          <div className="mt-2.5 pt-2 border-t border-[#00BFFF]/15 flex items-center justify-between text-[10px] text-[#8FB8C8]">
            <span className="flex items-center gap-1">
              <Wifi className="w-3 h-3 text-emerald-400" />
              <span>TRANSMISSION: ONLINE</span>
            </span>
            <span className="text-[#00BFFF]">QUANTUM HUD</span>
          </div>
        </div>

        {/* Direct Channels */}
        <div className="space-y-2 text-xs">
          <div className="text-[10px] font-bold text-[#8FB8C8] tracking-widest uppercase mb-1">
            {t.globalReception.directChannels}
          </div>

          <button
            onClick={handleWhatsAppDirect}
            className="w-full flex items-center justify-between p-2 rounded-xs bg-[#031525]/90 border border-emerald-500/40 hover:border-emerald-400 hover:bg-emerald-950/30 text-[#D9F5FF] transition-all hover:shadow-[0_0_10px_rgba(16,185,129,0.3)] group"
          >
            <span className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-xs bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-3.5 h-3.5" />
              </div>
              <span className="font-rajdhani font-semibold">{t.globalReception.whatsappDirect}</span>
            </span>
            <span className="text-[10px] text-emerald-400 font-tech">ONLINE</span>
          </button>

          <button
            onClick={handleCallDirect}
            className="w-full flex items-center justify-between p-2 rounded-xs bg-[#031525]/90 border border-[#00BFFF]/30 hover:border-[#16CFFF] hover:bg-[#00BFFF]/10 text-[#D9F5FF] transition-all hover:shadow-[0_0_10px_rgba(0,191,255,0.2)] group"
          >
            <span className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-xs bg-[#00BFFF]/20 border border-[#00BFFF]/50 flex items-center justify-center text-[#00BFFF] group-hover:scale-105 transition-transform">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="font-rajdhani font-semibold">{t.globalReception.callDirect}</span>
            </span>
            <span className="text-[10px] text-[#00BFFF] font-tech">+94 77</span>
          </button>

          <button
            onClick={handleEmailDirect}
            className="w-full flex items-center justify-between p-2 rounded-xs bg-[#031525]/90 border border-[#00BFFF]/20 hover:border-[#16CFFF] hover:bg-[#00BFFF]/10 text-[#D9F5FF] transition-all group"
          >
            <span className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-xs bg-black/40 border border-[#00BFFF]/30 flex items-center justify-center text-[#8FB8C8] group-hover:text-[#16CFFF]">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <span className="font-rajdhani font-semibold">{t.globalReception.emailDirect}</span>
            </span>
            <span className="text-[10px] text-[#8FB8C8] font-tech">DISPATCH</span>
          </button>
        </div>
      </div>

      {/* Human Architect Handoff Card */}
      <div 
        onClick={() => {
          hudAudio.playScan();
          onOpenFounder();
        }}
        className="hud-card p-3 rounded-sm border border-[#00BFFF]/30 hover:border-[#16CFFF] transition-all cursor-pointer group bg-gradient-to-b from-[#02070D] to-[#031525]"
      >
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-sm border-2 border-[#00BFFF]/60 overflow-hidden bg-black/80 flex-shrink-0 group-hover:border-[#16CFFF] group-hover:shadow-[0_0_12px_rgba(0,191,255,0.5)] transition-all">
            {/* Futuristic Founder Avatar Graphic with HUD ring */}
            <div className="w-full h-full bg-gradient-to-br from-[#00BFFF]/30 via-[#010409] to-[#008CFF]/20 flex items-center justify-center text-[#16CFFF] font-orbitron font-extrabold text-sm">
              SP
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border border-black rounded-full" />
          </div>
          <div>
            <span className="text-[9px] font-tech text-[#00BFFF] tracking-wider uppercase block">
              PRINCIPAL ARCHITECT
            </span>
            <h4 className="font-orbitron font-bold text-xs text-[#D9F5FF] group-hover:text-[#16CFFF] transition-colors">
              Shanthapriya Silva
            </h4>
            <p className="text-[10px] font-tech text-[#8FB8C8]">
              Verified Lead Digital Architect
            </p>
          </div>
        </div>
        <div className="mt-2 pt-2 border-t border-[#00BFFF]/15 flex items-center justify-between text-[10px] text-[#00BFFF] font-tech">
          <span>[VIEW CREDENTIALS]</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </aside>
  );
};
