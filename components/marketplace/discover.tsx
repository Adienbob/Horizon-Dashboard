import Image from "next/image"

export default function Discover() {

   return (
      <section className="Discover">
         {/* <Image  /> */}
         <h1>
            <strong>Discover, collect and sell extraordinary NFTs</strong>
         </h1>
         <p>Enter in this creative world. Discover now the latest NFTs or start creating your own!</p>
         <div className="buttons">
            <button>
               Discover Now
            </button>
            <button>
               Watch Video
            </button>
         </div>
      </section>
   )
}