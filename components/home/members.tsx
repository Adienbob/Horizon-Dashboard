import Image from "next/image";
import MoreVertBtn from "../buttons/moreVert";


type Details = {
   name: string,
   title: string,
   avatar: string
}

function Member({name, title, avatar}: Details) {

   return (
      <div className="member">
         <Image 
            src={avatar}
            alt=""
            width={46}
            height={46}
         />
         <div className="details">
            <span>{name}</span>
            <p>{title}</p>
         </div>
         <MoreVertBtn />
      </div>
   )
}

export default function TeamMembers() {

   return (
      <section className="">
         <div className="head">
            <h2>Team Members</h2>
            <button>
               <Image 
                  src={"../assets/home/team members/add_circle.svg"}
                  alt=""
                  width={24}
                  height={24}
               />
            </button>
         </div>
         <div className="body">
            <Member name="Adela Parkson" title="Creative Director" avatar="../assets/home/team members/adela.svg" />
            <Member name="Christian Mad" title="Product Designer" avatar="../assets/home/team members/christian.svg" />
            <Member name="Jason Statham" title="Junior Graphic Designer" avatar="../assets/home/team members/jason_statham.svg" />
         </div>
      </section>
   )
}