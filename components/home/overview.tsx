import Image from "next/image"

type Icon = {
   src: string; 
   alt: string;
   width: number;
   height: number;
}

type StatCardProps = {
   title: string;
   value: string | number;
   icon?: Icon;
   className?: string;
   growth?: string;
   period?: string;
};

function OverviewCard({ title, value, icon, className, growth, period}: StatCardProps) {
   
   return (
      <div className="bg-(--component-bg) rounded-[20px] flex h-[90px] items-center" id={className}>
         {icon ? <Image 
            className="ml-[17px] mr-4"
            src={icon.src} 
            alt={icon.alt} 
            width={icon.width} 
            height={icon.height} 
         /> : ""}
         <div className={`${className === "sales" ? "ml-[23px]" : ""}`}>
            <p className="text-(--secondary) text-sm">{title}</p>
            <p className="text-(--primary) text-2xl font-bold">{value}</p>
            {growth ? <p className="text-(--secondary)"><span className="text-(--growth) font-bold">{growth} </span>{period}</p> : "" }
         </div>
      </div>
   )
}

export default function DashboardOverview() {
   
   return (
      <section className="grid gap-5" id="hero">
         <h1 id="sr-only">Overview</h1>
         <OverviewCard 
            icon={{
               src: "../assets/home/overview/chart.svg",
               alt: "America's flag",
               width: 56,
               height: 56
            }} 
            className="earnings" 
            title="Earnings" 
            value="$340.5" 
         />
         <OverviewCard 
            icon={{
               src: "../assets/home/overview/dollar.svg",
               alt: "America's flag",
               width: 56,
               height: 56
            }} 
            className="spend" 
            title="Spend this month" 
            value="$642.39" 
         />
         <OverviewCard 
            className="sales" 
            title="Sales" 
            value="$574.34" 
            growth="+23%"
            period="since last month"
         />
         <OverviewCard 
            icon={{
               src: "../assets/home/overview/Flag.svg",
               alt: "America's flag",
               width: 79,
               height: 50
            }} 
            className="balance" 
            title="Your Balance" 
            value="$1,000" 
         />
         <OverviewCard 
            icon={{
               src: "../assets/home/overview/check.svg",
               alt: "America's flag",
               width: 56,
               height: 56
            }} 
            className="tasks" 
            title="New Tasks" 
            value="145" 
         />
         <OverviewCard 
            icon={{
               src: "../assets/home/overview/projects.svg",
               alt: "America's flag",
               width: 56,
               height: 56
            }} 
            className="projects" 
            title="Total Projects" 
            value="$2433" 
         />
      </section>
   )
}