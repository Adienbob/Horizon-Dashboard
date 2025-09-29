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
};

function OverviewCard({ title, value, icon, className}: StatCardProps) {
   
   return (
      <div className={className}>
         {icon ? <Image 
            src={icon.src} 
            alt={icon.alt} 
            width={icon.width} 
            height={icon.height} 
         /> : ""}
         <p>{title}</p>
         <p>{value}</p>
      </div>
   )
}

export default function DashboardOverview() {
   
   return (
      <section className="hero">
         <h1 className="src-o">Overview</h1>
         <OverviewCard 
            icon={{
               src: "../assets/home/overview/chart.svg",
               alt: "America's flag",
               width: 56,
               height: 56
            }} 
            className="stat" 
            title="Earning" 
            value="$340.5" 
         />
         <OverviewCard 
            icon={{
               src: "../assets/home/overview/dollar.svg",
               alt: "America's flag",
               width: 56,
               height: 56
            }} 
            className="stat" 
            title="Spend this month" 
            value="$642.39" 
         />
         <OverviewCard 
            className="stat" 
            title="Sales" 
            value="$574.34" 
         />
         <OverviewCard 
            icon={{
               src: "../assets/home/overview/Flag.svg",
               alt: "America's flag",
               width: 79,
               height: 50
            }} 
            className="stat" 
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
            className="stat" 
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
            className="stat" 
            title="Total Projects" 
            value="$2433" 
         />
      </section>
   )
}