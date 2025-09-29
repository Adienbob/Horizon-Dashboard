import Image from "next/image"

type IconDetails = {
   src: string;
   width: number;
   height: number;
   alt: string;
}

export default function IconButton({src, width, height, alt}: IconDetails) {

   return (
      <button>
         <Image 
            src={src}
            alt={alt}
            width={width}
            height={height}
         />
      </button>
   )
}