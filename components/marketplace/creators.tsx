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

      <section className="leading-6 mb-5 md:col-span-2" id="table">
         <div className="flex justify-between mb-5">
            <h2 className="leading-9 text-[20px]">
               Top Creators
            </h2>
            <button className="text-(--primary-blue) rounded-full font-normal px-5 hover:bg-(--btn-hover) bg-(--main-bg) leading-6 py-1.5">See all</button>
         </div>
         <table className="">
            <thead>
               <tr>
                  {["NAME", "ARTWORKS", "RATING"].map((title, index) => (
                     <th key={index} className="text-(--secondary) font-normal" onClick={() => {
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
                           <td key={detailIndex} className="flex text-[14px] items-center gap-1.5">
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
                           <td key={detailIndex} className="text-[14px] text-(--secondary) font-normal">{detail}</td>
                        )
                        
                     ))}
                  </tr>
               ))}
            </tbody>
         </table>
      </section>
   )
}