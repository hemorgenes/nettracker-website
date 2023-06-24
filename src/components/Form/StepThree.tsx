import React, { useState } from "react";
import Scroll from "react-scroll";
import { BsWhatsapp } from "react-icons/bs";
import { usePercentProgressBar } from "../../contexts/StepProgressBarContext";
import { useFormContact } from "../../contexts/DataFormContactContext";
import emailjs from "@emailjs/browser";
import ReactLoading from "react-loading";
import { toast, Toaster } from "react-hot-toast";

function StepThree() {
  const setPercent = usePercentProgressBar((state) => state.setPersent);
  const [isDisabled, setIsDisabled] = useState(false);

  const date = useFormContact((state) => state.date);
  const nameCompany = useFormContact((state) => state.nameCompany);
  const address = useFormContact((state) => state.address);
  const city = useFormContact((state) => state.city);
  const initials = useFormContact((state) => state.initials);
  const technology = useFormContact((state) => state.technology);
  const vehicleIsBlocked = useFormContact((state) => state.vehicleIsBlocked);
  const escortInLocal = useFormContact((state) => state.escortInLocal);
  const vehicleType = useFormContact((state) => state.vehicleType);
  const brandVehicle = useFormContact((state) => state.brandVehicle);
  const modelVehicle = useFormContact((state) => state.modelVehicle);
  const vehiclePlate = useFormContact((state) => state.vehiclePlate);
  const colorVehicle = useFormContact((state) => state.colorVehicle);
  const yearVehicle = useFormContact((state) => state.yearVehicle);
  const hasCart = useFormContact((state) => state.hasCart);
  const cartPlate = useFormContact((state) => state.cartPlate);
  const brandCart = useFormContact((state) => state.brandCart);
  const typesSetCart = useFormContact((state) => state.typesSetCart);
  const nameCustomer = useFormContact((state) => state.nameCustomer);
  const initialsStateCustomer = useFormContact(
    (state) => state.initialsStateCustomer
  );
  const numberCustomer = useFormContact((state) => state.numberCustomer);
  const emailCustomer = useFormContact((state) => state.emailCustomer);
  const problemCustomer = useFormContact((state) => state.problemCustomer);

  const setHasCart = useFormContact((state) => state.setHasCart);
  const setCartPlate = useFormContact((state) => state.setCartPlate);
  const setTypesSetCart = useFormContact((state) => state.setTypesSetCart);
  const setBrandCart = useFormContact((state) => state.setBrandCart);

  const handleSendMessage = async () => {
    //After verify if all texts no are empty, convert date USA to Date BR
    setIsDisabled(true);
    const data_brasileira = date.split("-").reverse().join("/");

    if (vehicleType?.slug !== "caminhoes") {
      setHasCart("Não");
      setCartPlate("");
      setBrandCart("");
      setTypesSetCart("");
    }

    //Save content message in an CONSTANT
    const text = `
*Data do atendimento:* ${data_brasileira}
*Nome da empresa:* ${nameCompany}
      
*Cidade:* ${city}
*Estado:* ${initials}
*Endereço do agendamento:* ${address}
      
*Tecnologia:* ${technology}
      
*Veículo bloqueado:* ${vehicleIsBlocked}
*Escolta no Local:* ${escortInLocal}

----------------------------------------

DADOS DO VEÍCULO

*Tipo:* ${vehicleType?.type}
*Marca:* ${brandVehicle?.nome}
*Modelo:* ${modelVehicle}
*Placa:* ${vehiclePlate}
*Cor:* ${colorVehicle}
*Ano:* ${yearVehicle}

${vehicleType?.type == "Caminhão" ? `*Com carreta:* ${hasCart}` : ""}
${
  hasCart == "Sim"
    ? `*Placa da carreta:* ${cartPlate}
*Marca da carreta:* ${brandCart}
*Tipo de conjunto:* ${typesSetCart}
`
    : ""
}
------------------------------------------

DADOS DO SOLICITANTE

*Nome:* ${nameCustomer}
*Estado:* ${initialsStateCustomer}
*Número:* ${numberCustomer}
*Email:* ${emailCustomer}
*Problema:* ${problemCustomer}
`;

    //Transform the text to a URL texts
    const textEncoded = encodeURI(text);

    const templateParams = {
      from_name: emailCustomer,
      date: data_brasileira,
      nameCompany: nameCompany,
      address: address,
      city: city,
      initials: initials,
      technology: technology,
      vehicleIsBlocked: vehicleIsBlocked,
      escortInLocal: escortInLocal,
      vehicleType: vehicleType?.type,
      brandVehicle: brandVehicle?.nome,
      modelVehicle: modelVehicle,
      vehiclePlate: vehiclePlate,
      colorVehicle: colorVehicle,
      yearVehicle: yearVehicle,
      hasCart: hasCart,
      cartPlate: cartPlate,
      brandCart: brandCart,
      typesSetCart: typesSetCart,
      nameCustomer: nameCustomer,
      initialsStateCustomer: initialsStateCustomer,
      numberCustomer: numberCustomer,
      emailCustomer: emailCustomer,
      problemCustomer: problemCustomer,
    };

    toast.error(
      "Change DNS servers: Your ISP's DNS server might be experiencing problems. You can try using a different DNS server to see if that resolves the issue. Popular public DNS servers include Google DNS (8.8.8.8 and 8.8.4.4)"
    );
    setIsDisabled(false);
    return;
    window.location.href = `https://wa.me/5511986938805?text=${textEncoded}`;
    // await emailjs
    //   .send(
    //     "service_mehokpp",
    //     "template_asiyjs8",
    //     templateParams,
    //     `${process.env.NEXT_PUBLIC_KEY_EMAIL}`
    //   )
    //   .then(
    //     () => {
    //       setIsDisabled(false);
    //     },
    //     (err) => console.log(err)
    //   );

    // window.location.href = `https://wa.me/5511986938805?text=${textEncoded}`;
  };

  return (
    <div className="flex flex-col gap-4 w-[97%] items-center mt-8 md:mt-0 justify-center md:w-[80%] shadow-xl bg-white py-8">
      <Toaster />
      <BsWhatsapp size={64} color="#22c55e" />
      <span className="text-gray-500 max-w-[350px] md:max-w-[484px] text-center">
        Ao clicar em Enviar, sua resposta será enviada para o nosso email e você
        será redirecionado para o Whatsapp com todas as informações preenchidas.
        Desta forma o seu atendimento ficará mais rápido :)
      </span>
      <div className="flex gap-2 w-full px-3 md:px-8 items-center  justify-center md:justify-between">
        <button
          onClick={() => {
            Scroll.animateScroll.scrollToTop({ duration: 0 });
            setPercent(50);
          }}
          className="inline-flex gap-2 w-full md:w-fit justify-center mx-auto md:mx-0  transition-colors border-2 border-solid font-semibold border-blue-600 text-blue-600 px-10 md:px-14 py-4 rounded-sm"
          type="submit"
        >
          <span>VOLTAR</span>
        </button>
        <button
          disabled={isDisabled}
          onClick={handleSendMessage}
          className="inline-flex disabled:placeholder-opacity-90 disabled:cursor-not-allowed gap-2 w-full md:w-fit justify-center mx-auto md:mx-0 border-solid border-green-500 bg-green-500 hover:bg-green-600 hover:border-green-600 transition-colors text-white px-10 md:px-14 py-4 rounded-sm"
          type="submit"
        >
          {isDisabled ? (
            <ReactLoading
              type="spinningBubbles"
              color="#fff"
              height={20}
              width={20}
            />
          ) : (
            <span>ENVIAR</span>
          )}
        </button>
      </div>
    </div>
  );
}

export default StepThree;
