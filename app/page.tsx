import Nav from "@/components/Nav";
import FieldHero from "@/components/FieldHero";
import Ticker from "@/components/Ticker";
import Place from "@/components/Place";
import Story from "@/components/Story";
import ChessClub from "@/components/ChessClub";
import Menu from "@/components/Menu";
import SeeMore from "@/components/SeeMore";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <FieldHero />
        <Ticker />
        <Place />
        <Story />
        <ChessClub />
        <Menu />
        <SeeMore />
      </main>
      <Footer />
    </>
  );
}
