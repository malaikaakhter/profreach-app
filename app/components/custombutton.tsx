type CustomButtonProps= {
label: string; 
}
export default function CustomButton({
    label
}:CustomButtonProps){
return(
    <button className="rounded-lg bg-yellow-200 text-3xl text-cyan-900" >{label}</button>

); 
}