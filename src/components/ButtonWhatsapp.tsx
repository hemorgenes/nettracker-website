import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

export default function ButtonWhatsapp() {
  return (
    <Link href="https://api.whatsapp.com/send/?phone=5511979588987">
      <a target="_blank">
        <button className="fixed p-4 z-40 bottom-8 right-8 flex gap-2 items-center  bg-green-500 hover:mb-1 transition-all text-white  rounded-full shadow-2xl shadow-green-400">
          <BsWhatsapp size={24} />
        </button>
      </a>
    </Link>
  );
}
