import Footer from "../components/Global/Footer";
import Home from "../components/Home/Home";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export default function HomePage() {
  return (
    <>
      <Home />
      <Footer isScrollable={true} scrollToTop={scrollToTop} />
    </>
  );
}
