import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend,
   ChartOptions,
   ScriptableContext,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Traffic() {

   const data = {
   labels: [20, 30, 40, 20, 45, 50, 30],
   datasets: [
      {
         label: "Daily Traffic",
         data: [20, 30, 40, 20, 45, 50, 30],
         borderRadius: { topLeft: 60, topRight: 60, bottomLeft: 0, bottomRight: 0 },
         borderWidth: 0,
         maxBarThickness: 48,
         barPercentage: 0.7,
         categoryPercentage: 0.8,
         backgroundColor: (ctx: ScriptableContext<"bar">) => {

         const chart = ctx.chart;
         const { ctx: canvasCtx, chartArea } = chart;
         if (!chartArea) return "rgba(37, 99, 235, 1)"; 

         const gradient = canvasCtx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
         );

         gradient.addColorStop(0, "rgba(67, 24, 255, 1)"); 

         gradient.addColorStop(1, "rgba(67, 24, 255, 0.28)");

         return gradient;
         }

      },
   ],
};

   const barOptions: ChartOptions<"bar"> = {
      indexAxis: "x", 
      responsive: true,
      plugins: {
         legend: { display: false },
         title: { display: false },
      },
      scales: {
         x: { 
            grid: {
               drawTicks: false,
               display: false
            },
            border: {
               display: false
            },
            ticks: {
               padding: 40
            }
            

         }, 
         y: { display: false }, 
      },
   };

   return (
   <section className="dailyTraffic">
         <h2 className="sr-only">Daily Traffic</h2>
         <div className="head">
            <div>
               <p>Daily Traffic</p>
               <p>+2.45%</p>
            </div>
            <p><strong>2.579</strong>visitors</p>
         </div>
         <div className="body">
            <Bar data={data} options={barOptions} />
         </div>
      </section>
   )
}