"use client"

import Creators from "@/components/marketplace/creators";
import Discover from "@/components/marketplace/discover";
import History from "@/components/marketplace/history";
import RecentlyCards from "@/components/marketplace/recentlyCards";
import TrendingCards from "@/components/marketplace/trendingCards";


export default function Marketplace() {

   return (
      <>
         <Discover />
         <TrendingCards />
         <RecentlyCards />
         <aside className="md:col-span-2 md:grid md:grid-cols-2 lg:gap-5 2xl:col-span-2 2xl:grid-cols-1 2xl:row-span-3 2xl:row-start-2 2xl:col-end-7">
            <Creators 
               details={[
                  ["@maddison_c21", "9821", "98"],
                  ["@karl.will02", "7032", "95"],
                  ["@andreea.1z", "5204", "89"],
                  ["@abraham47.y", "4309", "76"],
                  ["@simmmple.web", "3871", "53"],
                  ["@horizon.ui", "3152", "46"],
                  ["@venus.sys", "2907", "32"],
               ]}
               avatars={[
                  "/assets/marketplace/Creators/maddlison.svg",
                  "/assets/marketplace/Creators/karl.svg",
                  "/assets/marketplace/Creators/andrea.svg",
                  "/assets/marketplace/Creators/abraham.svg",
                  "/assets/marketplace/Creators/simple.svg",
                  "/assets/marketplace/Creators/venus.svg",
                  "/assets/marketplace/Creators/apevpp.svg",
                  "/assets/marketplace/Creators/leon.svg"
               ]}
            />
            <History cards={[
               {
                  img: "/assets/marketplace/History/Heaven.svg", 
                  name: "Colorful Heaven", 
                  creator: "By Mark Benjamin", 
                  ETH: "1.30", 
                  time: "30s"
               },
               {
                  img: "/assets/marketplace/History/Abstract.svg", 
                  name: "Abstract Colors", 
                  creator: "By Esthera Jackson", 
                  ETH: "0.91", 
                  time: "58s"
               },
               {
                  img: "/assets/marketplace/History/Brain.svg", 
                  name: "ETH AI Brain", 
                  creator: "By Nick Wilson", 
                  ETH: "2.82", 
                  time: "1m"
               },
               {
                  img: "/assets/marketplace/History/Swipe.svg", 
                  name: "Swipe Circles", 
                  creator: "By Peter Will", 
                  ETH: "2.30", 
                  time: "1m"
               },
               {
                  img: "/assets/marketplace/History/Mesh.svg", 
                  name: "Mesh Gradients", 
                  creator: "By Will Smith", 
                  ETH: "0.56", 
                  time: "2m"
               },
               {
                  img: "/assets/marketplace/History/Cubes.svg", 
                  name: "3D Cubes Art", 
                  creator: "By Manny Gates", 
                  ETH: "6.58", 
                  time: "3m"
               }
            ]} />
         </aside>
      </>
   )
}