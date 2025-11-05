"use client"
import Columns from "@/components/data table/4-column";
import Development from "@/components/data table/development";
import CheckTable from "@/components/global/checkTable";
import ComplexTable from "@/components/global/complexTable";



export default function Tables() {

   return (
      <>
      
         <Development 
         headers={["NAME", "TECH", "DATE", "PROGRESS"]}
         data={[
            ["Marketplace", ["apple", "android", "windows"], "12.Jan.2021", "79.8"],
            ["Venus DB PRO", ["apple"], "21.Feb.2021", "35.4"],
            ["Venus DS", ["apple", "windows"], "13.Mar.2021", "25"],
            ["Venus 3D Asset", ["apple", "android", "windows"], "24.Jan.2021", "12.8"],
            ["Marketplace", ["apple", "windows"], "Oct 24, 2022", "75.5"],
            ["Phantom", ["apple", "android", "windows"], "21.Feb.2021", "48.5"],
            ["Rengo", ["android", "windows"], "13.Mar.2021", "75.5"],
         ]} />
         <CheckTable 
            headers={["NAME", "PROGRESS", "QUANTITY", "DATE", ]} 
            data={
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
            headers={["NAME", "PROGRESS", "QUANTITY", "DATE"]}
            data={[
               ["Marketplace", "2458", "12.Jan.2021", "79.8"],
               ["Venus DB PRO", "1485", "21.Feb.2021", "35.4"],
               ["Venus DS", "1024", "13.Mar.2021", "25"],
               ["Venus 3D Asset", "858", "24.Jan.2021", "98.4"],
               ["Marketplace", "985", "Oct 24, 2022", "75.5"],
               ["Phantom", "506", "21.Feb.2021", "48.5"],
               ["Rengo", "100", "13.Mar.2021", "75.5"],
            ]}
         />
         <ComplexTable 
            headers={["NAME", "STATUS", "DATE", "PROGRESS"]}
            data={[
               ["Horizon UI PRO", "Approved", "18 Apr 2025", "80" ],
               ["Horizon UI Free", "Disable", "18 Apr 2025", "20" ],
               ["Marketplace", "Error", "20 May 2025", "95" ],
               ["Weekly Updates", "Approved", "12 Jul 2024", "40" ]
            ]}
         />
      </>
   )
}