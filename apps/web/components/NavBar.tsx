import React, { useEffect, useState } from "react";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex items-center justify-between ${
        isScrolled ? "bg-transparent" : "bg-white"
      } ${
        isScrolled ? "sticky top-0" : "fixed top-0 left-0 right-0"
      } h-16 transition-all duration-1000`}
    >
      <div className="flex items-center">
        <div>
          <img
            src="../../../images/logo2.svg"
            alt="Refugio Açaí"
            className="h-8 pl-10"
          />
        </div>
        <div className="flex items-center mx-auto">
          <button
            type="button"
            className={`text-purple-900 mx-4 hover:scale-110 duration-100 cursor-pointer ${
              isScrolled ? "text-white" : ""
            }`}
          >
            Hit me baby
          </button>
          <button
            type="button"
            className={`text-purple-900 mx-4 hover:scale-110 duration-100 cursor-pointer ${
              isScrolled ? "text-white" : ""
            }`}
          >
            One
          </button>
          <button
            type="button"
            className={`text-purple-900 mx-4 hover:scale-110 duration-100 cursor-pointer ${
              isScrolled ? "text-white" : ""
            }`}
          >
            More
          </button>
          <button
            type="button"
            className={`text-purple-900 mx-4 hover:scale-110 duration-100 cursor-pointer ${
              isScrolled ? "text-white" : ""
            }`}
          >
            Time
          </button>
       
      <button
          type="button"
          className="text-white ring-purple-900 text-purple-900 px-4 py-2 hover:scale-110 duration-100 cursor-pointer"
        >
          <div className="border-r-3 border-solid border-indigo-500">
            Torne-se um franquiado
          </div>
        </button>

      </div>
      </div>
    </nav>
  );
}

export default NavBar;
