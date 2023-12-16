import React, { useEffect, useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { BsArrowDown } from "react-icons/bs";
import { State, Technology } from "../../../types/FormContact";
import { Checkbox } from "@nextui-org/react";
import { vehicles } from "../../../utils/dataStepTwoContact";
import ItemVehicle from "./ItemVehicle";
import toast from "react-hot-toast";

interface Step1Props {
  setStep: (step: number) => void;
}

const technologyArray: Technology[] = [
  { name: "Autotrac" },
  { name: "Omnilink" },
  { name: "Onixsat" },
  { name: "Outros" },
  { name: "Nettracker" },
];

export default function ResultStep1({ setStep }: Step1Props) {
  const { currentScheduling, setCurrentScheduling } = useForm();
  const [address, setAddress] = useState(currentScheduling?.address);
  const [escortInLocal, setEscortInLocal] = useState<string>(
    currentScheduling?.escort_in_local || ""
  );
  const [vehicleIsBlocked, setVehicleIsBlocked] = useState<string>(
    currentScheduling?.veichle_blocked ?? ""
  );
  const [city, setCity] = useState(currentScheduling?.city);
  const [states, setStates] = useState<State[]>([]);
  const [ufSelected, setUfSelected] = useState(currentScheduling?.uf ?? "");
  const [date, setDate] = useState(currentScheduling?.date);
  const [tec, setTec] = useState(currentScheduling?.technology ?? "");
  const [cep, setCep] = useState("");
  const [problem, setProblem] = useState(currentScheduling?.complement);
  useEffect(() => {
    const getUfs = async () => {
      const response = await fetch(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      );
      const states = await response.json();
      setStates(states);
    };
    getUfs();
  }, []);

  const getAdress = async (cpf: string) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cpf}/json/`);
      const data = await response.json();
      setAddress(`${data.logradouro} - Bairro ${data.bairro}`);
      setCity(data.localidade);
      setUfSelected(data.uf);
    } catch (err) {
      console.log(err);
      setAddress("");
      setCity("");
      setUfSelected("");
    }
  };

  useEffect(() => {
    if (cep && cep.length >= 8) {
      const newCep = cep.replace(/[^0-9]/g, "");
      getAdress(newCep);
    }
    if (!cep) {
      setAddress("");
      setCity("");
      setUfSelected("");
    }
  }, [cep]);

  async function handleNextStep() {
    if (!currentScheduling || currentScheduling.vehicles.length === 0) {
      toast.error("Selecione pelo menos um veículo");
      return;
    }
    setCurrentScheduling({
      ...currentScheduling,
      address: address ?? "",
      city: city ?? "",
      uf: ufSelected,
      date: date ?? "",
      escort_in_local: escortInLocal,
      veichle_blocked: vehicleIsBlocked,
      technology: tec,
      complement: problem ?? "",
    });
    setStep(100);
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleNextStep();
      }}
    >
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Informações do(s) veículo(s)
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Detalhes do(s) veículo(s) encontrado
        </p>
      </div>
      <div className="flex flex-row my-6 justify-center md:justify-start gap-5 flex-wrap">
        {currentScheduling?.vehicles?.map((vehicle: any) => (
          <ItemVehicle key={vehicle} vehicle={vehicle} />
        ))}
      </div>
      <div className=" sm:px-0  border-t-2 pt-5 border-t-gray-300">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Informações do agendamento
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Detalhes exclusivamente para o agendamento
        </p>
      </div>
      <div className="isolate md:px-6">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        ></div>
        <div className=" mt-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Buscar por CEP
              </label>
              <span className="text-sm text-zinc-500">
                Preenche automático o endreço pelo CEP
              </span>
              <div className="mt-2.5">
                <input
                  value={cep}
                  placeholder="00000-000"
                  required
                  onChange={(e) => setCep(e.target.value)}
                  type="text"
                  name="CEP"
                  id="CEP"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2 w-full flex flex-row items-center justify-center">
              <hr className="block w-full h-[1px]  bg-black" />
              <div className="p-8"> OU </div>
              <hr className="block w-full h-[1px]  bg-black" />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Endereço
              </label>
              <div className="mt-2.5">
                <input
                  value={address}
                  placeholder="Digite o endereço..."
                  required
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="2"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Data do Agendamento
              </label>
              <div className="mt-2.5">
                <input
                  value={date}
                  placeholder="00/00/0000"
                  required
                  onChange={(e) => setDate(e.target.value)}
                  type="date"
                  name="2"
                  id="2"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Cidade
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  placeholder="Digite a Cidade..."
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Estado do Agendamento
              </label>
              <div className="relative mt-2.5">
                <div className=" inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    required
                    value={ufSelected}
                    onChange={(e) => setUfSelected(e.target.value)}
                    name="country"
                    className="h-full w-full rounded-md  py-2 border border-gray-300 shadow-sm bg-white bg-none pl-4 pr-9 text-gray-800 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  >
                    {states.map((state) => (
                      <option key={state.id} value={state.sigla}>
                        {state.nome} ({state.sigla})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Tecnologia
              </label>
              <div className="relative mt-2.5">
                <div className="absolute w-full inset-y-0 left-0 flex items-center">
                  <label htmlFor="country2" className="sr-only">
                    Tecnologia
                  </label>
                  <select
                    id="country2"
                    required
                    value={tec}
                    onChange={(e) => setTec(e.target.value)}
                    name="country2"
                    className="h-full w-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-800 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  >
                    {technologyArray.map((tec) => (
                      <option key={tec.name} value={tec.name}>
                        {tec.name}
                      </option>
                    ))}
                  </select>
                </div>
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <section className="flex flex-col gap-2">
              <span className="text-gray-600">Informe:</span>
              <div className="flex gap-1 items-center">
                <Checkbox
                  aria-label="Veículo(s) está bloqueado?"
                  defaultSelected={vehicleIsBlocked == "Sim" ? true : false}
                  onChange={(checked: boolean) => {
                    setVehicleIsBlocked(checked ? "Sim" : "Não");
                  }}
                  color="primary"
                  className="mr-2"
                />
                <span>Veículo bloqueado</span>
              </div>
              <div className="flex gap-1 items-center">
                <Checkbox
                  aria-label="Escolta no local?"
                  defaultSelected={escortInLocal == "Sim" ? true : false}
                  onChange={(checked: boolean) => {
                    setEscortInLocal(checked ? "Sim" : "Não");
                  }}
                  color="primary"
                  className="mr-2"
                />
                <span>Escolta no local</span>
              </div>
            </section>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Descreva o problema
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Descreva o problema..."
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <button
          type="submit"
          className="w-full bg-blue-600 font-semibold rounded-md py-2 text-white"
        >
          Próxima etapa
        </button>
      </div>
    </form>
  );
}
