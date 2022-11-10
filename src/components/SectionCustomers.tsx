import { memo } from "react";
import { customers } from "../utils/dataCustomers";
import Marquee from "react-fast-marquee";

function SectionCustomers() {
  return (
    <section className=" flex flex-col text-center py-10 md:py-8">
      <span className="text-gray-500 mx-8">
        Algumas empresas que confiam em nosso trabalho
      </span>
      <Marquee className="customer-slide" pauseOnHover>
        {customers.map((item) => (
          <div
            key={item.nameCompany}
            className="customer-slide-item relative w-[150px] md:w-full h-[120px] mb-4 flex justify-center mr-8"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="img-customer"
              width={200}
              height={133}
              src={item.urlImage}
              alt={item.nameCompany}
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}

export const SectionCustomersMemo = memo(SectionCustomers);
