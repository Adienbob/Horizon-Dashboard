import PrimaryButton from "../buttons/primaryButtons";


export default function UploadFiles() {

   return (
      <section className="upload-files">
         <h2 className="sr-only">Complete Your Profile</h2>
         <label htmlFor="file-upload" className="upload-label">
            {/* upload icon */}
            <span>Upload Files</span>
            <p>PNG, JPEG and GIF files are allowed</p>
            <input id="file-upload" type="file" multiple hidden />
         </label>
         <div className="complete-profile">
            <span>Complete Your Profile</span>
            <p>Stay on the pulse of distributed projects with an anline whiteboard to plan, coordinate and discuss</p>
            <PrimaryButton text="Publish now" color="blue" />
         </div>
      </section>
   )
}