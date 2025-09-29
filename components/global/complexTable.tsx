import Image from "next/image"
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend,
   ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import IconButton from "../Buttons/iconButton";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


type Data = {
   names: string[];
   columnsData?: (string)[][];
}
export default function ComplexTable({names, columnsData}: Data) {

   const barOptions: ChartOptions<"bar"> = {
      indexAxis: "y", 
      responsive: true,
      plugins: {
         legend: { display: false },
         title: { display: false },
      },
      scales: {
         x: { display: false }, 
         y: { display: false }, 
      },
   };

   return (
      <section>
         <div className="head">
            <h2>Complex Table</h2>
            <IconButton src="../assets/global/Buttons/more_horiz.svg" width={24} height={24} alt="more icon"  />
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
                                 <div className="barChart">
                                    <Bar
                                    data={{
                                       labels: [""],
                                       datasets: [
                                          {
                                          label: "Revenue",
                                          data: [Number(cell)], 
                                          backgroundColor: "#4318FF",
                                          borderRadius: 10,
                                          },
                                       ],
                                    }}
                                    options={barOptions}
                                    />
                                 </div>
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