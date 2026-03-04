import Image from "next/image"
import MoreHorizBtn from "../buttons/moreHoriz";
import HoriChart from "../global/horizontalChart";


export default function Storage() {

   return (
      <section className="lg:col-span-3 2xl:w-[25%]">
         <div className="flex justify-end">
            <h2 className="sr-only">Storage</h2>
            <MoreHorizBtn />
         </div>
         <div className="flex flex-col items-center mb-10">
            <div className="mb-3.5">
               <div className="bg-(--main-bg) px-[27px] py-[27px] rounded-full">
                  <Image 
                     src={"../assets/profile/icons/cloud_done.svg"}
                     alt=""
                     width={46}
                     height={46}
                  />
               </div>
            </div>
            <span className="text-2xl leading-8 ">Your Storage</span>
            <p className="font-normal leading-[26px] text-(--secondary) w-50 text-center">Supervise your drive space in the easiest way</p>
         </div>
         <div className="flex justify-between text-(--secondary) font-medium">
            <span className="used-space">25.6 Gb</span>
            <span className="total-space">50 Gb</span>
         </div>
         <HoriChart progressPrecentage={56.1} style="w-full" />
      </section>
   )
}