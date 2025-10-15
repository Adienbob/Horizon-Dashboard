type Info = {
   title: string;
   value: string;
}

function Content({title, value}: Info) {

   return (
      <div className="info">
         <p>{title}</p>
         <span>{value}</span>
      </div>
   )
}

export default function GeneralInfo() {

   return (
      <section>
         <h2>General Information</h2>
         <p>As we live, our hearts turn colder. Cause pain is what we go through as we become older. We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand. We get our heart broken by people we love, even that we give them all...</p>
         <div className="content">
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