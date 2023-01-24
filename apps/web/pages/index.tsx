import { Button } from "ui";
import { useRouter } from "next/router";
import tw from "twin.macro";
import * as bundle from "../bundles/pt_BR";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ImageBanner from "../components/ImageBanner";
import TextBox from "../components/TextBox";

const Container = tw.div`

`;

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <NavBar></NavBar>
      <ImageBanner></ImageBanner>
      <TextBox></TextBox>
      <Footer></Footer>
    </div>
  );
}
