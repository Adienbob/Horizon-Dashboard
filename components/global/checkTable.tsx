import MoreButton from "../buttons/moreHoriz";
import useSort from "../hooks/useSort";

type Data = {
   headers: string[];
   data: string[][];
   input?: boolean;
   className?: string[];
}
export default function CheckTable({headers, data, input, className}: Data) {
   const { sortedData, handleSort, setIsSorted } = useSort(data)

   return (
      <section className="md:col-span-2" id="table">
         <div className="head">
            <h2>Check Table</h2>
            <MoreButton />
         </div>
         <div className="body">
            <table>
               <thead>
                  <tr>
                     {headers?.map((name, index) => (
                        <th key={index} onClick={() => {
                           handleSort(index, name.toLowerCase(), true)
                           setIsSorted(prev => !prev)
                        }}><button>{name}</button></th>
                     ))}
                  </tr>
               </thead>
               <tbody>
                  {sortedData?.map((data, index) => (
                     <tr key={index}>
                        {data.map((cell, ColIndex) => (
                           <td key={ColIndex}>
                              {input && ColIndex === 0 ? (
                                 <div className="flex items-center gap-1">
                                    <input type="checkbox" aria-labelledby={className?.[index]} />
                                    <span id={className?.[index]}>{cell}</span>
                                 </div>
                              ) : (
                                 cell
                              )}
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