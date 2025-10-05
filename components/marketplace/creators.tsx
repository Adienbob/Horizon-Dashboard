import Image from "next/image"
import HoriChart from "../global/horizontalChart";


type CreatorTypes = {
   details: string[][];
   avatars: string[]
}

export default function Creators({details, avatars}: CreatorTypes) {

   return (

      <section className="creators">
         <table>
            <thead>
               <tr>
                  <th>
                     NAME
                  </th>
                  <th>
                     ARTWORKS
                  </th>
                  <th>
                     RATING
                  </th>
               </tr>
            </thead>
            <tbody>
               {details.map((creatorDetails, creatorIndex) => (
                  <tr key={creatorIndex}>
                     {creatorDetails.map((detail, detailIndex) => (
                        detailIndex === 0 ? (
                           <td key={detailIndex}>
                              <Image 
                                 src={avatars[creatorIndex]}
                                 alt=""
                                 width={30}
                                 height={30}
                              />
                              {detail}
                           </td>
                        ) : detailIndex === 2 ? (
                           (
                              <td key={detailIndex}><HoriChart label="" data={detail} /></td>
                           )
                        ) : (
                           <td key={detailIndex}>{detail}</td>
                        )
                        
                     ))}
                  </tr>
               ))}
            </tbody>
         </table>
      </section>
   )
}