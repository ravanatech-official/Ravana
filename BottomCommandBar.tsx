import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Send, Sparkles, Terminal, Volume2 } from 'lucide-react';
import { Language, IntentType } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { hudAudio } from '../utils/audio';

interface BottomCommandBarProps {
  language: Language;
  onExecutePrompt: (promptText: string) => void;
  onSelectIntent: (intent: IntentType) => void;
  onOpenDemos: (demoId?: string) => void;
}

export const BottomCommandBar: React.FC<BottomCommandBarProps> = ({
  language,
  onExecutePrompt,
  onSelectIntent,
  onOpenDemos,
}) => {
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const recognitionRef = useRef<any>(null);

  const t = TRANSLATIONS[language];

  useEffect(() => {
    // Check Web Speech API support
    const SpeechRecognition = 
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      setSpeechSupported(true);
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = language === 'si' ? 'si-LK' : 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
        hudAudio.playScan();
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          setInputText(transcript);
          handleProcessCommand(transcript);
        }
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, [language]);

  const toggleListening = () => {
    if (!speechSupported || !recognitionRef.current) {
      // Fallback if browser doesn't have speech: pre-populate prompt
      setInputText('I need a high conversion website with WhatsApp orders');
      hudAudio.playClick();
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current.start();
      } catch {
        setIsListening(false);
      }
    }
  };

  const handleProcessCommand = (text: string) => {
    hudAudio.playConfirm();
    const query = text.toLowerCase();

    if (query.includes('bakery') || query.includes('bread') || query.includes('cake') || query.includes('බේකරි')) {
      onOpenDemos('bakery');
    } else if (query.includes('cafe') || query.includes('coffee') || query.includes('කැෆේ')) {
      onOpenDemos('cafe');
    } else if (query.includes('salon') || query.includes('barber') || query.includes('hair') || query.includes('සැලූන්')) {
      onOpenDemos('salon');
    } else if (query.includes('estate') || query.includes('property') || query.includes('realtor') || query.includes('නිවාස')) {
      onOpenDemos('realtors');
    } else if (query.includes('fitness') || query.includes('gym') || query.includes('trainer') || query.includes('ෆිට්නස්')) {
      onOpenDemos('fitness');
    } else if (query.includes('flower') || query.includes('flora') || query.includes('මල්')) {
      onOpenDemos('flora');
    } else if (query.includes('ai') || query.includes('bot') || query.includes('automation')) {
      onSelectIntent('ai');
    } else if (query.includes('sales') || query.includes('conversion') || query.includes('විකුණුම්')) {
      onSelectIntent('sales');
    } else {
      onExecutePrompt(text);
    }

    setInputText('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    handleProcessCommand(inputText.trim());
  };

  const handleQuickChip = (chip: string) => {
    hudAudio.playClick();
    setInputText(chip);
    handleProcessCommand(chip);
  };

  return (
    <footer className="sticky bottom-0 z-30 border-t border-[#00BFFF]/25 bg-[#010409]/95 backdrop-blur-md px-3 sm:px-6 py-2.5">
      <div className="max-w-5xl mx-auto flex flex-col gap-2">
        {/* Quick Suggestion Chips */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          <span className="text-[10px] font-tech text-[#00BFFF] tracking-wider uppercase whitespace-nowrap flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#16CFFF]" />
            <span className="hidden sm:inline">QUICK INTENTS:</span>
          </span>
          {t.commandBar.quickChips.map((chip, idx) => (
            <button
              key={idx}
              onClick={() => handleQuickChip(chip)}
              className="px-2.5 py-0.5 text-[11px] font-tech text-[#8FB8C8] hover:text-[#16CFFF] bg-[#02070D] hover:bg-[#00BFFF]/15 border border-[#00BFFF]/25 hover:border-[#16CFFF] rounded-xs whitespace-nowrap transition-all"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Input Bar & Voice Waveform */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          {/* Voice Input Button */}
          <button
            type="button"
            onClick={toggleListening}
            className={`p-2 rounded-xs border transition-all flex items-center gap-1.5 flex-shrink-0 cursor-pointer ${
              isListening
                ? 'bg-red-500/20 border-red-500 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.5)] animate-pulse'
                : 'bg-[#00BFFF]/10 border-[#00BFFF]/40 text-[#00BFFF] hover:border-[#16CFFF] hover:text-[#16CFFF]'
            }`}
            title={isListening ? 'Listening active' : 'Click to Speak Intent'}
          >
            {isListening ? (
              <>
                <Mic className="w-4 h-4 text-red-400" />
                <span className="text-[10px] font-tech hidden sm:inline tracking-wider">
                  REC
                </span>
              </>
            ) : (
              <>
                <Mic className="w-4 h-4 text-[#00BFFF]" />
                <span className="text-[10px] font-tech hidden sm:inline tracking-wider">
                  {t.commandBar.clickToSpeak}
                </span>
              </>
            )}
          </button>

          {/* Prompt Input Field */}
          <div className="relative flex-1">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={isListening ? t.commandBar.listening : t.commandBar.promptPlaceholder}
              className={`w-full bg-[#02070D] border rounded-xs px-3 py-1.5 text-xs font-rajdhani text-[#D9F5FF] focus:outline-none transition-all placeholder:text-[#8FB8C8]/60 ${
                isListening 
                  ? 'border-red-500/60 shadow-[0_0_10px_rgba(239,68,68,0.2)]' 
                  : 'border-[#00BFFF]/30 focus:border-[#16CFFF] focus:shadow-[0_0_10px_rgba(0,191,255,0.25)]'
              }`}
            />
            {isListening && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-0.5">
                <span className="w-1 h-3 bg-red-400 animate-pulse" />
                <span className="w-1 h-5 bg-red-400 animate-pulse delay-75" />
                <span className="w-1 h-2 bg-red-400 animate-pulse delay-150" />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="p-2 px-3 bg-[#00BFFF]/20 hover:bg-[#00BFFF]/30 border border-[#00BFFF]/50 hover:border-[#16CFFF] text-[#16CFFF] rounded-xs font-tech text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-[0_0_8px_rgba(0,191,255,0.2)]"
          >
            <Send className="w-3.5 h-3.5" />
            <span className="hidden sm:inline font-orbitron font-bold text-[10px] tracking-wider">
              DISPATCH
            </span>
          </button>
        </form>
      </div>
    </footer>
  );
};
