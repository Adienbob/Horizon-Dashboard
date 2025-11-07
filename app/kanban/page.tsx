import Columns from "@/components/kanban/column";


export default function Kanban() {

   return(
      <>
         <Columns
            className="backlog"
            columnHeader="Backlog"
            articles={[
               {
                  head: `Option to "use local/server version" feature`,
                  content: "It usually displays this message when you close an unsaved page when you do it on purpose, and it's getting frustrated to see this every time.",
                  status: "UPDATES",
                  avatars: "../assets/data tables/icons/backlog_1.svg",
               },
               {
                  head: `Add/modify your own CSS-Selectors`,
                  content: "Website Design: The ability to add/modify your own CSS-Selectors like its done in Venus.",
                  banner: "../assets/data tables/icons/backlog.svg",
                  status: "PENDING",
                  avatars: "../assets/data tables/icons/backlog_2.svg",
               },
               {
                  head: `Shortcode for templates to display correctly`,
                  content: "When you save some sections as a template and then paste a shortcode to a new page, the layout is broken, some styles are missing - in the editor.",
                  status: "ERRORS",
                  avatars: "../assets/data tables/icons/backlog_3.svg",
               },
            ]}
         />
         <Columns 
            className="in-progress" 
            columnHeader="In progress" 
            articles={[
               {
                  head: `General ideas to improve 'Edit' workflow`,
                  content: "Currently, I have a few templates in the Local Library and when I want to add them I'm always presented (by default).",
                  status: "UPDATES",
                  avatars: "../assets/data tables/icons/progress_1.svg",
               },
               {
                  head: `Shortcode for templates to display correctly`,
                  content: "When you save some sections as a template and then paste a shortcode to a new page, the layout is broken, some styles are missing - in the editor.",
                  status: "UPDATES",
                  avatars: "../assets/data tables/icons/progress_3.svg",
               },
               {
                  head: `[UX Design] - Set the default Library tab`,
                  banner: "../assets/data tables/icons/progress.svg",
                  content: "I want to be able to set the default Library tab (or a way to remember the last active tab), especially when I already...",
                  status: "ERRORS",
                  avatars: "../assets/data tables/icons/progress_2.svg",
               },
            ]}
         />
         <Columns 
            className="done" 
            columnHeader="Done" 
            articles={[
               {
                  head: `Copy/Paste elements between pages`,
                  content: "We can only copy/paste elements (or group of elements) in the same page, which is quite limited.",
                  status: "DONE",
                  avatars: "../assets/data tables/icons/done_1.svg",
               },
               {
                  head: `Remove Extra DIV for each container added`,
                  content: "I still hope there won't have an extra div for each container we added. It should be something for better styling...",
                  status: "DONE",
                  avatars: "../assets/data tables/icons/done_2.svg",
               },
               {
                  head: `Add Figma files for the Library design blocks`,
                  content: "I want to present my clients the Figma files first, so it would be great if you add those as well, more manual downloads...",
                  status: "DONE",
                  avatars: "../assets/data tables/icons/done_3.svg",
               },
            ]}
         />
      </>
   )
}