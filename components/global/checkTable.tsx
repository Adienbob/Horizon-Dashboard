import MoreButton from "../buttons/moreHoriz";
import useSort from "../hooks/useSort";

type Data = {
   names: string[];
   columnsData: string[][];
   input?: boolean;
   className?: string[];
}
export default function CheckTable({names, columnsData, input, className}: Data) {
   const { sortedData, handleSort, setIsSorted } = useSort(columnsData)

   return (
      <section className="checkTable">
         <div className="head">
            <h2>Check Table</h2>
            <MoreButton />
         </div>
         <div className="body">
            <table>
               <thead>
                  <tr>
                     {names?.map((name, index) => (
                        <th key={index} onClick={() => {
                           handleSort(index, name.toLowerCase(), true)
                           setIsSorted(prev => !prev)
                        }}>{name}</th>
                     ))}
                  </tr>
               </thead>
               <tbody>
                  {sortedData?.map((data, index) => (
                     <tr key={index}>
                        {data.map((cell, ColIndex) => (
                           <td key={ColIndex}>
                              {input && ColIndex === 0 ? (
                                 <>
                                    <input type="checkbox" aria-labelledby={className?.[index]} />
                                    <span id={className?.[index]}>{cell}</span>
                                 </>
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