import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Story from "@/components/Story";
import Menu from "@/components/Menu";
import ChessClub from "@/components/ChessClub";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Story />
        <Menu />
        <ChessClub />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
