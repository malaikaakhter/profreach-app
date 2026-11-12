"use client";
import { useRef, useState } from "react";
export default function Test(){
  const[seconds,setSeconds]=useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> |null>(null);
  const startTimer=()=>{
    if(timerRef.current !==null) return;
timerRef.current = setInterval(()=>{
  setSeconds((previous)=>(previous+1));
},1000)
  }
const stopTimer=()=>{
 if(timerRef.current !==null){
  clearInterval(timerRef.current);
  timerRef.current=null;
    }}
const resetTimer=()=>{
    setSeconds(0);
    stopTimer();
  }
return(
  <main className="p-10 text-center">
    <h1 className="text-3xl font-bold"> Seconds {seconds}</h1>
   <div className="flex gap-3 justify-center mt-5">
     <button onClick={()=>{
      startTimer()
     }}className="bg-gray-400 text-white p-2 rounded-3xl">Start</button>
    <button onClick={()=>{
      stopTimer()
     }} className="bg-gray-400 text-white p-2 rounded-3xl">Stop</button>
    <button onClick={()=>{
      resetTimer()
     }} className="bg-gray-400 text-white p-2 rounded-3xl">Reset</button>
   </div>

  </main>

);}