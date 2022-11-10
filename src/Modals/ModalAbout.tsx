import React, { memo } from "react";
import { Modal, useModal, Button } from "@nextui-org/react";
import { BlackLogoSVG } from "../components/LogoSVG";
import { GrClose } from "react-icons/gr";
import { useHeader } from "../contexts/DisabledHeaderContext";

function ModalAbout() {
  const { setVisible, bindings } = useModal();
  const setDisabled = useHeader((state) => state.setDisabled);

  return (
    <div>
      <button
        onClick={() => setVisible(true)}
        className="text-lg md:text-base w-full md:w-fit px-20 mb-4 py-3 mt-4 text-center bg-zinc-800 hover:bg-zinc-900 text-gray-50 transition-colors"
      >
        SAIBA MAIS
      </button>
      <Modal
        className="cursor-default"
        scroll
        fullScreen
        animated={true}
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header className="flex flex-col">
          <div className="flex w-full items-center justify-between">
            <BlackLogoSVG />
            <Button
              auto
              flat
              color="error"
              onClick={() => {
                setDisabled(true);
                setVisible(false);
              }}
            >
              <GrClose color="#ffffff" />
            </Button>
          </div>
        </Modal.Header>
        <Modal.Body>
          <h2 className="font-semibold text-lg text-zinc-700 about-us-title-modal">
            Nossa história
          </h2>
          <span className="text-gray-700">
            Fundada em 2016, a Nettracker surgiu através da visão de compreender
            as reais necessidades do mercado de segurança veicular com o uso dos
            rastreadores e eletrônicos. Baseado nos principais requisitos para
            desenvolver uma marca sólida, a “Rede de Rastreadores”, traz o
            conceito ideal para um mercado mais justo; tudo isso, graças ao
            fundador Hermogenes Capiotto que se engajou para estruturar uma
            companhia com o melhor atendimento, os melhores serviços e peças que
            poderia ofertar.
          </span>
          <h2 className="font-semibold text-lg text-zinc-700 about-us-title-modal">
            Empresa
          </h2>
          <span className="text-gray-700">
            A empresa está localizada em Morumbi - São Paulo, conta com uma
            infraestrutura completa, laboratório próprio para remanufatura,
            conserto e produção de peças de rastreadores, e uma equipe técnica
            altamente capacitada com cobertura nacional para atender cidades de
            norte ao sul do País. Prezamos por oferecer excelente
            custo-benefício, sem perder a nossa tradição e simplicidade,
            trabalhando com ética, compromisso e agilidade. Também atuamos com
            as melhores marcas de rastreadores do mercado, capazes de oferecer
            qualidade e solução para o mercado logístico. Atualmente, somamos
            mais de 8 mil atendimentos em apenas um único ano e 40 mil em toda
            sua história, trazendo consigo mais experiência a cada dia e
            principalmente, a prática mais segura para viabilizar os custos de
            segurança para as suas frotas e transportadora.
          </span>
          <h2 className="font-semibold text-lg text-zinc-700 about-us-title-modal">
            Missão
          </h2>
          <span className="text-gray-700">
            Tornar as operações logísticas mais eficientes e seguras com o
            rastreamento veicular.
          </span>
          <h2 className="font-semibold text-lg text-zinc-700 about-us-title-modal">
            Visão
          </h2>
          <span className="text-gray-700">
            Ser reconhecida como a melhor opção por clientes, colaboradores,
            comunidade e parceiros, pela qualidade na prestação de serviços e
            relacionamento.
          </span>
          <h2 className="font-semibold text-lg text-zinc-700 my-title-modal">
            Valores
          </h2>
          <span className=" text-gray-700">
            Ética, Transparência, Compromisso com o Cliente, Eficiência no
            Atendimento e Agilidade no Serviço.
          </span>
        </Modal.Body>
        <Modal.Footer className="h-16"></Modal.Footer>
      </Modal>
    </div>
  );
}

export const ModalAboutMemo = memo(ModalAbout);
