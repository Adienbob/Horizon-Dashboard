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
      <article>
         <Image 
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
         />
         <span>{head}</span>
         <p>Project #{rank} <Link href={"#"} /></p>
         <IconButton 
            src="../assets/profile/icons/edit.svg"
            alt=""
            width={18}
            height={18}
         />
      </article>
   )
}

export default function Projects() {

   return (
      
      <section className="all-projects">
         <h2>All Projects</h2>
         <p className="description">Here you can find more details about your projects. Keep you user engaged by providing meaningful information.</p>
         <div className="projects">
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