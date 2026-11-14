export default async function ProfessorDetails({
    params
}:
{
    params:Promise<{name:string,
        id:string;
    }>
})  {
    const {name}= await params;
    const {id}= await params;
  return(
    <main className="min-h-screen bg-gray-700 p-8">
        <h1 className="text-3xl font-bold text-indigo-700">Professor Profile</h1>
        <p className="text-indigo-950">Name:{name}</p>
     <p className="text-indigo-950">ID:{id}</p></main>
  )
}
