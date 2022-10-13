import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import LinkNext from "next/link";
import { Link } from "react-scroll";
import { memo } from "react";

function FooterComponent() {
  return (
    <footer className="bg-zinc-800 flex flex-col items-center justify-center pt-12">
      <div className="flex gap-4">
        <LinkNext href="https://api.whatsapp.com/send/?phone=5511979588987">
          <a target="_blank">
            <div className="rounded-full p-4 text-zinc-800 bg-white cursor-pointer hover:bg-green-500 hover:text-white transition-all">
              <BsWhatsapp size={20} />
            </div>
          </a>
        </LinkNext>
        <LinkNext href="https://www.facebook.com/nettrackerrastreadores">
          <a target="_blank">
            <div className="rounded-full p-4 bg-white cursor-pointer hover:bg-cyan-600 hover:text-white transition-all">
              <FiFacebook size={22} />
            </div>
          </a>
        </LinkNext>
        <LinkNext href="https://www.instagram.com/nettracker/?hl=pt-br">
          <a target="_blank">
            <div className="rounded-full p-4 bg-white cursor-pointer hover:bg-pink-600 hover:text-white transition-all">
              <BsInstagram size={20} />
            </div>
          </a>
        </LinkNext>
        <LinkNext href="https://twitter.com/NettrackerWe">
          <a target="_blank">
            <div className="rounded-full p-4 bg-white cursor-pointer hover:bg-teal-500 hover:text-white transition-all">
              <FiTwitter size={20} />
            </div>
          </a>
        </LinkNext>
      </div>

      <div className="flex items-center py-4 text-white gap-3 font-light underline">
        <Link
          href="/"
          to="my-main-top-0"
          smooth={true}
          offset={-70}
          duration={500}
        >
          <p className="cursor-pointer">Inicio</p>
        </Link>{" "}
        <hr className="rounded-full bg-gray-500 w-1 h-1" />
        <Link
          href="/"
          to="my-services-scroll"
          smooth={true}
          offset={-70}
          duration={500}
        >
          <p className="cursor-pointer">Serviços</p>
        </Link>
        <hr className="rounded-full bg-gray-500 w-1 h-1" />
        <Link
          href="/"
          to="my-background-products"
          smooth={true}
          offset={-70}
          duration={500}
        >
          <p className="cursor-pointer">Produtos</p>
        </Link>
      </div>

      <div className="text-center py-4 mt-8 w-full px-4 bg-zinc-900 font-light text-zinc-400">
        <span>
          Nettracker Soluções em Tecnologia 2022 • © Todos os direitos
          reservados
        </span>
      </div>
    </footer>
  );
}

export const Footer = memo(FooterComponent);
