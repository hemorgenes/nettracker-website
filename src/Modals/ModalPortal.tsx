import React, { memo } from "react";
import { Modal, useModal, Button } from "@nextui-org/react";
import { FaPlay } from "react-icons/fa";

function ModalPortal() {
  const { setVisible, bindings } = useModal();

  return (
    <div>
      <button
        onClick={() => setVisible(true)}
        className="flex items-center justify-center w-full md:w-fit  gap-2 px-24 md:px-20 py-3 mt-4 text-lg md:text-base bg-zinc-800 hover:bg-zinc-900 text-gray-50 transition-colors"
      >
        <FaPlay size={18} color="#ffffff" />
        <span>VER VIDEO</span>
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
            Confira já nosso portal e nosso aplicativo!
          </h1>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            className="mx-auto my-frame"
            height="315"
            src="https://www.youtube.com/embed/9jCBcIlxjy8"
            title="Nettracker video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
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

export const ModalPortalMemo = memo(ModalPortal);
