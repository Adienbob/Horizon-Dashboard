import IconButton from "../buttons/iconButton";
import Image from "next/image"
import HoriChart from "../global/horizontalChart";

type Table = {
   name: string;
   os: string[];
   date: string;
   progress: number;
}

type DataTypes = {
   data: Table[];
}

export default function Development({data}: DataTypes) {

   return (
      <section>
         <div className="head">
            <h2>Development Table</h2>
            <IconButton 
               src="../assets/global/Buttons/more_horiz.svg" 
               width={24} 
               height={24} 
               alt="more icon"  
            />
         </div>
         <table>
            <thead>
               <tr>
                  <th>NAME</th>
                  <th>SYSTEM</th>
                  <th>DATE</th>
                  <th>PROGRESS</th>
               </tr>
            </thead>
            <tbody>
               {data.map((row, index) => (
                  <tr key={`row-${index}`}>
                     <td>{row.name}</td>
                     <td>
                        {row.os.map((osType, index) => (
                           osType.toLowerCase() === "apple" 
                           ? <Image key={`os-${index}`} src={"../assets/data tables/icons/Apple_logo_black 1.svg"} alt="" width={15} height={18} />
                           : osType.toLowerCase() === "android" 
                           ? <Image key={`os-${index}`} src={"../assets/data tables/icons/android-seeklogo.com 1.svg"} alt="" width={16} height={18} />
                           : osType.toLowerCase() === "windows" 
                           ? <Image key={`os-${index}`} src={"../assets/data tables/icons/Windows_logo_-_2012 1.svg"} alt="" width={19} height={18} />
                           : ""
                        ))}
                     </td>
                     <td>{row.date}</td>
                     <td>{row.progress}% <HoriChart label="" data={row.progress} /></td>
                  </tr>
               ))}
            </tbody>
         </table>
      </section>
   )
}