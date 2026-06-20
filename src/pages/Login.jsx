import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie"
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err,setErrMsg] = useState("")
  const navigate = useNavigate();
  const token = Cookies.get("jwt_token");
  if(token) return <Navigate to = "/" replace/>
  const handleSubmit = async(e) => {

    e.preventDefault();
        const options = {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({email,password})
        } 
        const response = await fetch("https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/auth/signin",options);
        let data =await response.json();
        if(!response.ok){
            setErrMsg(data.message);
        }else {
            console.log(data.data.token);
             Cookies.set("jwt_token",data.data.token);
             navigate("/");
        }
    
  };

  return (
    <div className="min-h-screen bg-[#f3f4f8] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-10">
        <h1 className="text-5xl font-bold text-[#5b63f6] mb-3">
          Go Business
        </h1>

        <p className="text-gray-500 text-lg mb-8">
          Sign in to open your referral dashboard.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-xl font-semibold text-gray-800 mb-2"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="
                w-full
                h-12
                px-4
                border
                border-gray-300
                rounded-lg
                outline-none
                focus:ring-2
                focus:ring-[#5b63f6]
                focus:border-[#5b63f6]
              "
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-xl font-semibold text-gray-800 mb-2"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="
                w-full
                h-12
                px-4
                border
                border-gray-300
                rounded-lg
                outline-none
                focus:ring-2
                focus:ring-[#5b63f6]
                focus:border-[#5b63f6]
              "
            />
          </div>

          <button
            type="submit"
            className="
              w-full
              h-12
              rounded-lg
              text-white
              font-semibold
              bg-gradient-to-r
              from-[#5b63f6]
              to-[#656dff]
              hover:opacity-95
              transition
            "
            onClick = {handleSubmit}
          >
            Sign in
          </button>
          {err && (
            <p className="mt-3 text-center text-red-500 text-sm font-medium">
                {err}
            </p>
            )}
        </form>
      </div>
    </div>
  );
}