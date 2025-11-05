import { useState } from "react";

export default function useSort(initialData: (string)[][]) {
   const [sortedData, setSortedData] = useState(initialData); 
   const [isSorted, setIsSorted] = useState<boolean>(false)

   function handleNumbers(index: number, isAscending?: boolean) {
      if (isAscending) {
         setSortedData(sortedData.toSorted((a, b) => Number(a[index]) - Number(b[index])))
      } else {
         setSortedData(sortedData.toSorted((a, b) => Number(b[index]) - Number(a[index])))
      }
   }

   function handleDate(index: number, isAscending?: boolean) {
      if (isAscending) {
         setSortedData(sortedData.toSorted((a, b) => {
            const dateA = new Date(a[index]);
            const dateB = new Date(b[index]); 
            return dateB.getTime() - dateA.getTime();
         }));
      } else {
         setSortedData(sortedData.toSorted((a, b) => {
            const dateA = new Date(a[index]);
            const dateB = new Date(b[index]); 
            return dateB.getTime() - dateA.getTime();
         }));
      }
   }

   function handleSort(index: number, dataType: string, ascending?: boolean) {
      if (!isSorted) {
         if (dataType === "progress") {
            if (ascending) {
               setSortedData(sortedData.toSorted((a, b) => parseFloat(b[index]) - parseFloat(a[index])))
            } else {
               handleNumbers(index, ascending)
            }
         } else if (dataType === "date") {
            handleDate(index, ascending)
         } else if (dataType === "arkworks") {
            handleNumbers(index, ascending)
         }  else {
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