import ContactUs from "../components/Contact_Us/ContactUs";
import Footer from "../components/Global/Footer";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export default function ContactUsPage() {
  return (
    <>
      <ContactUs />
      <Footer isScrollable={true} scrollToTop={scrollToTop} />
    </>
  );
}
