"use client";
// import CustomButton from "./components/CustomButton";
// import NewButton from "./NewButton";
/*one dot means we are importing from the same folder
and double dot means we are importing from the different folder*/
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("abc@gmail.com");
  const [password, setPassword] = useState("@$3E5T67!");
  const [allfield, setAllfield] = useState(true);
  const [emailfield, setEmailfield] = useState(true);
  const [passwordfield, setPasswordfield] = useState(true);
  function updateStatus() {
   
  }
  function changePassword(e: any) {
    setPassword(e.target.value);
    //  if (email == "" || password == "") alert("both fields are required");
    // if (!email.includes("@gmail.com")) {
    //   alert("enter correct email");
    //   if (password.length < 8) {
    //     alert("password must be 8 characters");
    //   }
    // }
    setPasswordfield(password.length<8)
  }
  return (
    <main className="bg-amber-200 text-black">
      <input
        type="text"
        className="rounded border-2 p-3 text-gray-900"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          if (email == "" || password == "") alert("both fields are required");
    if (!email.includes("@gmail.com")) {
      // alert("enter correct email");
      setEmailfield(true)
      if (password.length < 8) {
        // alert("password must be 8 characters");
      setPasswordfield(false)
       }
    }
        }}
      />
      <input
        type="text"
        className="rounded border-2 p-3 text-gray-900"
        value={password}
        onChange={() => {
          changePassword(event);
        }}
      />

      <div>
        {allfield ? (
          <p className="text-red-500">Both Fields are required</p>
        ) : (
          <s className="text-green-500">Both Fields are required</s>
        )}

        {emailfield ? (
          <p className="text-red-500">Valid Email is required</p>
        ) : (
          <s className="text-green-500">Valid Email is required</s>
        )}

        {passwordfield ? (
          <p className="text-red-500">
            Password Must be Greater than 7 character
          </p>
        ) : (
          <s className="text-green-500">
            Password Must be Greater than 7 character
          </s>
        )}
      </div>
      <button
        className="rounded-4xl p-1.5 bg-blue-800 mx-6 mb-2"
        onClick={() => updateStatus()}
      >
        {" "}
        Login
      </button>
    </main>
  );
}
