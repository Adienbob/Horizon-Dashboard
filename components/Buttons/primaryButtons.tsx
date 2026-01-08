
type Buttons = {
   text: string;
   background?: "(--bid)" | "(--error)" | "(--pending)" | "(--update)";
   weight?: "medium" | "normal";
   black?: true;
}

export default function PrimaryButton({text, background, black, weight}: Buttons) {

   return (
      <button className={`bg-${background ? background : "(--primary-blue)"} ${black ? "text-black" : "text-(--component-bg)"} w-full py-2 rounded-2xl font-${weight ? weight : "bold"}`}>
         {text}
      </button>
   )
}