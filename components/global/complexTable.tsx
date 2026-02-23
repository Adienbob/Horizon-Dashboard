import Image from "next/image"
import useSort from "../hooks/useSort";
import MoreButton from "../buttons/moreHoriz";
import HoriChart from "./horizontalChart";


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
                  <tr className="[&_button]:font-medium">
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
                                    <Image src={"../assets/global/complexTable/check_circle.svg"} alt="" width={20} height={20} /> {cell}
                                 </div>
                                 ) : cell.toLowerCase() === "disable" ? (
                                 <div className="flex gap-1.5">
                                    <Image src={"../assets/global/complexTable/cancel.svg"} alt="" width={20} height={20} /> {cell}
                                 </div>
                                 ) : cell.toLowerCase() === "error" ? (
                                 <div className="flex gap-1.5">
                                    <Image src={"../assets/global/complexTable/error.svg"} alt="" width={20} height={20} /> {cell}
                                 </div>
                                 ) : (
                                 cell
                                 )
                              ) : colIndex === 3 ? (
                                 <HoriChart progressPrecentage={cell} />
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