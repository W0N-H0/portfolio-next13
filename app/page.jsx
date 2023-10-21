import Main from "@/components/Main";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TopButton from "@/components/TopButton";
import Contact from "@/components/Contact";
import icon from "/public/assets/wepicon.png";

export const metadata = {
  title: "Wonho`s Portfolio",
  description: "Made by WONHO LEE",
  icons: [{ rel: "icon", url: icon.src }],
};

const Home = () => {
  return (
    <>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <TopButton />
    </>
  );
};

export default Home;
