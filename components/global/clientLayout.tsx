"use client"
import { useState, useEffect } from "react"
import Header from "../global/header";
import Footer from "../global/footer";
import SideBar from "../global/aside";

export default function ClientLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   const [isOpen, setIsOpen] = useState(false)

   return (
      <main>
         <div className="pageContainer">
            <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
            <SideBar isOpen={isOpen} />
            {children}
            <Footer />
         </div>
      </main>
   );
}
