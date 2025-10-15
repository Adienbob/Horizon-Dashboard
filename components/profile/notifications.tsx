import IconButton from "../buttons/iconButton";
import { SwitchCustomStyles } from "../buttons/toggle";


export default function Notifications() {

   return (
      <section>
         <div className="head">
            <h2>Notifications</h2>
            <IconButton src="../assets/global/Buttons/more_horiz.svg" width={24} height={24} alt="more icon"  />
         </div>
         <div className="body">
            <div className="notification">
               <SwitchCustomStyles check={true} />
               <span>Item update notifications</span>
            </div>
            <div className="notification">
               <SwitchCustomStyles check={false} />
               <span>Item comment notifications</span>
            </div>
            <div className="notification">
               <SwitchCustomStyles check={true} />
               <span>Buyer review notifications</span>
            </div>
            <div className="notification">
               <SwitchCustomStyles check={false} />
               <span>Rating reminders notifications</span>
            </div>
            <div className="notification">
               <SwitchCustomStyles check={false} />
               <span>Meetups near you notifications</span>
            </div>
            <div className="notification">
               <SwitchCustomStyles check={true} />
               <span>Company news notifications</span>
            </div>
            <div className="notification">
               <SwitchCustomStyles check={true} />
               <span>New launches and projects</span>
            </div>
            <div className="notification">
               <SwitchCustomStyles check={false} />
               <span>Monthly product changes</span>
            </div>
            <div className="notification">
               <SwitchCustomStyles check={false} />
               <span>Subscribe to newsletter</span>
            </div>
            <div className="notification">
               <SwitchCustomStyles check={true} />
               <span>Email me when someone follows me</span>
            </div>
         </div>
      </section>
   )
}