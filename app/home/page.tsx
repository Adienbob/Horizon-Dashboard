"use client"
import dynamic from "next/dynamic";

import CheckTable from "@/components/global/checkTable";
import ComplexTable from "@/components/global/complexTable";
import Tasks from "@/components/home/tasks";
import Lessons from "@/components/home/lessons";
import TeamMembers from "@/components/home/members";
import SecurityCards from "@/components/home/security";
import DashboardOverview from "@/components/home/overview";
import LazyLoad from "@/components/global/lazyChart";
import StackedChart from "@/components/home/revenue"
import TotalSpent from "@/components/home/totalSpent"

const PieChart = dynamic(() => import("@/components/home/pieChart"), {
   ssr: false,
});

const BarChart = dynamic(() => import("@/components/home/traffic"), {
   ssr: false,
});


export default function Home() {
   

   return (
      <>
         <DashboardOverview />
         <TotalSpent />
         <StackedChart />
         <CheckTable 
            headers={["NAME", "PROGRESS", "QUANTITY", "DATE", ]} 
            data={
               [
                  ["Horizon UI PRO", "17.5%", "2458", "12 Jan 2021"],
                  ["Horizon UI Free	", "10.8%", "1485", "21 Feb 2021"],
                  ["Weekly Update", "21.3%", "1024", "13 Mar 2021"],
                  ["Venus 3D Asset", "31.5%", "858", "24 Jan 2021"],
                  ["Marketplace", "12.2%", "258", "24 Oct 2022"],
               ]
            }
            input={true}
            className={["horizon-pro", "horizon-free", "weekly-update, venus-asset", "marketplace"]}
         />
         <LazyLoad>
            <BarChart/>
         </LazyLoad>
         <LazyLoad>
            <PieChart/>
         </LazyLoad>
         <ComplexTable 
            headers={["NAME", "STATUS", "DATE", "PROGRESS"]}
            data={[
               ["Horizon UI PRO", "Approved", "18 Apr 2024", "80" ],
               ["Horizon UI Free", "Disable", "18 Apr 2025", "20" ],
               ["Marketplace", "Error", "20 May 2025", "95" ],
               ["Weekly Updates", "Approved", "12 Jul 2024", "40" ]
            ]}
         />
         <Tasks 
            tasksNames={[
               "Landing Page Design", 
               "Dashboard Builder", 
               "Mobile App Design", 
               "Illustrations", 
               "Promotional LP"
            ]} 
            isChecked={[
                  false, 
                  true, 
                  true, 
                  false, 
                  true
               ]}
               taskId={[
                  "landing-page",
                  "dashboard-builder",
                  "mobile-app",
                  "illustrations",
                  "promotional-lp",
               ]} 
            />
         <Lessons />
         <TeamMembers />
         <SecurityCards />
      </>
   )
}