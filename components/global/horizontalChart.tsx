
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type ChartData = {
   label?: string;
   data: number | string;
}

export default function HoriChart({label, data}: ChartData) {

   const barData = {
      labels: [""],
      datasets: [
         {
         label: label || "",
         data: [data], 
         backgroundColor: "#4318FF",
         borderRadius: 10,
         },
      ],
   }

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
      <Bar data={barData} options={barOptions} />
   )
}