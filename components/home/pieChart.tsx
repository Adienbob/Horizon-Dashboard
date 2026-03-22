import {
   Chart as ChartJS,
   ArcElement,
   Title,
   Tooltip,
   Legend,
   ChartOptions,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Title, Tooltip, Legend);

export default function PieChart() {
   const data = {
      labels: ["Your files", "System", "Empty"], 
      datasets: [
         {
         label: "Storage", 
         data: [63, 25, 12],
         backgroundColor: ["#4318FF", "#6AD2FF", "#EFF4FB"], 
         borderWidth: 0,
         },
      ],
   };

   const options: ChartOptions<"pie"> = {
      responsive: true,
      plugins: {
      legend: { display: false }, 
      title: { display: false },
      tooltip: {
         displayColors: false,
         callbacks: {
            title: () => "",
               label: (ctx) => {
                  const label = ctx.chart.data.labels?.[ctx.dataIndex] || "";
                  const value = ctx.raw as number;
                  return `${label}: ${value}`;
               },
            },
         },
      },
   };

   return (
      <section className="2xl:col-span-3 flex flex-col items-center w-full">
         <div className="head w-full">
            <h2>Your Pie Chart</h2>
            <label htmlFor="period" className="mr-2">
               Select period
            </label>
            <select name="period" id="period">
               <option value="daily">Daily</option>
               <option value="weekly">Weekly</option>
               <option value="monthly">Monthly</option>
               <option value="yearly">Yearly</option>
            </select>
         </div>
         <div className="body w-[50%] flex justify-center mb-[21px]">
            <Pie data={data} options={options} />
         </div>
         <div className="flex w-[90%] justify-between dark:bg-(--lessons-btns-bg) rounded-[15px] px-10 py-3.5 text-center text-sm font-medium text-(--secondary) [&_span]:inline-block [&_span]:w-2 [&_span]:h-2 [&_span]:rounded-full [&_strong]:text-(--primary)  [&_strong]:text-[18px] [&_strong]:font-bold">
            <div>
               <p><span className="bg-[#4318FF]"></span> Your files</p>
               <strong>63%</strong>
            </div>
            <div className="w-0.5  dark:bg-white/10"></div>
            <div>
               <p><span className="bg-[#6AD2FF]"></span> System</p>
               <strong>25%</strong>
            </div>
         </div>
      </section>
   );
}
