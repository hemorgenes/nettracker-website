import { Checkbox } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import Scroll from "react-scroll";
import { useFormContact } from "../../contexts/DataFormContactContext";
import { usePercentProgressBar } from "../../contexts/StepProgressBarContext";
import { State, Technology } from "../../types/FormContact";

function StepOne() {
  
  const technologyArray: Technology[] = [
    { name: "Autotrac" },
    { name: "Omnilink" },
    { name: "Onixsat" },
    { name: "Outros" },
    { name: "Nettracker" },
  ];
  
  const [states, setStates] = useState<State[]>([]);
  const setPercent = usePercentProgressBar((state) => state.setPersent);

  const date = useFormContact((state) => state.date);
  const setDate = useFormContact((state) => state.setDate);

  const nameCompany = useFormContact((state) => state.nameCompany);
  const setNameCompany = useFormContact((state) => state.setNameCompany);

  const address = useFormContact((state) => state.address);
  const setAddress = useFormContact((state) => state.setAddress);

  const city = useFormContact((state) => state.city);
  const setCity = useFormContact((state) => state.setCity);

  const initials = useFormContact((state) => state.initials);
  const setInitials = useFormContact((state) => state.setInitials);

  const technology = useFormContact((state) => state.technology);
  const setTechnology = useFormContact((state) => state.setTechnology);

  const vehicleIsBlocked = useFormContact((state) => state.vehicleIsBlocked);
  const setVehicleIsBlocked = useFormContact(
    (state) => state.setVehicleIsBlocked
  );

  const escortInLocal = useFormContact((state) => state.escortInLocal);
  const setEscortInLocal = useFormContact((state) => state.setEscortInLocal);

    //Call API IBGE
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

  return (
    <form
      className="w-[97%] md:w-[80%] mt-8 md:mt-0 shadow-xl bg-white py-8"
      onSubmit={(e) => {
        e.preventDefault();
        Scroll.animateScroll.scrollToTop({ duration: 0 });
        setPercent(50);
      }}
    >
      <header className="flex flex-col items-center justify-center pb-8">
        <h1 className="font-bold text-xl">AGENDAMENTO</h1>
      </header>
      <div className="flex w-full flex-col px-8 gap-4">
        {/* DATA */}
        <section className="flex flex-col w-full gap-2">
          <span className="text-gray-600">Data do atendimento</span>
          <input
            className="bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 px-4 py-2 rounded-sm"
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </section>

        {/* NOME EMPRESA */}
        <section className="flex flex-col gap-2">
          <span className="text-gray-600">Nome da empresa</span>
          <input
            className="bg-gray-100 transition-all focus:bg-gray-200 hover:bg-gray-200 px-4 py-2 rounded-sm outline-none"
            type="text"
            required
            value={nameCompany}
            onChange={(e) => setNameCompany(e.target.value)}
            placeholder="Ex: Nettracker"
          />
        </section>

        {/* ENDEREÇO */}
        <section className="flex flex-col gap-2">
          <span className="text-gray-600">Endereço do atendimento</span>
          <input
            className="bg-gray-100 transition-all focus:bg-gray-200 hover:bg-gray-200 px-4 py-2 rounded-sm outline-none"
            type="text"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Ex: Rua Dr Luiz Migliano..."
          />
        </section>

        {/* CIDADE E UF */}
        <div className="flex flex-col md:flex-row w-full gap-4">
          <section className="flex flex-col gap-2 w-[100%] md:w-[50%]">
            <span className="text-gray-600">Cidade</span>
            <input
              className="bg-gray-100 transition-all focus:bg-gray-200 hover:bg-gray-200 px-4 py-2 rounded-sm outline-none"
              type="text"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Ex: Barueri"
            />
          </section>
          <section className="flex flex-col gap-2  w-[100%] md:w-[50%]">
            <span className="text-gray-600">UF</span>
            <select
              // TESTAR A PROP VALUE
              required
              className="bg-gray-100 transition-all focus:bg-gray-200 hover:bg-gray-200 px-4 py-2 rounded-sm outline-none"
              onChange={(e) => setInitials(e.target.value)}
              value={initials}
            >
              <option value="" hidden>
                Escolha o estado
              </option>
              {states.map((state) => (
                <option key={state.id} value={state.sigla}>
                  {state.nome} ({state.sigla})
                </option>
              ))}
            </select>
          </section>
        </div>

        {/* TECNOLOGGIA */}
        <section className="flex flex-col gap-2">
          <span className="text-gray-600">Tecnologia</span>
          <select
            value={technology}
            required
            className="bg-gray-100 transition-all focus:bg-gray-200 hover:bg-gray-200 px-4 py-2 rounded-sm outline-none"
            onChange={(e) => setTechnology(e.target.value)}
          >
            <option value="" hidden>
              Selecione uma tecnologia
            </option>
            {technologyArray.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </section>

        {/* CHECKBOX INFROME */}
        <section className="flex flex-col gap-2">
          <span className="text-gray-600">Informe:</span>
          <div className="flex gap-1 items-center">
            <Checkbox
              aria-label="Veículo está bloqueado?"
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

        {/*BOTÃO ENVIAR */}
        <input
          className="inline-flex cursor-pointer gap-2 w-fit items-center mx-auto md:mx-0 mt-4  transition-colors border bg-blue-600 focus:bg-blue-700 hover:bg-blue-700 text-white px-14 py-4 rounded-sm"
          type="submit"
          value="PRÓXIMO"
        />
      </div>
    </form>
  );
}

export default StepOne;
