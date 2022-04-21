import type { NextPage } from "next";

import Navbar from "../components/layouts/navbar";
import Footer from "../components/layouts/footer";
import Welcome from "../components/welcome";
import About from "../components/about";

const Home: NextPage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main id="principal">
        <Welcome />
      </main>
      <section id="info">
        <About />
      </section>
      <Footer/>
    </>
  );
};

export default Home;
