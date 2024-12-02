import Navbar from "../components/Navbar";
import Features from "../components/Features/Features";
import HowItWorks from "../components/How_it_works/HowItWorks";
import FrequentlyAskedQuestion from "../components/Frequently_Asked_Question/FrequentlyAskedQuestion";

export default function Home() {
  return (
    <div className="w-full font-primary">
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
      <main className="w-full py-10 px-8 xl:flex xl:py-20 xl:px-10 xl:gap-14">
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
        <section className="flex w-full flex-col my-16 pt-8 bg-slate-200 rounded-lg pb-4 relative">
          <div className="w-full text-center">
            <h1 className="font-bold text-3xl">نظرات مشتریان</h1>
          </div>
          {/* slider */}
          <article className="flex w-full pt-8 pb-4 overflow-hidden">
            {/* slide 1 */}
            <div className="flex shrink-0 w-full flex-col gap-12">
              <div className="w-full flex flex-col gap-6 items-center">
                <div>
                  <img
                    className="size-14"
                    src="src/images/quote-1.svg"
                    alt=""
                  />
                </div>
                <div className="w-full px-10 text-center">
                  <p className="opacity-70 text-xl">
                    من به تازگی از وبسایتتون استفاده کردم و واقعاً از راحتی و
                    سادگی اون شگفت‌زده شدم. سفارش‌دادن خیلی آسون بود و همه‌چیز
                    به کاملا مشخص بود.به همین دلیل تصمیم گرفتم این وبسایت را به
                    یکی از دوستام هم تو دانشگاه معرفی کنم. مطمئنم اونم از تجربه
                    خریدش لذت میبره!
                  </p>
                </div>
              </div>
              <div className="flex justify-center px-10">
                <div className="flex flex-col items-center gap-4 order-2">
                  <img className="size-16" src="src/images/Avatar.svg" alt="" />
                  <caption className="text-xl font-bold">رضا اکبری</caption>
                </div>
              </div>
            </div>
            {/* slide 2 */}
            <div className="flex shrink-0 w-full flex-col gap-12">
              <div className="w-full flex flex-col gap-6 items-center">
                <div>
                  <img
                    className="size-14"
                    src="src/images/quote-1.svg"
                    alt=""
                  />
                </div>
                <div className="w-full px-10 text-center">
                  <p className="opacity-70 text-xl">
                    من به تازگی از وبسایتتون استفاده کردم و واقعاً از راحتی و
                    سادگی اون شگفت‌زده شدم. سفارش‌دادن خیلی آسون بود و همه‌چیز
                    به کاملا مشخص بود.به همین دلیل تصمیم گرفتم این وبسایت را به
                    یکی از دوستام هم تو دانشگاه معرفی کنم. مطمئنم اونم از تجربه
                    خریدش لذت میبره!
                  </p>
                </div>
              </div>
              <div className="flex justify-center px-10">
                <div className="flex flex-col items-center gap-4 order-2">
                  <img className="size-16" src="src/images/Avatar.svg" alt="" />
                  <caption className="text-xl font-bold">رضا اکبری</caption>
                </div>
              </div>
            </div>
            {/* slide... */}
          </article>
          <button className="btn-left absolute left-8 bottom-16">
            <img className="size-10" src="src/images/Left.svg" alt="" />
          </button>
          <button className="btn-right absolute right-8 bottom-16">
            <img className="size-10" src="src/images/Right.svg" alt="" />
          </button>
        </section>
      </main>
      <footer className="w-full py-4 px-8 bg-blue-50 relative">
        <button className="absolute p-4 bg-blue-600 rounded-full left-6 -top-10">
          <img className="size-10" src="src/images/Up.svg" alt="" />
        </button>
        <article className="flex flex-col w-full gap-10 my-4 pb-4 border-b-default border-slate-400">
          <div className="px-4 py-2 bg-blue-200 rounded-lg xl:bg-slate-200 max-w-fit">
            چایی نبات
          </div>
          <div className="">
            <p className="opacity-70 text-xl text-right">
              چای نبات هدیه بده و یه خاطره به‌یادموندنی واسه دوستات بساز. سفارش
              بده تا چای گرم و خوش‌عطرشون تو بوفه دانشگاه برسه به دستشون.
            </p>
          </div>
          <div className="w-full flex justify-center">
            <ul className="flex space-x-4">
              <li className="pr-3 text-base flex items-center">
                <a href="#">سوالات متداول</a>
                <span className="border-l-default border-slate-400 p-3"></span>
              </li>
              <li className="pr-3 text-base flex items-center">
                <a href="#">حمایت مالی</a>
                <span className="border-l-default border-slate-400 p-3"></span>
              </li>
              <li className="pr-3 text-base flex items-center">
                <a href="#">ارتباط با ما</a>
                <span className="border-l-default border-slate-400 p-3  "></span>
              </li>
              <li className="pr-3 text-base">
                <a href="#">درباره ما</a>
              </li>
            </ul>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <img className="size-6" src="src/images/telegram.svg" alt="" />
              <img className="size-6" src="src/images/instagram.svg" alt="" />
            </div>
            <div className="flex gap-4 items-center">
              <caption className="text-base opacity-70">
                SweetTea@gmail.com
              </caption>
              <img className="size-6" src="src/images/subtract.svg" alt="" />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="px-24 py-12 bg-slate-200 rounded-lg text-xs">
              مجوز
            </div>
            <div className="px-24 py-12 bg-slate-200 rounded-lg text-xs">
              مجوز
            </div>
          </div>
        </article>
        <div className="w-full text-center">
          <span className="opacity-50 text-sm">
            © تمامی حقوق این وب‌سایت متعلق به چایی‌نبات میباشد.
          </span>
        </div>
      </footer>
    </div>
  );
}
