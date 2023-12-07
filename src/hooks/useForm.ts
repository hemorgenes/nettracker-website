import create from "zustand";

export interface Veichle {
  vehicle_type: string;
  brand_vehicle: string;
  model_vehicle: string;
  plate_vehicle: string;
  color_vehicle: string;
  year_vehicle: string;
  has_carret?: string;
}

interface CurrentScheduling {
  date: string;
  company_name: string;
  address: string;
  city: string;
  uf: string;
  technology: string;
  veichle_blocked: string;
  escort_in_local: string;
  email: string;
  name_customer: string;
  uf_customer: string;
  number: string;
  complement: string;
  vehicles: Veichle[];
}

type FormProps = {
  currentScheduling: CurrentScheduling | null;
  setCurrentScheduling: (currentScheduling: CurrentScheduling | null) => void;
};

export const useForm = create<FormProps>((set) => ({
  currentScheduling: null,
  setCurrentScheduling: (currentScheduling: CurrentScheduling | null) =>
    set({ currentScheduling }),
}));
