import React, { memo } from "react";
import { Modal, useModal, Button } from "@nextui-org/react";
import { AiOutlineCheckCircle } from "react-icons/ai";

function ModalSales() {
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
        scroll
        animated={true}
        className="cursor-default"
        width="700px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <h1 className="text-xl font-bold pt-2 text-zinc-700">
            NOSSOS PRINCIPAIS PRODUTOS PARA VENDA
          </h1>
        </Modal.Header>
        <Modal.Body className="h-96">
          <ul className="py-4 flex flex-col gap-y-2">
            <li className="flex items-center gap-1">
              <AiOutlineCheckCircle size={24} color="#33e050" />
              <span className="text-gray-800">Insumos</span>
            </li>
            <li className="flex items-center gap-1">
              <AiOutlineCheckCircle size={24} color="#33e050" />
              <span className="text-gray-800">Travas</span>
            </li>
            <li className="flex items-center gap-1">
              <AiOutlineCheckCircle size={24} color="#33e050" />
              <span className="text-gray-800">Chicotes</span>
            </li>
            <li className="flex items-center gap-1">
              <AiOutlineCheckCircle size={24} color="#33e050" />
              <span className="text-gray-800">Engates</span>
            </li>
            <li className="flex items-center gap-1">
              <AiOutlineCheckCircle size={24} color="#33e050" />
              <span className="text-gray-800">Desengates</span>
            </li>
            <li className="flex items-center gap-1">
              <AiOutlineCheckCircle size={24} color="#33e050" />
              <span className="text-gray-800">Válvula de bloqueio</span>
            </li>
            <li className="flex items-center gap-1">
              <AiOutlineCheckCircle size={24} color="#33e050" />
              <span className="text-gray-800">Suporte de tomada de Engate</span>
            </li>
            <li className="flex items-center gap-1">
              <AiOutlineCheckCircle size={24} color="#33e050" />
              <span className="text-gray-800">Sensor de porta baú</span>
            </li>
            <li className="flex items-center gap-1">
              <AiOutlineCheckCircle size={24} color="#33e050" />
              <span className="text-gray-800">Sensor de Carona</span>
            </li>
            <li className="flex items-center gap-1">
              <AiOutlineCheckCircle size={24} color="#33e050" />
              <span className="text-gray-800">Botão de pânico</span>
            </li>
            <li className="flex items-center gap-1">
              <AiOutlineCheckCircle size={24} color="#33e050" />
              <span className="text-gray-800">Módulo de voz</span>
            </li>
            <li className="flex items-center gap-1">
              <AiOutlineCheckCircle size={24} color="#33e050" />
              <span className="text-gray-800">Atuador elétrico</span>
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

export const ModalSalesMemo = memo(ModalSales);
