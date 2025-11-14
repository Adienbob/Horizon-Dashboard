import IconButton from "../buttons/iconButton"
import Image from "next/image"
import MoreHorizBtn from "../buttons/moreHoriz";
import HoriChart from "../global/horizontalChart";


export default function Storage() {

   return (
      <section>
         <h2 className="sr-only">Storage</h2>
         <MoreHorizBtn />
         <div className="body">
            <Image 
               src={"../assets/profile/icons/cloud_done.svg"}
               alt=""
               width={46}
               height={46}
            />
            <span>Your Storage</span>
            <p>Supervise your drive space in the easiest way</p>
         </div>
         <div className="drive-space">
            <span className="used-space">25.6 Gb</span>
            <span className="total-space">50 gb</span>
         </div>
         <HoriChart data={25.6} />
      </section>
   )
}