import AboutUs from "../components/About_Us/AboutUs";
import Footer from "../components/Global/Footer";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export default function AboutUsPage() {
  return (
    <>
      <AboutUs />
      <Footer isScrollable={true} scrollToTop={scrollToTop} />
    </>
  );
}
