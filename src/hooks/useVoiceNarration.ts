import { useState, useCallback } from 'react';

export const useVoiceNarration = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentText, setCurrentText] = useState<string | null>(null);

  const speak = useCallback((text: string, id: string) => {
    // Stop any current speech
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }

    // Check if speech synthesis is supported
    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported');
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Configure voice settings
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;

    // Set event handlers
    utterance.onstart = () => {
      setIsPlaying(true);
      setCurrentText(id);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setCurrentText(null);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setCurrentText(null);
    };

    // Start speaking
    window.speechSynthesis.speak(utterance);
  }, []);

  const stop = useCallback(() => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setCurrentText(null);
  }, []);

  return {
    isPlaying,
    currentText,
    speak,
    stop
  };
};