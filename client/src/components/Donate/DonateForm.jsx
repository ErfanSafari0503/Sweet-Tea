import { useEffect, useReducer } from "react";
import { useParams, Link } from "react-router-dom";
import LoadingScreen from "../Global/Loading";
import Input from "../Reusable/Input";
import Button from "../Reusable/Button";
import axios from "axios";

const initialState = {
  profilePicture: "/images/Avatar2.svg",
  username: "",
  info: "دانشجوی کامپیوتر دانشگاه شمسی پور، عاشق کدنویسی و یادگیری تکنولوژی‌های جدید. همیشه در جستجوی راه‌های جدید برای بهبود مهارت‌های برنامه‌نویسی‌",
  teaValue: 1,
  name: "",
  phoneNumber: "",
  message: "",
  anonymousDonation: false,
  receiveNotifications: false,
  termsAndConditions: false,
  totalPrice: 10,
  isLoading: false,
  error: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "userData/loaded":
      return {
        ...state,
        username: action.payload.username,
      };
    case "tea/added":
      return {
        ...state,
        teaValue: state.teaValue + 1,
        totalPrice: state.totalPrice + 10,
      };
    case "tea/removed":
      return {
        ...state,
        teaValue: state.teaValue - 1,
        totalPrice: state.totalPrice - 10,
      };
    case "data/added":
      return { ...state, [action.payload.name]: action.payload.value };
    case "anonymously/donated":
      return { ...state, anonymousDonation: !state.anonymousDonation };
    case "notification/received":
      return { ...state, receiveNotifications: !state.receiveNotifications };
    case "termsAndConditions/agreed":
      return { ...state, termsAndConditions: !state.termsAndConditions };
    case "submit/started":
      return { ...state, isLoading: true };
    case "submit/successed":
      return { initialState };
    case "submit/failed":
      return { ...state, isLoading: false };
    default:
      return state;
  }
}

