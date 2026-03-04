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
      <div className="flex items-center shadow-[0_18px_40px_0_rgba(112,144,176,0.12)] dark:shadow-none dark:bg-(--lessons-btns-bg) px-4 py-3 rounded-2xl">
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
            <button>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clipPath="url(#clip0_201_2854)">
               <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z" fill="var(--btn-color)"/>
               </g>
               <defs>
               <clipPath id="clip0_201_2854">
               <rect width="24" height="24" fill="white"/>
               </clipPath>
               </defs>
               </svg>
            </button>
         </div>
         <div className="grid gap-4">
            <Member name="Adela Parkson" title="Creative Director" avatar="../assets/home/team members/adela.svg" />
            <Member name="Christian Mad" title="Product Designer" avatar="../assets/home/team members/christian.svg" />
            <Member name="Jason Statham" title="Junior Graphic Designer" avatar="../assets/home/team members/jason_statham.svg" />
         </div>
      </section>
   )
}