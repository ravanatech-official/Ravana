import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Globe, Terminal, ShieldCheck, User } from 'lucide-react';
import { Language, Currency } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { hudAudio } from '../utils/audio';

interface HeaderHUDProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  currency: Currency;
  onCurrencyChange: (curr: Currency) => void;
  onOpenFounder: () => void;
  onResetToHome: () => void;
}

export const HeaderHUD: React.FC<HeaderHUDProps> = ({
  language,
  onLanguageChange,
  currency,
  onCurrencyChange,
  onOpenFounder,
  onResetToHome,
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [timeString, setTimeString] = useState('');
  const t = TRANSLATIONS[language];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      setTimeString(`${year}.${month}.${day} // ${hours}:${minutes}:${seconds} LK-TIME`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleToggleSound = () => {
    const newMuted = hudAudio.toggleMute();
    setIsMuted(newMuted);
  };

  const handleLangToggle = () => {
    hudAudio.playClick();
    onLanguageChange(language === 'en' ? 'si' : 'en');
  };

  const currencies: Currency[] = ['LKR', 'USD', 'EUR', 'GBP'];

  return (
    <header className="relative z-30 border-b border-[#00BFFF]/25 bg-[#010409]/90 backdrop-blur-md px-3 sm:px-6 py-2.5">
      {/* Top subtle cyan scan line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00BFFF] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Brand Core Title */}
        <div 
          onClick={() => {
            hudAudio.playTransition();
            onResetToHome();
          }}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="relative w-8 h-8 rounded-sm border border-[#00BFFF]/60 bg-[#00BFFF]/10 flex items-center justify-center group-hover:border-[#16CFFF] group-hover:shadow-[0_0_12px_rgba(0,191,255,0.6)] transition-all">
            <span className="text-[#00BFFF] font-orbitron font-bold text-sm tracking-wider">RT</span>
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#00BFFF] animate-ping" />
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#16CFFF]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-orbitron font-extrabold tracking-widest text-[#D9F5FF] text-base sm:text-lg group-hover:text-[#16CFFF] transition-colors">
                {t.systemTitle}
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-tech text-[#00BFFF] bg-[#00BFFF]/10 border border-[#00BFFF]/30 rounded-xs">
                v2.4
              </span>
            </div>
            <div className="text-[10px] font-tech tracking-wider text-[#8FB8C8] flex items-center gap-1.5">
              <span>{t.systemTagline}</span>
              <span className="text-[#00BFFF]/50">•</span>
              <span className="text-[#16CFFF] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16CFFF] animate-pulse" />
                {t.systemOnline}
              </span>
            </div>
          </div>
        </div>

        {/* Live Center Telemetry (Desktop Only) */}
        <div className="hidden lg:flex items-center gap-4 text-xs font-tech text-[#8FB8C8]/90 bg-[#02070D]/80 border border-[#00BFFF]/20 px-3 py-1 rounded-sm">
          <div className="flex items-center gap-1.5 text-[#00BFFF]">
            <Terminal className="w-3.5 h-3.5" />
            <span className="text-[11px]">{t.systemNode}</span>
          </div>
          <span className="text-[#00BFFF]/30">|</span>
          <div className="text-[11px] text-[#D9F5FF]/80">{timeString}</div>
          <span className="text-[#00BFFF]/30">|</span>
          <div className="flex items-center gap-1 text-emerald-400 text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SECURE 256-BIT</span>
          </div>
        </div>

        {/* Right Controls: Founder, Audio, Lang, Currency */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Founder Dossier Button */}
          <button
            onClick={() => {
              hudAudio.playScan();
              onOpenFounder();
            }}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-tech text-[#D9F5FF] bg-[#031525]/80 hover:bg-[#00BFFF]/20 border border-[#00BFFF]/35 rounded-sm transition-all hover:border-[#16CFFF] hover:shadow-[0_0_10px_rgba(0,191,255,0.3)]"
            title="Principal Architect Dossier"
          >
            <User className="w-3.5 h-3.5 text-[#00BFFF]" />
            <span className="hidden md:inline font-rajdhani font-semibold tracking-wide">
              SHANTHAPRIYA SILVA
            </span>
            <span className="md:hidden font-rajdhani font-semibold">
              FOUNDER
            </span>
          </button>

          {/* Sound Synthesizer Toggle */}
          <button
            onClick={handleToggleSound}
            className={`p-1.5 text-xs font-tech border rounded-sm transition-all flex items-center gap-1 ${
              isMuted
                ? 'text-gray-400 border-gray-700 bg-black/40'
                : 'text-[#00BFFF] border-[#00BFFF]/40 bg-[#00BFFF]/10 hover:border-[#16CFFF]'
            }`}
            title={isMuted ? 'Unmute HUD Audio' : 'Mute HUD Audio'}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <>
                <Volume2 className="w-4 h-4" />
                <span className="hidden sm:flex items-end gap-[1px] h-3">
                  <span className="w-[2px] h-1.5 bg-[#00BFFF] animate-pulse" />
                  <span className="w-[2px] h-3 bg-[#00BFFF] animate-pulse delay-75" />
                  <span className="w-[2px] h-2 bg-[#00BFFF] animate-pulse delay-150" />
                </span>
              </>
            )}
          </button>

          {/* Language Switcher */}
          <button
            onClick={handleLangToggle}
            className="px-2 py-1 text-xs font-tech font-bold text-[#D9F5FF] bg-[#02070D] border border-[#00BFFF]/40 hover:border-[#16CFFF] rounded-sm transition-all flex items-center gap-1 hover:text-[#16CFFF]"
            title="Toggle Language (English / Sinhala)"
          >
            <Globe className="w-3.5 h-3.5 text-[#00BFFF]" />
            <span>{language === 'en' ? 'EN' : 'සිං'}</span>
          </button>

          {/* Currency Selector */}
          <div className="relative">
            <select
              value={currency}
              onChange={(e) => {
                hudAudio.playClick();
                onCurrencyChange(e.target.value as Currency);
              }}
              className="bg-[#02070D] border border-[#00BFFF]/40 text-[#00BFFF] text-xs font-tech font-bold py-1 px-1.5 rounded-sm focus:outline-none focus:border-[#16CFFF] cursor-pointer"
            >
              {currencies.map((curr) => (
                <option key={curr} value={curr} className="bg-[#02070D] text-[#D9F5FF]">
                  {curr}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};
