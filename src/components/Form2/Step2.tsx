import { FaIdCard } from "react-icons/fa";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ResponsePlaca } from "../../@types/API_RESPONSE";
import { State } from "../../types/FormContact";
import emailjs from "@emailjs/browser";
import { useForm } from "../../hooks/useForm";

interface Step2Props {
  setStep: (step: number) => void;
}

export default function Step2({ setStep }: Step2Props) {
  const { currentScheduling, setCurrentScheduling } = useForm();
  const [name, setName] = useState(currentScheduling?.name_customer || "");
  const [email, setEmail] = useState(currentScheduling?.email || "");
  const [number, setNumber] = useState(currentScheduling?.number || "");
  const [nameCompany, setNameCompany] = useState(
    currentScheduling?.company_name || ""
  );
  const [ufSelected, setUfSelected] = useState(
    currentScheduling?.uf_customer || ""
  );
  const [states, setStates] = useState<State[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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

  async function finish() {
    // Salvar dados no localStorage
    const dataToSave = {
      name,
      number,
      email,
      nameCompany,
      ufSelected,
    };
    localStorage.setItem("myFormData", JSON.stringify(dataToSave));
    handleSendMessage();
  }

  async function fillData() {
    // Obter dados do localStorage e preencher o estado
    console.log("savedData");
    const savedData = localStorage.getItem("myFormData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setName(parsedData.name);
      setNumber(parsedData.number);
      setEmail(parsedData.email);
      setNameCompany(parsedData.nameCompany);
      setUfSelected(parsedData.ufSelected);
    } else {
      toast.error("Não encontramos nenhum solicitante anterior");
    }
  }

  const handleSendMessage = async () => {
    //After verify if all texts no are empty, convert date USA to Date BR
    setIsLoading(true);
    const data_brasileira = currentScheduling?.date
      .split("-")
      .reverse()
      .join("/");

    //Save content message in an CONSTANT
    const text = `
  *Data do atendimento:* ${data_brasileira}
  *Nome da empresa:* ${nameCompany}

  *Cidade:* ${currentScheduling?.city}
  *Estado:* ${currentScheduling?.uf}
  *Endereço do agendamento:* ${currentScheduling?.address}

  *Tecnologia:* ${currentScheduling?.technology}

  *Veículo(s) bloqueado:* ${currentScheduling?.veichle_blocked}
  *Escolta(s) no Local:* ${currentScheduling?.escort_in_local}

  ----------------------------------------

  VEÍCULOS

  ${currentScheduling?.vehicles.map((vehicle) => {
    `
    
    *Tipo:* ${vehicle?.vehicle_type}
    *Marca:* ${vehicle?.brand_vehicle}
    *Modelo:* ${vehicle?.model_vehicle}
    *Placa:* ${vehicle?.plate_vehicle}
    *Cor:* ${vehicle?.color_vehicle}
    *Ano:* ${vehicle?.year_vehicle}
    
    `;
  })}

  ------------------------------------------

  DADOS DO SOLICITANTE

  *Nome:* ${currentScheduling?.name_customer}
  *Estado:* ${currentScheduling?.uf_customer}
  *Número:* ${currentScheduling?.number}
  *Email:* ${currentScheduling?.email}
  *Problema:* ${currentScheduling?.complement}
  `;

    //Transform the text to a URL texts
    const textEncoded = encodeURI(text);
    const customVehicles = currentScheduling?.vehicles
      .map(
        (vehicle) => `
        Tipo: ${vehicle?.vehicle_type}
        Marca: ${vehicle?.brand_vehicle}
        Modelo: ${vehicle?.model_vehicle}
        Placa: ${vehicle?.plate_vehicle}
        Cor: ${vehicle?.color_vehicle}
        Ano: ${vehicle?.year_vehicle}
  
        --------------------------------------------
    `
      )
      .join("");

    const templateParams = {
      from_name: email,
      date: data_brasileira,
      nameCompany: nameCompany,
      address: currentScheduling?.address,
      city: currentScheduling?.city,
      initials: currentScheduling?.uf,
      technology: currentScheduling?.technology,
      vehicleIsBlocked: currentScheduling?.veichle_blocked,
      escortInLocal: currentScheduling?.escort_in_local,
      vehicles: customVehicles,
      nameCustomer: name,
      initialsStateCustomer: ufSelected,
      numberCustomer: number,
      emailCustomer: email,
      problemCustomer: currentScheduling?.complement,
    };

    await emailjs
      .send(
        "service_mehokpp",
        "template_asiyjs8",
        templateParams,
        `${process.env.NEXT_PUBLIC_KEY_EMAIL}`
      )
      .then(
        () => {
          setIsLoading(false);
        },
        (err) => {
          setIsLoading(false);
          console.log(err);
        }
      );
    try {
      await fetch(
        `https://api.callmebot.com/whatsapp.php?phone=5511986938805&text=${textEncoded}&apikey=3470059`
      );
    } catch (err) {
      console.log(err);
    }
    toast.success(
      "Recebemos sua solicitação! Você receberá um e-mail de confirmação",
      {
        duration: 4000,
      }
    );

    setTimeout(() => {
      window.location.href = `https://nettracker.com.br`;
    }, 4000);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        finish();
      }}
    >
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Preencha os dados automaticamente
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Você pode preencher automaticamente os dados do solicitante
          relacionado ao último agendamento
        </p>
        <button
          onClick={fillData}
          type="button"
          className="mt-4 bg-blue-600 hover:bg-blue-700 font-bold text-white text-sm py-2 px-4 rounded"
        >
          Preencher dados
        </button>
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
                Nome do solicitante
              </label>
              <div className="mt-2.5">
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                htmlFor="company"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email do solicitante
              </label>
              <div className="mt-2.5">
                <input
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  name="company"
                  id="company"
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
                Número de contato
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  required
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
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
                Estado do Solicitante
              </label>
              <div className="relative mt-2.5">
                <div className=" inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    required
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
                htmlFor="company"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Nome da empresa
              </label>
              <div className="mt-2.5">
                <input
                  required
                  type="text"
                  value={nameCompany}
                  onChange={(e) => setNameCompany(e.target.value)}
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-row gap-x-5">
        <button
          onClick={() => {
            setCurrentScheduling({
              ...currentScheduling!,
              name_customer: name,
              email,
              number,
              uf_customer: ufSelected,
              company_name: nameCompany,
            });
            setStep(0);
          }}
          type="button"
          className="w-full text-blue-600 border-2 border-solid border-blue-600 font-semibold rounded-md py-2"
        >
          Voltar
        </button>
        <button
          disabled={isLoading}
          type="submit"
          className="w-full bg-blue-600 font-semibold rounded-md py-2 text-white"
        >
          {isLoading ? "Enviando..." : "Finalizar"}
        </button>
      </div>
    </form>
  );
}
