export default function Home() {
  return (
    <div className="w-full font-primary">
      <header className="w-full p-6 bg-blue-600">
        <nav className="w-full">
          <ul className="flex w-full flex-row text-base justify-between">
            <li className="order-last">
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
            <li className="order-first px-4 py-2 bg-white rounded-lg">
              چایی نبات
            </li>
          </ul>
        </nav>
        <figure>
          <img
            className="m-auto relative top-12"
            src="src/images/tea.svg"
            alt=""
          />
        </figure>
      </header>
      <main className="flex w-full flex-col items-center py-14 px-8 gap-8">
        <div>
          <p className="text-3xl font-bold">چایی نبات بده، لبخند بگیر!</p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <div>
            <p className="text-lg text-center">
              چایی نبات هدیه بده و یک خاطره به یادموندنی واسه دوستات بساز. سفارش
              بده تا چای گرم و خوش عطرشون تو بوفه دانشگاه برسه به دستشون.
            </p>
          </div>
          <div className="w-full flex flex-col items-center gap-1">
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
              <span className="text-lg">دانشگاه های فعال</span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <button className="w-full bg-blue-700 p-2 rounded-lg text-zinc-50">
            ثبت‌نام
          </button>
        </div>
      </main>
    </div>
  );
}
