import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../images/logo4.svg";
import bundle from "../bundles/components/navbar.json";

interface Button {
  label: string;
}

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
    <div className="sticky top-0 z-10">
      <div
        className={`flex items-center transition-all duration-1000 ${
          isScrolled ? "bg-primary" : "bg-secondary"
        }`}
      >
        <div className="navbar-start mx-4  flex items-center">
          <Image
            src={logo}
            alt="Refugio Açaí"
            height={75}
            style={{
              filter: isScrolled
                ? "brightness(0) invert(1)"
                : "brightness(100%) invert(0)",
            }}
            className="p-2"
          />
          <div className="ml-10">
            {bundle.buttons.map((button: Button) => (
              <button
                type="button"
                className={`btn btn-sm mx-4 ${
                  isScrolled ? "text-primary ghost" : "btn-primary"
                }`}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
        <div className="navbar-end">
          <button type="button" className="btn btn-primary mr-4">
            {bundle.franchiseButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
