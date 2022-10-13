import create from "zustand";
import {
  Brand,
  DataContact,
  VehiclesType,
} from "../types/FormContact";

export const useFormContact = create<DataContact>((set) => ({
  //=======================[ STEP ONE ]=========================================

  date: "",
  setDate: (state: string) => set({ date: state }),

  nameCompany: "",
  setNameCompany: (state: string) => set({ nameCompany: state }),

  address: "",
  setAddress: (state: string) => set({ address: state }),

  city: "",
  setCity: (state: string) => set({ city: state }),

  initials: "",
  setInitials: (state: string) => set({ initials: state }),

  technology: "",
  setTechnology: (state: string) => set({ technology: state }),

  vehicleIsBlocked: "Não",
  setVehicleIsBlocked: (state: "Sim" | "Não") =>
    set({ vehicleIsBlocked: state }),

  escortInLocal: "Não",
  setEscortInLocal: (state: "Sim" | "Não") => set({ escortInLocal: state }),

  //=======================[ STEP TWO ]=========================================

  //Data Of Vehicle
  vehicleType: undefined,
  setVehicleType: (state: VehiclesType) => set({ vehicleType: state }),

  brandVehicle: undefined,
  setBrandVehicle: (state: Brand | undefined) => set({ brandVehicle: state }),

  modelVehicle: undefined,
  setModelVehicle: (state: string | undefined) => set({ modelVehicle: state }),

  vehiclePlate: "",
  setVehiclePlate: (state: string) => set({ vehiclePlate: state }),

  colorVehicle: "",
  setColorVehicle: (state: string) => set({ colorVehicle: state }),

  yearVehicle: "",
  setYearVehicle: (state: string) => set({ yearVehicle: state }),

  hasCart: "Não",
  setHasCart: (state: "Sim" | "Não") => set({ hasCart: state }),

  cartPlate: "",
  setCartPlate: (state: string) => set({ cartPlate: state }),

  brandCart: "",
  setBrandCart: (state: string) => set({ brandCart: state }),

  typesSetCart: "",
  setTypesSetCart: (state: string) => set({ typesSetCart: state }),

  //Data Of Customer
  nameCustomer: "",
  setNameCustomer: (state: string) => set({ nameCustomer: state }),

  initialsStateCustomer: "",
  setInitialsStateCustomer: (state: string) =>
    set({ initialsStateCustomer: state }),

  numberCustomer: "",
  setNumberCustomer: (state: string) => set({ numberCustomer: state }),

  emailCustomer: "",
  setEmailCustomer: (state: string) => set({ emailCustomer: state }),

  problemCustomer: "",
  setProblemCustomer: (state: string) => set({ problemCustomer: state }),
}));
