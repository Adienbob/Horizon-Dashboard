import Image from "next/image";
import PrimaryButton from "../buttons/primaryButtons";
import IconButton from "../buttons/iconButton";

type ImgAndIcons = {
   src: string;
   alt: string;
   width: number;
   height: number;
}

type BtnTypes = {
   text: string;
   color: string;
}

type dataTypes = {
   head: string;
   image?: ImgAndIcons;
   content: string;
   btn: BtnTypes;
   avatars: ImgAndIcons;
}

type KanbanData = {
   className: string;
   columnHeader: string;
   articles: dataTypes[];
}

export default function Columns({className, columnHeader, articles}: KanbanData) {

   return (
      <section className={className}>
         <div className="head">
            <h2>{columnHeader}</h2>
            <IconButton 
               src="../assets/data tables/icons/add_icon.svg"
               alt=""
               width={18}
               height={17}
               className="add"
            />
         </div>
         <div className="body">
            {articles.map((article, index) => (
               <article key={`art-${index}`}>
                  <div className="header">
                     <h3>{article.head}</h3>
                     <IconButton 
                        src="../assets/data tables/icons/edit.svg"
                        alt=""
                        width={18}
                        height={17}
                        className="edit"
                     />
                  </div>
                  <div className="body">
                     {article.image ? 
                        <Image 
                           src={article.image.src}
                           alt={article.image.alt}
                           width={article.image.width}
                           height={article.image.height}
                        />
                        : ""
                     }
                     <p>{article.content}</p>
                  </div>
                  <div className="footer">
                     <Image 
                        src={article.avatars.src}
                        alt={article.avatars.alt}
                        width={article.avatars.width}
                        height={article.avatars.height}
                     />
                     <PrimaryButton text={article.btn.text} color={article.btn.color} />
                  </div>
               </article>
            ))}
         </div>
      </section>
   )
}

