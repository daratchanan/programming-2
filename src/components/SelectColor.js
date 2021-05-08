import React, { useState } from 'react'

export default function SelectColor() {
   const [color, setColor] = useState("white");

   return (
      <div
         style={{
            width: "100%",
            height: "100vh",
            backgroundColor: color
         }}
      >
         <button onClick={() => setColor("red")}>red</button>
         <button onClick={() => setColor("yellow")}>yellow</button>
         <button onClick={() => setColor("green")}>green</button>
      </div>
   )
}
