import Image from "next/image"
import { useState } from "react";

type ImageTypes = {
   src: string;
   alt: string;
   width?: number;
   height?: number;
}

type Avatars = {
   src: string;
   alt: string;
   width?: number | 87 ;
   height?: number | 34 ;
}

type Card = {
   img: ImageTypes;
   name: string;
   creator: string;
   stackedAvatars: Avatars;
   bid: number;
}

export default function Card({img, name, creator, stackedAvatars, bid,}: Card) {
   const [isFavorite, setIsFavorite] = useState<boolean>(false)

   return (
      <article className="bg-white rounded-[20px] p-5 grid gap-5">
         <div className="rounded-[18px] relative">
            <Image 
               src={img.src}
               alt={img.alt}
               width={img.width ?? 308}
               height={img.height ?? 205}
               className="w-full h-auto rounded-[20px]"
               quality={100}
            />
            <button onClick={() => setIsFavorite(prev => !prev)} className="bg-(--component-bg) p-2.5 rounded-full absolute top-5 right-5">
               <Image 
                  src={isFavorite ? "../assets/marketplace/Cards/Favorite_liked.svg" : "../assets/marketplace/Cards/Favorite_Unliked.svg"}
                  alt={img.alt}
                  width={20}
                  height={20}
                  className="cardImage"
                  quality={100}
               />
            </button>
         </div>
         <div className="grid gap-5 px-2.5">
            <div className="flex justify-between">
               <span className="text-(--primary) text-[18px] leading-[30px]">
                  {name}
                  <p className="text-(--secondary) font-normal leading-5 text-[14px]">{creator}</p>
               </span>
               <Image 
                  src={stackedAvatars.src}
                  alt={stackedAvatars.alt}
                  width={87}
                  height={34}
               />
            </div>
            <div className="flex justify-between items-center">
               <span className="text-(--primary-blue)">Current Bid: {bid} ETH</span>
               <button className="text-[14px] text-(--component-bg) font-normal leading-6 px-6 py-1 bg-(--bid) rounded-full ">Place bid</button>
            </div>
         </div>
      </article>
   )
}