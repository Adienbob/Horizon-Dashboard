import Image from "next/image"

export default function Discover() {

   return (
      <section id="discover" className="relative z-0 rounded-[20px] h-[275px] md:col-span-2">
         <Image 
            src={"/assets/marketplace/Discover/Background Image.jpg"}
            alt=""
            fill
            className="object-cover object-center absolute z-10 h-full w-full rounded-[20px]"
         />
         <div className="text-(--component-bg) relative z-20 top-[50%] translate-y-[-50%] left-10 pr-45">
            <h1>
               <strong className="text-(--component-bg) text-[20px] leading-7">Discover, collect and sell extraordinary NFTs</strong>
            </h1>
            <p className="font-medium text-[12px] text-(--discover) mt-3 mb-6">Enter in this creative world. Discover now the latest NFTs or start creating your own!</p>
            <div className="font-medium flex gap-5">
               <button className="text-black leading-5 text-[12px] py-1.5 px-[18px] rounded-2xl bg-(--component-bg)">
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