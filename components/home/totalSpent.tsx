
import Image from "next/image"
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import IconButton from "../buttons/iconButton";


const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function TotalSpent() {

   const areaSeries: ApexAxisChartSeries = [
         {
            name: "Revenue",
            data: [50, 64, 48, 66, 49, 68],
         },
         {
            name: "profit",
            data: [30, 40, 24, 46, 20, 46]
         }
      ]
      const areaOptions: ApexOptions = {
         chart: {
            type: "area",
            height: 50,
            width: 200,
            toolbar: { show: false },
            zoom: { enabled: false },
            selection: { enabled: false }
         },
         legend: { show: false },
         colors: ["#4318FF", "#6AD2FF" ],
         stroke: {
            curve: "smooth", 
            width: 4,        
         },
         yaxis: {
            show: false,
            labels: {
               formatter: (value) => `$${value}`,
            },
         },
         xaxis: {
            categories: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
            axisBorder: {
               show: false,
            }
         },
         markers: {
            size: 0, 
            colors: ["#fff"], 
            strokeColors: ["#4318FF", "#6AD2FF" ], 
            strokeWidth: 2,
            hover: {
               size: 6, 
            },
         },
         grid: {
            yaxis: {
               lines: {
                  show: false,
               }
            }
         }
      }
   
   return (
      <section className="TotalSpentChart">
         <div className="head">
            <h2 className="sr-only">TotalSpent</h2>
            <button>
               <Image 
                  src={"../assets/global/Buttons/calendar_today.svg"}
                  alt="Calender Icon"
                  width={12}
                  height={10}
               />
               This Month
            </button>
            <IconButton src="../assets/global/Buttons/bar_chart.svg" width={24} height={24} alt="more icon" />
         </div>
         <div className="body">
            <div className="stats">
               <strong>$37.5K</strong>
               <div className="totalSpent">
                  <span>Total Spent</span>
                  <p>+2.45%</p>
               </div>
               <p>icon On track</p>
            </div>
            <div className="lineChart">
               <Chart options={areaOptions} series={areaSeries}  />
            </div>
         </div>
      </section>
   )
}