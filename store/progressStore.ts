import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ProgressState {
  dailyXp: number;
  dailyXpGoal: number;
  streak: number;
  completedLessonIds: string[];
  _hasHydrated: boolean;
  setHasHydrated: (value: boolean) => void;
  addXp: (amount: number) => void;
  completeLesson: (lessonId: string) => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      dailyXp: 15,
      dailyXpGoal: 20,
      streak: 12,
      completedLessonIds: ["lesson-es-1-1"],
      _hasHydrated: false,
      setHasHydrated: (value) => set({ _hasHydrated: value }),
      addXp: (amount) =>
        set((state) => ({
          dailyXp: Math.min(state.dailyXp + amount, state.dailyXpGoal),
        })),
      completeLesson: (lessonId) =>
        set((state) => ({
          completedLessonIds: [
            ...new Set([...state.completedLessonIds, lessonId]),
          ],
        })),
    }),
    {
      name: "fluento-progress",
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
