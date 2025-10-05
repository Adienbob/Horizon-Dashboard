import Link from "next/link"
import Card from "./cards";

export default function TrendingCards() {

   return (
      <section className="trendingCards">
         <nav>
            <h2>Trending NFTs</h2>
            <ul>
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
         <div className="cards">
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