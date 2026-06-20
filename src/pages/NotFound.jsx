import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen bg-[#f5f6fb] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-900 mb-4">
          404
        </h1>

        <p className="text-xl text-slate-700 mb-6">
          Page not found
        </p>

        <Link
          to="/"
          className="
            text-[#6366F1]
            font-semibold
            hover:underline
            transition
          "
        >
          Back to dashboard
        </Link>
      </div>
    </div>
  );
}

export default NotFound;