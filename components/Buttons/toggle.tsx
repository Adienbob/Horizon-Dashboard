import { Switch } from "@material-tailwind/react";

type SwitchTypes = {
   check: boolean;
}

export function SwitchCustomStyles({check}: SwitchTypes) {
   return (
      <div>
         <Switch
            id="custom-switch-component"
            checked={check}
            ripple={false}
            className="h-full w-full checked:bg-[#2ec946]"
            containerProps={{
               className: "w-11 h-6",
            }}
            circleProps={{
               className: "before:hidden left-0.5 border-none",
            }}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
         />
      </div>
   );
}