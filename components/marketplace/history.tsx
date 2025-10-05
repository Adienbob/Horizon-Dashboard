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
      <section className="History">
         <div className="head">
            <h2>History</h2>
            <button>See all</button>
         </div>
         <div className="body">
            {cards.map((cardDetails, cardIndex) => (
               <article key={cardIndex}>
                  <div className="info">
                     <Image 
                        src={cardDetails.img}
                        alt=""
                        width={66}
                        height={66}
                     />
                     <span>
                        {cardDetails.name}
                        <p>{cardDetails.creator}</p>
                     </span>
                  </div>
                  <div className="stats">
                     <span>
                        <Image 
                           src={"/assets/marketplace/History/arrow.svg"}
                           alt=""
                           width={9}
                           height={15}
                        />
                        {cardDetails.ETH}
                        ETH
                     </span>
                     <p>
                        {cardDetails.time}
                        ago
                     </p>
                  </div>
               </article>
            ))}
         </div>
      </section>
   )
}