import Card from "./cards"

export default function RecentlyCards() {

   return (
      <section className="md:col-span-2 2xl:col-span-4" id="recentlyCards">
         <h2 className="ml-5 my-5 text-2xl">Recently Added</h2>
         <div className="grid gap-5 md:grid-cols-3">
            <Card 
               img={{
                  src: "/assets/marketplace/Cards/Swipe.jpg",
                  alt: "Swipe Circles NFT Image",
               }}
               name="Swipe Circles"
               creator="By Peter Will"
               stackedAvatars={{
                  src: "/assets/marketplace/Cards/Swipe_Avatars.svg",
                  alt: "Avatars of users who liked Swipe Circles NFT",
               }}
               bid={2.30}
            />
            <Card 
               img={{
                  src: "/assets/marketplace/Cards/Heaven.jpg",
                  alt: "Colorful Heaven NFT Image",
               }}
               name="Colorful Heaven"
               creator="By Mark Benjamin"
               stackedAvatars={{
                  src: "/assets/marketplace/Cards/Heaven_Avatars.svg",
                  alt: "Avatars of users who liked Colorful Heaven NFT",
               }}
               bid={1.30}
            />
            <Card 
               img={{
                  src: "/assets/marketplace/Cards/Cubes.jpg",
                  alt: "Mesh Gradients NFT Image",
               }}
               name="3D Cubes Art"
               creator="By Manny Gates"
               stackedAvatars={{
                  src: "/assets/marketplace/Cards/Cubes_Avatars.svg",
                  alt: "Avatars of users who liked 3D Cubes Art NFT",
               }}
               bid={6.58}
            />
         </div>
      </section>
   )
}