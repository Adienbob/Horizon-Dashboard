import Image from "next/image"
import PrimaryButton from "../buttons/primaryButtons";

export default function SecurityCards() {

   return (
      <section className="security">
         <h2 className="sr-only">Security cards</h2>
         <div>
            <Image 
               src={"../assets/home/security/finger_print.svg"}
               alt=""
               width={91}
               height={91}
            />
         </div>
         <div className="grid">
            <span className="block text-2xl mr-10 pl-2.5 py-[17px]">Control card security in-app with a tap</span>
            <p className="text-(--secondary) font-medium text-[14px] pl-2.5 pb-[35px]">Discover our cards benefits, with one tap</p>
            <div className="text-center">
               <PrimaryButton background="bg-(--primary-blue)" className="rounded-2xl py-[11px]" text="Cards" weight="normal"/>
            </div>
         </div>
      </section>
   )
}