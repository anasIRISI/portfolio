"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";
const storageKey = "anas-portfolio-theme";
const changeEvent = "portfolio-theme-change";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "light" ? "#ffffff" : "#080808");
  document.querySelector('meta[name="color-scheme"]')?.setAttribute("content", theme);
}

function subscribe(callback: () => void) {
  const syncStorage = (event: StorageEvent) => {
    if (event.key === storageKey || event.key === null) {
      applyTheme(event.newValue === "light" ? "light" : "dark");
      callback();
    }
  };
  window.addEventListener(changeEvent, callback);
  window.addEventListener("storage", syncStorage);
  return () => {
    window.removeEventListener(changeEvent, callback);
    window.removeEventListener("storage", syncStorage);
  };
}

export function ThemeSwitcher() {
  const theme = useSyncExternalStore(subscribe, () => document.documentElement.dataset.theme === "light" ? "light" : "dark", () => "dark");

  return (
    <button type="button" className="theme-control" aria-label={theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre"} title={theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre"} onClick={() => {
        const selected: Theme = theme === "dark" ? "light" : "dark";
        applyTheme(selected);
        try { localStorage.setItem(storageKey, selected); } catch { /* The current choice still applies when storage is unavailable. */ }
        window.dispatchEvent(new Event(changeEvent));
      }}>
      <Sun size={18} className="theme-icon-dark" aria-hidden="true" />
      <Moon size={17} className="theme-icon-light" aria-hidden="true" />
      <span>{theme === "dark" ? "Mode clair" : "Mode sombre"}</span>
    </button>
  );
}
