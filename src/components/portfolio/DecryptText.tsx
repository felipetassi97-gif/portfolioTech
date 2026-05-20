import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

type DecryptTextProps = {
  text: string;
  speed?: number;
};

export function DecryptText({ text, speed = 25 }: DecryptTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const targetTextRef = useRef(text);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // On mount, just show the initial text without scrambling
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (targetTextRef.current === text) return;

    const oldText = targetTextRef.current;
    const newText = text;
    targetTextRef.current = newText;

    // Matrix characters: Katakana, numbers, uppercase letters and special characters
    const chars = "ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&*+-/\\|[]{}";
    let iteration = 0;
    
    const maxLen = Math.max(oldText.length, newText.length);
    // Limit total steps to ensure it doesn't take too long for large paragraphs
    const totalSteps = Math.min(25, Math.floor(maxLen * 0.8)); 

    const interval = setInterval(() => {
      setDisplayText(() => {
        return newText
          .split("")
          .map((char, index) => {
            // Keep spaces intact to avoid major layout shifting during scramble
            if (char === " ") return " ";
            
            const revealProgress = iteration / totalSteps;
            const charIndexRatio = index / newText.length;
            
            // If we have progressed past this character's index, show the final target character
            if (revealProgress > charIndexRatio) {
              return newText[index];
            }
            
            // Randomly flash a matrix code character
            if (Math.random() < 0.3) {
              return chars[Math.floor(Math.random() * chars.length)];
            }
            
            // Return either the character from the old text or a random one
            return oldText[index] || chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");
      });

      iteration += 1;
      if (iteration >= totalSteps) {
        clearInterval(interval);
        setDisplayText(newText);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <>{displayText}</>;
}

type TextProps = {
  pt: string;
  en: string;
  speed?: number;
};

export function Text({ pt, en, speed }: TextProps) {
  const { language } = useLanguage();
  return <DecryptText text={language === "pt" ? pt : en} speed={speed} />;
}
