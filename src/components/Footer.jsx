import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div
        className="
          max-w-6xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          py-6
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-4
        "
      >
       
        <div className="text-[#6366F1] font-semibold text-sm">
          Go Business
        </div>

        
        <nav
          aria-label="Footer"
          className="
            flex
            items-center
            gap-4
            sm:gap-6
            text-sm
            text-gray-500
          "
        >
          <Link
            to="#"
            className="hover:text-[#6366F1] transition-colors"
          >
            About
          </Link>

          <Link
            to="#"
            className="hover:text-[#6366F1] transition-colors"
          >
            Privacy
          </Link>
        </nav>

        
        <div className="text-sm text-gray-400 text-center">
          © 2024 Go Business
        </div>
      </div>
    </footer>
  );
}

export default Footer;