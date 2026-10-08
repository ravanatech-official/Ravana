import React, { useState, useEffect } from 'react';
import { Activity, Cpu, Layers, FileCheck, PhoneCall, CheckCircle2, FlaskConical, Server } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { hudAudio } from '../utils/audio';

interface SystemStatusPanelProps {
  language: Language;
  activeView: 'core' | 'journey' | 'demos' | 'snapshot';
  onSelectTab: (tab: 'core' | 'journey' | 'demos' | 'snapshot') => void;
  onOpenDemos: () => void;
  onOpenSnapshot: () => void;
  hasSnapshot: boolean;
}

export const SystemStatusPanel: React.FC<SystemStatusPanelProps> = ({
  language,
  activeView,
  onSelectTab,
  onOpenDemos,
  onOpenSnapshot,
  hasSnapshot,
}) => {
  const t = TRANSLATIONS[language];
  const [telemetry, setTelemetry] = useState<{
    status: string;
    node: string;
    uptimeSeconds: number;
    heapUsedMb?: number;
    totalInquiriesLogged?: number;
  }>({
    status: 'ONLINE',
    node: 'LK-COLOMBO-CORE-01',
    uptimeSeconds: 142,
    heapUsedMb: 38,
    totalInquiriesLogged: 0,
  });

  useEffect(() => {
    const fetchTelemetry = async () => {
      try {
        const res = await fetch('/api/system/telemetry');
        const data = await res.json();
        if (data && data.metrics) {
          setTelemetry({
            status: data.status,
            node: data.node,
            uptimeSeconds: data.uptimeSeconds,
            heapUsedMb: data.metrics.heapUsedMb,
            totalInquiriesLogged: data.metrics.totalInquiriesLogged,
          });
        }
      } catch {
        // Fallback
      }
    };

    fetchTelemetry();
    const interval = setInterval(fetchTelemetry, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <aside className="w-full lg:w-64 flex flex-col gap-3 font-tech">
      {/* Panel Header */}
      <div className="hud-card p-3.5 rounded-sm">
        <div className="flex items-center justify-between border-b border-[#00BFFF]/20 pb-2 mb-3">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#00BFFF]" />
            <span className="font-orbitron font-bold text-xs tracking-wider text-[#D9F5FF]">
              {t.systemStatus.title}
            </span>
          </div>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </div>

        {/* Real-time Subsystem Status Matrix */}
        <div className="space-y-2 text-xs">
          <button
            onClick={() => {
              hudAudio.playClick();
              onSelectTab('core');
            }}
            className={`w-full flex items-center justify-between p-2 rounded-xs border transition-all text-left ${
              activeView === 'core'
                ? 'bg-[#00BFFF]/15 border-[#16CFFF] text-[#16CFFF] shadow-[0_0_8px_rgba(0,191,255,0.3)]'
                : 'bg-black/30 border-[#00BFFF]/20 text-[#8FB8C8] hover:border-[#00BFFF]/60 hover:text-[#D9F5FF]'
            }`}
          >
            <span className="flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full ${activeView === 'core' ? 'bg-[#16CFFF]' : 'bg-[#00BFFF]/50'}`} />
              <span>{t.systemStatus.receptionStatus}</span>
            </span>
            <span className="text-[10px] text-emerald-400 font-bold">{t.systemStatus.statusOnline}</span>
          </button>

          <button
            onClick={() => {
              hudAudio.playClick();
              onOpenDemos();
            }}
            className={`w-full flex items-center justify-between p-2 rounded-xs border transition-all text-left ${
              activeView === 'demos'
                ? 'bg-[#00BFFF]/15 border-[#16CFFF] text-[#16CFFF] shadow-[0_0_8px_rgba(0,191,255,0.3)]'
                : 'bg-black/30 border-[#00BFFF]/20 text-[#8FB8C8] hover:border-[#00BFFF]/60 hover:text-[#D9F5FF]'
            }`}
          >
            <span className="flex items-center gap-2">
              <FlaskConical className="w-3.5 h-3.5 text-[#00BFFF]" />
              <span>{t.systemStatus.solutionLab}</span>
            </span>
            <span className="text-[10px] text-[#00BFFF] font-bold">{t.systemStatus.statusReady}</span>
          </button>

          <button
            onClick={() => {
              hudAudio.playClick();
              onSelectTab('journey');
            }}
            className={`w-full flex items-center justify-between p-2 rounded-xs border transition-all text-left ${
              activeView === 'journey'
                ? 'bg-[#00BFFF]/15 border-[#16CFFF] text-[#16CFFF] shadow-[0_0_8px_rgba(0,191,255,0.3)]'
                : 'bg-black/30 border-[#00BFFF]/20 text-[#8FB8C8] hover:border-[#00BFFF]/60 hover:text-[#D9F5FF]'
            }`}
          >
            <span className="flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#00BFFF]" />
              <span>{t.systemStatus.architectureEngine}</span>
            </span>
            <span className="text-[10px] text-emerald-400 font-bold">{t.systemStatus.statusOnline}</span>
          </button>

          <button
            onClick={() => {
              hudAudio.playClick();
              if (hasSnapshot) {
                onOpenSnapshot();
              } else {
                onSelectTab('journey');
              }
            }}
            className={`w-full flex items-center justify-between p-2 rounded-xs border transition-all text-left ${
              activeView === 'snapshot'
                ? 'bg-[#00BFFF]/15 border-[#16CFFF] text-[#16CFFF] shadow-[0_0_8px_rgba(0,191,255,0.3)]'
                : 'bg-black/30 border-[#00BFFF]/20 text-[#8FB8C8] hover:border-[#00BFFF]/60 hover:text-[#D9F5FF]'
            }`}
          >
            <span className="flex items-center gap-2">
              <FileCheck className="w-3.5 h-3.5 text-[#00BFFF]" />
              <span>{t.systemStatus.quoteEngine}</span>
            </span>
            <span className={`text-[10px] font-bold ${hasSnapshot ? 'text-[#16CFFF]' : 'text-amber-400'}`}>
              {hasSnapshot ? t.systemStatus.statusReady : 'STANDBY'}
            </span>
          </button>
        </div>

        {/* Live Diagnostics */}
        <div className="mt-4 pt-3 border-t border-[#00BFFF]/15 text-[11px] text-[#8FB8C8] space-y-1.5">
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-1.5">
              <Activity className="w-3 h-3 text-[#00BFFF]" />
              <span>CORE ARCHITECT</span>
            </span>
            <span className="text-[#D9F5FF] font-semibold">SHANTHAPRIYA SILVA</span>
          </div>
          <div className="flex justify-between">
            <span>{t.systemStatus.uptime}</span>
            <span className="text-emerald-400 font-mono">
              {telemetry.uptimeSeconds ? `${Math.floor(telemetry.uptimeSeconds / 60)}m ${telemetry.uptimeSeconds % 60}s (LIVE)` : '99.98%'}
            </span>
          </div>
          <div className="flex justify-between">
            <span>SERVER HEAP / NODE</span>
            <span className="text-[#00BFFF] font-mono">{telemetry.heapUsedMb ? `${telemetry.heapUsedMb} MB` : '12ms'}</span>
          </div>
          {telemetry.totalInquiriesLogged !== undefined && telemetry.totalInquiriesLogged > 0 && (
            <div className="flex justify-between text-amber-300">
              <span>DISPATCHES LOGGED</span>
              <span className="font-mono font-bold">{telemetry.totalInquiriesLogged}</span>
            </div>
          )}
        </div>
      </div>

      {/* Quick Launchpad Action Card */}
      <div className="hud-card p-3 rounded-sm text-xs bg-gradient-to-b from-[#031525]/90 to-[#010409]/90 border border-[#00BFFF]/30">
        <div className="text-[11px] font-bold text-[#00BFFF] tracking-wider mb-2 flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>PROVEN SOLUTION LAB</span>
        </div>
        <p className="text-[11px] text-[#8FB8C8] mb-3 leading-relaxed">
          {language === 'en'
            ? '6 conceptual real-world solutions with live mockups, WhatsApp checkouts, and proven ROI.'
            : 'බේකරි, කැෆේ, සැලූන් ආදී සජීවී ආදර්ශන 6ක් නිරීක්ෂණය කර ඔබේ ව්‍යාපාරයට ගැලපෙන ආකෘතිය තෝරාගන්න.'}
        </p>
        <button
          onClick={() => {
            hudAudio.playScan();
            onOpenDemos();
          }}
          className="w-full py-1.5 px-3 bg-[#00BFFF]/20 hover:bg-[#00BFFF]/30 border border-[#00BFFF]/50 hover:border-[#16CFFF] text-[#16CFFF] rounded-xs font-orbitron text-[11px] tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_10px_rgba(0,191,255,0.2)]"
        >
          <FlaskConical className="w-3.5 h-3.5" />
          <span>LAUNCH DEMO LAB</span>
        </button>
      </div>
    </aside>
  );
};
