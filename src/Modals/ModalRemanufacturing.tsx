import React, { memo } from "react";
import { Modal, useModal, Button } from "@nextui-org/react";
import { AiOutlineCheckCircle } from "react-icons/ai";

function ModalRemanufacturing() {
  const { setVisible, bindings } = useModal();

  return (
    <div>
      <button
        onClick={() => setVisible(true)}
        className="w-full md:w-fit px-20 py-3 mt-4 text-center linear-gradient-background text-gray-50 transition-colors"
      >
        SAIBA MAIS
      </button>
      <Modal
        scroll
        className="cursor-default all-portals"
        animated={true}
        width="700px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <h1 className="text-xl font-bold pt-2 text-zinc-700">
            PRODUTOS QUE NÓS FAZEMOS A REMANUFATURA
          </h1>
        </Modal.Header>
        <Modal.Body className="h-96">
          <ul className="py-4 flex flex-col gap-y-2">
            <li className="flex items-center gap-1">
              <AiOutlineCheckCircle size={24} color="#33e050" />
              <span className="text-gray-800">Rastreador kit Omnilink</span>
            </li>
            <li className="flex items-center gap-1">
              <AiOutlineCheckCircle size={24} color="#33e050" />
              <span className="text-gray-800">Equipamento rastreador</span>
            </li>
            <li className="flex items-center gap-1">
              <AiOutlineCheckCircle size={24} color="#33e050" />
              <span className="text-gray-800">Teclado G</span>
            </li>
            <li className="flex items-center gap-1">
              <AiOutlineCheckCircle size={24} color="#33e050" />
              <span className="text-gray-800">Teclado Prime</span>
            </li>
            <li className="flex items-center gap-1">
              <AiOutlineCheckCircle size={24} color="#33e050" />
              <span className="text-gray-800">Módulo rastreador</span>
            </li>
            <li className="flex items-center gap-1">
              <AiOutlineCheckCircle size={24} color="#33e050" />
              <span className="text-gray-800">Antena Rastreador</span>
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

export const ModalRemanufacturingMemo = memo(ModalRemanufacturing);
