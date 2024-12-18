export default function SideMenu() {
  return (
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
  );
}
