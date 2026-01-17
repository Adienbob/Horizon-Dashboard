import PrimaryButton from "../buttons/primaryButtons";


export default function UploadFiles() {

   return (
      <section className="flex flex-col items-center">
         <h2 className="sr-only">Complete Your Profile</h2>
         <label htmlFor="file-upload" className="flex flex-col items-center bg-(--lessons-btns-bg) border-dashed border-2 border-(--toggle-off) w-full py-5 rounded-[13px] mb-5">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clipPath="url(#clip0_101_9133)">
               <path d="M33.3334 53.3333H46.6667C48.5001 53.3333 50.0001 51.8333 50.0001 50V33.3333H55.3001C58.2667 33.3333 59.7667 29.7333 57.6667 27.6333L42.3667 12.3333C41.0667 11.0333 38.9667 11.0333 37.6667 12.3333L22.3667 27.6333C20.2667 29.7333 21.7334 33.3333 24.7001 33.3333H30.0001V50C30.0001 51.8333 31.5001 53.3333 33.3334 53.3333ZM20.0001 60H60.0001C61.8334 60 63.3334 61.5 63.3334 63.3333C63.3334 65.1667 61.8334 66.6667 60.0001 66.6667H20.0001C18.1667 66.6667 16.6667 65.1667 16.6667 63.3333C16.6667 61.5 18.1667 60 20.0001 60Z" fill="#4318FF"/>
               </g>
               <defs>
               <clipPath id="clip0_101_9133">
               <rect width="80" height="80" fill="white"/>
               </clipPath>
               </defs>
            </svg>
            <span className="text-(--primary-blue) text-[20px] leading-8">Upload Files</span>
            <p className="text-[12px] text-(--extensions) font-medium leading-5">PNG, JPEG and GIF files are allowed</p>
            <input id="file-upload" type="file" multiple hidden />
         </label>
         <div className="px-2.5">
            <span className="text-[24px] leading-8">Complete Your Profile</span>
            <p className="leading-[26px] font-normal text-(--secondary) mb-5">Stay on the pulse of distributed projects with an anline whiteboard to plan, coordinate and discuss</p>
            <div>
               <PrimaryButton text="Publish now" background="bg-(--primary-blue)" className="rounded-2xl leading-6 text-sm py-2.5" weight="medium"/>
            </div>
         </div>
      </section>
   )
}