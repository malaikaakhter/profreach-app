'use client';
import NewButton from "./NewButton";
import NavBar from "./components/NavBar";



export default function(){
  return (
    <main className="min-h-screen bg-gray-200">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">
        Admin Portal
      </h1>

     <NavBar/>
<NewButton label="login"/>

    </main>
  );
}