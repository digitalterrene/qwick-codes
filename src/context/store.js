import { create } from "zustand";

export const useTriviaStore = create((set) => ({
  totalCorrect: 0,
  incrementTotalCorrect: () =>
    set((state) => ({ totalCorrect: state.totalCorrect + 1 })),
}));
