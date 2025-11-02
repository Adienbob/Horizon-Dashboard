import MoreButton from "../buttons/moreHoriz";

type Data = {
   names: string[];
   columnsData?: (string | number)[][];
   input?: boolean;
   className?: string[];
}
export default function CheckTable({names, columnsData, input, className}: Data) {

   return (
      <section className="checkTable">
         <div className="head">
            <h2>Check Table</h2>
            <MoreButton />
            <div>

            </div>
         </div>
         <div className="body">
            <table>
               <thead>
                  <tr>
                     {names?.map((name, index) => (
                        <th key={index}>{name}</th>
                     ))}
                  </tr>
               </thead>
               <tbody>
                  {columnsData?.map((data, index) => (
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