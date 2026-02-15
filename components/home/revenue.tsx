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
import IconButton from "../buttons/iconButton";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function StackedBarChart() {
   const labels = [
      "17", "18", "19", "20", "21", "22", "23", "24", "25"
   ];

   const data = {
      labels,
      datasets: [
      {
         label: "PRODUCT A",
         data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
         backgroundColor: "#4318FF",
      },
      {
         label: "PRODUCT B",
         data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
         backgroundColor: "#6AD2FF",
      },
      {
         label: "PRODUCT C",
         data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
         backgroundColor: "#EFF4FB",
         borderRadius: { topLeft: 60, topRight: 60 },
      },
      ],
   };

   const options: ChartOptions<"bar"> = {
      responsive: true,
      plugins: {
      legend: { position: "top" },
      title: { display: true, text: "9 Bars with 3 Stacks Each" },
      },
      scales: {
         x: { stacked: true, grid: { display: false }, border: {display: false} },
         y: {display: false, stacked: true},
      },
   };

   return (
      <section className="2xl:col-span-6">
         <div className="head">
            <h2>Weekly Revenue</h2>
            <IconButton src="../assets/global/Buttons/bar_chart.svg" width={24} height={24} alt="more icon"  />
         </div>
         <div className="body">
            <Bar data={data} options={options} />
         </div>
      </section>
   );
}
