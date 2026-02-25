import Image from "next/image";
import Link from "next/link"
import IconButton from "../buttons/iconButton";

type ImageTypes = {
   src: string;
   alt: string;
   width: number;
   height: number;
}

type ProjectTypes = {
   head: string;
   rank: number;
   img: ImageTypes;
}

function Project({head, rank, img}: ProjectTypes) {

   return (
      <article className="flex justify-between p-3.5 shadow-[0_18px_40px_0_rgba(112,144,176,0.12)] rounded-2xl">
         <div className="flex items-center gap-[19px]">
            <Image 
               src={img.src}
               alt={img.alt}
               width={img.width}
               height={img.height}
            />
            <div className="">
               <span>{head}</span>
               <p className="text-(--secondary) font-medium text-sm">Project #{rank} <span className="px-0.5">•</span>  <Link href={"#"} className="text-(--primary-blue) underline">See project details</Link></p>
            </div>
         </div>
            <IconButton 
               src="../assets/profile/icons/edit.svg"
               label="edit project"
               width={18}
               height={18}
            />
      </article>
   )
}

export default function Projects() {

   return (
      
      <section className="all-projects shadow-[14px_17px_40px_4px_rgba(112,144,176,0.08)] md:col-span-2 lg:col-span-6 lg:row-end-2 2xl:w-[32.5%]">
         <h2 className="text-[20px]">All Projects</h2>
         <p className="text-(--secondary) font-normal leading-[26px]">Here you can find more details about your projects. Keep you user engaged by providing meaningful information.</p>
         <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-1">
            <Project 
               head="Technology behind the Blockchain"
               rank={1}
               img={{
                  src: "/assets/profile/images/project_1.jpg",
                  alt: "",
                  width: 79,
                  height: 80
               }}
            />
            <Project 
               head="Greatest way to a good Economy"
               rank={2}
               img={{
                  src: "/assets/profile/images/project_2.jpg",
                  alt: "",
                  width: 79,
                  height: 80
               }}
            />
            <Project 
               head="Most essential tips for Burnout"
               rank={3}
               img={{
                  src: "/assets/profile/images/project_3.jpg",
                  alt: "",
                  width: 79,
                  height: 80
               }}
            />
         </div>
      </section>
   )
}