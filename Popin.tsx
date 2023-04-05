import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";
import React from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Popin({ isOpen = false, onClose }: Props) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-xl leading-6 text-gray-900 font-semibold"
                >
                  Titre
                </Dialog.Title>
                <div>
                  Coucou
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
