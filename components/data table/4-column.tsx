import MoreButton from "../buttons/moreHoriz";
import useSort from "../hooks/useSort";

type PropsData = {
   headers: string[];
   data: string[][];
}

export default function Columns({headers, data}: PropsData) {
   const { sortedData, handleSort, setIsSorted } = useSort(data)

   
   return (
      <section>
         <div className="head">
            <h2>4-Column Table</h2>
            <MoreButton />
         </div>
         <table>
            <thead>
               <tr>
                  {headers?.map((name, index) => (
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
                        <td key={ColIndex}>{cell}</td>
                     ))}
                  </tr>
               ))}
            </tbody>
         </table>
      </section>
   )
}