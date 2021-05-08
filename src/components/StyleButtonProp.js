import React from 'react'

export default function StyleButtonProp({ width, height, color, text, bgColor, btnFunction }) {

   return (
      <button
         style={{
            width: width || "200px",
            height: height || "100px",
            backgroundColor: bgColor,
            border: "none",
            color: color || "black"
         }}
         onClick={btnFunction}
      >
         {text}
      </button>
   )
}
