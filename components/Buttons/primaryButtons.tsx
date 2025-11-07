
type Buttons = {
   text: string;
   className?: string;
}

export default function PrimaryButton({text, className}: Buttons) {

   return (
      <button className={`${className}` }>
         {text}
      </button>
   )
}