import React from "react";
import { Veichle, useForm } from "../../../hooks/useForm";
import { Checkbox } from "@nextui-org/react";

interface ItemVehicleProps {
  vehicle: Veichle;
}

export default function ItemVehicle({ vehicle }: ItemVehicleProps) {
  const { currentScheduling, setCurrentScheduling } = useForm();

  async function removeVehicle(plate: string) {
    if (!currentScheduling) {
      return;
    }
    const newVehicles = currentScheduling!.vehicles.filter(
      (vehicle) => vehicle.plate_vehicle !== plate
    );
    setCurrentScheduling({ ...currentScheduling!, vehicles: newVehicles });
  }

  return (
    <div className=" w-full md:w-fit border-t border-gray-100">
      <dl className="">
        <div className="p-5 bg-white rounded-md border border-gray-300 shadow-lg ">
          <dt className="text-sm font-bold mt-2 leading-6 text-gray-900">
            Tipo do veiculo:{" "}
            <span className="font-normal">{vehicle.vehicle_type}</span>
          </dt>
          <dt className="text-sm font-bold mt-2 leading-6 text-gray-900">
            Marca: <span className="font-normal">{vehicle.brand_vehicle}</span>
          </dt>
          <dt className="text-sm font-bold mt-2 leading-6 text-gray-900">
            Modelo: <span className="font-normal">{vehicle.model_vehicle}</span>
          </dt>
          <dt className="text-sm font-bold mt-2 leading-6 text-gray-900">
            Placa: <span className="font-normal">{vehicle.plate_vehicle}</span>
          </dt>
          <dt className="text-sm font-bold mt-2 leading-6 text-gray-900">
            Cor: <span className="font-normal">{vehicle.color_vehicle}</span>
          </dt>
          <dt className="text-sm font-bold mt-2 leading-6 text-gray-900">
            Ano: <span className="font-normal">{vehicle.year_vehicle}</span>
          </dt>

          <button
            onClick={() => removeVehicle(String(vehicle?.plate_vehicle))}
            className="w-full border-1 mt-6 border-red-600 py-2 text-red-600 underline flex items-center justify-center"
          >
            Remover
          </button>
        </div>
      </dl>
    </div>
  );
}
