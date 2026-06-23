import Nav from "@/components/Nav";
import FieldHero from "@/components/FieldHero";
import Ticker from "@/components/Ticker";
import Place from "@/components/Place";
import Menu from "@/components/Menu";
import Story from "@/components/Story";
import MorePitstop from "@/components/MorePitstop";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <FieldHero />
        <Ticker />
        <Place />
        <Menu />
        <Story />
        <MorePitstop />
      </main>
      <Footer />
    </>
  );
}
