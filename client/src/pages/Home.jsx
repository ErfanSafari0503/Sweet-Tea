import Navbar from "../components/Navbar";
import Features from "../components/Features/Features";
import HowItWorks from "../components/How_it_works/HowItWorks";
import FrequentlyAskedQuestion from "../components/Frequently_Asked_Question/FrequentlyAskedQuestion";
import Comments from "../components/Comments/Comments";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className="w-full font-primary ">
      <aside className="bg-slate-200 fixed h-screen z-50 max-w-[50%] hidden">
        <div className="mx-14">
          <ul className="flex flex-col justify-center items-center my-8 p-4 gap-10">
            <li className="text-center">
              <a href="#">
                <img src="src/images/Home.svg" alt="" />
              </a>
            </li>
            <li className="text-center">
              <a className="text-xl text-center" href="#">
                داشبورد
              </a>
            </li>
            <li className="text-center">
              <a className="text-xl" href="#">
                سوالات متداول
              </a>
            </li>
            <li className="text-center">
              <a className="text-xl" href="#">
                حمایت مالی
              </a>
            </li>
            <li className="text-center">
              <a className="text-xl" href="#">
                درباره ما
              </a>
            </li>
            <li className="text-center">
              <a className="text-xl" href="#">
                ارتباط با ما
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <header className="w-full p-6 bg-blue-600 xl:bg-white xl:border-b-default xl:border-b-stone-200">
        <Navbar />
        <figure className="xl:hidden">
          <img
            className="m-auto relative top-12"
            src="src/images/tea.svg"
            alt=""
          />
        </figure>
      </header>
      <main className="w-full py-10 px-8 xl:py-20 xl:px-10 xl:gap-14">
        <section className="flex w-full flex-col py-14 items-center gap-8 xl:w-fit xl:bg-[url('src/images/Pattern.svg')] xl:max-w-[60%]">
          <div className="xl:self-start">
            <p className="text-4xl font-bold">چایی نبات بده، لبخند بگیر!</p>
          </div>
          <div className="flex w-full flex-col gap-4">
            <div>
              <p className="text-lg text-center xl:hidden">
                چایی نبات هدیه بده و یک خاطره به یادموندنی واسه دوستات بساز.
                سفارش بده تا چای گرم و خوش عطرشون تو بوفه دانشگاه برسه به
                دستشون.
              </p>
              <p className="hidden xl:block text-base text-pretty">
                اگه دنبال یه راه ساده برای خوشحال کردن دوستات هستی، چای نبات رو
                هدیه بده! سفارش بده و بذار چای گرم و دل‌چسبشون رو تو بوفه
                دانشگاه تحویل بگیرن؛ یه حرکت ساده ولی به‌یادموندنی که کلی حس خوب
                می‌سازه.
              </p>
            </div>
            <div className="w-full flex flex-col items-center gap-1 xl:flex-row xl:gap-2">
              <div className="flex -mr-6">
                <img
                  className="size-8 border-default border-stone-400 rounded-full relative flex right-6"
                  src="src/images/shamsi.png"
                  alt=""
                />
                <img
                  className="size-8 border-default border-stone-400 rounded-full relative flex right-4"
                  src="src/images/sharif.png"
                  alt=""
                />
                <img
                  className="size-8 border-default border-stone-400 rounded-full relative flex right-2"
                  src="src/images/taba.png"
                  alt=""
                />
                <img
                  className="size-8 border-default border-stone-400 rounded-full relative flex"
                  src="src/images/tehran.png"
                  alt=""
                />
              </div>
              <div>
                <span className="text-blue-600">+12</span>
              </div>
              <div>
                <span className="text-lg xl:text-base">دانشگاه های فعال</span>
              </div>
              <div className="hidden xl:block mr-auto bg">
                <button className="bg-blue-700 px-5 py-2 rounded-lg text-zinc-50">
                  سفارش بده!
                </button>
              </div>
            </div>
          </div>
          <div className="w-full xl:hidden">
            <button className="w-full bg-blue-700 p-4 rounded-lg text-zinc-50 text-2xl">
              ثبت‌نام
            </button>
          </div>
        </section>
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
