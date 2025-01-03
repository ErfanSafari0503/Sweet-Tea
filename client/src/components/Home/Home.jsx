import { useState } from "react";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import HowItWorks from "./How_it_works/HowItWorks";
import FrequentlyAskedQuestion from "./Frequently_Asked_Question/FrequentlyAskedQuestion";
import Comments from "./Comments/Comments";
import Footer from "./Footer/Footer";

export default function Home() {
  const [menuToggled, setMenuToggled] = useState(false);

  function handleMenuToggled() {
    setMenuToggled(!menuToggled);
  }

  return (
    <div className="w-full font-primary ">
      <SideMenu isOpen={menuToggled} />
      <header className="w-full p-6 bg-blue-600 xl:bg-white xl:border-b-default xl:border-b-stone-200">
        <Navbar onMenuToggled={handleMenuToggled} />
        <figure className="xl:hidden">
          <img
            className="m-auto relative top-12"
            src="src/images/tea.svg"
            alt=""
          />
        </figure>
      </header>
      <main className="w-full py-10 px-8 xl:py-20 xl:px-10 xl:gap-14">
        <Hero />
        <aside className="hidden xl:flex grow justify-center">
          <div>
            <img src="src/images/cafe 1.svg" alt="" />
          </div>
        </aside>
        <Features />
        <HowItWorks />
        <FrequentlyAskedQuestion />
        <Comments />
      </main>
      <Footer />
    </div>
  );
}
