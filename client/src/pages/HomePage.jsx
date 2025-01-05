import Footer from "../components/Global/Footer";
import Home from "../components/Home/Home";

export default function HomePage() {
  return (
    <>
      <Home />
      <Footer isScrollable={true} />
    </>
  );
}
