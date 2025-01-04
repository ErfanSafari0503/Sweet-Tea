import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="font-primary w-full bg-secondary">
      <header className="px-10 py-4 bg-white shadow-md sticky top-0 z-50">
        <ul className="flex justify-between items-center w-full">
          <li className="order-last px-4 py-2 bg-secondary rounded-lg xl:bg-slate-200">
            <Link to="/">چایی نبات</Link>
          </li>
          <li>
            <img src="src/images/Menu.svg" className="size-12" alt="" />
          </li>
        </ul>
      </header>
      <main className="w-full flex justify-center py-28 px-12">
        <div className="flex flex-col w-full items-center gap-8">
          <h1 className="text-8xl font-bold flex">
            4
            <img className="w-24" src="src/images/tea-zero.svg" alt="" />4
          </h1>
          <h2 className="text-5xl font-bold">صفحه پیدا نشد.</h2>
          <p className="text-center text-3xl">
            ممکنه صفحه‌ای که دنبالش بودی حذف شده باشه یا لینک صفحه اشتباهی رو
            وارد کرده باشی.
          </p>
          <Link
            to="/"
            className="w-3/5 bg-primary p-4 rounded-2xl text-zinc-50 text-lg font-bold"
          >
            <p className="flex justify-center gap-2 text-base">
              بازگشت به صفحه اصلی
              <img className="w-6" src="src/images/left-arrow.svg" alt="" />
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
