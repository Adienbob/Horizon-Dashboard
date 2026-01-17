import Image from "next/image"

export default function ProfileInfo() {

   return (

      <section className="[&_p]:text-(--secondary) [&_p]:text-sm flex flex-col items-center gap-[56px]">
         <h2 className="sr-only">Profile Informations</h2>
         <div className="relative">
            <Image 
               src={"/assets/profile/images/Background.jpg"}
               alt=""
               width={518}
               height={131}
               quality={80}
               className="background"
            />
            <Image 
               src={"../assets/profile/icons/Avatar.svg"}
               alt=""
               width={87}
               height={87}
               className="absolute bottom-0 translate-y-1/2 right-1/2 translate-x-1/2"
            />
         </div>
         <div className="grid text-center gap-[15]">
            <div className="details">
               <span className="text-[20px] leading-8">Adela Parkson</span>
               <p className="text-(--secondary) text-sm font-medium">Product Designer</p>
            </div>
            <div className="[&_p]:font-normal [&_span]:text-[24px]  flex text-center gap-6 ">
               <div className="stats">
                  <span>17</span>
                  <p>posts</p>
               </div>
               <div className="stats">
                  <span>9.7k</span>
                  <p>Followers</p>
               </div>
               <div className="stats">
                  <span>274</span>
                  <p>Followers</p>
               </div>
            </div>
         </div>
      </section>
   )
}