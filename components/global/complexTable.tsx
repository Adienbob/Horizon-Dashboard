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
      <section className="md:col-span-2" id="table">
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
                        <button>{title}</button>
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
                                 <div className="flex gap-1.5">
                                    <Image src={"../assets/global/complexTable/check_circle.svg"} alt={cell} width={20} height={20} /> {cell}
                                 </div>
                                 ) : cell.toLowerCase() === "disable" ? (
                                 <div className="flex gap-1.5">
                                    <Image src={"../assets/global/complexTable/cancel.svg"} alt={cell} width={20} height={20} /> {cell}
                                 </div>
                                 ) : cell.toLowerCase() === "error" ? (
                                 <div className="flex gap-1.5">
                                    <Image src={"../assets/global/complexTable/error.svg"} alt={cell} width={20} height={20} /> {cell}
                                 </div>
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