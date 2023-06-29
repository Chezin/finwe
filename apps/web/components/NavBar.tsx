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
      } h-16 transition-all duration-500`}
    >
      <div>
        <img src="logo.png" alt="Refugio Açaí" className="h-8 pl-10" />
      </div>
      <div className="flex-grow text-center">
        <div>
          <button
            type="button"
            className="text-purple-900 mx-4 hover:scale-110 duration-100 cursor-pointer"
          >
            Hit me baby
          </button>
          <button
            type="button"
            className="text-purple-900 mx-4 hover:scale-110 duration-100 cursor-pointer"
          >
            One
          </button>
          <button
            type="button"
            className="text-purple-900 mx-4 hover:scale-110 duration-100 cursor-pointer"
          >
            More
          </button>
          <button
            type="button"
            className="text-purple-900 mx-4 hover:scale-110 duration-100 cursor-pointer"
          >
            Time
          </button>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="text-white ring-purple-900 text-purple-900 pr-10 hover:scale-110 duration-100 cursor-pointer"
        >
          Torne-se um franquiado
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
