export type State = {
  id: number;
  sigla: string;
  nome: string;
};

export type Technology = {
  name: string;
};

export type Brand = {
  codigo: string;
  nome: string;
};

export type Model = {
  codigo: string;
  nome: string;
};

export type VehiclesType = {
  type: string;
  slug: string;
};

export type Color =
  | "Branco"
  | "Preto"
  | "Azul"
  | "Vermelho"
  | "Verde"
  | "Cinza"
  | "Prata"
  | "Amarelo"
  | "Roxo"
  | "Vinho"
  | "Marrom"
  | "Outros";

export type DataRecived = {
  vehiclePlate: string;
  colorVehicle: string;
  nameCustomer: string;
  emailCustomer: string;
  problemCustomer: string;
};

export type DataContact = {
  date: string;
  setDate: (date: string) => void;

  nameCompany: string;
  setNameCompany: (nameCompany: string) => void;

  address: string;
  setAddress: (address: string) => void;

  city: string;
  setCity: (city: string) => void;

  initials: string;
  setInitials: (initials: string) => void;

  technology: string;
  setTechnology: (technology: string) => void;

  vehicleIsBlocked: "Sim" | "Não";
  setVehicleIsBlocked: (vehicleIsBlocked: "Sim" | "Não") => void;

  escortInLocal: "Sim" | "Não";
  setEscortInLocal: (escortInLocal: "Sim" | "Não") => void;

  vehicleType: VehiclesType | undefined;
  setVehicleType: (vehicleType: VehiclesType) => void;

  brandVehicle: Brand | undefined;
  setBrandVehicle: (brandVehicle: Brand | undefined) => void;

  modelVehicle: string | undefined;
  setModelVehicle: (modelVehicle: string | undefined) => void;

  vehiclePlate: string | undefined;
  setVehiclePlate: (vehiclePlate: string) => void;

  colorVehicle: Color | string;
  setColorVehicle: (colorVehicle: string) => void;

  yearVehicle: string;
  setYearVehicle: (yearVehicle: string) => void;

  hasCart: "Sim" | "Não";
  setHasCart: (hasCart: "Sim" | "Não") => void;

  cartPlate: string;
  setCartPlate: (cartPlate: string) => void;

  brandCart: string;
  setBrandCart: (brandCart: string) => void;

  typesSetCart: string;
  setTypesSetCart: (typesSetCart: string) => void;

  nameCustomer: string;
  setNameCustomer: (nameCustomer: string) => void;

  initialsStateCustomer: string;
  setInitialsStateCustomer: (initialsStateCustomer: string) => void;

  numberCustomer: string;
  setNumberCustomer: (numberCustomer: string) => void;

  emailCustomer: string;
  setEmailCustomer: (emailCustomer: string) => void;

  problemCustomer: string;
  setProblemCustomer: (problemCustomer: string) => void;
};
