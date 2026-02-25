import IconButton from "../buttons/iconButton";
import Image from "next/image";
import PrimaryButton from "../buttons/primaryButtons";
import { useState, useEffect, useRef } from "react";

type dataTypes = {
   head: string;
   banner?: string;
   content: string;
   status: "ERRORS" | "UPDATES" | "PENDING" | "DONE";
   avatars?: string;
}

type ArticleType = {
   article: dataTypes
}

export default function ArticleCard({article}: ArticleType) {
   const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false)
   const selectRef = useRef<HTMLSelectElement>(null)

   useEffect(() => {
      function handleMouseDown(e: MouseEvent) {
         if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
            setIsPopupOpen(false)
         }
      }
      const selectEl = selectRef.current;
      if (selectEl) {
         document.addEventListener("mousedown", handleMouseDown)
      }

      return () => {
         document.removeEventListener("mousedown", handleMouseDown)
      }
   }, [])
   return (
      <article className="rounded-[15px] shadow-[0_18px_40px_0_rgba(112,144,176,0.12)] p-[23px]">
         <div className="flex items-center justify-between mb-[21px]">
            <h3 className="leading-7">{article.head}</h3>
            <div className="flex items-center" onClick={() => setIsPopupOpen(prev => !prev)}>
               <IconButton 
                  src="../assets/data tables/icons/edit.svg"
                  label="edit article"
                  width={18}
                  height={17}
                  className="edit"
               />
            </div>
            {isPopupOpen ? 
            <select ref={selectRef} name="edit-panel" id="edit-panel" className="hidden">
               <option value="">Edit</option>
               <option value="">Save</option>
               <option value="">Copy</option>
               <option value="">Delete</option>
            </select>
            : ""}
         </div>
         <div>
            {article.banner ? 
               <div className="h-[280px] relative w-full">
                  <Image 
                     src={article.banner}
                     alt={""}
                     fill
                     className="object-cover object-center rounded-[20px]"
                  />
               </div>
               : ""
            }
            <p className="text-(--secondary) font-normal leading-[26px] md:mt-5">{article.content}</p>
         </div>
         <div className="flex mt-[29px] justify-between bottom-0">
            {article.avatars?
            <Image 
               src={article.avatars}
               alt={""}
               width={50}
               height={50}
            />
            : ""}
            <div className="text-[10px] w-[94px] h-7">
               <PrimaryButton text={article.status} weight="medium" className="rounded-[10px]" background={
                  article.status === "ERRORS" ?
                  "bg-(--error)"
                  : article.status === "DONE" ?
                  "bg-(--done)" 
                  : article.status === "PENDING" ?
                  "bg-(--pending)" 
                  : "bg-(--update)"
               } />
            </div>
         </div>
      </article>
   )
}