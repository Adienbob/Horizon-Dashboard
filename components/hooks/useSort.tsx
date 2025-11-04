import { useState } from "react";

export default function useSort(initialData: (string)[][]) {
   const [sortedData, setSortedData] = useState(initialData); 
   const [isSorted, setIsSorted] = useState<boolean>(false)

   function handleSort(index: number, type: string, isAscending?: boolean) {
      if (!isSorted) {
         if (type === "progress") {
            if (isAscending) {
               setSortedData(sortedData.toSorted((a, b) => parseFloat(b[index]) - parseFloat(a[index])))
            } else {
               setSortedData(sortedData.toSorted((a, b) => Number(b[index]) - Number(a[index])))
            }
         } else if (type === "date") {
            setSortedData(sortedData.toSorted((a, b) => {
               const dateA = new Date(a[index]);
               const dateB = new Date(b[index]); 
               return dateB.getTime() - dateA.getTime();
            }));
         } else if (type === "arkworks") {
            setSortedData(sortedData.toSorted((a, b) => Number(a[index]) - Number(b[index])))
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