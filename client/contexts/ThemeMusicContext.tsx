import React, { createContext, useContext, useEffect, useState, useRef } from "react";

type Theme = "light" | "dark";

interface ThemeMusicContextType {
  theme: Theme;
  toggleTheme: () => void;
  isPlaying: boolean;
  togglePlay: () => void;
}

const ThemeMusicContext = createContext<ThemeMusicContextType | undefined>(undefined);

export const ThemeMusicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved === "light" || saved === "dark") return saved;
    return "dark"; // Default is dark per existing UI
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Apply theme class to html element
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    // Initialize audio
    // Using a calm ambient track
    const audio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3");
    audio.loop = true;
    audio.volume = 0.15; // Low volume as requested
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.warn("Audio playback was blocked by the browser. Interaction required.", err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <ThemeMusicContext.Provider value={{ theme, toggleTheme, isPlaying, togglePlay }}>
      {children}
    </ThemeMusicContext.Provider>
  );
};

export const useThemeMusic = () => {
  const context = useContext(ThemeMusicContext);
  if (!context) {
    throw new Error("useThemeMusic must be used within a ThemeMusicProvider");
  }
  return context;
};
