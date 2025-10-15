import Image from "next/image";
import PrimaryButton from "../buttons/primaryButtons";

export default function Lessons() {
   return (
      <section className="lessons">
            <h2 className="sr-only">New Lessons</h2>
            <div className="head">
               <Image 
                  src={"../assets/home/lessons/fire.svg"}
                  alt=""
                  width={48}
                  height={48}
               />
               <div>
                  <p>Business Design</p>
                  <span>New lession is available</span>
               </div>
            </div>
            <div className="body">
               <span>What do you need to know to create better products?</span>
               <div>
                  <div className="lesson-details">
                     <span className="timer">
                        <Image 
                           src={"../assets/home/lessons/timer.svg"}
                           alt=""
                           width={24}
                           height={24}
                        /> 
                        85 mins
                     </span>
                     <span className="video">
                        <Image 
                           src={"../assets/home/lessons/slow_motion_video.svg"}
                           alt=""
                           width={24}
                           height={24}
                        /> 
                        video format
                     </span>
                  </div>
                  <div className="start-lesson">
                     <Image 
                        src={"../assets/home/lessons/avatars.svg"}
                        alt=""
                        width={109.5}
                        height={34}
                     />
                     <PrimaryButton text="Get Started" color="blue" />
                  </div>
               </div>
            </div>
         </section>
   )
}