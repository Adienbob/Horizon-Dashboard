

type HoriChartProps = {
   progressPrecentage: string | number
   style?: string
}
export default function HoriChart({progressPrecentage, style}: HoriChartProps) {

   return (
      <div className={`h-2 w-[50%] rounded-full overflow-hidden bg-(--bar) ${style}`}>
         <div className={`h-full bg-(--primary-blue) rounded-full`} style={{width: `${progressPrecentage}%`}}></div>
      </div>
   )
}