"use client"
import { useState } from "react"
import Header from "../global/header";
import Footer from "../global/footer";
import SideBar from "../global/aside";
import { usePathname } from "next/navigation"

export default function ClientLayout({
      children,
   }: Readonly<{
      children: React.ReactNode;
   }>) {
   const [isOpen, setIsOpen] = useState(false)
   const current = usePathname()
   console.log(current)
   return (
      <main>
         <div className={`${current === "/sign" ? "grid" : "flex"}`} id="pageContainer">
            {/* Sidebar Overlay */}
            <div onClick={() => setIsOpen(prev => !prev)} className={`
               fixed inset-0 z-40 bg-black/40 *:
               transition-opacity duration-300
               2xl:hidden
               ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
               `}>

            </div>
            <div className="bg-(--main-bg)">
               <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <div className={`gap-5 px-5 lg:px-7.5 pb-8 relative bg-(--main-bg) grid grid-cols-1 md:grid-cols-2 ${current === "/" ? "2xl:grid-cols-12 [&_#table]:2xl:col-span-6" : "[&_#table]:2xl:col-span-3"} ${current === "/sign" ? "bg-white flex md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 lg:pr-0 lg:pb-0 [&_footer]:lg:absolute [&_footer]:lg:bottom-10 [&_footer]:lg:w-[97.5%] [&_footer]:lg:z-50" : "2xl:grid-cols-6"} ${current === "/profile" ? "lg:grid-cols-12 2xl:grid-cols-12" : ""}`}>
               <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
               {children}
               <Footer />
            </div>
         </div>
      </main>
   );
}
