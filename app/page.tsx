"use client";
import { useState, useEffect } from "react";
import Link from "next/link";



export default function(){
  const[fullname, setFullname]=useState('');
const[email, setEmail]=useState('');
const[password, setPassword]=useState('');

// const[counter, setCounter]=useState(0);

const validName= fullname.trim().length>=3;
const validPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])(?=.*\S).{8,}$/.test(password);
const emailValid =/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// useEffect(()=>{
// console.log('test')
// document.title= `Count: ${counter}`;
// const timer =setInterval(()=>{
// setCounter(counter+1);  
// },2000)
// },[counter]);
 return(
  <main className="flex min-h-screen bg-linear-to-br from-purple-500 to purple-800 items-center justify-center p-4">
<form action="" className="grid w-full max-w-md gap-4  bg-white p-6 shadow-xl sm:p-8 rounded-2xl">
<div className="text-center">
<h1 className="text-3xl font-bold text-gray-700">Create Account</h1>
<div className="grid gap-2">
  <label htmlFor="" className="text-black text-left">Full Name</label>
  <input type="text" className="rounded border border-gray-300 p-3 outline-none placeholder:text-gray-700" placeholder="Full Name" value={fullname} onChange={(e)=>{
    setFullname(e.target.value)
  }
  }/>
  {
    fullname.length>3 && (<p className="text-red-600">name must be 3 letters

  </p>)
  }
  
</div>
<div className="grid gap-2">
  <label htmlFor="" className="text-black text-left">Email</label>
  <input type="text" className="rounded border border-gray-300 p-3 outline-none placeholder:text-gray-700" placeholder="Full Name" value={email} 
  onChange={(e)=>{
    setEmail(e.target.value)
  }
  }/>
</div>
<div className="grid gap-2">
  <label htmlFor="" className="text-black text-left">Password</label>
  <input type="text" className="rounded border border-gray-300 p-3 outline-none placeholder:text-gray-700" placeholder="Password" value={password}
  onChange={(e)=>{
    setPassword(e.target.value)
  }
  } />
   {password.length>0 && !validPassword ? (<p className="text-red-600">password must contain:
    <br/> At least 8 characters
     <br/> 1 uppercase lett(A-Z)
      <br/> 1 smallcase letter(a-z)
       <br/> 1 special character(!@$#*)

  </p>):password.length>0 && validPassword ?
  (<p className="text-green-600">password validated 👻

  </p>):null 
  }
</div>
<Link  href=" /dashboard" ><button className="px-5 py-4 text-red-800 bg-gray-800">Register</button></Link>


</div>


</form>


  </main>)

}