export default function DonateForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { username } = useParams();

  useEffect(
    function () {
      dispatch({ type: "userData/loaded", payload: { username } });
    },
    [dispatch, username]
  );

  function handleChange(e) {
    const { name, value, id } = e.target;

    if (name === "name" || name === "phoneNumber" || name === "message") {
      if (name === "name") {
        if (!/^[a-zA-Zآ-ی\s]+$/.test(value)) {
          //Error
          return;
        }
      }

      if (name === "phoneNumber") {
        if (!/^\d*$/.test(value)) {
          //Error
          return;
        }
      }

      dispatch({ type: "data/added", payload: { name, value } });
      return;
    }

    if (id === "addTea") {
      dispatch({ type: "tea/added" });
      return;
    }

    if (id === "removeTea") {
      if (state.teaValue > 1) {
        dispatch({ type: "tea/removed" });
      }
      return;
    }

    if (name === "anonymousDonation") {
      dispatch({ type: "anonymously/donated" });
      return;
    }

    if (name === "receiveNotifications") {
      dispatch({ type: "notification/received" });
      return;
    }

    if (name === "termsAndConditions") {
      dispatch({ type: "termsAndConditions/agreed" });
      return;
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    dispatch({ type: "submit/started" });

    axios
      .post(`http://localhost:3002/v1/tea?username=${state.username}`, {
        count: String(state.teaValue),
        type: "donate",
        product_id: 1,
        title: "title",
        nickname: state.name,
        message: state.message,
        total_price: state.totalPrice,
      })
      .then((response) => {
        if (response.status === 201) {
          dispatch({ type: "submit/successed" });
        }
      })
      .catch(() => {
        dispatch({ type: "submit/failed" });
        throw new Error("Server : An unexpected error occurred.");
      });
  }

  if (state.isLoading) {
    return <LoadingScreen />;
  } else {
    return (
      <div className="font-primary h-full w-full overflow-auto bg-secondary ">
        <div className="px-10 py-4">
          <header>
            <ul className="flex w-full flex-row text-base items-center justify-center">
              <li className="order-first px-4 py-2 bg-primary text-white rounded-lg xl:bg-slate-200">
                <Link to="/">چایی نبات</Link>
              </li>
            </ul>
          </header>
          <main className="w-full bg-white rounded-2xl my-12 px-8 py-4 ">
            <div className="mb-8">
              <div className="flex flex-col gap-2 items-center">
                <img className="w-20" src={state.profilePicture} alt="" />
                <h1 className="text-xl font-bold mx-28">{state.username}</h1>
              </div>
              <div className="py-4">
                <p className="text-md opacity-60 text-center">{state.info}</p>
              </div>
            </div>
            <div className="w-full flex gap-4 mb-8 items-center justify-between">
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-bold">تعداد چایی</h1>
              </div>
              <div className="flex bg-secondary w-2/5 justify-between items-center rounded-lg overflow-hidden">
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
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl" htmlFor="DonatorName">
                  نام شما
                </h2>
                <Input
                  type="text"
                  placeholder="لورم ایپسوم"
                  className="border-2 p-6 rounded-2xl border-x-zinc-200 focus:outline-none"
                  id="DonatorName"
                  name="name"
                  value={state.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl" htmlFor="DonatorPhoneNumber">
                  شماره‌ همراه
                </h2>
                <Input
                  type="text"
                  placeholder="09123456789"
                  className="border-2 p-6 rounded-2xl border-x-zinc-200 focus:outline-none"
                  id="DonatorPhoneNumber"
                  name="phoneNumber"
                  value={state.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                {/* prettier-ignore */}
                <h2 className="text-xl" htmlFor="DonatorName">
                  توضیحات {" "}
                  <span className="text-sm opacity-30">( اختیاری )</span>
                </h2>
                <textarea
                  placeholder="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است"
                  rows="5"
                  name="message"
                  id="DonatorMessage"
                  className="border-2 p-6 rounded-2xl text-right border-x-zinc-200 focus:outline-none leading-8"
                  value={state.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-4">
                  <div className="relative inline-block w-12 h-6">
                    <Input
                      type="checkbox"
                      className="peer appearance-none w-12 h-6 bg-slate-100 rounded-full checked:bg-primary transition-colors duration-300"
                      id="AnonymousDonation"
                      name="anonymousDonation"
                      value={state.anonymousDonation}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="AnonymousDonation"
                      className="absolute bottom-1/2 translate-y-1/2 left-1 right-auto size-4 bg-white rounded-full transition-all duration-300 peer-checked:left-7"
                    ></label>
                  </div>
                  <h3 className="text-md opacity-70">
                    می‌خواهم دونیت من ناشناس باشد.
                  </h3>
                </div>
                <div className="flex gap-4">
                  <div className="relative inline-block w-12 h-6">
                    <Input
                      type="checkbox"
                      className="peer appearance-none w-12 h-6 bg-slate-100 rounded-full checked:bg-primary transition-colors duration-300"
                      id="ReceiveNotifications"
                      name="receiveNotifications"
                      value={state.receiveNotifications}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="ReceiveNotifications"
                      className="absolute bottom-1/2 translate-y-1/2 left-1 right-auto size-4 bg-white rounded-full transition-all duration-300 peer-checked:left-7"
                    ></label>
                  </div>
                  <h3 className="text-md opacity-70">
                    مرا در جریان وضعیت دونیت قرار بده.
                  </h3>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Input
                  type="checkbox"
                  className="scale-100 size-8 border-gray-300"
                  id="TermsAndConditions"
                  name="termsAndConditions"
                  value={state.termsAndConditions}
                  onChange={handleChange}
                />
                <p className="opacity-60 text-right">
                  با انتخاب این گزینه، شما با قوانین و مقررات استفاده از چایی
                  نبات موافقت می‌کنید.
                </p>
              </div>
              <div className="my-10 flex flex-col gap-4">
                <div className="flex justify-between font-bold">
                  <h2 className="text-xl">مبلغ پرداختی</h2>
                  <h2 className="text-xl text-primary">
                    <span>{`${state.totalPrice},000`}</span> تومان
                  </h2>
                </div>
                <div className="w-full">
                  <Button
                    styles="w-full bg-primary p-4 rounded-2xl text-zinc-50 text-lg font-bold"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    پرداخت
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
