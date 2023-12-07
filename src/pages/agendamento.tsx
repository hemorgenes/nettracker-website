import Link from "next/link";
import { ProgressBar, Step } from "react-step-progress-bar";
import { BsArrowLeft } from "react-icons/bs";
import { useState } from "react";
import "react-step-progress-bar/styles.css";
import Page from "../components/Page";
import { FaCar, FaUser } from "react-icons/fa";
import Step1 from "../components/Form2/Step1";
import Step2 from "../components/Form2/Step2";
import { Toaster } from "react-hot-toast";

export default function Agendamento() {
  const [percent, setPercent] = useState(0);

  const isStep1 = percent <= 50;
  const isStep2 = percent > 50;
  return (
    <Page
      path="/agendamento"
      title="Nettracker - Agendamento Fácil"
      description="Faça seu agendamento agora mesmo através do nosso formulário, você pode contatar nossos serviços"
    >
      <Toaster />
      <main className="min-h-screen flex flex-col items-center justify-center py-8 bg-gray-50">
        <Link href="/">
          <div className="absolute flex gap-2 items-center top-8 left-8 cursor-pointer z-50">
            <BsArrowLeft size={18} />
            <span className="hidden md:block">Voltar</span>
          </div>
        </Link>

        <div className="mx-auto w-[50%]  h-24 md:h-32 pt-8 text-sm">
          {" "}
          <ProgressBar
            percent={percent}
            filledBackground="linear-gradient(to right, #E0F0F2, #3063c2)"
          >
            <Step transition="scale">
              {({ accomplished }: any) => (
                <div
                  className="number-circle--wrapper"
                  style={{ filter: `grayscale(${accomplished ? 0 : 100}%)` }}
                >
                  <div className="number-circle">
                    <FaCar />
                  </div>
                  <span className="text-xs lg:text-base">Agendamento</span>
                </div>
              )}
            </Step>
            <Step transition="scale">
              {({ accomplished }: any) => (
                <div
                  className="number-circle--wrapper"
                  style={{ filter: `grayscale(${accomplished ? 0 : 100}%)` }}
                >
                  <div className="number-circle mt-7 md:mt-0">
                    <FaUser />
                  </div>

                  <span className="text-xs text-center lg:text-base">
                    Informações pessoais
                  </span>
                </div>
              )}
            </Step>
          </ProgressBar>
        </div>
        <div className="max-w-[1200px] px-8 w-full">
          {isStep1 && <Step1 setStep={setPercent} />}
          {isStep2 && <Step2 setStep={setPercent} />}
        </div>
      </main>
    </Page>
  );
}
