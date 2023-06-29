import tw from "twin.macro";
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ImageBanner from "../components/ImageBanner";
import GoogleMap from "../components/GoogleMap";
import TextBox from "../components/TextBox";

const Page = tw.div`
font-poppins
`;

const Body = tw.div`
`;

export default function Home() {
  return (
    <div>
      <Page>
        <NavBar />
        <Body>
          <ImageBanner />
          <TextBox />
          <GoogleMap />
        </Body>
        <Footer />
      </Page>
    </div>
  );
}
