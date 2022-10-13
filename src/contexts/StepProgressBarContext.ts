import create from "zustand";

type StepProgressBar = {
  percent: number;
  setPersent: (percent: number) => void;
};

export const usePercentProgressBar = create<StepProgressBar>((set) => ({
  percent: 0,
  setPersent: (state: number) => set({ percent: state }),
}));
