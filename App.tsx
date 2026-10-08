/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HeaderHUD } from './components/HeaderHUD';
import { SystemStatusPanel } from './components/SystemStatusPanel';
import { GlobalReceptionPanel } from './components/GlobalReceptionPanel';
import { CentralCore } from './components/CentralCore';
import { JourneyEngine } from './components/JourneyEngine';
import { SolutionLabModal } from './components/SolutionLabModal';
import { ProjectSnapshotModal } from './components/ProjectSnapshotModal';
import { FounderModal } from './components/FounderModal';
import { BottomCommandBar } from './components/BottomCommandBar';
import { Language, Currency, IntentType, ProjectSnapshotData } from './types';
import { hudAudio } from './utils/audio';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [currency, setCurrency] = useState<Currency>('LKR');
  const [activeView, setActiveView] = useState<'core' | 'journey' | 'demos' | 'snapshot'>('core');
  const [selectedIntent, setSelectedIntent] = useState<IntentType | undefined>();
  
  // Modals state
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeDemoId, setActiveDemoId] = useState<string | undefined>('bakery');
  const [isSnapshotModalOpen, setIsSnapshotModalOpen] = useState(false);
  const [isFounderModalOpen, setIsFounderModalOpen] = useState(false);
  
  // Stored project snapshot
  const [currentSnapshot, setCurrentSnapshot] = useState<ProjectSnapshotData | null>(null);

  // Intent selection handler
  const handleSelectIntent = (intent: IntentType) => {
    setSelectedIntent(intent);
    if (intent === 'demos') {
      setIsDemoModalOpen(true);
    } else if (intent === 'consultation') {
      setIsFounderModalOpen(true);
    } else {
      setActiveView('journey');
    }
  };

  // Open Solution Lab modal
  const handleOpenDemos = (demoId?: string) => {
    if (demoId) {
      setActiveDemoId(demoId);
    }
    setIsDemoModalOpen(true);
  };

  // When user finishes the 5-step journey or adopts a demo
  const handleFinishJourney = (snapshot: ProjectSnapshotData) => {
    setCurrentSnapshot(snapshot);
    setIsDemoModalOpen(false);
    setIsSnapshotModalOpen(true);
    setActiveView('core');

    // Register blueprint snapshot in server database
    fetch('/api/snapshots', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(snapshot),
    }).catch(() => {});
  };

  // Reset to initial reception hub
  const handleResetToHome = () => {
    setActiveView('core');
    setSelectedIntent(undefined);
  };

  return (
    <div className="min-h-screen bg-[#02070D] text-[#D9F5FF] hud-grid-bg relative flex flex-col font-rajdhani selection:bg-[#00BFFF]/30 selection:text-[#16CFFF]">
      {/* Background Ambient Cyber Glows */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-[#008CFF]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-[#00BFFF]/8 rounded-full blur-3xl pointer-events-none" />

      {/* Top HUD Command Bar */}
      <HeaderHUD
        language={language}
        onLanguageChange={setLanguage}
        currency={currency}
        onCurrencyChange={setCurrency}
        onOpenFounder={() => setIsFounderModalOpen(true)}
        onResetToHome={handleResetToHome}
      />

      {/* Main Reception HUD Workspace */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-2 sm:p-4 flex flex-col lg:flex-row gap-4 items-stretch justify-center relative z-10">
        {/* Left Telemetry Panel (Desktop & Tablet) */}
        <div className="order-2 lg:order-1 flex-shrink-0">
          <SystemStatusPanel
            language={language}
            activeView={activeView}
            onSelectTab={(tab) => {
              if (tab === 'journey') {
                setActiveView('journey');
              } else if (tab === 'demos') {
                setIsDemoModalOpen(true);
              } else if (tab === 'snapshot' && currentSnapshot) {
                setIsSnapshotModalOpen(true);
              } else {
                setActiveView('core');
              }
            }}
            onOpenDemos={() => setIsDemoModalOpen(true)}
            onOpenSnapshot={() => {
              if (currentSnapshot) {
                setIsSnapshotModalOpen(true);
              } else {
                setActiveView('journey');
              }
            }}
            hasSnapshot={!!currentSnapshot}
          />
        </div>

        {/* Center Hero / Reception State View */}
        <div className="order-1 lg:order-2 flex-1 flex flex-col items-center justify-center min-h-[460px]">
          {activeView === 'core' ? (
            <CentralCore
              language={language}
              onSelectIntent={handleSelectIntent}
              onOpenDemos={() => setIsDemoModalOpen(true)}
              onOpenFounder={() => setIsFounderModalOpen(true)}
            />
          ) : (
            <JourneyEngine
              language={language}
              currency={currency}
              initialIntent={selectedIntent}
              onFinishJourney={handleFinishJourney}
              onCancel={handleResetToHome}
            />
          )}
        </div>

        {/* Right Telemetry & Global Node Panel */}
        <div className="order-3 flex-shrink-0">
          <GlobalReceptionPanel
            language={language}
            currency={currency}
            onOpenSnapshot={() => {
              if (currentSnapshot) {
                setIsSnapshotModalOpen(true);
              } else {
                setActiveView('journey');
              }
            }}
            onOpenFounder={() => setIsFounderModalOpen(true)}
          />
        </div>
      </main>

      {/* Bottom Command Bar with Voice & Prompt Recognition */}
      <BottomCommandBar
        language={language}
        onExecutePrompt={async (promptText) => {
          try {
            const res = await fetch('/api/analyze-need', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ promptText, language }),
            });
            const data = await res.json();
            if (data?.analysis?.domain && ['bakery', 'cafe', 'flora', 'fitness', 'realtors', 'salon'].includes(data.analysis.domain)) {
              setActiveDemoId(data.analysis.domain);
              setIsDemoModalOpen(true);
              return;
            }
          } catch {
            // Fallback
          }
          setSelectedIntent('website');
          setActiveView('journey');
        }}
        onSelectIntent={handleSelectIntent}
        onOpenDemos={handleOpenDemos}
      />

      {/* Modals & Overlays */}
      {isDemoModalOpen && (
        <SolutionLabModal
          language={language}
          currency={currency}
          initialDemoId={activeDemoId}
          onClose={() => setIsDemoModalOpen(false)}
          onAdoptBlueprint={handleFinishJourney}
        />
      )}

      {isSnapshotModalOpen && currentSnapshot && (
        <ProjectSnapshotModal
          language={language}
          currency={currency}
          snapshot={currentSnapshot}
          onClose={() => setIsSnapshotModalOpen(false)}
          onOpenDemo={(demoId) => {
            setIsSnapshotModalOpen(false);
            setActiveDemoId(demoId);
            setIsDemoModalOpen(true);
          }}
        />
      )}

      {isFounderModalOpen && (
        <FounderModal
          language={language}
          onClose={() => setIsFounderModalOpen(false)}
          onStartProject={() => {
            setIsFounderModalOpen(false);
            setActiveView('journey');
          }}
        />
      )}
    </div>
  );
}
