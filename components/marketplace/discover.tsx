import Image from "next/image"

export default function Discover() {

   return (
      <section id="discover" className="relative z-0 rounded-[20px] h-[275px] md:col-span-2 2xl:col-span-4 mb-5">
         <Image 
            src={"/assets/marketplace/Discover/Background Image.jpg"}
            alt=""
            fill
            className="object-cover object-center absolute z-10 h-full w-full rounded-[20px]"
         />
         <div className="text-white relative z-20 top-[50%] translate-y-[-50%] left-10 lg:w-100">
            <h1>
               <strong className="text-[20px] lg:text-[34px] w-1 leading-7">Discover, collect and sell extraordinary NFTs</strong>
            </h1>
            <p className="font-medium text-[12px] lg:text-base text-(--discover) mt-3 mb-6 lg:w-90">Enter in this creative world. Discover now the latest NFTs or start creating your own!</p>
            <div className="font-medium flex gap-5">
               <button className="text-black leading-5 text-[12px] lg:text-sm py-1.5 lg:py-2.5 px-[18px] rounded-2xl bg-white">
                  Discover now
               </button>
               <button className="leading-7 text-(--watch-video)">
                  Watch Video
               </button>
            </div>
         </div>
      </section>
   )
}