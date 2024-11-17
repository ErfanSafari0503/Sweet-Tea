export default function Home() {
  return (
    <div className="w-full font-primary">
      <header className="w-full p-6 bg-blue-600 xl:bg-white xl:border-b-default xl:border-b-stone-200">
        <nav className="w-full">
          <ul className="flex w-full flex-row text-base justify-between">
            <li className="order-last xl:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-10 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </li>
            <li className="hidden xl:flex order-2">
              <ul className="flex px-10 gap-6">
                <li>
                  <button className="border-2 border-stone-400 px-6 py-2 rounded-lg">
                    ورود
                  </button>
                </li>
                <li>
                  <button className="px-6 py-2 rounded-lg bg-blue-700 text-zinc-50">
                    ثبت‌نام
                  </button>
                </li>
              </ul>
            </li>
            <li className="hidden xl:flex order-1 items-center">
              <ul className="flex gap-10">
                <li>
                  <a href="#" className="font-bold">
                    صفحه اصلی
                  </a>
                </li>
                <li>
                  <a href="#">سوالات متداول</a>
                </li>
                <li>
                  <a href="#">تماس با ما</a>
                </li>
                <li>
                  <a href="#">درباره ما</a>
                </li>
              </ul>
            </li>
            <li className="order-first px-4 py-2 bg-white rounded-lg xl:bg-slate-200">
              چایی نبات
            </li>
          </ul>
        </nav>
        <figure className="xl:hidden">
          <img
            className="m-auto relative top-12"
            src="src/images/tea.svg"
            alt=""
          />
        </figure>
      </header>
      <main className="flex w-full xl:py-20 xl:px-10 xl:gap-14">
        <section className="flex w-full flex-col items-center py-14 px-8 gap-8 xl:w-fit xl:bg-[url('src/images/Pattern.svg')] xl:max-w-[60%]">
          <div className="xl:self-start">
            <p className="text-3xl font-bold">چایی نبات بده، لبخند بگیر!</p>
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
            <button className="w-full bg-blue-700 p-2 rounded-lg text-zinc-50">
              ثبت‌نام
            </button>
          </div>
        </section>
        <aside className="hidden xl:flex grow justify-center">
          <div>
            <img src="src/images/cafe 1.svg" alt="" />
          </div>
        </aside>
      </main>
    </div>
  );
}
