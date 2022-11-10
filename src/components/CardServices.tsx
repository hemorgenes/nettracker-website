import Image from "next/image";
import React, { ReactNode } from "react";

interface CardProps extends React.HTMLProps<HTMLDivElement> {
  title: string;
  image: string;
  description: string;
  lastItem?: string;
  children: ReactNode;
}

export function CardLeft({
  title,
  description,
  image,
  lastItem,
  children,
}: CardProps) {
  return (
    <article
      className={`${lastItem} flex flex-col md:flex-row justify-between 2xl:justify-center items-center mt-16 mb-16 md:mb-32`}
    >
      <div className="relative w-[85%] md:w-[460px] h-[190px] md:h-[272px] md:mr-10 -mt-8">
        <Image
          className="z-20"
          src={image}
          layout="fill"
          alt={title}
          objectFit="cover"
        />
        <div className="absolute -bottom-9 -left-9 linear-gradient-background w-full h-full"></div>
      </div>

      <div className="max-w-[500px] mt-24 px-8 text-center md:mt-0 md:px-0 md:text-left">
        <h2 className="text-2xl font-semibold mb-2 text-zinc-800">{title}</h2>
        <span className="block text-[15px] md:text-base text-gray-500 font-regular">
          {description}
        </span>
        {children}
      </div>
    </article>
  );
}

export function CardRight({ title, description, image, children }: CardProps) {
  return (
    <article className="flex flex-col md:flex-row justify-between 2xl:justify-center items-center mb-16 md:mb-32">
      <div className="max-w-[500px] mt-16 px-8 text-center md:mt-0 md:px-10 lg:px-0 md:text-left order-last md:order-first">
        <h2 className="text-2xl font-semibold mb-2 text-zinc-800">{title}</h2>
        <span className="block text-[15px] md:text-base text-gray-500 font-regular">
          {description}
        </span>
        {children}
      </div>

      <div className="relative w-[85%] md:w-[460px]  h-[190px] md:h-[272px] md:ml-10 -mt-8 order-first md:order-last">
        <Image
          className="z-20"
          src={image}
          layout="fill"
          alt={title}
          objectFit="cover"
        />
        <div className=" absolute -bottom-9 -left-9 linear-gradient-background w-[100%] h-full"></div>
      </div>
    </article>
  );
}
