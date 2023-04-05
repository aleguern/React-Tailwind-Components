import clsx from "clsx";
import React from "react";

type Props = {
  name: string;
  checked: boolean;
  className: string;
  onChange: (e: boolean) => void;
};

export default function Toggle({ name, checked, onChange, className }: Props) {
  return (
    <label
      className={clsx(
        "inline-flex relative items-center cursor-pointer",
        className
      )}
    >
      <input
        type="checkbox"
        name={name}
        onChange={(e) => onChange(e.target.checked)}
        checked={checked}
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
    </label>
  );
}
