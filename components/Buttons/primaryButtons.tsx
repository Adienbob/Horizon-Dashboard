
type Buttons = {
   text: string;
   color: string;
}

export default function PrimaryButton({text, color}: Buttons) {

   return (
      <button className={`primary-btn ${color}`}>
         {text}
      </button>
   )
}