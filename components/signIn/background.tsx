import Image from "next/image"

export default function Background() {

   return (
      <section className="hidden relative z-20 lg:flex justify-center dark:bg-(--main-bg)" id="signIn">
         <div className="mt-40">
            <Image 
               src={"/assets/signIn/images/Background 5.4.png"}
               alt=""
               fill
               className="object-cover absolute z-[-1] rounded-bl-[200px]"
            />
            <div className="flex flex-col items-center">
               <div className="w-[200px] h-[267.5px] relative">
                  <Image
                     src={"/assets/signIn/icons/Horizon Logo.svg"}
                     alt=""
                     fill
                     className="object-cover"
                  />
               </div>
               <div className="px-10 mt-[100px] text-white border-(--component-bg) dark:border-[rgba(255,255,255,0.2)] border tracking-normal text-center py-[18.5px] rounded-[26.37px]">
                  <p className="text-[16px]">Learn more about Horizon UI on</p>
                  <span className="text-[23px] leading-[45.4px]">horizon-ui.com</span>
               </div>
            </div>
         </div>
      </section>
   )
}