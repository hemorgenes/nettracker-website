import { Color, VehiclesType } from "../types/FormContact";

export let yearsCar: number[] = [];

export const handleIncrementYearArray = () => {
  const date = new Date();
  const YEAR_CURRENT = date.getFullYear();
  for (let year = 1970; year <= YEAR_CURRENT; year++) {
    yearsCar.push(year);
  }
  yearsCar.reverse();
};

export const colors: Color[] = [
  "Branco",
  "Preto",
  "Azul",
  "Vermelho",
  "Verde",
  "Cinza",
  "Prata",
  "Amarelo",
  "Roxo",
  "Vinho",
  "Marrom",
  "Outros",
];

export const vehicles: VehiclesType[] = [
  {
    type: "Carro",
    slug: "carros",
  },
  {
    type: "Moto",
    slug: "motos",
  },
  {
    type: "Caminhão",
    slug: "caminhoes",
  },
];

export const brandCarts = ["Facchini", "Random", "Guerra", "Noma", "Outros"];
export const typesSet = [
  "Carreta Simples",
  "Carreta Bittrem",
  "CarretaRodotrem",
  "Baú seco",
  "Baú refrigerado",
  "Baú RollUp",
];
