"use client"

import { useState, useEffect, useContext, createContext } from "react"

type ThemeContextType = {
   theme: "light" | "dark"
   setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>
}

const ThemeContext = createContext<ThemeContextType | null>(null);

type Props = {
   children: React.ReactNode
}

export  function ThemeProvider({children}: Props) {
   
   const [theme, setTheme] = useState<"light" | "dark">("light")
   
   useEffect(() => {
      const stored = localStorage.getItem("theme")
      const html = document.documentElement
      if (stored === "light" || stored === "dark") {
         html.classList.add(stored)
         setTheme(stored)
      }
      }, [])

   useEffect(() => {
      const html = document.documentElement
      html.classList.toggle("dark", theme === "dark")
      localStorage.setItem("theme", theme)
   }, [theme])

   return (
      <ThemeContext.Provider value={{ theme, setTheme}}>
         {children}
      </ThemeContext.Provider>
   )
}

export function useTheme() {
   const context = useContext(ThemeContext)
   if (!context) return { theme: "light", setTheme: () => {} }
   return context
}