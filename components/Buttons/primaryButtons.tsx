
type Buttons = {
   text: string;
   className?: string;
   background?: "bg-(--bid)" | "bg-(--error)" | "bg-(--pending)" | "bg-(--update)" | "bg-(--done)" | "bg-(--primary-blue)";
   weight?: "medium" | "normal";
   black?: true;
}

export default function PrimaryButton({text, background, black, weight, className}: Buttons) {

   return (
      <button className={`${background} ${black ? "text-black" : "text-(--component-bg)"} w-full h-full font-${weight ? weight : "bold"} ${className ? className : ""}`}>
         {text}
      </button>
   )
}