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
      <section className="tasks">
         <div className="head">
            <h2>
               <Image 
               src={"../assets/home/tasks/checkbox.svg"}
               alt="" 
               width={38} 
               height={38} 
               /> 
               Tasks
            </h2>
            <MoreButton />
         </div>
         <div className="body">
            {tasksNames.map(((task, index) => (
               <React.Fragment key={index}>
                  <label key={index} htmlFor={taskId[index]}>
                     <input type="checkbox" defaultChecked={isChecked[index]} id={taskId[index]} />
                     {task}
                  </label>
                  <Image 
                     src={"../assets/home/tasks/tasks-dots-icon.svg"} 
                     alt="" 
                     width={10} 
                     height={16} 
                     className="dotsIcon"
                  /> 
               </React.Fragment>
            )))}
         </div>
      </section>
   )
}