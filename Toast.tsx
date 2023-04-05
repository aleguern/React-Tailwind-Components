import { Transition } from "@headlessui/react";
import React, { useState } from "react";

type Props = {
  label: string;
  hidden: boolean;
  type?: "info" | "error";
};

export default function Toast({ label, hidden, type = "info" }: Props) {
  return (
    <Transition
      appear
      className="transition absolute z-10 top-4 right-4 flex items-center p-4 w-auto max-w-xl min-w-[320px] text-gray-500 bg-white rounded-lg shadow-lg"
      show={!hidden}
      enter="transition ease duration-300 transform"
      enterFrom="opacity-0 -translate-y-full"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease duration-500 transform"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 -translate-y-full"
    >
      {type === "info" ? (
        <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-blue-500 rounded-lg ">
          <svg
            className="w-5 h-5 text-gray-200 animate-spin fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      ) : (
        <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-red-500 bg-red-100 rounded-lg">
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      )}

      <div className="ml-3 text-sm font-normal">{label}</div>
    </Transition>
  );
}

type ToastType = "error" | "info";

type AddToastFunction = (
  content: string,
  type?: ToastType,
  dismissTime?: number
) => void;
type DismissToast = () => void;

const ToastContext = React.createContext<
  { dismissToast: DismissToast; addToast: AddToastFunction } | undefined
>(undefined);

function ToastProvider({ children }: { children: React.ReactNode }) {
  const [{ hidden }, setState] = useState({
    hidden: true,
    content: "",
    type: "info",
  });

  const dismissToast: DismissToast = () =>
    setState((toast) => ({ ...toast, hidden: true }));

  const addToast: AddToastFunction = (content, type = "info", dismissTime) => {
    setState({ hidden: false, content, type });

    if (dismissTime) {
      setTimeout(() => {
        setState((toast) => ({ ...toast, hidden: true }));
      }, dismissTime);
    }
  };

  const value = { dismissToast, addToast };

  return (
    <ToastContext.Provider value={value}>
      {<Toast hidden={hidden} label="coucou" type="error" />}
      {children}
    </ToastContext.Provider>
  );
}

function useToast() {
  const context = React.useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

export { ToastProvider, useToast };
