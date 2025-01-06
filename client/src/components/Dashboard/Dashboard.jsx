import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
import { useUser } from "../../hooks/useUser";
import SideMenu from "./SideMenu";
import PageNotFound from "../../pages/PageNotFoundPage";

export default function Dashboard() {
  const { accessToken } = useAuth();
  const { state, dispatch } = useUser();

  useEffect(
    function () {
      dispatch({ type: "loading/started" });
      axios
        .get("http://localhost:3002/v1/tea", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          dispatch({
            type: "userData/loaded",
            payload: {
              firstName: response.data.firstName,
              walletAmount: response.data.walletAmount,
              teaAmount: response.data.giftCount,
              isAuthenticated: true,
            },
          });
          dispatch({ type: "loading/ended" });
        })
        .catch(() => {
          throw new Error("Server : An unexpected error occurred.");
        });
    },
    [accessToken, dispatch]
  );

  function handleChange(e) {
    const { id } = e.target;

    if (id === "toggleMenu") {
      dispatch({ type: "menu/toggled" });
    }
  }

  if (!state.isAuthenticated) {
    return <PageNotFound />;
  }

  return (
    <div className="font-primary w-full h-full overflow-auto bg-secondary">
      <SideMenu isOpen={state.isOpen} />
      <div className="px-10 py-4">
        <header>
          <ul className="flex w-full flex-row text-base justify-between items-center">
            <li className="order-last flex gap-8  xl:hidden">
              <img src="/images/light.svg" className="size-12" alt="" />
              <img
                src="/images/Menu.svg"
                id="toggleMenu"
                className="size-12"
                alt=""
                onClick={handleChange}
              />
            </li>
            <li className="order-first px-4 py-2 bg-primary rounded-lg text-white">
              <Link to="/">چایی نبات</Link>
            </li>
          </ul>
        </header>
        <main className="w-full bg-white rounded-2xl my-12 px-8 py-4 ">
          <article className="w-full py-2 flex flex-col gap-16">
            <div className="flex justify-center flex-col gap-4 items-center py-4 relative">
              <h2 className="absolute top-0 text-5xl z-0 font-bold text-gray-200 opacity-30 text-center translate-y-[-20%]">
                Dashboard
              </h2>
              <h2 className="text-2xl font-bold text-center text-primary">
                پنل کاربری
              </h2>
              <p className="text-lg text-center">
                سلام <span className="text-slate-500">{state.firstName}</span>{" "}
                عزیز، میدونی که همیشه یه چایی کمرباریک برات کنار گذاشتیم؟
              </p>
            </div>
            <div className="w-full bg-tertiary  flex py-4 px-4 relative rounded-2xl">
              <div className="w-1/5 order-1">
                <img
                  src="/images/Wallet.svg"
                  className="absolute size-max -top-16 -right-16 min-[500px]:-top-8 min-[500px]:-right-8"
                  alt=""
                />
              </div>
              <div className="order-2 flex grow">
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-bold">کیف پول</h2>
                  <h3 className="text-2xl">{state.walletAmount},000 تومان</h3>
                </div>
                <div className="px-4 py-2 bg-primary rounded-lg text-center mr-auto self-end text-white">
                  <span>شارژش کن</span>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-bold">چای های شما</h2>
            <div className="w-full bg-tertiary flex flex-col py-4 px-4 rounded-2xl relative">
              <div className="w-full mb-24">
                <img
                  src="/images/tea2.svg"
                  className="absolute w-80 left-[50%] -translate-x-1/2 -translate-y-[45%] top-0"
                  alt=""
                />
              </div>
              <div className="w-full flex flex-col items-center gap-6 px-10">
                {state.teaAmount === 0 ? (
                  <h2 className="text-2xl">متاسفانه چایی نباتت تموم شده.</h2>
                ) : (
                  <h2 className="text-2xl">
                    <span>
                      <span className="text-primary">{state.teaAmount}</span> تا{" "}
                    </span>
                    چایی نبات تو جیبته !
                  </h2>
                )}
                {/* <div className="flex bg-secondary w-2/5 justify-between items-center rounded-lg overflow-hidden">
                  <div
                    className="bg-primary w-1/4 py-2 text-center text-xl text-white"
                    id="addTea"
                    onClick={handleChange}
                  >
                    +
                  </div>
                  <p className="text-sm">{state.teaValue}</p>
                  <div
                    className="bg-primary w-1/4 py-2 text-center text-xl text-white"
                    id="removeTea"
                    onClick={handleChange}
                  >
                    -
                  </div>
                </div> */}
                <div className="w-full text-center">
                  <div className="px-6 py-2 text-white bg-primary rounded-2xl xl:bg-slate-200 text-center">
                    <span className="text-2xl font-bold">دمش کن</span>
                  </div>
                  {/* <div className="px-6 py-2 font-bold bg-secondary rounded-2xl xl:bg-slate-200 flex justify-center items-center">
                    <span>
                      <span>{state.selectedTea}</span> عدد
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col py-4 gap-4">
              <h2 className="text-2xl font-bold mb-4">آمار ارقام</h2>
              <div className="w-full bg-tertiary rounded-2xl px-10 py-4 flex items-center">
                <div>
                  <img src="/images/eye.svg" className="size-12" alt="" />
                </div>
                <div className="flex flex-col mx-4">
                  <span className="text-md">تعداد بازدید</span>
                  <span className="text-xl font-bold">{state.visits}</span>
                </div>
                <div className="mr-auto">
                  <img src="/images/chart.svg" className="w-36" alt="" />
                </div>
              </div>
              <div className="w-full bg-tertiary rounded-2xl px-10 py-4 flex items-center">
                <div>
                  <img src="/images/balon.svg" className="size-12" alt="" />
                </div>
                <div className="flex flex-col mx-4">
                  <span className="text-md">تعداد چایی دریافتی</span>
                  <span className="text-xl font-bold">
                    {state.recivedDonations}
                  </span>
                </div>
                <div className="mr-auto">
                  <img src="/images/chart.svg" className="w-36" alt="" />
                </div>
              </div>
              <div className="w-full bg-tertiary rounded-2xl px-10 py-4 flex items-center">
                <div>
                  <img src="/images/telegraph.svg" className="size-12" alt="" />
                </div>
                <div className="flex flex-col mx-4">
                  <span className="text-md">تعداد چایی ارسالی</span>
                  <span className="text-xl font-bold">
                    {state.sendedDonations}
                  </span>
                </div>
                <div className="mr-auto">
                  <img src="/images/chart.svg" className="w-36" alt="" />
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}
