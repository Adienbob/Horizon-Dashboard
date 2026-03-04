"use client"

import { useState } from "react";
import ArticleCard from "./article";

type dataTypes = {
   head: string;
   banner?: string;
   content: string;
   status: "ERRORS" | "UPDATES" | "PENDING" | "DONE";
   avatars?: string;
}

type KanbanData = {
   className: string;
   columnHeader: string;
   articles: dataTypes[];
}

export default function Columns({className, columnHeader, articles}: KanbanData) {
   const [isAddArticleOpen, setIsAddArticleOpen] = useState(false);
   const [newArticles, setNewArticles] = useState<dataTypes[]>([])

   function handleNewArticle(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault()

      const formData = new FormData(e.currentTarget)
      const head = formData.get("header") as string;
      const content = formData.get("topic") as string;
      const banner = formData.get("banner") as string;
      const status = formData.get("status") as "ERRORS" | "UPDATES" | "PENDING" | "DONE";
      const newActicle: dataTypes = {head, content, banner, status}

      setNewArticles(prev => [...prev, newActicle])
      e.currentTarget.reset();
   }

   return (
      <section id={className} className="2xl:col-span-2 h-fit">
         <div className="head">
            <h2 className="text-[32px]">{columnHeader}</h2>
            <button onClick={() => setIsAddArticleOpen(prev => !prev)}>
               <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.32703 3.71619V13.2787" stroke="var(--btn-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14.3896 8.49744H4.26459" stroke="var(--btn-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
            </button>
            {isAddArticleOpen ? 
               <form action="" onSubmit={handleNewArticle}>
                  <label htmlFor="blog-id">Header<span className="required-input">*</span></label>
                  <input type="text" name="header" id="blog-id" />

                  <label htmlFor="blog-topic">topic<span className="required-input">*</span></label>
                  <input type="text" name="topic" id="blog-topic" />

                  <label htmlFor="blog-banner">banner</label>
                  <input type="text" name="banner" id="blog-banner" />

                  <label htmlFor="blog-status">blog-status<span className="required-input">*</span></label>
                  <select name="status" id="blog-status">
                     <option value="UPDATES">UPDATES</option>
                     <option value="PENDING">PENDING</option>
                     <option value="ERRORS">ERRORS</option>
                     <option value="DONE">DONE</option>
                  </select>
                  <button type="submit">Add Article</button>
               </form>
            : ""}
         </div>
         <div className="grid gap-5">
            {articles.map((article, index) => (
               <ArticleCard article={article}  key={index}/>
            ))}

            {newArticles.length !== 0
            ? newArticles.map((article, index) => (
               <ArticleCard article={article}  key={index}/>
            )) : ""} 
         </div>
      </section>
   )
}

