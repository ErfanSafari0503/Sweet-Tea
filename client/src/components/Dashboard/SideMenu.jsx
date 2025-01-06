import { Link } from "react-router-dom";
import PropTypes from "prop-types";

SideMenu.propTypes = {
  isOpen: PropTypes.bool,
};
const username = "Username";

export default function SideMenu({ isOpen }) {
  return (
    <aside
      className={
        isOpen
          ? "bg-white fixed h-screen z-50 max-w-[50%] overflow-y-auto"
          : "bg-white fixed h-screen z-50 max-w-[50%] overflow-y-auto hidden"
      }
    >
      <div className="mx-24 my-16 flex flex-col gap-4 items-center">
        <div>
          <img className="w-32" src="src/images/Avatar2.svg" alt="" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl">username</h1>
          <Link to={`/donate/:${username}`}>
            <h3 className="text-md text-slate-500">sweettea.ir/username</h3>
          </Link>
        </div>
      </div>
      <div className="mx-10">
        <ul className="flex flex-col justify-center items-center my-8 gap-10">
          <li className="flex justify-start w-full gap-4 items-center">
            <span>
              <img src="/images/dashboard.svg" alt="" />
            </span>
            <Link to="/dashboard" className="text-xl">
              داشبورد
            </Link>
          </li>
          <li className="flex justify-start w-full gap-4 items-center">
            <span>
              <img src="/images/wallet-icon.svg" alt="" />
            </span>
            <Link to="/wallet" className="text-xl">
              کیف پول
            </Link>
          </li>
          <li className="flex justify-start w-full gap-4 items-center ">
            <span>
              <img src="/images/gift.svg" alt="" />
            </span>
            <Link to="/gifts" className="text-xl">
              هدایا
            </Link>
          </li>
          <li className="flex justify-start w-full gap-4 items-center">
            <span>
              <img src="/images/history.svg" alt="" />
            </span>
            <Link to="/logs" className="text-xl">
              تاریخچه
            </Link>
          </li>
          <li className="flex justify-start w-full gap-4 items-center">
            <span>
              <img src="/images/settings.svg" alt="" />
            </span>
            <Link to="/settings" className="text-xl">
              تنظیمات
            </Link>
          </li>
          <li className="flex justify-start w-full gap-4 items-center">
            <span>
              <img src="/images/support.svg" alt="" />
            </span>
            <Link to="/support" className="text-xl">
              پشتیبانی
            </Link>
          </li>
          <li className="flex justify-start w-full gap-4 items-center">
            <span>
              <img src="/images/log-out.svg" alt="" />
            </span>
            <Link to="/" className="text-xl">
              بیرون رفتن
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
