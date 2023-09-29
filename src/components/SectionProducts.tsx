import React, { useEffect, ReactNode } from "react";
import CarouselNuka from "nuka-carousel/lib/carousel";
import Link from "next/link";
import Image from "next/image";
import {
  BsChevronLeft,
  BsChevronRight,
  BsWhatsapp,
} from "react-icons/bs";
import { useResponsive } from "../contexts/ResponsiveContext";
import { products } from "../utils/dataProducts";

export function SectionProducts() {
  const setScreen = useResponsive((state) => state.setScreen);
  const screen = useResponsive((state) => state.screen);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreen({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  function CustomPrevButton(props) {
    return (
      <button className="ml-7" onClick={props.previousSlide}>
        <BsChevronLeft color="#fff" size={38} />
      </button>
    );
  }

  function CustomNextButton(props) {
    return (
      <button className="mr-7"  onClick={props.nextSlide}>
        <BsChevronRight color="#fff" size={38} />
      </button>
    );
  }

  return (
    <section className="linear-gradient-background-2 products-scroll w-full text-center py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-1 text-white">
          Nossos produtos
        </h2>
        <span className="block text-gray-300 font-regular px-8">
          Confira nossos produtos mais vendidos!
        </span>
      </div>
      <CarouselNuka
        renderCenterLeftControls={({ previousSlide }) => (
          <CustomPrevButton previousSlide={previousSlide} />
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <CustomNextButton nextSlide={nextSlide} />
        )}
        slidesToShow={screen.width < 768 ? 1 : 3}
      >
        {products.map((item, index) => (
          <div key={index} className="products-item mx-8 md:mx-4 text-center">
            <div className="relative mt-4 w-[200px] h-[200px] overflow-visible">
              <Image
                objectFit="cover"
                className="rounded-md"
                width={200}
                height={200}
                style={{
                  overflow: "visible",
                }}
                src={item.urlImage}
                alt={item.title}
              />
            </div>
            <span className="text-white font-light pb-8 mt-2">{item.title}</span>
          </div>
        ))}
      </CarouselNuka>

      <Link href="https://api.whatsapp.com/send/?phone=5511979588987">
        <a target="_blank">
          <button className="flex gap-2 items-center mx-auto mt-8 bg-green-500 hover:bg-green-600 transition-colors text-white px-14 py-4 rounded-full">
            <BsWhatsapp size={24} />
            <span>Entrar em contato</span>
          </button>
        </a>
      </Link>
    </section>
  );
}
