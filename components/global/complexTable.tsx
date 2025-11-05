import Image from "next/image"
import HoriChart from "./horizontalChart";
import MoreButton from "../buttons/moreHoriz";
import useSort from "../hooks/useSort";


type Data = {
   headers: string[];
   data: (string)[][];
}
export default function ComplexTable({headers, data}: Data) {
   const { sortedData, handleSort, setIsSorted } = useSort(data)
   

   return (
      <section>
         <div className="head">
            <h2>Complex Table</h2>
            <MoreButton />
         </div>
         <div className="body">
            <table>
               <thead>
                  <tr>
                     {headers.map((title, index) => (
                     <th key={index} onClick={() => {
                        handleSort(index, title.toLowerCase())
                        setIsSorted(prev => !prev)
                     }}>
                        {title}
                     </th>
                     ))}
                  </tr>
               </thead>
               <tbody>
                  {sortedData.map((data, index) => (
                     <tr key={index}>
                        {data.map((cell, colIndex) => (
                           <td key={colIndex}>
                              {colIndex === 1 ? (
                                 cell.toLowerCase() === "approved" ? (
                                 <>
                                    <Image src={"../assets/global/complexTable/check_circle.svg"} alt={cell} width={20} height={20} /> {cell}
                                 </>
                                 ) : cell.toLowerCase() === "disable" ? (
                                 <>
                                    <Image src={"../assets/global/complexTable/cancel.svg"} alt={cell} width={20} height={20} /> {cell}
                                 </>
                                 ) : cell.toLowerCase() === "error" ? (
                                 <>
                                    <Image src={"../assets/global/complexTable/error.svg"} alt={cell} width={20} height={20} /> {cell}
                                 </>
                                 ) : (
                                 cell
                                 )
                              ) : colIndex === 3 ? (
                                 <HoriChart data={cell} label="revenue" />
                              ) : cell}
                           </td>
                        ))}
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </section>
   )
}