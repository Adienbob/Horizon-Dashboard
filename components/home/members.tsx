import Image from "next/image";
import MoreVertBtn from "../buttons/moreVert";
import IconButton from "../buttons/iconButton";


type Details = {
   name: string,
   title: string,
   avatar: string
}

function Member({name, title, avatar}: Details) {

   return (
      <div className="flex items-center shadow-[0_18px_40px_0_rgba(112,144,176,0.12)] px-4 py-3 rounded-2xl">
         <Image 
            src={avatar}
            alt=""
            width={46}
            height={46}
         />
         <div className="ml-[18px] mr-auto">
            <span className="leading-7">{name}</span>
            <p className="text-(--secondary) font-medium leading-5">{title}</p>
         </div>
         <MoreVertBtn />
      </div>
   )
}

export default function TeamMembers() {

   return (
      <section className="2xl:col-span-4">
         <div className="head">
            <h2>Team Members</h2>
            <IconButton label="Add more members" src="../assets/home/team members/add_circle.svg" width={24} height={24} />
         </div>
         <div className="grid gap-4">
            <Member name="Adela Parkson" title="Creative Director" avatar="../assets/home/team members/adela.svg" />
            <Member name="Christian Mad" title="Product Designer" avatar="../assets/home/team members/christian.svg" />
            <Member name="Jason Statham" title="Junior Graphic Designer" avatar="../assets/home/team members/jason_statham.svg" />
         </div>
      </section>
   )
}