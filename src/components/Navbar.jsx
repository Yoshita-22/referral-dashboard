import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
function Navbar() {
    const navigate = useNavigate();
    const handleLogout = (e)=>{
        Cookies.remove("jwt_token");
        navigate("/login")

    } 
  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left Side */}
        <div className="flex items-center gap-10">
          <Link
            to="/"
            aria-label="Go to dashboard home"
            className="text-[#6366F1] font-bold text-lg"
          >
            Go Business
          </Link>

          <nav
            aria-label="Primary"
            className="flex items-center gap-6"
          >
            <Link
              to="/"
              className="text-gray-700 font-medium hover:text-[#6366F1]"
            >
              Home
            </Link>
          </nav>
        </div>

        {/* Right Side */}
         <div className="flex items-center gap-3">
          <button
            className="
              px-5
              py-2
              text-sm
              font-medium
              rounded-full
              bg-[#6366F1]
              text-white
              hover:bg-[#5458e6]
              transition
            "
          >
            Try for free
          </button>
        <button
          className="
            px-4
            py-2
            rounded-lg
            border
            border-red-200
            text-red-500
            text-sm
            font-medium
            hover:bg-red-50
            transition
          "
          onClick = {handleLogout}
        >

          Log out
        </button>
    </div>
      </div>
    </nav>
  );
}

export default Navbar;