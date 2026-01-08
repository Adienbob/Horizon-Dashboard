import { useState } from "react"

export default function MoreHorizBtn() {
   const [isOpen, setIsOpen] = useState(false)

   return (
      <div className="relative inline-block">
         <button onClick={() => setIsOpen(prev => !prev)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
               <path
                  d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
                  fill="#4318FF"
               />
            </svg>
         </button>

         <div
            className={`
               absolute right-0 mt-2 w-22.5
               rounded-xl bg-white shadow-lg
               transform origin-top-right
               transition-all duration-300 ease-out
               ${isOpen
               ? "scale-100 opacity-100 pointer-events-auto"
               : "scale-0 opacity-0 pointer-events-none"}
            `}
         >
            <ul className="p-2 *:cursor-pointer *:text-[12px] *:text-(--secondary) *:font-medium *:hover:font-bold *:p-1 *:text-center">
               <li className="">Panel 1</li>
               <li className="">Panel 2</li>
               <li className="">Panel 3</li>
               <li className="">Panel 4</li>
            </ul>
         </div>
      </div>
   )
}
