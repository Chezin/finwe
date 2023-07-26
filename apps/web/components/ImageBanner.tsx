import React from "react";
import Image from "next/image";
import personagemastro from "../images/personagemastro.svg";
import logo from "../images/logo.svg";

function ImageBanner() {
  return (
    <div className="w-full h-800 relative mt-10">
      <div className="flex justify-center items-center">
        <Image src={personagemastro} alt="Astro Açaí" />
        <Image src={logo} alt="Refúgio Açaí" />
        <Image
          src={personagemastro}
          alt="Astro Açaí"
          style={{
            transform: "scaleX(-1)",
          }}
        />
      </div>
    </div>
  );
}
export default ImageBanner;
