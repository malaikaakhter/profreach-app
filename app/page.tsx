"use client"
import CustomButton from "./components/CustomButton";
import NewButton from "./NewButton";
/*one dot means we are importing from the same folder
and double dot means we are importing from the different folder*/
import {useState}   from "react";

export default function LoginPage() {
  const [count, setCount] = useState(0);
  const [showPassword, setshowPassword] =useState(false);
  const students =['areeba','malaika','laiba', 'tayyaba'];
  const a= [
{ id:1,
name: 'malaika',}
]
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-500">
      <button onClick=
          {() => setCount(count + 1)
           
          }
            className=" click rounded-2xl bg-cyan-200 text-black px-1.5 py-0.5 m-0"
          >
            {count}
          </button>
      <div className="grid gap-4 justify-items-center">
        <h1 className="text-gray-900 text-3xl font-bold ">LogIn </h1>
        <input
          type="text"
          placeholder="email"
          className="w-full rounded sm:w-23 md:w-32 lg:w-48 border border-gray-900 "
        />
        <div>
          <input
            type= { showPassword ? "text" : "password"}
            placeholder="password"
            className="w-full rounded sm:w-23 md:w-32 lg:w-48 border border-gray-900 "
          />
          <button onClick={()=>
            setshowPassword(!showPassword)
          }
          className=" click rounded-2xl bg-cyan-200 text-black px-1.5 py-0.5 m-0">{showPassword ? "hide" : "eye"}
          </button>
        </div>
        <CustomButton label="signup" />
       < CustomButton label="login"
       />
       {students.map((student)=>(
<NewButton label ={student}/>
  ))}
  <NewButton label ={a[0].id}/>
  <NewButton label ={students[0]}/>
       
      </div>
    </main>
  );
}
