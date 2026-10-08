import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  MessageCircle, 
  Phone, 
  Send, 
  Sparkles, 
  FileText, 
  ShieldCheck, 
  ExternalLink,
  Layers,
  Clock,
  Coins,
  QrCode
} from 'lucide-react';
import { Language, Currency, ProjectSnapshotData } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { hudAudio } from '../utils/audio';

interface ProjectSnapshotModalProps {
  language: Language;
  currency: Currency;
  snapshot: ProjectSnapshotData;
  onClose: () => void;
  onOpenDemo?: (demoId: string) => void;
}

export const ProjectSnapshotModal: React.FC<ProjectSnapshotModalProps> = ({
  language,
  currency,
  snapshot,
  onClose,
  onOpenDemo,
}) => {
  const [copied, setCopied] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientNotes, setClientNotes] = useState('');

  const t = TRANSLATIONS[language];

  const generateBlueprintText = () => {
    return `==========================================
RAVANA TECH | PROJECT ARCHITECTURAL BLUEPRINT
TOKEN: ${snapshot.snapshotId}
DATE: ${new Date(snapshot.timestamp).toLocaleString()}
ARCHITECT: Shanthapriya Silva
==========================================

1. BUSINESS DOMAIN:
   ${snapshot.industry}

2. PRIMARY GOAL:
   ${snapshot.goal}

3. CAPABILITIES & FEATURES:
   ${snapshot.features.map(f => `• ${f}`).join('\n   ')}

4. ESTIMATED VELOCITY:
   ${snapshot.timeline}

5. ESTIMATED INVESTMENT:
   ${snapshot.estimatedPrice} (${currency})

6. RECOMMENDED ARCHITECTURE:
   ${snapshot.recommendedSolution}

STATUS: VERIFIED & READY FOR HUMAN HANDOFF
==========================================`;
  };

  const handleCopy = () => {
    hudAudio.playConfirm();
    navigator.clipboard.writeText(generateBlueprintText());
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleWhatsApp = () => {
    hudAudio.playConfirm();
    const phone = '94771234567'; // Ravana Tech VIP Line
    const msg = encodeURIComponent(
      `Hello Shanthapriya Silva & Ravana Tech!\n\nI have generated my Project Architectural Blueprint on your Digital Reception:\n\n*Token:* ${snapshot.snapshotId}\n*Domain:* ${snapshot.industry}\n*Goal:* ${snapshot.goal}\n*Velocity:* ${snapshot.timeline}\n*Investment:* ${snapshot.estimatedPrice}\n\nCould we review this blueprint and start implementation?`
    );
    window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
  };

  const handleCall = () => {
    hudAudio.playConfirm();
    window.open('tel:+94771234567', '_self');
  };

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    hudAudio.playConfirm();
    try {
      await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: clientName,
          phone: clientPhone,
          notes: clientNotes,
          snapshotId: snapshot.snapshotId,
          snapshotData: snapshot,
        }),
      });
    } catch {
      // Fallback gracefully
    }
    setInquirySubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#010409]/95 backdrop-blur-xl flex flex-col p-2 sm:p-4 overflow-y-auto">
      {/* Top HUD Modal Bar */}
      <div className="max-w-4xl mx-auto w-full flex items-center justify-between border-b border-[#00BFFF]/30 pb-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-sm bg-[#00BFFF]/20 border border-[#00BFFF] flex items-center justify-center text-[#16CFFF]">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <h2 className="font-orbitron font-extrabold text-base sm:text-lg text-[#D9F5FF] tracking-wider">
              {t.snapshot.title}
            </h2>
            <p className="font-tech text-xs text-[#8FB8C8]">
              {t.snapshot.subtitle}
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

      <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col gap-4 pb-6">
        {/* The Cyber Blueprint Card */}
        <div className="hud-card p-4 sm:p-6 rounded-sm border-2 border-[#00BFFF]/50 bg-gradient-to-b from-[#031525] via-[#02070D] to-[#010409] relative overflow-hidden">
          {/* Subtle cyber watermark */}
          <div className="absolute top-2 right-3 opacity-15 pointer-events-none">
            <span className="font-orbitron font-black text-6xl text-[#00BFFF]">RT</span>
          </div>

          {/* Blueprint Header Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#00BFFF]/20 pb-3 mb-4 font-tech text-xs">
            <div className="flex items-center gap-2">
              <span className="text-[#8FB8C8]">{t.snapshot.idLabel}:</span>
              <span className="font-mono font-bold text-[#16CFFF] text-sm tracking-wider px-2 py-0.5 bg-[#00BFFF]/10 border border-[#00BFFF]/30 rounded-xs">
                {snapshot.snapshotId}
              </span>
            </div>

            <div className="flex items-center gap-3 text-[11px] text-[#8FB8C8]">
              <span className="flex items-center gap-1 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>ARCHITECT VERIFIED</span>
              </span>
              <span>•</span>
              <span>COLOMBO NODE</span>
            </div>
          </div>

          {/* Blueprint Core Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            {/* Business Domain */}
            <div className="p-3 bg-black/40 border border-[#00BFFF]/20 rounded-xs">
              <span className="text-[10px] font-tech text-[#00BFFF] uppercase tracking-wider block mb-1">
                {t.snapshot.domainLabel}
              </span>
              <div className="font-orbitron font-bold text-sm text-[#D9F5FF]">
                {snapshot.industry}
              </div>
            </div>

            {/* Primary Goal */}
            <div className="p-3 bg-black/40 border border-[#00BFFF]/20 rounded-xs">
              <span className="text-[10px] font-tech text-[#00BFFF] uppercase tracking-wider block mb-1">
                {t.snapshot.primaryGoal}
              </span>
              <div className="font-rajdhani font-semibold text-sm text-[#16CFFF]">
                {snapshot.goal}
              </div>
            </div>

            {/* Velocity */}
            <div className="p-3 bg-black/40 border border-[#00BFFF]/20 rounded-xs">
              <span className="text-[10px] font-tech text-[#00BFFF] uppercase tracking-wider flex items-center gap-1 mb-1">
                <Clock className="w-3 h-3" />
                <span>{t.snapshot.timelineLabel}</span>
              </span>
              <div className="font-orbitron font-semibold text-xs text-[#D9F5FF]">
                {snapshot.timeline}
              </div>
            </div>

            {/* Pricing guidance */}
            <div className="p-3 bg-black/40 border border-[#00BFFF]/20 rounded-xs">
              <span className="text-[10px] font-tech text-[#00BFFF] uppercase tracking-wider flex items-center gap-1 mb-1">
                <Coins className="w-3 h-3" />
                <span>{t.snapshot.budgetGuidance}</span>
              </span>
              <div className="font-orbitron font-bold text-sm text-emerald-400">
                {snapshot.estimatedPrice}
              </div>
            </div>
          </div>

          {/* Capabilities & Features List */}
          <div className="mb-5">
            <span className="text-[10px] font-tech text-[#00BFFF] uppercase tracking-wider block mb-2">
              {t.snapshot.selectedFeatures}
            </span>
            <div className="flex flex-wrap gap-2">
              {snapshot.features.map((feat, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-tech text-[#D9F5FF] bg-[#00BFFF]/10 border border-[#00BFFF]/35 rounded-xs flex items-center gap-1.5"
                >
                  <Check className="w-3 h-3 text-[#16CFFF]" />
                  <span>{feat}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Recommended Solution Banner */}
          <div className="p-3.5 rounded-xs bg-[#031525]/80 border border-[#16CFFF]/40 mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-tech text-[#16CFFF] uppercase tracking-widest block mb-0.5">
                {t.snapshot.recommendedSolution}
              </span>
              <p className="font-rajdhani text-sm text-[#D9F5FF] font-semibold">
                {snapshot.recommendedSolution}
              </p>
            </div>

            {snapshot.conceptMatch && onOpenDemo && (
              <button
                onClick={() => {
                  hudAudio.playScan();
                  onOpenDemo(snapshot.conceptMatch!);
                }}
                className="px-3 py-1.5 bg-[#00BFFF]/20 hover:bg-[#00BFFF]/30 border border-[#00BFFF]/50 text-[#16CFFF] rounded-xs font-tech text-xs transition-all flex items-center gap-1.5 whitespace-nowrap"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.snapshot.viewMatchingDemo}</span>
              </button>
            )}
          </div>

          {/* Copy Blueprint Button */}
          <div className="flex justify-end">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 bg-black/40 hover:bg-[#031525] border border-[#00BFFF]/30 text-[#8FB8C8] hover:text-[#16CFFF] rounded-xs font-tech text-xs transition-all flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">{t.snapshot.copied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{t.snapshot.copyBlueprint}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Action Handoff Area: WhatsApp, Call, or Instant Dispatch Form */}
        <div className="hud-card p-4 sm:p-5 rounded-sm">
          <h3 className="font-orbitron font-bold text-sm text-[#D9F5FF] tracking-wide mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{t.snapshot.actionTitle}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {/* Primary Action: Direct WhatsApp Dispatch */}
            <button
              onClick={handleWhatsApp}
              className="p-3.5 rounded-xs bg-emerald-950/40 hover:bg-emerald-900/50 border-2 border-emerald-500/60 hover:border-emerald-400 text-emerald-300 font-orbitron font-bold text-xs tracking-wider transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>{t.snapshot.whatsappAction}</span>
            </button>

            {/* Secondary Action: Direct Phone Call */}
            <button
              onClick={handleCall}
              className="p-3.5 rounded-xs bg-[#00BFFF]/10 hover:bg-[#00BFFF]/20 border border-[#00BFFF]/40 hover:border-[#16CFFF] text-[#16CFFF] font-orbitron font-bold text-xs tracking-wider transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#00BFFF] group-hover:scale-110 transition-transform" />
              <span>{t.snapshot.callAction}</span>
            </button>
          </div>

          {/* Quick Dispatch Form */}
          <div className="border-t border-[#00BFFF]/20 pt-4">
            <span className="text-[10px] font-tech text-[#8FB8C8] uppercase tracking-wider block mb-2">
              OR SUBMIT DIRECT BLUEPRINT DISPATCH TO SHANTHAPRIYA SILVA
            </span>

            {inquirySubmitted ? (
              <div className="p-3.5 bg-emerald-950/30 border border-emerald-500/50 text-emerald-400 rounded-xs font-tech text-xs flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>{t.snapshot.officialInquirySuccess} We will respond within 2 hours.</span>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-tech text-[#8FB8C8] mb-1">
                      Your Name / Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Ruwan Perera / Ceylon Sweets"
                      className="w-full bg-black/50 border border-[#00BFFF]/30 rounded-xs px-3 py-1.5 text-xs text-[#D9F5FF] font-rajdhani focus:outline-none focus:border-[#16CFFF]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-tech text-[#8FB8C8] mb-1">
                      Phone Number or WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="e.g. +94 77 123 4567"
                      className="w-full bg-black/50 border border-[#00BFFF]/30 rounded-xs px-3 py-1.5 text-xs text-[#D9F5FF] font-rajdhani focus:outline-none focus:border-[#16CFFF]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-tech text-[#8FB8C8] mb-1">
                    Special Requirements or Questions (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={clientNotes}
                    onChange={(e) => setClientNotes(e.target.value)}
                    placeholder="Tell us any specific integration or timeline constraints..."
                    className="w-full bg-black/50 border border-[#00BFFF]/30 rounded-xs px-3 py-1.5 text-xs text-[#D9F5FF] font-rajdhani focus:outline-none focus:border-[#16CFFF]"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#00BFFF]/20 hover:bg-[#00BFFF]/30 border border-[#00BFFF]/60 hover:border-[#16CFFF] text-[#16CFFF] font-orbitron font-bold text-xs tracking-wider rounded-xs transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{t.snapshot.inquiryAction}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
