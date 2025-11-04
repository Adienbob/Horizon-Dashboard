import Image from "next/image"
import { useState } from "react";
import PrimaryButton from "../buttons/primaryButtons";

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
      <article className="card">
         <div className="imgContainer">
            <Image 
               src={img.src}
               alt={img.alt}
               width={img.width ?? 308}
               height={img.height ?? 205}
               className="cardImage"
               quality={100}
            />
            <button onClick={() => setIsFavorite(prev => !prev)}>
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
         <div className="details">
            <span>
               {name}
               <p>{creator}</p>
            </span>
            <Image 
               src={stackedAvatars.src}
               alt={stackedAvatars.alt}
               width={stackedAvatars.width ?? 87}
               height={stackedAvatars.height ?? 34}
            />
         </div>
         <div className="bid">
            <span>Current Bid: {bid} ETH</span>
            <PrimaryButton text="Place Bid" color="purple" />
         </div>
      </article>
   )
}