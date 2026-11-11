"use client";
import { useState } from "react";
export default function Test(){

  const [students, setStudents]=useState([
    {id:0, name:"laiba", semester:7},
    {id:1, name:"malaika", semester:6},
    {id:2, name:"areeba", semester:7},
    


  ]);
  const promoteStudent=(index:number)=>{
console.log(index)
setStudents((previous)=>previous.map((student)=>student.id==index?
{...student, semester: student.semester+1}:student))

  }

  return(
  <main>
    {students.map((student,index)=>{
      return(<>
      <div className="border p-4 m-4">
        <h2>Student roll no:{student.id}</h2>
        <h2>Student name:{student.name}</h2>
        <h2>Student semester:{student.semester}</h2>
        <button onClick={()=> promoteStudent(index)
        }className="bg-purple-900 p-2">Promote student </button>

      </div>
      
      
      </>)
    })}

  </main>

);}