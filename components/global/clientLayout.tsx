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
         <div className={`${current === "/sign" ? "bg-white" : "bg-(--main-bg)"} grid grid-cols-1 gap-5 px-5 pb-8 relative`} id="pageContainer">
            {/* Sidebar Overlay */}
            <div onClick={() => setIsOpen(prev => !prev)} className={`
               fixed inset-0 z-40 bg-black/40 *:
               transition-opacity duration-300
               ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
               `}>

            </div>
            <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
            <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
            {children}
            <Footer />
         </div>
      </main>
   );
}
