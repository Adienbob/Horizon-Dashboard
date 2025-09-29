import { useState } from "react";
import {DayPicker} from "react-day-picker";
import "react-day-picker/dist/style.css";
import {
   endOfMonth,
   getYear,
   getMonth,
   setMonth,
   setYear,
} from "date-fns";

export default function CustomCalendar() {
   const today = new Date();
   const [month, setMonthState] = useState<Date>(today);

   const lastDay = endOfMonth(today);

   const range = { from: today, to: lastDay };

   const years = Array.from({ length: 20 }, (_, i) => getYear(today) - 10 + i);
   const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
   ];

   return (
   <section className="Calender">
         <h2 className="sr-only">Calender</h2>
         <DayPicker
            mode="range"
            month={month}
            onMonthChange={setMonthState}
            selected={range}
            showOutsideDays
            modifiers={{
            today: today,
            lastDay: lastDay,
            }}
            modifiersClassNames={{
            today: "bg-red-600 text-white rounded-full",
            lastDay: "bg-red-600 text-white rounded-full",
            selected: "bg-red-200 text-black",
            outside: "text-gray-400", 
            }}
            components={{
            Caption: () => (
               <div className="body">
                  <select
                  value={getMonth(month)}
                  onChange={(e) =>
                     setMonthState(setMonth(month, Number(e.target.value)))
                  }
                  className="border rounded px-2 py-1"
                  >
                  {months.map((m, idx) => (
                     <option key={m} value={idx}>
                        {m}
                     </option>
                  ))}
                  </select>
   
                  <select
                  value={getYear(month)}
                  onChange={(e) =>
                     setMonthState(setYear(month, Number(e.target.value)))
                  }
                  className="border rounded px-2 py-1"
                  >
                  {years.map((y) => (
                     <option key={y} value={y}>
                        {y}
                     </option>
                  ))}
                  </select>
               </div>
            ),
            }}
         />
      </section>
   );
}
