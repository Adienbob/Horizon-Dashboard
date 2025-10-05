import Image from "next/image"

type IconDetails = {
   src: string;
   width: number;
   height: number;
   alt: string;
   className?: string;
}

export default function IconButton({src, width, height, alt, className}: IconDetails) {

   return (
      <button className={className}>
         <Image 
            src={src}
            alt={alt}
            width={width}
            height={height}
         />
      </button>
   )
}