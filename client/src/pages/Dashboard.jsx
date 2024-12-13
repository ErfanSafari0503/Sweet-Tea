export default function Dashboard() {
  return (
    <div className="font-primary w-full bg-amber-50">
      <aside className="bg-white fixed h-screen z-50 max-w-[50%] overflow-y-auto hidden">
        <div className="mx-14 my-16 flex flex-col gap-4 items-center">
          <div>
            <img className="w-32" src="src/images/Avatar2.svg" alt="" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-2xl">username</h1>
            <h3 className="text-md text-slate-500">sweettea.ir/username</h3>
          </div>
        </div>
        <div className="mx-10">
          <ul className="flex flex-col justify-center items-center my-8 gap-10">
            <li className="flex justify-start w-full gap-4 items-center activated">
              <span>
                <img src="src/images/dashboard.svg" alt="" />
              </span>
              <a href="/" className="text-xl">
                داشبورد
              </a>
            </li>
            <li className="flex justify-start w-full gap-4 items-center">
              <span>
                <img src="src/images/wallet-icon.svg" alt="" />
              </span>
              <a href="/" className="text-xl">
                کیف پول
              </a>
            </li>
            <li className="flex justify-start w-full gap-4 items-center ">
              <span>
                <img src="src/images/gift.svg" alt="" />
              </span>
              <a href="/" className="text-xl">
                هدایا
              </a>
            </li>
            <li className="flex justify-start w-full gap-4 items-center">
              <span>
                <img src="src/images/my-cafe.svg" alt="" />
              </span>
              <a href="/" className="text-xl">
                کافه های من
              </a>
            </li>
            <li className="flex justify-start w-full gap-4 items-center">
              <span>
                <img src="src/images/history.svg" alt="" />
              </span>
              <a href="/" className="text-xl">
                تاریخچه
              </a>
            </li>
            <li className="flex justify-start w-full gap-4 items-center">
              <span>
                <img src="src/images/settings.svg" alt="" />
              </span>
              <a href="/" className="text-xl">
                تنظیمات
              </a>
            </li>
            <li className="flex justify-start w-full gap-4 items-center">
              <span>
                <img src="src/images/support.svg" alt="" />
              </span>
              <a href="/" className="text-xl">
                پشتیبانی
              </a>
            </li>
            <li className="flex justify-start w-full gap-4 items-center">
              <span>
                <img src="src/images/log-out.svg" alt="" />
              </span>
              <a href="/" className="text-xl text-red-600">
                بیرون رفتن
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div className="px-10 py-4">
        <header>
          <ul className="flex w-full flex-row text-base justify-between items-center">
            <li className="order-last flex gap-8  xl:hidden">
              <img src="src/images/light.svg" className="size-12" alt="" />
              <img src="src/images/Menu.svg" className="size-12" alt="" />
            </li>
            <li className="order-first px-4 py-2 bg-amber-100 rounded-2xl xl:bg-slate-200">
              <a to="/">چایی نبات</a>
            </li>
          </ul>
        </header>
        <main className="w-full bg-white rounded-2xl my-12 px-8 py-4 ">
          <article className="w-full py-2 flex flex-col gap-16">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold">پنل کاربری</h2>
              <p className="text-lg">
                سلام <span className="text-slate-500">firstname</span> عزیز،
                میدونی که همیشه یه چایی کمرباریک برات کنار گذاشتیم؟
              </p>
            </div>
            <div className="w-full bg-[#dcc3bf] flex py-4 px-4 relative rounded-2xl">
              <div className="w-1/5 order-1">
                <img
                  src="src/images/Wallet.svg"
                  className="absolute size-max -top-16 -right-16"
                  alt=""
                />
              </div>
              <div className="order-2 flex grow">
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-bold">کیف پول</h2>
                  <h3 className="text-2xl">24,000 تومان</h3>
                </div>
                <div className="px-4 py-2 bg-amber-100 rounded-2xl xl:bg-slate-200 text-center mr-auto self-end">
                  <span>شارژش کن</span>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-bold">چای های شما</h2>
            <div className="w-full bg-[#dcc3bf] flex flex-col py-4 px-4 rounded-2xl relative">
              <div className="w-full mb-24">
                <img
                  src="src/images/tea2.svg"
                  className="absolute w-80 left-[50%] -translate-x-1/2 -translate-y-[45%] top-0"
                  alt=""
                />
              </div>
              <div className="w-full flex flex-col items-center gap-6 px-10">
                <h2 className="text-2xl">
                  <span>
                    <span className="text-[#86422c]">12</span> تا{" "}
                  </span>
                  چایی نبات تو جیبته !
                </h2>
                <div className="w-full">
                  <input
                    dir="ltr"
                    type="range"
                    id="volume"
                    name="volume"
                    min="0"
                    max="50"
                    className="w-full h-2 rounded-2xl appearance-none bg-gradient-to-r from-[#86422c] to-[#f5eee6] accent-[#86422c]
           focus:outline-none"
                  />
                </div>
                <div className="w-full flex justify-between">
                  <div className="px-12 py-2 bg-amber-100 rounded-2xl xl:bg-slate-200 text-center">
                    <span className="text-2xl font-bold">دمش کن</span>
                  </div>
                  <div className="px-6 py-2 text-white bg-[#86422c] rounded-2xl xl:bg-slate-200 flex justify-center items-center">
                    <span>
                      <span>6</span> عدد
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col py-4 gap-4">
              <h2 className="text-2xl font-bold mb-4">آمار ارقام</h2>
              <div className="w-full bg-[#dcc3bf] rounded-2xl px-10 py-4 flex items-center">
                <div>
                  <img src="src/images/eye.svg" className="size-12" alt="" />
                </div>
                <div className="flex flex-col mx-4">
                  <span className="text-lg">تعداد بازدید</span>
                  <span className="text-xl font-bold">4</span>
                </div>
                <div className="mr-auto">
                  <img src="src/images/chart.svg" className="w-36" alt="" />
                </div>
              </div>
              <div className="w-full bg-[#dcc3bf] rounded-2xl px-10 py-4 flex items-center">
                <div>
                  <img src="src/images/balon.svg" className="size-12" alt="" />
                </div>
                <div className="flex flex-col mx-4">
                  <span className="text-lg">تعداد چایی دریافتی</span>
                  <span className="text-xl font-bold">16</span>
                </div>
                <div className="mr-auto">
                  <img src="src/images/chart.svg" className="w-36" alt="" />
                </div>
              </div>
              <div className="w-full bg-[#dcc3bf] rounded-2xl px-10 py-4 flex items-center">
                <div>
                  <img
                    src="src/images/telegraph.svg"
                    className="size-12"
                    alt=""
                  />
                </div>
                <div className="flex flex-col mx-4">
                  <span className="text-lg">تعداد چایی ارسالی</span>
                  <span className="text-xl font-bold">8</span>
                </div>
                <div className="mr-auto">
                  <img src="src/images/chart.svg" className="w-36" alt="" />
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}
