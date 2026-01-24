import Image from "next/image"

type CardTypes = {
   img: string;
   name: string;
   creator: string;
   ETH: string;
   time: string;
}

type CardsTypes = {
   cards: CardTypes[];
}

export default function History({cards}: CardsTypes) {

   return (
      <section className="History md:col-span-2 lg:col-span-1 lg:h-full">
         <div className="flex justify-between">
            <h2>History</h2>
            <button className="text-(--primary-blue) rounded-full font-normal px-5 hover:bg-(--btn-hover) bg-(--main-bg) leading-6 py-1.5">See all</button>
         </div>
         <div className="grid gap-5">
            {cards.map((cardDetails, cardIndex) => (
               <article key={cardIndex} className="p-2.5 rounded-[20px] flex items-center justify-between transform transition-transform duration-300 ease-out hover:scale-102 hover:shadow-[0_18px_40px_0_rgba(112,144,176,0.12)]">
                  <div className="flex items-center">
                     <Image 
                        src={cardDetails.img}
                        alt=""
                        width={66}
                        height={66}
                     />
                     <span className="ml-[18px]">
                        {cardDetails.name}
                        <p className="text-(--secondary) font-normal text-[14px]">{cardDetails.creator}</p>
                     </span>
                  </div>
                  <div className="flex gap-5">
                     <span className="flex gap-2.5">
                        <Image 
                           src={"/assets/marketplace/History/arrow.svg"}
                           alt=""
                           width={9}
                           height={15}
                        />
                        {cardDetails.ETH}
                        ETH
                     </span>
                     <p className="text-(--secondary) font-normal text-[14px]">
                        {cardDetails.time} ago
                     </p>
                  </div>
               </article>
            ))}
         </div>
      </section>
   )
}