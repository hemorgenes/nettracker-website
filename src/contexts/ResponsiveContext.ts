import create from "zustand";

type ScreenType = {
  width: number;
  height: number;
};

type ContextResponsiveProps = {
  screen: ScreenType;
  setScreen: (isDisabled: ScreenType) => void;
};

export const useResponsive = create<ContextResponsiveProps>((set) => ({
  screen: { width: 0, height: 0 },
  setScreen: (state: ScreenType) => {
      set({ screen: state });
    
  },
}));
