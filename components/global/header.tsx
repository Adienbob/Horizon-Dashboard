"use client"

import IconButton from "../buttons/iconButton";
import { usePathname } from "next/navigation";
import { useState } from "react"

type SideBar = {
   isOpen: boolean;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Header({isOpen, setIsOpen}: SideBar) {
   const pathName = usePathname()
   const navLinks = [
      { name: "Main Dashboard", path: "/" },
      { name: "Main Dashboard", path: "/home" },
      { name: "NFT Marketplace", path: "/marketplace" },
      { name: "Kanban", path: "/Kanban" },
      { name: "Data Tables", path: "/tables" },
      { name: "Profile", path: "/profile" },
      { name: "Sign In", path: "/sign" },
   ];
   const current = navLinks.find( link => link.path === pathName);


   // Notifications and Infomations popup
   const [activePopup, setActivePopup] = useState<"noti" | "info" | null>(null)
   function togglePopup(popup: "noti" | "info" | null) {
      if (activePopup) {
         if (activePopup === popup) setActivePopup(null)
         else setActivePopup(popup)
      } else {
         setActivePopup(popup)
      }
   }

   // theme 
   const [theme, setTheme] = useState<"light" | "dark">("light")

   function toggleTheme() {
      const html = document.documentElement
      if (theme === "light") {
         setTheme("dark")
         html.classList.add("dark")
         html.classList.remove("light")
      } else {
         setTheme("light")
         html.classList.remove("dark")
         html.classList.add("light")
      }
   }
   return (
      <header className={`${current?.path === "/sign" ? "hidden" : ""} sticky top-2 z-30 bg-white/10 p-2 backdrop-blur-xl rounded-xl`}>
         <nav>
            <div className="flex gap-[5px]">
               <button className="text-(--primary) text-sm font-normal">pages <span className="text-(--primary) text-sm font-normal">/</span> {current ? current.name : "not working"}</button>
            </div>
            <h1 className="text-(--primary) text-[30px] font-bold">{current?.name}</h1>
            <div className="flex items-center gap-10 justify-between bg-(--component-bg) px-5 py-[7.5px] rounded-[30px]">
               <div>
                  <label htmlFor="searchBar" className="bg-(--main-bg) flex items-center px-4 py-3 rounded-[30px] w-fit">
                     <svg width="15" height="15" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <circle cx="5" cy="5" r="4.3" stroke="#2B3674" strokeWidth="1.4"/>
                     <line x1="10.0101" y1="11" x2="8" y2="8.98995" stroke="#2B3674" strokeWidth="1.4" strokeLinecap="round"/>
                     </svg>
                     <input className="text-base placeholder:text-sm placeholder:text-(--gray-400) placeholder:font-medium w-35 ml-2" type="search" id="searchBar" placeholder="Search..." />
                  </label>
               </div>
               <ul className="flex items-center w-full justify-between">
                  <li className="flex items-center">
                     <button onClick={() => setIsOpen(!isOpen)}>
                           <svg stroke="#A3AED0" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.25rem" width="1.25rem" xmlns="http://www.w3.org/2000/svg"><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg>
                     </button>
                  </li>
                  <li className="flex items-center">
                     <button onClick={() => togglePopup("noti")}>
                        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.2901 15.29L14.0001 14V9C14.0001 5.93 12.3601 3.36 9.50005 2.68V2C9.50005 1.17 8.83005 0.5 8.00005 0.5C7.17005 0.5 6.50005 1.17 6.50005 2V2.68C3.63005 3.36 2.00005 5.92 2.00005 9V14L0.710051 15.29C0.0800515 15.92 0.520051 17 1.41005 17H14.5801C15.4801 17 15.9201 15.92 15.2901 15.29ZM12.0001 15H4.00005V9C4.00005 6.52 5.51005 4.5 8.00005 4.5C10.4901 4.5 12.0001 6.52 12.0001 9V15ZM8.00005 20C9.10005 20 10.0001 19.1 10.0001 18H6.00005C6.00005 19.1 6.89005 20 8.00005 20Z" fill="#A3AED0"/>
                        </svg>
                     </button>
                     <div className="noti" style={activePopup === "noti" ? {display: "block"} : {display: "none"}}>
                        
                        <p>Notifications</p>
                     </div>
                  </li>
                  <li className="flex items-center">
                     <button onClick={() => togglePopup("info")}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_201_2879)">
                        <path d="M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#A3AED0"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_201_2879">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                     </button>
                     <div className="info" style={activePopup === "info" ? {display: "block"} : {display: "none"}}>
                        <p>Infomations</p>
                     </div>
                  </li>
                  <li className="flex items-center">
                     <button onClick={() => toggleTheme()} className="h-[18px]">
                        <svg display={theme === "light" ? "block" : "none"} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_201_2097)">
                        <path d="M9.95703 18C12.733 18 15.2684 16.737 16.9481 14.6675C17.1966 14.3613 16.9256 13.9141 16.5416 13.9872C12.1751 14.8188 8.16522 11.4709 8.16522 7.06303C8.16522 4.52398 9.52444 2.18914 11.7335 0.931992C12.074 0.738211 11.9884 0.221941 11.6015 0.150469C11.059 0.0504468 10.5086 8.21369e-05 9.95703 0C4.98914 0 0.957031 4.02578 0.957031 9C0.957031 13.9679 4.98281 18 9.95703 18Z" fill="#A3AED0"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_201_2097">
                        <rect width="18" height="18" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        <svg display={theme === "dark" ? "block" : "none"} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-4 w-4 text-gray-600 dark:text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path></svg>
                     </button>
                  </li>
                  <li>
                     <IconButton src="../assets/global/Buttons/avatar.svg" alt="Avatar" width={41} height={41} />
                  </li>
               </ul>
            </div>
         </nav>
      </header>
   )
}