import { useState } from "react";
import Input from "../Reusable/Input";

const profilePicture = "./src/images/Avatar2.svg";
const username = "username";
const info =
  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.";

export default function DonateForm() {
  const [teaValue, setTeaValue] = useState(1);

  return (
    <div className="font-primary w-full bg-amber-50">
      <div className="px-10 py-4">
        <header>
          <ul className="flex w-full flex-row text-base items-center justify-center">
            <li className="order-first px-4 py-2 bg-amber-100 rounded-2xl xl:bg-slate-200">
              <a to="/">چایی نبات</a>
            </li>
          </ul>
        </header>
        <main className="w-full bg-white rounded-2xl my-12 px-8 py-4 ">
          <div className="mb-8">
            <div className="flex items-center">
              <img className="w-20" src={profilePicture} alt="" />
              <h1 className="text-xl font-bold mx-28">{username}</h1>
            </div>
            <div className="py-4">
              <p className="text-md opacity-60 text-right">{info}</p>
            </div>
          </div>
          <div className="w-full flex gap-4 mb-8 items-center justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-bold">تعداد چایی</h1>
            </div>
            {/* Tea Value */}
            <div className="flex bg-amber-50 w-2/5 justify-between items-center rounded-lg overflow-hidden">
              <div className="bg-primary w-1/4 py-2 text-center text-xl text-white">
                +
              </div>
              <p className="text-sm">1</p>
              <div className="bg-primary w-1/4 py-2 text-center text-xl text-white">
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
                name="Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl">
                شماره‌ همراه{" "}
                <span className="text-sm opacity-30">(اختیاری)</span>
              </h2>
              <input
                placeholder="09123456789"
                type="text"
                className="border-2 p-6 rounded-2xl border-x-zinc-200 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl">توضیحات</h2>
              <textarea
                placeholder="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است"
                rows="5"
                name=""
                id=""
                className="border-2 p-6 rounded-2xl text-right border-x-zinc-200 focus:outline-none"
              ></textarea>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-4">
                <div className="relative inline-block w-12 h-6">
                  <input
                    id="switch-component"
                    type="checkbox"
                    className="peer appearance-none w-12 h-6 bg-slate-100 rounded-full checked:bg-primary transition-colors duration-300"
                  />
                  <label
                    htmlFor="switch-component"
                    className="absolute bottom-1/2 translate-y-1/2 left-1 right-auto size-4 bg-white rounded-full transition-all duration-300 peer-checked:left-7"
                  ></label>
                </div>
                <caption className="text-md opacity-70">لورم ایپسوم</caption>
              </div>
              <div className="flex gap-4">
                <div className="relative inline-block w-12 h-6">
                  <input
                    id="switch-component"
                    type="checkbox"
                    className="peer appearance-none w-12 h-6 bg-slate-100 rounded-full checked:bg-primary transition-colors duration-300"
                  />
                  <label
                    htmlFor="switch-component"
                    className="absolute bottom-1/2 translate-y-1/2 left-1 right-auto size-4 bg-white rounded-full transition-all duration-300 peer-checked:left-7"
                  ></label>
                </div>
                <caption className="text-md opacity-70">لورم ایپسوم</caption>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <input
                type="checkbox"
                className="scale-150 size-8 border-gray-300"
              />
              <p className="opacity-60 text-right">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است.
              </p>
            </div>
            <div className="my-10 flex flex-col gap-4">
              <div className="flex justify-between font-bold">
                <h2 className="text-xl">مبلغ پرداختی</h2>
                <h2 className="text-xl text-primary">
                  <span>12,000</span> تومان
                </h2>
              </div>
              <div className="w-full">
                <button className="w-full bg-primary p-4 rounded-2xl text-zinc-50 text-lg font-bold">
                  پرداخت
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
