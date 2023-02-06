import tw from "twin.macro";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ImageBanner from "../components/ImageBanner";

const Page = tw.div`
font-poppins
`;

const Body = tw.div`
ml-14 mt-14 mr-14
`;

export default function Home() {
  return (
    <div>
      <Page>
        <NavBar />
        <Body>
          <ImageBanner />
        </Body>
        <Footer />
      </Page>
    </div>
  );
}
