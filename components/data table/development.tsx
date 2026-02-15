import MoreButton from "../buttons/moreHoriz";
import Image from "next/image"
import HoriChart from "../global/horizontalChart";
import { useState} from "react";
type PropsTypes = {
   headers: string[],
   data: (string | string[])[][]

}

export default function Development({headers, data}: PropsTypes) {
   const [sortedData, setSortedData] = useState(data); 
   const [isSorted, setIsSorted] = useState<boolean>(false)

   function handleSort(index: number) {
      if (!isSorted) {
         setSortedData(
            sortedData.toSorted((a, b) => {
               const aValue = Array.isArray(a[index]) ? a[index].join(", ") : a[index];
               const bValue = Array.isArray(b[index]) ? b[index].join(", ") : b[index];
               return bValue.localeCompare(aValue, undefined, { sensitivity: "base" });
            })
         );
      } else {
         setSortedData(data)
      }
   }
   return (
      <section className="md:col-span-2 2xl:col-span-3" id="table">
         <div className="head">
            <h2>Development Table</h2>
            <MoreButton />
         </div>
         <table>
            <thead>
               <tr className="[&_button]:font-medium">
                  {headers.map((head, index) => (
                     <th key={index} onClick={() => {
                        handleSort(index)
                        setIsSorted(prev => !prev)
                     }}><button>{head}</button></th>
                  ))}
               </tr>
            </thead>
            <tbody>
               {sortedData.map((row, rowIndex) => (
                  <tr key={`row-${rowIndex}`}>
                     {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>
                           <div className={cellIndex === 1 ? "flex gap-2" : ""}>
                              {
                                 Array.isArray(cell) 
                                 ? cell.map((osType, osIndex) => (
                                    osType === "apple" 
                                    ?  <Image key={`os-${osIndex}`} src={"../assets/data tables/icons/Apple_logo_black 1.svg"} alt="" width={15} height={18} />
                                    : osType.toLowerCase() === "android"
                                    ?  <Image key={`os-${osIndex}`} src={"../assets/data tables/icons/android-seeklogo.com 1.svg"} alt="" width={16} height={18} />
                                    : osType.toLowerCase() === "windows"
                                    ?  <Image key={`os-${osIndex}`} src={"../assets/data tables/icons/Windows_logo_-_2012 1.svg"} alt="" width={19} height={18} />
                                    : ""
                                 ))
                              : cellIndex === 3 
                              ?  (
                                 <p>{cell}% <HoriChart data={cell} label="revenue" /></p>
                              )
                              : cell
                              }
                           </div>
                        </td>
                     ))}
                  </tr>
               ))}
            </tbody>
         </table>
      </section>
   )
}