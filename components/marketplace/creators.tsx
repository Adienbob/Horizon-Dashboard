import Image from "next/image";
import useSort from "../hooks/useSort";
import HoriChart from "../global/horizontalChart";


type CreatorTypes = {
   details: string[][];
   avatars: string[]
}

export default function Creators({details, avatars}: CreatorTypes) {
   const { sortedData, handleSort, setIsSorted } = useSort(details)
   
   return (

      <section className="creators">
         <table>
            <thead>
               <tr>
                  {["NAME", "ARTWORKS", "RATING"].map((title, index) => (
                     <th key={index} onClick={() => {
                        handleSort(index, title.toLowerCase())
                        setIsSorted(prev => !prev)
                     }}>{title}</th>
                  ))}
               </tr>
            </thead>
            <tbody>
               {sortedData.map((creatorDetails, creatorIndex) => (
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