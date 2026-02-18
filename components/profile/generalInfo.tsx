type Info = {
   title: string;
   value: string;
}

function Content({title, value}: Info) {

   return (
      <div className="rounded-2xl shadow-[0_18px_40px_0_rgba(112,144,176,0.12)] px-5 pt-[23px] pb-[29px]">
         <p className="text-(--secondary) font-medium text-sm">{title}</p>
         <span className="font-normal">{value}</span>
      </div>
   )
}

export default function GeneralInfo() {

   return (
      <section className="md:col-span-2 lg:col-span-full 2xl:w-[35%]">
         <h2 className="text-[20px] mb-2.5">General Information</h2>
         <p className="text-(--secondary) font-normal leading-[26px]">As we live, our hearts turn colder. Cause pain is what we go through as we become older. We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand. We get our heart broken by people we love, even that we give them all...</p>
         <div className="grid gap-5 mt-6 md:grid-cols-2 lg:grid-cols-3">
            <Content 
               title="Education"
               value="Stanford University"
            />
            <Content 
               title="Languages"
               value="English, Spanish, Italian"
            />
            <Content 
               title="Department"
               value="Product Design"
            />
            <Content 
               title="Work History"
               value="Google, Facebook"
            />
            <Content 
               title="Organization"
               value="Simmmple Web LLC"
            />
            <Content 
               title="Birthday"
               value="20 July 1986"
            />
         </div>
      </section>
   )
}