import React, { useEffect, useRef, useState } from "react";
import { BlackLogoSVG, WhiteLogoSVG } from "./LogoSVG";
import { HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-scroll";
import LinkNext from "next/link";
import { useHeader } from "../contexts/DisabledHeaderContext";

export default function Header() {
  const header: any = useRef();
  const [hasScroll, setHasScroll] = useState<boolean>(false);
  const [clickMenu, setClickMenu] = useState<boolean>(false);

  const disabled = useHeader((state) => state.disabled);
  const setDisabled = useHeader((state) => state.setDisabled);

  function changeHeaderWhenScroll() {
    const heightHeader = header?.current?.clientHeight;
    if (scrollY >= heightHeader) {
      setHasScroll(true);
    } else {
      setHasScroll(false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setDisabled(false);
    }, 700);
  }, [disabled]);

  if (process.browser) {
    window.addEventListener("scroll", changeHeaderWhenScroll);
  }

  return (
    <header
      ref={header}
      className={`fixed top-0 left-0 ${
        hasScroll ? "bg-white" : "bg-transparent"
      } w-full shadow z-50 transition-colors`}
    >
      <div
        className={`container m-auto flex justify-between items-center ${
          !hasScroll ? "text-gray-50" : "text-zinc-800"
        }`}
      >
        {!hasScroll ? <WhiteLogoSVG /> : <BlackLogoSVG />}
        <nav>
          <ul className="hidden mr-12 md:flex gap-2 items-center text-base cursor-pointer ul-mystyles">
            {/* HOME */}
            <Link
              href="/"
              to="my-main-top-0"
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="py-2 text-sm font-light tracking-wider px-3 rounded hover:bg-opacity-20 hover:bg-black transition-colors">
                Inicio
              </li>
            </Link>

            {/* ABOUT US */}
            <Link
              href="/"
              to="image-about-scroll"
              offset={-70}
              smooth={true}
              duration={500}
            >
              <li className="py-2 text-sm font-light tracking-wider px-3 rounded hover:bg-opacity-20 hover:bg-black transition-colors">
                Sobre nós
              </li>
            </Link>

            {/* SERVICES */}
            <Link
              href="/"
              to="my-services-scroll"
              offset={-70}
              smooth={true}
              duration={500}
            >
              <li className="py-2 text-sm font-light tracking-wider px-3 rounded hover:bg-opacity-20 hover:bg-black transition-colors">
                Serviços
              </li>
            </Link>

            {/* PRODUCTS */}
            <Link
              href="/"
              to="products-scroll"
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className="py-2 text-sm font-light tracking-wider px-3 rounded hover:bg-opacity-20 hover:bg-black transition-colors">
                Produtos
              </li>
            </Link>

            {/* CONTACT */}
            <LinkNext href="/contact">
              <li className="py-2 text-sm font-light tracking-wider px-3 rounded hover:bg-opacity-20 hover:bg-black transition-colors">
                Agendamento
              </li>
            </LinkNext>
            <LinkNext href="http://appnettracker.com.br">
              <a target="_blank">
                <li
                  className={`py-2 px-3 text-sm rounded-full hover:bg-opacity-90 ${
                    hasScroll ? "bg-black text-white" : "bg-white text-black"
                  } transition-colors`}
                >
                  Área do Cliente
                </li>
              </a>
            </LinkNext>
          </ul>
        </nav>

        {/* BUTTON MENU MOBILE */}
        <div
          className={`${disabled ? "block" : "hidden"} z-50 absolute
           h-full w-full`}
        ></div>

        <button className={`block md:hidden py-3 px-4 mx-2 rounded group`}>
          <HiOutlineMenu
            onClick={() => setClickMenu(true)}
            size={28}
            color={!hasScroll ? "#fff" : "#1a1a1a"}
          />
          <div
            className={`absolute top-0 -right-full bg-zinc-800 h-screen w-8/12 shadow-lg ${
              clickMenu && "group-hover:right-0"
            } transition-all duration-[0] ease-in text-white`}
          >
            <nav>
              <ul className="flex  flex-col w-full text-base pt-10 z-20">
                {/* HOME */}
                <Link to="my-main-top-0" smooth={true} href="/" duration={500}>
                  <li
                    onClick={() => {
                      setClickMenu(false);
                    }}
                    className="py-4 px-8 w-full text-left"
                  >
                    Inicio
                  </li>
                </Link>

                {/* ABOUT US */}
                <Link
                  href="/"
                  to="image-about-scroll"
                  offset={-70}
                  smooth={true}
                  duration={500}
                >
                  <li
                    onClick={() => {
                      setClickMenu(false);
                    }}
                    className="py-4 px-8 w-full rounded text-left"
                  >
                    Sobre nós
                  </li>
                </Link>

                {/* SERVICES*/}
                <Link
                  href="/"
                  to="my-services-scroll"
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <li
                    onClick={() => {
                      setClickMenu(false);
                    }}
                    className="py-4 px-8 w-full rounded text-left"
                  >
                    Serviços
                  </li>
                </Link>

                {/* PRODUCTS */}

                <Link
                  href="/"
                  to="products-scroll"
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <li
                    onClick={() => {
                      setClickMenu(false);
                    }}
                    className="py-4 px-8 w-full rounded text-left"
                  >
                    Produtos
                  </li>
                </Link>
                {/* CONTACT */}
                <LinkNext href="/contact">
                  <li className="py-4 px-8 w-full rounded text-left">
                    Agendamento
                  </li>
                </LinkNext>
                <LinkNext href="http://appnettracker.com.br">
                  <a target="_blank">
                    <li className="py-4 px-8 w-full rounded text-left">
                      Área do Cliente
                    </li>
                  </a>
                </LinkNext>
              </ul>
            </nav>
          </div>
        </button>
      </div>
    </header>
  );
}
