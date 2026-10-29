type NewButtonProps = {
label: string;
}

export default function NewButton( {  
   label
}: NewButtonProps){
return(
   <button className="bg-yellow-950 rounded-3xl p-2"> {label}</button> 
)

}