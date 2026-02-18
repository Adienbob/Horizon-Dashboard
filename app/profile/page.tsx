"use client"

import ProfileInfo from "@/components/profile/profileInfo";
import UploadFiles from "@/components/profile/upload";
import Storage from "@/components/profile/storage";
import Projects from "@/components/profile/projects";
import GeneralInfo from "@/components/profile/generalInfo";
import Notifications from "@/components/profile/notifications";

export default function Profile() {

   return (
      <>
      <div className="col-span-full grid lg:grid-cols-12 2xl:flex gap-5">
         <ProfileInfo />
         <Storage />
         <UploadFiles />
      </div>
      <div className="col-span-full grid lg:grid-cols-12 2xl:flex gap-5">
         <Projects />
         <GeneralInfo />
         <Notifications />
      </div>
      </>
   )
}