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
      <article>
         <div className="header">
            <h3>{article.head}</h3>
            <div className="editBtnContainer" onClick={() => setIsPopupOpen(prev => !prev)}>
               <IconButton 
                  src="../assets/data tables/icons/edit.svg"
                  alt=""
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
         <div className="body">
            {article.banner ? 
               <Image 
                  src={article.banner}
                  alt={""}
                  width={50}
                  height={50}
               />
               : ""
            }
            <p>{article.content}</p>
         </div>
         <div className="footer">
            {article.avatars?
            <Image 
               src={article.avatars}
               alt={""}
               width={50}
               height={50}
            />
            : ""}
            <PrimaryButton text={article.status} className={article.status.toLowerCase()} />
         </div>
      </article>
   )
}