import { useState } from "react";

export default function useSort(initialData: (string)[][]) {
   const [sortedData, setSortedData] = useState(initialData); 
   const [isSorted, setIsSorted] = useState<boolean>(false)

   function handleSort(index: number, type: string) {
      if (!isSorted) {
         if (type === "progress") {
            setSortedData(sortedData.toSorted((a, b) => Number(b[index]) - Number(a[index])))
         } else if (type === "date") {
            setSortedData(sortedData.toSorted((a, b) => {
               const dateA = new Date(a[index]);
               const dateB = new Date(b[index]); 
               return dateB.getTime() - dateA.getTime();
            }));
         }
         else {
            setSortedData(sortedData.toSorted((a, b) =>
               a[index].localeCompare(b[index], undefined, { sensitivity: "base" })
            ));
         } 
      } else {
         setSortedData(initialData)
      }
   }

   return {sortedData, handleSort, setIsSorted};
}