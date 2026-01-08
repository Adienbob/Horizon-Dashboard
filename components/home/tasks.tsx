import Image from "next/image"
import React from "react";
import MoreButton from "../buttons/moreHoriz";


type Taskstypes = {
   tasksNames: string[];
   isChecked: boolean[];
   taskId: string[];
}
export default function Tasks({tasksNames, isChecked, taskId}: Taskstypes) {

   return (
      <section className="tasks z-1">
         <div className="head">
            <h2 className="flex items-center justify-start gap-4">
               <div className="relative 
                  before:content-[''] 
                  before:block 
                  before:absolute 
                  before:top-[-57.5%] 
                  before:left-[-57.5%] 
                  before:w-[38px] 
                  before:h-[38px] 
                  before:bg-(--checkbox-bg)
                  before:z-[-1]
                  before:rounded-full">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM7.71 13.29C7.32 13.68 6.69 13.68 6.3 13.29L2.71 9.7C2.32 9.31 2.32 8.68 2.71 8.29C3.1 7.9 3.73 7.9 4.12 8.29L7 11.17L13.88 4.29C14.27 3.9 14.9 3.9 15.29 4.29C15.68 4.68 15.68 5.31 15.29 5.7L7.71 13.29Z" fill="#4318FF"/>
                  </svg>
               </div>
               Tasks
            </h2>
            <MoreButton />
         </div>
         <div className="body">
            {tasksNames.map(((task, index) => (
               <div key={index} className="flex justify-between py-2 text-(--primary) font-bold">
                  <label key={index} htmlFor={taskId[index]} className="items-center flex text-(--secondary)">
                     <input type="checkbox" defaultChecked={isChecked[index]} id={taskId[index]} className="peer mr-2.5 size-5 accent-(--primary-blue)" />
                     <span className="peer-checked:text-(--primary) peer-checked:font-bold font-medium">{task}</span>
                  </label>
                  <Image 
                     src={"../assets/home/tasks/tasks-dots-icon.svg"} 
                     alt="" 
                     width={10} 
                     height={16} 
                     className="mr-3.5"
                  /> 
               </div>
            )))}
         </div>
      </section>
   )
}