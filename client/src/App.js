export default function App() {
  return (
    <div>
      <SignIn />
    </div>
  );
}

function SignIn() {
  return (
    <form className="container max-w-96 h-screen m-auto	w-full px-5 py-4 text-xs flex flex-col flex-wrap">
      <h3 className="text-start text-2xl my-6">ورود</h3>
      <p className="mb-5">خوش آمدید! لطفا اطلاعات خود را وارد کنید.</p>
      <div className="flex flex-col justify-around gap-2">
        <label htmlFor="">ایمیل</label>
        <input
          type="email"
          placeholder="example@gmail.com"
          className="border-default border-stone-400 text-left p-2 rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-around gap-2 mt-5">
        <label htmlFor="">پسورد</label>
        <input
          type="password"
          placeholder="********"
          className="border-default border-stone-400 text-left p-2 rounded-lg"
        />
        <a href="#" className="text-sky-700 active:text-sky-950">
          <span>فراموشی رمز عبور</span>
        </a>
      </div>
      <div className="flex flex-col grow justify-end gap-2">
        <button className="w-full bg-sky-600 p-2 rounded-lg text-zinc-50">
          ورود
        </button>
        <div className="flex justify-center gap-2">
          <span>حساب کاربری ندارید؟</span>
          <a href="#" className="text-sky-700 active:text-sky-950">
            <span>ثبت‌ نام</span>
          </a>
        </div>
      </div>
    </form>
  );
}
