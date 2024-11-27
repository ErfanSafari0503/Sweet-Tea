import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
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
              <Link
                to="/sign-in"
                className="border-2 border-stone-400 px-6 py-2 rounded-lg"
              >
                ورود
              </Link>
            </li>
            <li>
              <Link
                to="sign-up"
                className="px-6 py-2 rounded-lg bg-blue-700 text-zinc-50"
              >
                ثبت نام
              </Link>
            </li>
          </ul>
        </li>
        <li className="hidden xl:flex order-1 items-center">
          <ul className="flex gap-10">
            <li>
              <NavLink to="/" className="font-bold">
                صفحه اصلی
              </NavLink>
            </li>
            <li>
              <NavLink to="/">سوالات متداول</NavLink>
            </li>
            <li>
              <NavLink to="/">تماس با ما</NavLink>
            </li>
            <li>
              <NavLink to="/">درباره ما</NavLink>
            </li>
          </ul>
        </li>
        <li className="order-first px-4 py-2 bg-white rounded-lg xl:bg-slate-200">
          <Link to="/">چایی نبات</Link>
        </li>
      </ul>
    </nav>
  );
}
