import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../Reusable/Button";

Footer.propTypes = {
  isScrollable: PropTypes.bool,
};

export default function Footer({ isScrollable = false }) {
  return (
    <footer className="w-full font-primary py-4 px-8 bg-[#FDF0E84D] relative">
      {isScrollable ? (
        <Button styles="absolute p-4 bg-primary rounded-full left-6 -top-10">
          <img className="size-10" src="src/images/Up.svg" alt="" />
        </Button>
      ) : null}
      <article className="flex flex-col w-full gap-10 my-4 pb-4 border-b-default border-slate-400">
        <div className="px-4 py-2 bg-secondary font-bold rounded-lg  max-w-fit">
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
              <NavLink to="/">سوالات متداول</NavLink>
              <span className="border-l-default border-slate-400 p-3"></span>
            </li>
            <li className="pr-3 text-base flex items-center">
              <NavLink to="/contact-us">ارتباط با ما</NavLink>
              <span className="border-l-default border-slate-400 p-3  "></span>
            </li>
            <li className="pr-3 text-base">
              <NavLink to="/about-us">درباره ما</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <a
              href="https://telegram.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="size-6" src="src/images/telegram.svg" alt="" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="size-6" src="src/images/instagram.svg" alt="" />
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <a
              href="mailto:SweetTea@gmail.com"
              className="text-base opacity-70 hover:underline"
              title="ارسال ایمیل به SweetTea@gmail.com"
            >
              SweetTea@gmail.com
            </a>
            <img
              className="size-6 cursor-pointer"
              src="src/images/subtract.svg"
              alt=""
              onClick={() => window.open("mailto:SweetTea@gmail.com")}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="px-24 py-12 bg-[#FDF0E8] rounded-lg text-xs">
            مجوز
          </div>
          <div className="px-24 py-12 bg-[#FDF0E8] rounded-lg text-xs">
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
  );
}
