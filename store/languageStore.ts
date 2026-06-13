import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import type { Language } from "@/types/learning";

interface LanguageState {
  selectedLanguage: Language | null;
  _hasHydrated: boolean;
  setSelectedLanguage: (language: Language) => void;
  clearLanguage: () => void;
  setHasHydrated: (value: boolean) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      selectedLanguage: null,
      _hasHydrated: false,
      setSelectedLanguage: (language) => set({ selectedLanguage: language }),
      clearLanguage: () => set({ selectedLanguage: null }),
      setHasHydrated: (value) => set({ _hasHydrated: value }),
    }),
    {
      name: "fluento-language",
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
