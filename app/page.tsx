"use client";
import { useState } from "react";

export default function login(){
 const names=["mary","insiya","laraib","malaika", "maiza"]
 const [number,setNumber]=useState(0);
 const [name, setName]=useState("laiba");
 function btnClick(n:number){
  if(number<n) 
  {
    setNumber(number+1);
  }
  else{setNumber(0)}
  setName(name)
 }

return(
<main className="bg-sky-500">
<div>{number}</div>
{/* <p>{names.map((newname)=>{
return <div>{newname}</div>
}
)}</p> */}
<p>{names[number]}</p>
<button onClick = {()=> 
  btnClick(names.length -1)
} className="p-2 bg-amber-500 text-white">Test</button>

</main>
);
}