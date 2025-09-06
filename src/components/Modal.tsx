import React from "react";
import AddToCard from "./AddToCard";
import { IconX } from "@tabler/icons-react";

interface ModalProps {
    setShow: (show: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ setShow }) => {
    return (
      <div className="fixed inset-0 bg-black/40 flex justify-end z-50">
          <div className="w-[600px] max-w-full bg-white shadow-2xl h-screen p-5 rounded-l-2xl overflow-y-auto">
              {/* Close button */}
              <div className="flex justify-end">
                  <button
                      onClick={() => setShow(false)}
                      className="text-red-500 bg-red-100 rounded-full w-8 h-8 flex justify-center items-center"
                  >
                      <IconX className="hover:rotate-90 duration-300 ease-in-out transition-all" />
                  </button>
              </div>

              {/* Cart Items */}
              <div className="flex flex-col gap-y-5 mt-5">
                  <AddToCard />
              </div>
          </div>
      </div>
  );
};

export default Modal;
