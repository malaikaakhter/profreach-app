import Link from "next/link";
export default function NavBar(){
    return(
    <main>
     <nav className="flex flex-wrap gap-4">
        <Link className="text-gray-800" href="/dashboard">Go to Dashboard</Link>
        <Link className="text-gray-800" href="/professor">Go to Professors</Link>
        <Link className="text-gray-800" href="/students">Go to Students</Link>
      </nav>
      </main>
    )
}