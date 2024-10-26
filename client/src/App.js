export default function App() {
  return (
    <div>
      <SignIn />
    </div>
  );
}

function SignIn() {
  return (
    <div className="container max-w-96 max-h-fit mx-auto text-center">
      <h3 className="text-start text-2xl">ورود</h3>
      <p>خوش آمدید! لطفا جزئیات خود را وارد کنید.</p>
      <div>
        <label htmlFor="">ایمیل</label>
        <input type="email" placeholder="example@gmail.com" />
      </div>
      <div>
        <label htmlFor="">پسورد</label>
        <input type="password" placeholder="********" />
      </div>
      <a href="#">
        <span>فراموشی رمز عبور</span>
      </a>
      <button>ورود</button>
      <div>
        <span>حساب کاربری ندارید؟</span>
        <a href="#">
          <span>ثبت‌ نام</span>
        </a>
      </div>
    </div>
  );
}
