

type HoriChartProps = {
   progressPrecentage: string | number
}
export default function HoriChart({progressPrecentage}: HoriChartProps) {

   return (
      <div className="h-2 w-[50%] rounded-full overflow-hidden bg-gray-200">
         <div className={`h-full bg-(--primary-blue) rounded-full`} style={{width: `${progressPrecentage}%`}}></div>
      </div>
   )
}