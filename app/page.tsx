import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Story from "@/components/Story";
import Gallery from "@/components/Gallery";
import Menu from "@/components/Menu";
import ChessClub from "@/components/ChessClub";
import Visit from "@/components/Visit";
import SeeMore from "@/components/SeeMore";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Story />
        <Gallery />
        <Menu />
        <ChessClub />
        <Visit />
        <SeeMore />
      </main>
      <Footer />
    </>
  );
}
