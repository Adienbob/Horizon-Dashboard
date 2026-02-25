import Image from "next/image"

type IconDetails = {
   label: string;
   src: string;
   width: number;
   height: number;
   className?: string;
}

export default function IconButton({label, src, width, height, className}: IconDetails) {

   return (
      <button aria-label={label} className={className}>
         <Image 
            src={src}
            alt=""
            width={width}
            height={height}
         />
      </button>
   )
}