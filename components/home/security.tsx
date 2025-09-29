import Image from "next/image"
import PrimaryButton from "../Buttons/primaryButtons";

export default function SecurityCards() {

   return (
      <section className="security">
         <h2 className="sr-only">Security cards</h2>
         <div className="head">
            <Image 
               src={"../assets/home/security/finger_print.svg"}
               alt=""
               width={91}
               height={91}
            />
            <span>Control card security in-app with a tap</span>
         </div>
         <div className="body">
            <p>Discover our cards benefits, with one tap</p>
            <PrimaryButton text="Cards" color="blue" />
         </div>
      </section>
   )
}