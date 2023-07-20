import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../images/logo.svg";
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
    <div className="navbar">
      <div className="navbar-start mx-4">
        <Image src={logo} alt="Refugio Açaí" height={75} />
        <div className="ml-10">
          {bundle.buttons.map((button: Button) => (
            <button
              type="button"
              className={`btn btn-sm mx-4 ${isScrolled ? "text-white" : ""}`}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
      <div className="navbar-end">
        <button type="button" className="btn mr-4">
          {bundle.franchiseButtonText}
        </button>
      </div>
    </div>
  );
}

export default NavBar;
