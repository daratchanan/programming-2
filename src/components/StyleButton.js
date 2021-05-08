import React, { useState } from 'react'
import StyleButtonProp from './StyleButtonProp';

export default function StyleButton() {
   const [color, setColor] = useState("pink");

   const changeColor = () => {
      setColor("pink")
   }

   return (
      <div
         style={{
            // width: "100%",
            // height: "100vh",
            backgroundColor: color,
            textAlign: "center"
         }}
      >
         <button onClick={() => setColor("red")}>red</button>
         <button onClick={() => setColor("yellow")}>yellow</button>
         <button onClick={() => setColor("green")}>green</button>

         <StyleButtonProp
            width={"100px"}
            height={"50px"}
            color={"white"}
            text={"click me"}
            bgColor={"red"}
            btnFunction={() => alert("Hello Color")}
         />
         <StyleButtonProp
            text={"Cancle"}
            bgColor={"green"}
            btnFunction={changeColor}
         />
      </div>
   )
}
