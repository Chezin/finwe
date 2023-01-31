import tw from "twin.macro";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ImageBanner from "../components/ImageBanner";
import TextBox from "../components/TextBox";
import MapBox from "../components/MapBox";

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
  return (
    <div>
      <Page>
        <NavBar />
        <Body>
          <ImageBanner />
          <Container>
            <ImageBanner />
            <TextBox />
          </Container>
          <Container>
            <TextBox />
            <MapBox />
          </Container>
        </Body>
        <Footer />
      </Page>
    </div>
  );
}
