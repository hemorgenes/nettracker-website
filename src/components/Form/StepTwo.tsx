import { Checkbox } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Scroll from "react-scroll";
import { useFormContact } from "../../contexts/DataFormContactContext";
import { usePercentProgressBar } from "../../contexts/StepProgressBarContext";
import { Brand, DataRecived, Model, State } from "../../types/FormContact";
import {
  brandCarts,
  colors,
  handleIncrementYearArray,
  typesSet,
  vehicles,
  yearsCar,
} from "../../utils/dataStepTwoContact";

function StepTwo() {
  const [states, setStates] = useState<State[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [models, setModels] = useState<Model[]>([]);

  const vehicleType = useFormContact((state) => state.vehicleType);
  const setVehicleType = useFormContact((state) => state.setVehicleType);

  const brandVehicle = useFormContact((state) => state.brandVehicle);
  const setBrandVehicle = useFormContact((state) => state.setBrandVehicle);

  const modelVehicle = useFormContact((state) => state.modelVehicle);
  const setModelVehicle = useFormContact((state) => state.setModelVehicle);

  const vehiclePlate = useFormContact((state) => state.vehiclePlate);
  const setVehiclePlate = useFormContact((state) => state.setVehiclePlate);

  const colorVehicle = useFormContact((state) => state.colorVehicle);
  const setColorVehicle = useFormContact((state) => state.setColorVehicle);

  const yearVehicle = useFormContact((state) => state.yearVehicle);
  const setYearVehicle = useFormContact((state) => state.setYearVehicle);

  const hasCart = useFormContact((state) => state.hasCart);
  const setHasCart = useFormContact((state) => state.setHasCart);

  const cartPlate = useFormContact((state) => state.cartPlate);
  const setCartPlate = useFormContact((state) => state.setCartPlate);

  const brandCart = useFormContact((state) => state.brandCart);
  const setBrandCart = useFormContact((state) => state.setBrandCart);

  const typesSetCart = useFormContact((state) => state.typesSetCart);
  const setTypesSetCart = useFormContact((state) => state.setTypesSetCart);

  const nameCustomer = useFormContact((state) => state.nameCustomer);
  const setNameCustomer = useFormContact((state) => state.setNameCustomer);

  const initialsStateCustomer = useFormContact(
    (state) => state.initialsStateCustomer
  );
  const setInitialsStateCustomer = useFormContact(
    (state) => state.setInitialsStateCustomer
  );

  const numberCustomer = useFormContact((state) => state.numberCustomer);
  const setNumberCustomer = useFormContact((state) => state.setNumberCustomer);

  const emailCustomer = useFormContact((state) => state.emailCustomer);
  const setEmailCustomer = useFormContact((state) => state.setEmailCustomer);

  const problemCustomer = useFormContact((state) => state.problemCustomer);
  const setProblemCustomer = useFormContact(
    (state) => state.setProblemCustomer
  );

  let numberWithMask: string;
  let lengthNumber: number;
  //const [numberWithMask, setNumberWithMask] = useState("");

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const dataForm: DataRecived = data;
    setVehiclePlate(dataForm.vehiclePlate.toUpperCase());
    setColorVehicle(dataForm.colorVehicle);
    setNameCustomer(dataForm.nameCustomer);
    setNumberCustomer(numberWithMask);
    setEmailCustomer(dataForm.emailCustomer.toLowerCase());
    setProblemCustomer(dataForm.problemCustomer);
    Scroll.animateScroll.scrollToTop({ duration: 0 });
    setPercent(100);
  };

  //FUNCTION INCREMENT PROGRESS BAR STATUS
  const setPercent = usePercentProgressBar((state) => state.setPersent);

  const getBrands = async (vehicleTypeProp: string) => {
    const response = await fetch(
      `https://parallelum.com.br/fipe/api/v1/${vehicleTypeProp}/marcas`
    );
    const brands = await response.json();
    setBrands(brands);
  };

  const getModels = async (codBrand: string) => {
    if (brandVehicle == undefined || brandVehicle.codigo !== codBrand) {
      const [{ nome }] = brands.filter((item) => item.codigo == codBrand);
      setBrandVehicle({ codigo: codBrand, nome: nome });
    }

    const response = await fetch(
      `https://parallelum.com.br/fipe/api/v1/${vehicleType?.slug}/marcas/${codBrand}/modelos`
    );
    const data = await response.json();

    setModels(data.modelos);
  };

  const addMaskToNumber = (e: any) => {
    if (lengthNumber > e.target.value.length) {
      lengthNumber = e.target.value.length;
      return;
    } else {
      if (e.target.value.length == 1) {
        e.target.value = "(" + e.target.value;
      }
      if (e.target.value.length == 3) {
        e.target.value = e.target.value + ")";
      }
      if (e.target.value.length == 4) {
        e.target.value = e.target.value + " ";
      }
      if (e.target.value.length == 10) {
        e.target.value = e.target.value + "-";
      }
      lengthNumber = e.target.value.length;
    }
    numberWithMask = e.target.value;
  };

  useEffect(() => {
    const getUfs = async () => {
      const response = await fetch(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      );
      const data = await response.json();
      setStates(data);
    };
    getUfs();

    const getBrandsWhenToBackPage = async () => {
      if (process.browser) {
        if (vehicleType !== undefined) {
          await getBrands(vehicleType.slug);
        }
      }
    };
    const getModelsWhenToBackPage = async () => {
      if (process.browser) {
        if (brandVehicle !== undefined) {
          await getModels(brandVehicle.codigo);
        }
      }
    };

    getBrandsWhenToBackPage();
    getModelsWhenToBackPage();
  }, []);

  //FUNCTION TO ADD YEARS BETWEEN 1970 AND CURRENT YEAR
  handleIncrementYearArray();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[97%] md:w-[80%] mt-8 md:mt-0 shadow-xl bg-white py-8"
    >
      <section className="flex flex-col items-center justify-center pb-8">
        <h1 className="font-bold text-xl">Dados do veículo</h1>
      </section>

      <div className="flex w-full flex-col px-8 gap-4">
        {/* MARCAS E MODELOS */}
        <div className="flex flex-col md:flex-row w-full gap-4">
          <section className="flex flex-col gap-2  w-[100%] md:w-[33%]">
            <span className="text-gray-600">Tipo de veículo</span>
            {/* TIPO VEÍCULO */}
            <select
              className="bg-gray-100 transition-all focus:bg-gray-200 hover:bg-gray-200 px-4 py-2 rounded-sm outline-none"
              value={vehicleType?.slug}
              required
              onChange={async (e) => {
                setVehicleType({
                  slug: e.target.value,
                  type:
                    e.target.value == "carros"
                      ? "Carro"
                      : e.target.value == "motos"
                      ? "Moto"
                      : e.target.value == "caminhoes"
                      ? "Caminhão"
                      : "",
                });
                setModelVehicle(undefined);
                setBrandVehicle(undefined);
                getBrands(e.target.value);
              }}
            >
              <option value="" hidden>
                {vehicleType == undefined
                  ? "Escolha o tipo de veículo"
                  : vehicleType.type}
              </option>
              {vehicles?.map((vehicle) => (
                <option key={vehicle.slug} value={vehicle.slug}>
                  {vehicle.type}
                </option>
              ))}
            </select>
          </section>

          <section className="flex flex-col gap-2  w-[100%] md:w-[33%]">
            <span className="text-gray-600">Marca do veículo</span>
            {/* MARCA */}
            <select
              disabled={vehicleType == undefined || vehicles.length == 0}
              required
              value={brandVehicle?.codigo}
              onChange={(e) => {
                setModelVehicle(undefined);
                getModels(e.target.value);
              }}
              className="bg-gray-100 transition-all focus:bg-gray-200 hover:bg-gray-200 px-4 py-2 rounded-sm outline-none"
            >
              <option value="" hidden>
                {brandVehicle == undefined
                  ? "Escolha uma marca"
                  : brandVehicle.nome}
              </option>
              {brands?.map((brand) => (
                <option key={brand.codigo} value={brand.codigo}>
                  {brand.nome}
                </option>
              ))}
            </select>
          </section>

          <section className="flex flex-col gap-2  w-[100%] md:w-[33%]">
            <span className="text-gray-600">Modelo do veículo</span>
            {/* MODELO */}
            <select
              className="bg-gray-100 transition-all focus:bg-gray-200 hover:bg-gray-200 px-4 py-2 rounded-sm outline-none"
              disabled={brandVehicle == undefined || brands.length == 0}
              required
              value={modelVehicle}
              onChange={(e) => setModelVehicle(e.target.value)}
            >
              <option value="" hidden>
                {modelVehicle == undefined ? "Escolha o modelo" : modelVehicle}
              </option>
              {models?.map((model) => (
                <option key={model.codigo} value={model.nome}>
                  {model.nome}
                </option>
              ))}
            </select>
          </section>
        </div>

        <section className="flex flex-col gap-2 w-[100%]">
          <span className="text-gray-600">Placa do Veículo</span>
          <input
            required
            className="bg-gray-100 transition-all focus:bg-gray-200 hover:bg-gray-200 px-4 py-2 rounded-sm outline-none"
            placeholder="Digite aqui a placa do veículo..."
            defaultValue={vehiclePlate}
            {...register("vehiclePlate")}
            type="text"
          />
        </section>

        {/* COR E ANO */}
        <div className="flex flex-col md:flex-row w-full gap-4">
          <section className="flex flex-col gap-2  w-[100%] md:w-[50%]">
            <span className="text-gray-600">Cor do veículo</span>
            <select
              defaultValue={colorVehicle}
              required
              {...register("colorVehicle")}
              className="bg-gray-100 transition-all focus:bg-gray-200 hover:bg-gray-200 px-4 py-2 rounded-sm outline-none"
            >
              <option value="" hidden>
                Escolha a cor
              </option>
              {colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </section>

          <section className="flex flex-col gap-2  w-[100%] md:w-[50%]">
            <span className="text-gray-600">Ano do veículo</span>
            <select
              value={yearVehicle}
              required
              onChange={(e) => setYearVehicle(e.target.value)}
              className="bg-gray-100 transition-all focus:bg-gray-200 hover:bg-gray-200 px-4 py-2 rounded-sm outline-none"
            >
              <option value="" hidden>
                {yearVehicle == "" ? "Escolha o ano" : yearVehicle}
              </option>
              {yearsCar.map((year: number) => (
                <option key={Math.random()} value={year}>
                  {year.toString()}
                </option>
              ))}
            </select>
          </section>
        </div>

        {/* CAMINHÃO E CARRETA */}
        {vehicleType?.type == "Caminhão" && (
          <>
            <div className="flex gap-1 items-center">
              <Checkbox
                aria-label="Com carreta"
                defaultSelected={hasCart == "Sim" ? true : false}
                onChange={(checked: boolean) => {
                  setHasCart(checked ? "Sim" : "Não");
                }}
                color="primary"
                className="mr-2"
              />
              <span>Com carreta</span>
            </div>

            {hasCart == "Sim" && (
              <>
                <section className="flex flex-col gap-2  w-[100%]">
                  <span className="text-gray-600">Placa da carreta</span>
                  <input
                    required
                    value={cartPlate}
                    onChange={(e) => setCartPlate(e.target.value)}
                    className="bg-gray-100 transition-all focus:bg-gray-200 hover:bg-gray-200 px-4 py-2 rounded-sm outline-none"
                    placeholder="Digite aqui a placa da carreta"
                    type="text"
                  />
                </section>

                {/* MARCA CARRETA E TIPO DE CONJUNTO */}

                <div className="flex flex-col md:flex-row w-full gap-4">
                  <section className="flex flex-col gap-2  w-[100%] md:w-[50%]">
                    <span className="text-gray-600">Marca da carreta</span>

                    <select
                      required
                      value={brandCart}
                      onChange={(e) => setBrandCart(e.target.value)}
                      className="bg-gray-100 transition-all focus:bg-gray-200 hover:bg-gray-200 px-4 py-2 rounded-sm outline-none"
                    >
                      <option value="" hidden>
                        Escolha a marca da carreta
                      </option>
                      {brandCarts.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </section>

                  <section className="flex flex-col gap-2  w-[100%] md:w-[50%]">
                    <span className="text-gray-600">Tipo de conjunto</span>
                    <select
                      required
                      value={typesSetCart}
                      onChange={(e) => setTypesSetCart(e.target.value)}
                      className="bg-gray-100 transition-all focus:bg-gray-200 hover:bg-gray-200 px-4 py-2 rounded-sm outline-none"
                    >
                      <option value="" hidden>
                        Escolha o tipo da carreta
                      </option>
                      {typesSet.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </section>
                </div>
              </>
            )}
          </>
        )}
      </div>

      <section className="flex flex-col mt-16 items-center justify-center pb-8">
        <h1 className="font-bold text-xl">Dados do solicitante</h1>
      </section>

      {/* DADOS DO SOLICITANTE */}
      <div className="flex w-full flex-col px-8 gap-4">
        {/* NOME SOLICITANTE E ESTADO */}
        <div className="flex flex-col md:flex-row w-full gap-4">
          <section className="flex flex-col gap-2 w-[100%] md:w-[50%]">
            <span className="text-gray-600">Nome do solicitante</span>
            <input
              required
              defaultValue={nameCustomer}
              className="bg-gray-100 transition-all focus:bg-gray-200 hover:bg-gray-200 px-4 py-2 rounded-sm outline-none"
              placeholder="Ex: Hermogenes Capiotto"
              type="text"
              {...register("nameCustomer")}
            />
          </section>
          <section className="flex flex-col gap-2  w-[100%] md:w-[50%]">
            <span className="text-gray-600">Estado do solicitante</span>
            <select
              required
              value={initialsStateCustomer}
              onChange={(e) => setInitialsStateCustomer(e.target.value)}
              className="bg-gray-100 transition-all focus:bg-gray-200 hover:bg-gray-200 px-4 py-2 rounded-sm outline-none"
            >
              <option value="" hidden>
                {initialsStateCustomer == ""
                  ? "Escolha um estado"
                  : initialsStateCustomer}
              </option>
              {states.map((state) => (
                <option key={state.id} value={state.sigla}>
                  {state.nome} ({state.sigla})
                </option>
              ))}
            </select>
          </section>
        </div>

        {/* TELEFONE E EMAIL */}
        <div className="flex flex-col md:flex-row w-full gap-4">
          <section className="flex flex-col gap-2 w-[100%] md:w-[50%]">
            <span className="text-gray-600">Número</span>
            <input
              required
              defaultValue={numberCustomer}
              className="bg-gray-100 transition-all focus:bg-gray-200 hover:bg-gray-200 px-4 py-2 rounded-sm outline-none"
              placeholder="Ex: (11) 91829-1029"
              type="text"
              maxLength={15}
              pattern="\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}$"
              onChange={(e) => {
                addMaskToNumber(e);
              }}
            />
          </section>

          <section className="flex flex-col gap-2  w-[100%] md:w-[50%]">
            <span className="text-gray-600">Email</span>
            <input
              required
              className="bg-gray-100 transition-all focus:bg-gray-200 hover:bg-gray-200 px-4 py-2 rounded-sm outline-none"
              placeholder="Ex: hermogenes@gmail.com"
              type="email"
              {...register("emailCustomer")}
              defaultValue={emailCustomer}
            />
          </section>
        </div>

        {/* PROBLEMA */}
        <section className="flex flex-col gap-2  w-[100%]">
          <span className="text-gray-600">
            Quais os problemas o equipamento apresenta?
          </span>
          <textarea
            required
            className="bg-gray-100  resize-none transition-all focus:bg-gray-200 hover:bg-gray-200 px-4 py-2 rounded-sm outline-none"
            placeholder="Digite aqui o problema do equipamento"
            {...register("problemCustomer")}
            rows={4}
            defaultValue={problemCustomer}
          />
        </section>

        {/*BOTÃO ENVIAR */}
        <div className="flex gap-2 justify-center md:justify-between">
          <button
            onClick={() => {
              Scroll.animateScroll.scrollToTop({ duration: 0 });
              setPercent(0);
            }}
            className="inline-flex gap-2 w-full md:w-fit justify-center mx-auto md:mx-0  transition-colors border-2 border-solid font-semibold border-blue-600 text-blue-600 px-10 md:px-14 py-4 rounded-sm"
            type="submit"
          >
            <span>VOLTAR</span>
          </button>
          <input
            className="inline-flex gap-2 w-full cursor-pointer md:w-fit justify-center mx-auto md:mx-0  transition-colors border bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 text-white px-10 md:px-14 py-4 rounded-sm"
            type="submit"
            value="PRÓXIMO"
          />
        </div>
      </div>
    </form>
  );
}

export default StepTwo;
