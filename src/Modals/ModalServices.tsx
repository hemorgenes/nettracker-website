import React, { memo } from "react";
import { Modal, useModal, Button } from "@nextui-org/react";
import { AiOutlineCheckCircle } from "react-icons/ai";

function ModalServices() {
  const { setVisible, bindings } = useModal();

  return (
    <div>
      <button
        onClick={() => setVisible(true)}
        className="w-full md:w-fit px-20 py-3 mt-4 text-center bg-zinc-800 hover:bg-zinc-900 text-gray-50 transition-colors"
      >
        SAIBA MAIS
      </button>
      <Modal
        animated={true}
        scroll
        className="cursor-default"
        width="700px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <h1 className="text-xl font-bold pt-2 text-zinc-700">
            NOSSOS PRINCIPAIS SERVIÇOS E BENEFÍCIOS
          </h1>
        </Modal.Header>
        <Modal.Body className="h-96">
          <ul className="py-4 flex flex-col gap-y-2">
            <li className="flex items-center gap-1">
              <AiOutlineCheckCircle size={24} color="#33e050" />
              <span className="text-gray-800">Manutenções</span>
            </li>
            <li className="flex items-center gap-1">
              <AiOutlineCheckCircle size={24} color="#33e050" />
              <span className="text-gray-800">
                Instalações e desinstalações
              </span>
            </li>
            <li className="flex items-center gap-1">
              <AiOutlineCheckCircle size={24} color="#33e050" />
              <span className="text-gray-800">Checklist</span>
            </li>
            <li className="flex items-center gap-1">
              <AiOutlineCheckCircle size={24} color="#33e050" />
              <span className="text-gray-800">Atendimento in-loco</span>
            </li>
            <li className="flex items-center gap-1">
              <AiOutlineCheckCircle size={24} color="#33e050" />
              <span className="text-gray-800">Técnicos dedicados</span>
            </li>
            <li className="flex items-center gap-1">
              <div style={{ width: 24, height: 24 }}>
                <AiOutlineCheckCircle size={24} color="#33e050" />
              </div>
              <span className="text-gray-800">
                Técnicos híbridos (mais de uma tecnologia)
              </span>
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={() => setVisible(false)}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export const ModalServicesMemo = memo(ModalServices);
