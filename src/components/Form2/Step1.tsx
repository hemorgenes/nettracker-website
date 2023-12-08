import { FaIdCard } from "react-icons/fa";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ResponsePlaca } from "../../@types/API_RESPONSE";
import ResultStep1 from "./components/ResultStep1";
import { useForm } from "../../hooks/useForm";
import Link from "next/link";

interface Step1Props {
  setStep: (step: number) => void;
}

export default function Step1({ setStep }: Step1Props) {
  const [placa, setPlaca] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setCurrentScheduling, currentScheduling } = useForm();

  async function getVehicle() {
    if (!placa) {
      toast.error("Digite a placa do veiculo");
      return;
    }
    setIsLoading(true);
    try {
      let plate = placa.replace(/[^\w\s]/gi, "");
      const response: any = await fetch(`https://backend-placa.vercel.app/${plate}`);
      const data: ResponsePlaca = await response.json();
      const emptyArr = [];
      const ALREADY_EXISTS = currentScheduling?.vehicles?.find(
        (vehicle) => vehicle.plate_vehicle === data.placa
      );
      if (ALREADY_EXISTS) {
        toast.error("Veículo ja adicionado");
        return;
      }
      setCurrentScheduling({
        ...(currentScheduling ?? {
          address: "",
          city: "",
          company_name: "",
          complement: "",
          date: "",
          name_customer: "",
          email: "",
          escort_in_local: "",
          number: "",
          technology: "",
          uf: "",
          uf_customer: "",
          veichle_blocked: "",
        }),
        vehicles: [
          ...(currentScheduling?.vehicles ?? emptyArr),
          {
            vehicle_type: data.extra.tipo_veiculo,
            brand_vehicle: data.MARCA,
            year_vehicle: data.ano,
            model_vehicle: data.MODELO,
            color_vehicle: data.cor,
            plate_vehicle: data.placa,
          },
        ],
      });
    } catch (err) {
      console.log(err);
      toast.error("Veículo não encontrado");
    } finally {
      setPlaca("");
      setIsLoading(false);
    }
  }
  return (
    <>
      <div className="w-full max-w-[400px] mx-auto my-10">
        <label
          htmlFor="email"
          className="block text-sm text-center font-medium leading-6 text-black"
        >
          Digite a placa do veículo
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <FaIdCard className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            name="text"
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
            id="text"
            className="block w-full bg-transparent rounded-md  border-0 py-1.5 pl-10 text-grey-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Digite a placa do veículo"
          />
        </div>
        <button
          disabled={isLoading}
          onClick={getVehicle}
          className="w-full bg-blue-600 font-semibold mt-2 rounded-md py-2 text-white"
        >
          {isLoading ? "Buscando..." : "Buscar"}
        </button>
      </div>
      <ResultStep1 setStep={setStep} />
    </>
  );
}
