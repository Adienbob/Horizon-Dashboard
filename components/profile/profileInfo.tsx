import Image from "next/image"

export default function ProfileInfo() {

   return (

      <section>
         <h2 className="sr-only">Profile Informations</h2>
         <div className="imagesContainer">
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
               className="avatar"
            />
         </div>
         <div className="details">
            <span>Adela Parkson</span>
            <p>Product Designer</p>
         </div>
         <div className="social-stats">
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
      </section>
   )
}