export default function SignUp() {
  return (
    <form className="container max-w-96 h-screen m-auto	w-full px-5 py-4 text-xs flex flex-col flex-wrap">
      <h3 className="text-start text-2xl my-4">ثبت نام</h3>
      <p className="mb-5 text-gray-500">به چایی نبات خوش اومدی!</p>
      <div className="flex flex-col flex-wrap gap-4">
        <div className="flex flex-col justify-around gap-2">
          <label htmlFor="Login-Number-Input">نام و نام خانوادگی</label>
          <input
            type="number"
            placeholder="09125553214"
            className="border-default border-stone-400 text-left p-2 rounded-lg"
            id="Login-Number-Input"
          />
        </div>
        <div className="flex flex-col justify-around gap-2">
          <label htmlFor="Login-Number-Input">شماره موبایل</label>
          <input
            type="number"
            placeholder="09125553214"
            className="border-default border-stone-400 text-left p-2 rounded-lg"
            id="Login-Number-Input"
          />
        </div>
        <div className="flex flex-col justify-around gap-2">
          <label htmlFor="Login-Password-Input">کلمه عبور</label>
          <input
            type="password"
            placeholder="********"
            className="border-default border-stone-400 text-left p-2 rounded-lg"
            id="Login-Password-Input"
          />

          <span className="text-gray-500">باید حداقل هشت کاراکتر باشد</span>
        </div>
        <div className="flex flex-col justify-around gap-2">
          <label htmlFor="Login-Password-Input">تایید کلمه عبور</label>
          <input
            type="password"
            placeholder="********"
            className="border-default border-stone-400 text-left p-2 rounded-lg"
            id="Login-Password-Input"
          />
        </div>
      </div>
      <div className="flex flex-col grow justify-end gap-2">
        <button className="w-full bg-sky-600 p-2 rounded-lg text-zinc-50">
          ثبت‌نام
        </button>
        <div className="flex justify-center gap-2">
          <span>قبلا ثبت نام کردید؟</span>
          <a href="#N" className="text-sky-700 active:text-sky-950">
            <span>ورود</span>
          </a>
        </div>
      </div>
    </form>
  );
}
