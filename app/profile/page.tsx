import ProfileInfo from "@/components/profile/profileInfo";
import UploadFiles from "@/components/profile/upload";
import Storage from "@/components/profile/storage";
import Projects from "@/components/profile/projects";
import GeneralInfo from "@/components/profile/generalInfo";
import Notifications from "@/components/profile/notifications";

export default function Profile() {

   return (
      <>
         <ProfileInfo />
         <Storage />
         <UploadFiles />
         <Projects />
         <GeneralInfo />
         <Notifications />
      </>
   )
}