import create from "zustand";

type HeaderProps = {
  disabled: boolean;
  setDisabled: (isDisabled: boolean) => void;
};

export const useHeader = create<HeaderProps>((set) => ({
  disabled: true,
  setDisabled: (state: boolean) => set({ disabled: state }),
}));
