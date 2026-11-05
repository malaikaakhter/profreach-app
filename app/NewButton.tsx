import Link from "next/link"

type NewButtonProps = {
label: string;
}

export default function NewButton( {  
   label
}: NewButtonProps){
return(
   <button onClick={()=>(
<Link className="text-black" href="/students">go to student</Link>
    )} className="bg-yellow-950 rounded-3xl p-3 hover:drop-shadow-amber-100"> {label}</button>  
)

}