import React from 'react';
import { X, ShieldCheck, Check, MessageCircle, Phone, Mail, Award, Terminal, Code2, Cpu } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { hudAudio } from '../utils/audio';

interface FounderModalProps {
  language: Language;
  onClose: () => void;
  onStartProject: () => void;
}

export const FounderModal: React.FC<FounderModalProps> = ({
  language,
  onClose,
  onStartProject,
}) => {
  const t = TRANSLATIONS[language];

  const handleWhatsApp = () => {
    hudAudio.playConfirm();
    const phone = '94771234567';
    const msg = encodeURIComponent(
      `Hello Shanthapriya Silva! Reaching out after reviewing your credentials on Ravana Tech Digital Reception.`
    );
    window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
  };

  const handleCall = () => {
    hudAudio.playConfirm();
    window.open('tel:+94771234567', '_self');
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#010409]/95 backdrop-blur-xl flex flex-col p-2 sm:p-4 overflow-y-auto">
      <div className="max-w-3xl mx-auto w-full flex items-center justify-between border-b border-[#00BFFF]/30 pb-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-sm bg-[#00BFFF]/20 border border-[#00BFFF] flex items-center justify-center text-[#16CFFF]">
            <Award className="w-4 h-4" />
          </div>
          <div>
            <h2 className="font-orbitron font-extrabold text-base sm:text-lg text-[#D9F5FF] tracking-wider">
              {t.founderModal.title}
            </h2>
            <p className="font-tech text-xs text-[#8FB8C8]">
              DOSSIER ARCHIVE // RAVANA TECH LEADERSHIP
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

      <div className="max-w-3xl mx-auto w-full flex-1 flex flex-col gap-4 pb-6">
        {/* Main Dossier Card */}
        <div className="hud-card p-5 sm:p-7 rounded-sm border border-[#00BFFF]/40 bg-gradient-to-b from-[#031525] via-[#02070D] to-[#010409]">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6">
            {/* Founder Cyber Avatar */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-sm border-2 border-[#00BFFF] bg-[#010409] p-1 flex-shrink-0 shadow-[0_0_20px_rgba(0,191,255,0.4)]">
              <div className="w-full h-full bg-gradient-to-br from-[#00BFFF]/20 via-[#010409] to-[#008CFF]/20 flex flex-col items-center justify-center text-center p-2 relative overflow-hidden">
                <span className="font-orbitron font-black text-2xl sm:text-3xl text-[#16CFFF]">
                  SS
                </span>
                <span className="text-[10px] font-tech text-[#8FB8C8] mt-1">
                  SHANTHAPRIYA
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-emerald-500/20 border border-emerald-400 text-emerald-300 text-[10px] font-tech rounded-xs whitespace-nowrap">
                ● ACTIVE ARCHITECT
              </div>
            </div>

            {/* Title & Role */}
            <div className="text-center sm:text-left flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                <span className="px-2 py-0.5 text-[10px] font-tech bg-[#00BFFF]/10 border border-[#00BFFF]/30 text-[#00BFFF] rounded-xs font-bold">
                  FOUNDER & CHIEF ARCHITECT
                </span>
                <span className="text-xs font-tech text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>VERIFIED RECORD</span>
                </span>
              </div>
              <h3 className="font-orbitron font-extrabold text-2xl text-[#D9F5FF] mb-1">
                {t.founderModal.name}
              </h3>
              <p className="font-tech text-xs text-[#16CFFF] mb-3">
                {t.founderModal.role} • Ravana Tech
              </p>
              <p className="font-rajdhani text-sm text-[#8FB8C8] leading-relaxed">
                {t.founderModal.philosophy}
              </p>
            </div>
          </div>

          {/* Core Technical & Execution Disciplines */}
          <div className="border-t border-[#00BFFF]/20 pt-4 mb-5">
            <span className="text-[10px] font-tech text-[#00BFFF] uppercase tracking-wider block mb-2.5">
              ENGINEERING DISCIPLINES & EXPERTISE
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {t.founderModal.credentials.map((cred, idx) => (
                <div 
                  key={idx}
                  className="p-2.5 bg-black/40 border border-[#00BFFF]/20 rounded-xs flex items-center gap-2.5 text-xs font-rajdhani text-[#D9F5FF]"
                >
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{cred}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Handoff Contacts */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#00BFFF]/20">
            <div className="flex items-center gap-2">
              <button
                onClick={handleWhatsApp}
                className="px-3 py-1.5 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500 text-emerald-300 rounded-xs font-tech text-xs transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Shanthapriya</span>
              </button>

              <button
                onClick={handleCall}
                className="px-3 py-1.5 bg-[#00BFFF]/20 hover:bg-[#00BFFF]/30 border border-[#00BFFF]/40 text-[#16CFFF] rounded-xs font-tech text-xs transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Direct Call</span>
              </button>
            </div>

            <button
              onClick={() => {
                hudAudio.playScan();
                onClose();
                onStartProject();
              }}
              className="px-4 py-2 bg-gradient-to-r from-[#008CFF] to-[#00BFFF] hover:from-[#16CFFF] hover:to-[#00BFFF] text-[#010409] font-orbitron font-bold text-xs tracking-wider rounded-xs transition-all shadow-[0_0_15px_rgba(0,191,255,0.4)] cursor-pointer"
            >
              START ARCHITECTURAL JOURNEY →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
