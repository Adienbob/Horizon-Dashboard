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
import { useMemo, memo } from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function StackedBarChart() {

   const data = useMemo(() => ({
      labels: ["17", "18", "19", "20", "21", "22", "23", "24", "25"],
      datasets: [
      {
         label: "PRODUCT A",
         data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
         backgroundColor: "#6AD2FF",
      },
      {
         label: "PRODUCT B",
         data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
         backgroundColor: "#4318FF",
      },
      {
         label: "PRODUCT C",
         data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
         backgroundColor: "#EFF4FB",
         borderRadius: { topLeft: 60, topRight: 60 },
      },
      ],
   }), [])

   const options = useMemo<ChartOptions<"bar">>(() => ({
      responsive: true,
      plugins: {
         legend: { display: false },
         title: { display: false },
      },
      scales: {
         x: { stacked: true, grid: { display: false }, border: { display: false } },
         y: { display: false, stacked: true },
      },
   }), []);

   return (
      <section className="2xl:col-span-6">
         <div className="head">
            <h2>Weekly Revenue</h2>
            <IconButton src="../assets/global/Buttons/bar_chart.svg" width={24} height={24} label="more icon"  />
         </div>
         <div className="body">
            <Bar data={data} options={options} />
         </div>
      </section>
   );
}

export default memo(StackedBarChart)
