import Link from "next/link"
import Card from "./cards";

export default function TrendingCards() {

   return (
      <section className="md:col-span-2 2xl:col-span-4" id="trendingCards">
         <nav className="grid mx-5 gap-5 lg:flex">
            <h2 className="flex-1 text-2xl">Trending NFTs</h2>
            <ul className="flex justify-between mb-5 text-(--primary-blue) lg:w-1/2">
               <li>
                  <Link href={"/"} >Art</Link>
               </li>
               <li>
                  <Link href={"/"} >Music</Link>
               </li>
               <li>
                  <Link href={"/"} >Collectibles</Link>
               </li>
               <li>
                  <Link href={"/"} >Sports</Link>
               </li>
            </ul>
         </nav>
         <div className="grid gap-5 md:grid-cols-3">
            <Card 
               img={{
                  src: "/assets/marketplace/Cards/Abstract.jpg",
                  alt: "Abstract Colors NFT Image",
               }}
               name="Abstract Colors"
               creator="By Esthera Jackson"
               stackedAvatars={{
                  src: "/assets/marketplace/Cards/Abstract_Avatars.svg",
                  alt: "Avatars of users who liked Abstract Colors NFT",
                  width: 87,
                  height: 34,
               }}
               bid={0.91}
            />
            <Card 
               img={{
                  src: "/assets/marketplace/Cards/Brain.jpg",
                  alt: "ETH AI Brain NFT Image",
               }}
               name="ETH AI Brain"
               creator="By Mark Benjamin"
               stackedAvatars={{
                  src: "/assets/marketplace/Cards/Brain_Avatars.svg",
                  alt: "Avatars of users who liked ETH AI Brain NFT",
               }}
               bid={2.82}
            />
            <Card 
               img={{
                  src: "/assets/marketplace/Cards/Mesh.jpg",
                  alt: "Mesh Gradients NFT Image",
               }}
               name="Mesh Gradients"
               creator="By Manny Gates"
               stackedAvatars={{
                  src: "/assets/marketplace/Cards/Mesh_Avatars.svg",
                  alt: "Avatars of users who liked Mesh Gradients NFT",
               }}
               bid={0.56}
            />
         </div>
      </section>
   )
}