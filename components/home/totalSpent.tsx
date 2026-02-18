
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
            height: "100%",
            width: "100%",
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
      <section className="2xl:col-span-6">
         <div className="head">
            <h2 className="sr-only">TotalSpent</h2>
            <button className="flex items-center">
               <Image 
                  src={"../assets/global/Buttons/calendar_today.svg"}
                  alt="Calender Icon"
                  width={12}
                  height={10}
                  className="mr-[7.5px]"
               />
               <span className="text-(--secondary) text-sm font-medium">This month</span>
            </button>
            <IconButton src="../assets/global/Buttons/bar_chart.svg" width={24} height={24} alt="more icon" />
         </div>
         <div className="flex md:grid 2xl:flex">
            <div className="md:flex md:justify-between 2xl:grid h-fit">
               <div>
                  <strong className="text-(--primary) text-[34px] tracking-[-0.02em] leading-[42px] mt-5 block">$37.5K</strong>
                  <p className="text-(--secondary) text-sm flex text-nowrap mb-6 font-medium">Total Spent 
                     <span className="text-(--growth) text-sm font-bold flex items-center pl-2">
                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <g clipPath="url(#clip0_201_2539)">
                              <path d="M5.86963 10.4697L10.0622 6.7305L14.2547 10.4697H5.86963Z" fill="#05CD99"/>
                           </g>
                           <defs>
                              <clipPath id="clip0_201_2539">
                                 <rect width="20.1242" height="17.948" fill="white"/>
                              </clipPath>
                           </defs>
                        </svg>
                        +2.45%
                     </span>
                  </p>
               </div>
               <p className="text-(--growth) tracking-[-0.02em] font-bold flex items-center gap-1.5"> 
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="16" height="16" rx="8" fill="#05CD99"/>
                  <g clipPath="url(#clip0_201_1861)">
                  <path d="M6.82081 9.74874L5.21665 8.14457C5.0379 7.96582 4.75373 7.96582 4.57498 8.14457C4.39623 8.32332 4.39623 8.60749 4.57498 8.78624L6.4954 10.7067C6.67415 10.8854 6.9629 10.8854 7.14165 10.7067L12 5.85291C12.1787 5.67416 12.1787 5.38999 12 5.21124C11.8212 5.03249 11.5371 5.03249 11.3583 5.21124L6.82081 9.74874Z" fill="white"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_201_1861">
                  <rect width="11" height="11" fill="white" transform="translate(2.6958 2.32373)"/>
                  </clipPath>
                  </defs>
                  </svg>
                  On track
               </p>
            </div>
            <div className="w-full">
               <Chart options={areaOptions} series={areaSeries}  />
            </div>
         </div>
      </section>
   )
}