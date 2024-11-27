import Navbar from "../components/Navbar";
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
        <section className="flex flex-col w-full gap-10 mb-14">
          <article className="flex flex-col w-full items-center gap-5">
            <div className="w-full text-center">
              <p className="font-bold text-3xl">
                چرا از «چایی نبات» استفاده کنم؟
              </p>
            </div>
            <div className="w-full text-center">
              <p className="text-xl">
                چون ما در چایی نبات بهت کمک می‌کنیم که لحظه‌های قشنگ رو با
                دوستات به اشتراک بذاری
              </p>
            </div>
          </article>
          <article className="flex w-full flex-col gap-10">
            <div className="flex gap-8 items-center">
              <div className="p-[4%] sm:p-6 bg-blue-50 rounded-full ">
                <img
                  className="size-[10vw] sm:size-16"
                  src="src/images/suprise 1.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-4 items-start max-w-[70%]">
                <p className="text-2xl font-bold">
                  چایی نبات هدیه بده یا هدیه بگیر!
                </p>
                <p className="text-lg opacity-70">
                  با لینک اختصاصی خودت، از دوستانت چایی نبات بگیر یا برای اون‌ها
                  هدیه بفرست. سریع و دوستانه!
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <div className="p-[4%] sm:p-6 bg-blue-50 rounded-full">
                <img
                  className="size-[10vw] sm:size-16"
                  src="src/images/card 1.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-4 items-start max-w-[70%]">
                <p className="text-2xl font-bold">
                  حتی برای کسایی که حساب ندارن
                </p>
                <p className="text-lg opacity-70">
                  با شماره تلفن، تلگرام یا ایمیل، به کسی که حساب نداره هم چایی
                  نبات هدیه بده.
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <div className="p-[4%] sm:p-6 bg-blue-50 rounded-full">
                <img
                  className="size-[10vw] sm:size-16"
                  src="src/images/wow 1.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-4 items-start max-w-[70%]">
                <p className="text-2xl font-bold">
                  زمان‌بندی کن و سورپرایز کن!
                </p>
                <p className="text-lg opacity-70">
                  برای آشنایی با کراش یا دعوت به یک دیت، چایی نبات رو با تاریخ و
                  ساعت تنظیم کن.
                </p>
              </div>
            </div>
          </article>
        </section>
        <section className="flex w-full flex-col mb-14">
          <article className="flex w-full flex-col gap-14">
            <div className="w-full flex flex-col items-center gap-5">
              <p className="font-bold text-3xl">چجوری کار میکنه؟</p>
              <p className="text-2xl opacity-70">
                توی 4 مرحله ساده چایی نبات بگیر!
              </p>
            </div>
            <div className="w-full flex flex-col min-[700px]:px-20">
              <div className="flex gap-10 ">
                <div className="relative w-fit self-stretch overflow-hidden">
                  <div className="steps size-6 bg-zinc-600 p-2 border-2 border-slate-400 rounded-full ml-auto">
                    <div></div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 grow items-start mb-10">
                  <h2 className="font-bold text-xl text-blue-800">
                    1. ثبت‌نام کن و لینک بگیر
                  </h2>
                  <p className="text-base opacity-70">
                    یک حساب کاربری بساز و لینک اختصاصی خودت رو دریافت کن.
                  </p>
                </div>
              </div>
              <div className="flex gap-10 ">
                <div className="relative w-fit self-stretch overflow-hidden">
                  <div className="steps size-6 bg-zinc-600 p-2 border-2 border-slate-400 rounded-full ml-auto"></div>
                </div>
                <div className="flex flex-col gap-2 grow items-start mb-10">
                  <h2 className="font-bold text-xl text-blue-800">
                    2. چایی نبات هدیه بگیر
                  </h2>
                  <p className="text-base opacity-70">
                    دوستانت لینک تو رو می‌فرستن و بهت چایی نبات هدیه می‌دن.
                  </p>
                </div>
              </div>
              <div className="flex gap-10 ">
                <div className="relative w-fit self-stretch overflow-hidden">
                  <div className="steps size-6 bg-zinc-600 p-2 border-2 border-slate-400 rounded-full ml-auto"></div>
                </div>
                <div className="flex flex-col gap-2 grow items-start mb-10">
                  <h2 className="font-bold text-xl text-blue-800">
                    3. چایی نباتت رو برداشت کن
                  </h2>
                  <p className="text-base opacity-70">
                    برو به داشبوردت، درخواست برداشت ثبت کن.
                  </p>
                </div>
              </div>
              <div className="flex gap-10 ">
                <div className="relative w-fit self-stretch overflow-hidden">
                  <div className="steps size-6 bg-zinc-600 p-2 border-2 border-slate-400 rounded-full ml-auto without"></div>
                </div>
                <div className="flex flex-col gap-2 grow items-start mb-10">
                  <h2 className="font-bold text-xl text-blue-800">
                    4. در دانشگاه دریافت کن
                  </h2>
                  <p className="text-base opacity-70">
                    کد QR رو به فروشنده نشون بده و چاییت رو دریافت کن.
                  </p>
                </div>
              </div>
              <div className="w-full">
                <button className="w-full bg-blue-700 p-4 rounded-lg text-zinc-50 text-lg">
                  سفارش بده
                </button>
              </div>
            </div>
          </article>
        </section>
        <section className="flex w-full flex-col pt-14">
          <article className="flex w-full flex-col gap-12">
            <div className="w-full text-center">
              <h1 className="font-bold text-3xl">سوالات متداول</h1>
            </div>
            <div className="w-full flex flex-col gap-6">
              <div className="w-full flex flex-col gap-4 px-4 py-6 rounded-lg bg-slate-200">
                <div className="flex justify-between gap-16">
                  <p className="font-bold text-xl">
                    چطور می‌تونم چایی نبات دریافت کنم؟
                  </p>
                  <img
                    className="lg:size-10"
                    src="src/images/arrow-down.svg"
                    alt=""
                  />
                </div>
                <p className="hidden text-base opacity-70 px-2"></p>
              </div>
              <div className="w-full flex flex-col gap-4 px-4 py-6 rounded-lg bg-slate-200">
                <div className="flex justify-between gap-16">
                  <p className="font-bold text-xl">
                    اگر کسی حساب کاربری نداشته باشه، می‌تونم بهش چایی نبات هدیه
                    بدم؟
                  </p>
                  <img
                    className="lg:size-10"
                    src="src/images/arrow-up.svg"
                    alt=""
                  />
                </div>
                <p className="text-base opacity-70 px-2">
                  بله، امکانش هست! می‌تونی با وارد کردن شماره تلفن، آیدی تلگرام
                  یا ایمیل، به کسی که حساب نداره هم چایی نبات هدیه بدی. وقتی
                  حسابش رو ایجاد کنه، هدیه بهش منتقل می‌شه.
                </p>
              </div>
              <div className="w-full flex flex-col gap-4 px-4 py-6 rounded-lg bg-slate-200">
                <div className="flex justify-between gap-16">
                  <p className="font-bold text-xl">
                    چطور می‌تونم درخواست برداشت ثبت کنم؟
                  </p>
                  <img
                    className="lg:size-10"
                    src="src/images/arrow-down.svg"
                    alt=""
                  />
                </div>
                <p className="hidden text-base opacity-70 px-2"></p>
              </div>
              <div className="w-full flex flex-col gap-4 px-4 py-6 rounded-lg bg-slate-200">
                <div className="flex justify-between gap-16">
                  <p className="font-bold text-xl">
                    آیا می‌تونم زمان مشخصی برای هدیه دادن چایی نبات تنظیم کنم؟
                  </p>
                  <img
                    className="lg:size-10"
                    src="src/images/arrow-down.svg"
                    alt=""
                  />
                </div>
                <p className="hidden text-base opacity-70 px-2"></p>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
