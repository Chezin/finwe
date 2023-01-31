import { Button } from "ui";
import { useRouter } from "next/router";
import tw from "twin.macro";
import * as bundle from "../bundles/pt_BR";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ImageBanner from "../components/ImageBanner";
import TextBox from "../components/TextBox";
import MapBox from "../components/MapBox";
import ImageCarousel from "../components/ImageCarousel";

const Page = tw.div`
font-poppins
`;

const Body = tw.div`
ml-14 mt-14 mr-14
`;

const Container = tw.div`
flex
`;

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Page>
        <NavBar></NavBar>
        <Body>
          {
            //<ImageCarousel></ImageCarousel>
            <ImageBanner></ImageBanner>
            //<ImageCarousel></ImageCarousel>
          }
          <Container>
            <ImageBanner></ImageBanner>
            <TextBox></TextBox>
          </Container>
          <Container>
            <TextBox></TextBox>
            <MapBox></MapBox>
          </Container>
        </Body>
        <Footer></Footer>
      </Page>
    </div>
  );
}
