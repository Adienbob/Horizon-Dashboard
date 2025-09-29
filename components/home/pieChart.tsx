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
    labels: ["Your files", "System", "Empty"], // slice labels
    datasets: [
      {
        label: "Storage", // optional, will be ignored in tooltip
        data: [63, 25, 12],
        backgroundColor: ["#4318FF", "#6AD2FF", "#EFF4FB"], // colors for slices
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
      <section className="pieChart">
         <div className="head">
            <h2>Your Pie Chart</h2>
            <select name="period" id="period">
               <option value="daily">Daily</option>
               <option value="weekly">Weekly</option>
               <option value="monthly">Monthly</option>
               <option value="yearly">Yearly</option>
            </select>
         </div>
         <div className="body">
            <Pie data={data} options={options} />
         </div>
      </section>
   );
}
