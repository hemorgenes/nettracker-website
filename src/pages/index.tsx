//Components
import Header from "../components/Header";
import { useResponsive } from "../contexts/ResponsiveContext";
import { CardLeft, CardRight } from "../components/CardServices";
import { SectionProducts } from "../components/SectionProducts";
import { SectionCustomersMemo } from "../components/SectionCustomers";
import { Footer } from "../components/Footer";

// React Funcitons and Next utilites
import { useEffect } from "react";
import Image from "next/image";
import Page from "../components/Page";
import { Link } from "react-scroll";

// Modals
import { ModalSalesMemo } from "../Modals/ModalSales";
import { ModalPortalMemo } from "../Modals/ModalPortal";
import { ModalServicesMemo } from "../Modals/ModalServices";
import { ModalAboutMemo } from "../Modals/ModalAbout";
import { ModalRemanufacturingMemo } from "../Modals/ModalRemanufacturing";

//Styles
import { RiDoubleQuotesR } from "react-icons/ri";
import CarouselNuka from "nuka-carousel/lib/carousel";
import ButtonWhatsapp from "../components/ButtonWhatsapp";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

//Data
import { testimonial } from "../utils/dataDepositions";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const Home = () => {
  const setScreen = useResponsive((state) => state.setScreen);
  const screen = useResponsive((state) => state.screen);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreen({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  function CustomPrevButton(props) {
    return (
      <button className="ml-3" onClick={props.previousSlide}>
        <BsFillArrowLeftCircleFill size={32} />
      </button>
    );
  }

  function CustomNextButton(props) {
    return (
      <button className="mr-3" onClick={props.nextSlide}>
        <BsFillArrowRightCircleFill size={32} />
      </button>
    );
  }

  return (
    <Page
      path="/"
      title="Nettracker - Soluções em tecnologia"
      description="Fundada em 2016, a Nettracker surgiu através da visão de compreender as reais necessidades do mercado de segurança veicular com o uso dos rastreadores e eletrônicos."
    >
      <Header />
      <main className="my-main-top-0">
        <ButtonWhatsapp />

        {/* INTRODUCTION */}
        <section className="w-full h-screen overflow-hidden flex items-center justify-center">
          <Image
            placeholder="blur"
            blurDataURL="/background.webp"
            className="absolute top-0 left-0"
            layout="fill"
            objectFit="cover"
            src={
              screen.width > 768
                ? "/background.webp"
                : "/background-mobile.webp"
            }
            alt="Foto de fundo Nettracker"
          />
          <div className="z-10 text-gray-50 text-center">
            <h1 className="font-bold text-3xl">Nettracker</h1>
            <span className="block text-gray-300 mt-2 px-4">
              Uma das maiores empresas de rastreadores do Brasil
            </span>
            <Link
              to="my-scroll-portal"
              href="/"
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button className="border-gray-50 px-20 py-3 mt-4 border-solid hover:bg-gray-50 hover:text-zinc-800 transition-colors">
                SAIBA MAIS
              </button>
            </Link>
          </div>
        </section>

        {/* APP AND PORTAL */}
        <section className="my-scroll-portal h-screen px-7 md:px-16 py-16 md:py-20 flex flex-col md:flex-row items-center justify-center">
          <div className="text-zinc-800 max-w-[500px] order-last md:order-first text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-2">
              Temos um portal feito especialmente para você!
            </h2>
            <span className="text-[15px] md:text-base block text-gray-500 font-regular">
              Consulte agora seus veículos em tempo real, além de ter gráficos
              da situação atual dos rastreadores
            </span>
            <ModalPortalMemo />
          </div>

          <Image
            className="image-portal order-first md:order-last"
            width={607}
            height={400}
            src="/desktop-and-mobile.webp"
            alt="Aplicativo da Nettracker e Portal"
          />
        </section>

        {/* ABOUT US */}
        <section className="image-about-us flex justify-between 2xl:justify-center 2xl:bg-transparent items-center w-full flex-col lg:flex-row bg-white">
          <Image
            placeholder="blur"
            blurDataURL="/nettracker-aboutus.webp"
            src="/nettracker-aboutus.webp"
            className="image-about-scroll"
            width={660}
            height={360}
            objectFit="cover"
            alt="Foto da empresa Nettracker"
          />

          <div className=" lg:max-w-[50%]  pl-8 pr-8 lg:pr-20 py-8 lg:py-4">
            <h2 className="text-2xl text-zinc-800 font-semibold mb-2 mt-4">
              Sobre nós
            </h2>
            <span className="block text-[15px] md:text-base text-gray-700 font-regular text-left">
              A Nettracker surgiu através da visão de compreender as reais
              necessidades do mercado de segurança veicular com o uso dos
              rastreadores e eletrônicos. Baseado nos principais requisitos para
              desenvolver uma marca sólida, a “Rede de Rastreadores”, traz o
              conceito ideal para um mercado mais justo. Tudo isso, graças ao
              fundador Hermogenes Capiotto que se engajou para estruturar uma
              companhia com o melhor atendimento, os melhores serviços e peças
              que poderia ofertar...
            </span>
            <ModalAboutMemo />
          </div>
        </section>

        {/* SERVICES*/}
        <section className="my-services-scroll w-full lg:px-48">
          <div className="text-center pt-12 pb-4">
            <h2 className="text-2xl font-semibold mb-1 text-zinc-800">
              Soluções inteligentes
            </h2>
            <span className="block text-gray-500 font-regular text-[15px] md:text-base">
              Melhor performance para seu negócio
            </span>
          </div>

          <CardLeft
            title={"Serviços prestados"}
            image="/servicos.webp"
            description={
              "Trabalhamos com a manutenção, instalação e desinstalação de rastreadores..."
            }
          >
            <ModalServicesMemo />
          </CardLeft>
          <hr className="h-[2px] w-full bg-gray-200 md:hidden mb-24" />

          <CardRight
            title={"Venda de peças"}
            image="/vendas.webp"
            description={
              "Fornecemos aos nossos clientes vendas de peças como insumos, travas, chicotes, engates, desengates e etc."
            }
          >
            <ModalSalesMemo />
          </CardRight>
          <hr className="h-[2px] w-full bg-gray-200 md:hidden mb-24" />

          <CardLeft
            lastItem="lastItem"
            title={"Remanufatura"}
            image="/remanufatura.webp"
            description={
              "Fazemos a remanufatura de travas, módulos, antenas, bloqueios e etc."
            }
          >
            <ModalRemanufacturingMemo />
          </CardLeft>
        </section>

        {/* PRODUCTS */}
        <SectionProducts />

        <hr className="h-[2px] w-full bg-gray-200 md:hidden mb-16" />

        {/* SPONSORS */}
        <section className="relative w-full  h-[500px] md:h-[300px] lg:h-[550px]  mt-16  flex flex-col items-center text-center text-white mb-20">
          <h2 className="px-4 text-gray-800 uppercase text-lg font-bold tracking-widest">
            Patrocinadora oficial de motovelocidade
          </h2>
          <div className="w-[90%] md:w-[80%]">
            <CarouselNuka
              renderCenterLeftControls={({ previousSlide }) => (
                <CustomPrevButton previousSlide={previousSlide} />
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <CustomNextButton nextSlide={nextSlide} />
              )}
              cellSpacing={10}
              slidesToShow={screen.width < 768 ? 1 : 2}
            >
              <div className="relative w-[100%] h-[400px] md:h-[500px] my-16 shadow-xl">
                <Image
                  src="/sponsers/img1.webp"
                  objectFit="cover"
                  layout="fill"
                  alt="teste"
                />
              </div>
              <div className="relative w-[100%] h-[400px] md:h-[500px] my-16 shadow-xl">
                <Image
                  src="/sponsers/img2.webp"
                  objectFit="cover"
                  layout="fill"
                  alt="teste"
                />
              </div>
              <div className="relative w-[100%] h-[400px] md:h-[500px] my-16 shadow-xl">
                <Image
                  src="/sponsers/img3.webp"
                  objectFit="cover"
                  layout="fill"
                  alt="teste"
                />
              </div>
            </CarouselNuka>
          </div>
        </section>

        <hr className="h-[2px] w-full bg-gray-200 md:hidden mt-24" />

        {/* CUSTOMERS */}
        <SectionCustomersMemo />

        <hr className="h-[2px] w-full bg-gray-200 md:hidden" />

        {/* DEPOSITIONS */}
        <section>
          <div className="text-center mt-8 pb-8 md:mt-8 md:pb-10">
            <h2 className="text-2xl font-semibold mb-1 text-zinc-800">
              Depoimentos
            </h2>
            <span className="block text-gray-500 font-regular mx-8">
              Veja o que as empresas estão falando da Nettracker
            </span>
          </div>

          <div className="linear-gradient-background-2 py-16 md:py-20 px-4">
            <CarouselNuka
              slidesToShow={screen.width < 768 ? 1 : 3}
              className="my-carousel w-[100%]"
            >
              {testimonial.map((item) => (
                <div
                  key={item.id}
                  className="my-slide-depositions min-h-[250px]  bg-white relative rounded-sm p-8 mx-4"
                >
                  <div className="flex flex-col">
                    <span className="text-base mb-3 font-semibold text-zinc-700 depositions-line-height">
                      {item.name}
                    </span>
                    <span className="text-sm font-light text-gray-500">
                      {item.office}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mb-6 mt-2 depositions-line-height">
                    {item.stars.map((star) =>
                      star.isStarFill ? (
                        <AiFillStar key={star.id} color="#ffc400" size={16} />
                      ) : (
                        <AiOutlineStar
                          key={star.id}
                          color="#ffc400"
                          size={16}
                        />
                      )
                    )}
                  </div>

                  <span className="text-gray-600">
                    <RiDoubleQuotesR size={24} className="icon-quotes" />
                    {item.deposition}
                  </span>
                </div>
              ))}
            </CarouselNuka>
          </div>
        </section>

        {/* LOCALIZATION */}
        <section>
          <div className="flex flex-col items-center text-center mt-12 pb-12 md:mt-10 md:pb-10">
            <h2 className="text-2xl font-semibold mx-4 mb-1 text-zinc-800">
              Onde estamos?
            </h2>
            <span className="block text-[15px] mx-2 md:text-base text-gray-500 font-light max-w-[500px] px-4">
              Além de termos diversas empresas espalhadas pelo Brasil, temos
              nossa sede em São Paulo - SP
            </span>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1827.7584183170727!2d-46.74254957507781!3d-23.621655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57b9bf08a0c3%3A0x588934c1fcc138f5!2sRua%20Dr.%20Luiz%20Migliano%2C%201986%20-%201014%20-%20Morumbi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005711-001!5e0!3m2!1spt-BR!2sbr!4v1662467962063!5m2!1spt-BR!2sbr"
            className="mx-auto mb-16 w-[85%] md:w-[55%]"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </main>
      <Footer />
    </Page>
  );
};

export default Home;
