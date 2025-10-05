import Columns from "@/components/data table/4-column";
import Development from "@/components/data table/development";
import CheckTable from "@/components/global/checkTable";
import ComplexTable from "@/components/global/complexTable";


export default function Tables() {

   return (
      <>
      
         <Development data={[
            {
               name: "Marketplace", 
               os: ["apple", "android", "windows"], 
               date: "12.Jan.2021", 
               progress: 79.8
            },
            {
               name: "Venus DB PRO", 
               os: ["apple"], 
               date: "21.Feb.2021", 
               progress: 35.4
            },
            {
               name: "Venus DS", 
               os: ["apple", "windows"], 
               date: "13.Mar.2021", 
               progress: 25
            },
            {
               name: "Venus 3D Asset", 
               os: ["apple", "android", "windows"], 
               date: "24.Jan.2021",
               progress: 100
            },
            {
               name: "Marketplace", 
               os: ["apple", "windows"], 
               date: "Oct 24, 2022",
               progress: 75.5
            },
            {
               name: "Phantom", 
               os: ["apple", "android", "windows"], 
               date: "21.Feb.2021",
               progress: 48.5
            },
            {
               name: "Rengo", 
               os: ["android", "windows"], 
               date: "13.Mar.2021",
               progress: 75.5
            },
         ]} />
         <CheckTable 
            names={["NAME", "PROGRESS", "QUANTITY", "DATE", ]} 
            columnsData={
               [
                  ["Marketplace", "75.5%", "2458", "12.Jan.2021"],
                  ["Horizon UI Free	", "35.4%", "1485", "21.Feb.2021"],
                  ["Weekly Update", "25%", "1024", "13.Mar.2021"],
                  ["Venus 3D Asset", "100%", "858", "24.Jan.2021"],
                  ["Marketplace", "75.5%", "258", "Oct 24, 2022"],
                  ["Venus DB PRO", "75.5%", "2458", "12.Jan.2021"],
                  ["Horizon UI Free	", "35.4%", "1485", "21.Feb.2021"],
                  ["Venus DS", "25%", "487", "13.Mar.2021"],
                  ["Venus 3D Asset", "100%", "985", "24.Jan.2021"],
                  ["Marketplace", "75.5%", "468", "Oct 24, 2022"],
               ]
            }
            input={true}
            className={[
               "marketplace", 
               "horizon-free", 
               "weekly-update", 
               "venus-asset", 
               "marketplace", 
               "venus-db-pro", 
               "horizon-free",
               "venus-db",
               "venus-asset",
               "marketplace",
            ]}
         />
         <Columns
            data={[
               {
               name: "Marketplace",
               quantity: 2458,
               date: "12.Jan.2021", 
               progress: 79.8
            },
            {
               name: "Venus DB PRO",
               quantity: 1485,
               date: "21.Feb.2021", 
               progress: 35.4
            },
            {
               name: "Venus DS",
               quantity: 1024,
               date: "13.Mar.2021", 
               progress: 25
            },
            {
               name: "Venus 3D Asset",
               quantity: 858,
               date: "24.Jan.2021",
               progress: 248
            },
            {
               name: "Marketplace",
               quantity: 985,
               date: "Oct 24, 2022",
               progress: 75.5
            },
            {
               name: "Phantom", 
               quantity: 506,
               date: "21.Feb.2021",
               progress: 48.5
            },
            {
               name: "Rengo",
               quantity: 100,
               date: "13.Mar.2021",
               progress: 75.5
            },
            ]}
         />
         <ComplexTable 
            names={["NAME", "STATUS", "DATE", "PROGRESS"]}
            columnsData={[
               ["Horizon UI PRO", "Approved", "18 Apr 2025", "80" ],
               ["Horizon UI Free", "Disable", "18 Apr 2025", "20" ],
               ["Marketplace", "Error", "20 May 2025", "95" ],
               ["Weekly Updates", "Approved", "12 Jul 2024", "40" ]
            ]}
         />
      </>
   )
}