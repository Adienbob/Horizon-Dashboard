"use client";

import { useState } from "react";

type SwitchProps = {
   defaultChecked?: boolean;
};

export default function SwitchBtn({ defaultChecked = false }: SwitchProps) {
   const [checked, setChecked] = useState(defaultChecked);

   const toggle = () => {
      const newValue = !checked;
      setChecked(newValue);
   };

   return (
      <button
         type="button"
         role="switch"
         aria-checked={checked}
         onClick={toggle}
         className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-300 focus:outline-none ${
         checked ? "bg-green-500" : "bg-gray-500"
         }`}
      >
         <span
         className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-300 ${
            checked ? "translate-x-6" : "translate-x-1"
         }`}
         />
      </button>
   );
}
