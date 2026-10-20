export default function LoginPage(){
  return(
    <main className="min-h-screen flex items-center justify-center bg-gray-500">
    <div className="grid gap-4 justify-items-center">
      <h1 className="text-gray-900 text-3xl font-bold ">LogIn </h1>
    <input type="text" placeholder="email" className="w-full rounded sm:w-23 md:w-32 lg:w-48 border border-gray-900 "/>
    <input type="text" placeholder="password"/> 
      <button>Log In</button>
      
      
    </div>

</main>
  )
}