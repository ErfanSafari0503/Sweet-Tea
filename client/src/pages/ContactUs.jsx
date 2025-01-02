export default function ContactUs() {
  return (
    <div className="font-primary w-full bg-amber-50">
      <header className="px-10 py-4 bg-white shadow-md sticky top-0 z-50">
        <ul className="flex justify-between items-center w-full">
          <li class="order-last px-4 py-2 bg-amber-100 rounded-2xl xl:bg-slate-200">
            <a to="/">چایی نبات</a>
          </li>
          <li>
            <img src="src/images/Menu.svg" class="size-12" alt="" />
          </li>
        </ul>
      </header>
      <main className="px-10 py-8 leading-8">
        <div className="bg-white px-8 py-8 rounded-3xl">
          <div className="flex justify-center flex-col gap-4 items-center py-4 relative">
            <h2 class="absolute top-0 text-5xl z-0 font-bold text-gray-200 opacity-30 text-center translate-y-[-20%]">
              contact us
            </h2>
            <h1 className="relative text-xl font-bold text-primary">
              ارتباط با ما
            </h1>
            <p className="relative text-lg font-thin text-right leading-8 opacity-80">
              ما اینجاییم تا بهت کمک کنیم
            </p>
          </div>
          <div className="flex justify-center flex-col gap-8 py-4">
            <div className="flex justify-center flex-col gap-4">
              <h2 className="text-lg font-bold">راه‌های ارتباطی</h2>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between gap-4">
                  <div className="flex flex-col gap-2 items-center justify-center bg-amber-50 px-4 py-6 w-1/2 rounded-2xl">
                    <img className="w-10" src="src/images/phone.svg" alt="" />
                    <h2 className="text-base font-bold">تلفن تماس</h2>
                    <p dir="ltr" className="text-base">
                      +98 912 345 6789
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 items-center justify-center bg-amber-50 px-4 py-6 w-1/2 rounded-2xl">
                    <img className="w-10" src="src/images/email.svg" alt="" />
                    <h2 className="text-base font-bold">ایمیل</h2>
                    <p dir="ltr" className="text-base">
                      SweetTea@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col gap-2 items-center justify-center bg-amber-50 px-4 py-6 grow rounded-2xl">
                    <img
                      className="w-10"
                      src="src/images/location.svg"
                      alt=""
                    />
                    <h2 className="text-base font-bold">آدرس</h2>
                    <p className="text-base">
                      تهران، خیابان لورم، کوچه لورم، پلاک لورم، طبقه لورم
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-bold">فرم ارتباط</h2>
                <p className="text-lg font-thin text-right">
                  سؤالات، پیشنهادات یا مشکلاتت رو بهمون بگو.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="ایمیل (الزامی)"
                    className="border-2 p-4 rounded-2xl border-x-zinc-200 focus:outline-none"
                    id="DonatorName"
                    name="name"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="نام و نام خانوادگی (اختیاری)"
                    className="border-2 p-4 rounded-2xl border-x-zinc-200 focus:outline-none"
                    id="DonatorName"
                    name="name"
                  />
                </div>
                <div className="flex flex-col">
                  <textarea
                    placeholder="لورم ایپسوم متن ساختگی (الزامی)"
                    rows="5"
                    name="message"
                    id="DonatorMessage"
                    className="border-2 p-4 rounded-2xl text-right border-x-zinc-200 focus:outline-none leading-8"
                  ></textarea>
                </div>
                <div className="w-full">
                  <button
                    className="w-full bg-primary p-4 rounded-2xl text-zinc-50 text-lg font-bold"
                    type="submit"
                  >
                    <p className="flex justify-center gap-2 text-base">
                      ارسال فرم
                      <img className="w-6" src="src/images/send.svg" alt="" />
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
