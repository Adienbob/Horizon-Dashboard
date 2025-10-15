"use client"

import Aside from "@/components/aside/aside";
// import HomePage from "./home/page"
// import Marketplace from "./marketPlace/page";
// import Tables from "./data tables/page";
// import Kanban from "./kanban/page";
// import Profile from "./profile/page"
import SignIn from "./signin/page";
export default function Home() {
   
   return (
      <>
         <SignIn />
         <Aside />
      </>
   );
}