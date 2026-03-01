import Image from "next/image";
import PrimaryButton from "../buttons/primaryButtons";

export default function Lessons() {
   return (
      <section className="rounded-[20px] bg-white lessons text-(--primary) tracking-[-0.02rem] font-bold 2xl:col-span-4 2xl:grid" id="lessons">
            <h2 className="sr-only">New Lessons</h2>
            <div className="flex items-center gap-3 px-6 pt-4">
               <Image 
                  src={"../assets/home/lessons/fire.svg"}
                  alt=""
                  width={48}
                  height={48}
               />
               <div className="">
                  <p className="text-(--secondary) text-[12px] leading-5">Business Design</p>
                  <span className="text-[16px] leading-7">New lession is available</span>
               </div>
            </div>
            <div className="body 2xl:grid">
               <span className="text-xl leading-8 mt-[38px] block px-6 mb-[29px] mr-20">What do you need to know to create better products?</span>
               <div className="bg-(--lessons-btns-bg) px-6 pb-4 rounded-[20px] rounded-t-none pt-4">
                  <div className="flex justify-between leading-6 text-[14px] mb-9">
                     <span className="flex gap-1">
                        <Image 
                           src={"../assets/home/lessons/timer.svg"}
                           alt=""
                           width={24}
                           height={24}
                        /> 
                        85 mins
                     </span>
                     <span className="flex gap-1">
                        <Image 
                           src={"../assets/home/lessons/slow_motion_video.svg"}
                           alt=""
                           width={24}
                           height={24}
                        /> 
                        Video format
                     </span>
                  </div>
                  <div className="grid gap-5 2xl:flex">
                     <Image 
                        src={"../assets/home/lessons/Avatars.svg"}
                        alt=""
                        width={109.5}
                        height={34}
                     />
                     <PrimaryButton background="bg-(--primary-blue)" className="rounded-2xl py-2" text="Get Started"/>
                  </div>
               </div>
            </div>
         </section>
   )
}