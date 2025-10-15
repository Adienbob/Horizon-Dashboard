import IconButton from "../buttons/iconButton";

type Table = {
   name: string;
   progress: number;
   quantity: number;
   date: string;
}

type DataTypes = {
   data: Table[];
}

export default function Columns({data}: DataTypes) {

   
   return (
      <section>
         <div className="head">
            <h2>4-Column Table</h2>
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
                  <th>PROGRESS</th>
                  <th>QUANTITY</th>
                  <th>DATE</th>
               </tr>
            </thead>
            <tbody>
               {data.map((row, index) => (
                  <tr key={`row-${index}`}>
                     <td>{row.name}</td>
                     <td>{row.progress}</td>
                     <td>{row.quantity}</td>
                     <td>{row.date}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </section>
   )
}