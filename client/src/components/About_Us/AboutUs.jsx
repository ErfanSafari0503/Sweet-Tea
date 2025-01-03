import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="font-primary w-full bg-amber-50">
      <header className="px-10 py-4 bg-white shadow-md sticky top-0 z-50">
        <ul className="flex justify-between items-center w-full">
          <li className="order-last px-4 py-2 bg-amber-100 rounded-2xl xl:bg-slate-200">
            <Link to="/">چایی نبات</Link>
          </li>
          <li>
            <img src="src/images/Menu.svg" className="size-12" alt="" />
          </li>
        </ul>
      </header>
      <main className="px-10 py-8 leading-8">
        <div className="bg-white px-8 py-8 rounded-3xl">
          <div className="flex justify-center flex-col gap-8 items-center py-4 relative">
            <h2 className="absolute top-0 text-5xl z-0 font-bold text-gray-200 opacity-30 text-center translate-y-[-20%]">
              ?who are we
            </h2>
            <h1 className="relative text-xl font-bold text-primary">
              ما کی هستیم؟
            </h1>
            <p className="relative text-lg font-thin text-right leading-8 opacity-80">
              داستان ما از یک ایده کوچک شروع شد، لورم ایپسوم متن ساختگی با تولید
              سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
              چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
              است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
              با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
              مجله در ستون و سطرآنچنان که لازم است.
            </p>
          </div>
          <div className="flex justify-center flex-col gap-2 py-4">
            <h2 className="text-lg font-bold">چایی نبات چیه؟</h2>
            <p className="text-lg font-thin text-right leading-8 opacity-80">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطر با استفاده از طراحان گرافیک است آنچنان که لازم است.
            </p>
          </div>
          <div className="flex justify-center flex-col gap-2 py-4">
            <h2 className="text-lg font-bold">چشم‌انداز و مأموریت ما </h2>
            <ul className="list-disc text-lg opacity-80">
              <li>
                با تولید سادگی نامفهوم با تولید سادگی نامفهوم لورم ایپسوم متن
                ساختگی
              </li>
              <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</li>
              <li>لورم ایپسوم متن ساختگی با تولید سادگی </li>
            </ul>
          </div>
          <div className="flex justify-center flex-col gap-2 py-4">
            <h2 className="text-lg font-bold">تیم ما</h2>
            <p className="text-lg font-thin text-right leading-8 opacity-80">
              با ما بیشتر آشنا بشین =)
            </p>
            <div className="w-full flex flex-col gap-4 justify-center">
              <div className="flex gap-4 self-start items-center">
                <img
                  className="w-16 order-first"
                  src="src/images/avatar-mini.svg"
                  alt=""
                />
                <div className="text-right">
                  <h2 className="text-base">بنیان‌گذار</h2>
                  <h3 className="text-base opacity-70">لورم ایپسوم</h3>
                </div>
              </div>
              <div className="flex gap-4 self-end items-center">
                <img
                  className="w-16 order-last"
                  src="src/images/avatar-mini.svg"
                  alt=""
                />
                <div className="text-left">
                  <h2 className="text-base">هم بنیان‌گذار</h2>
                  <h3 className="text-base opacity-70">لورم ایپسوم</h3>
                </div>
              </div>
              <div className="flex gap-4 self-start items-center">
                <img
                  className="w-16 order-first"
                  src="src/images/avatar-mini.svg"
                  alt=""
                />
                <div className="text-right">
                  <h2 className="text-base">برنامه‌نویس فرانت‌اند</h2>
                  <h3 className="text-base opacity-70">لورم ایپسوم</h3>
                </div>
              </div>
              <div className="flex gap-4 self-end items-center">
                <img
                  className="w-16 order-last"
                  src="src/images/avatar-mini.svg"
                  alt=""
                />
                <div className="text-left">
                  <h2 className="text-base">برنامه‌نویس بک‌اند</h2>
                  <h3 className="text-base opacity-70">لورم ایپسوم</h3>
                </div>
              </div>
              <div className="flex gap-4 self-start items-center">
                <img
                  className="w-16 order-first"
                  src="src/images/avatar-mini.svg"
                  alt=""
                />
                <div className="text-right">
                  <h2 className="text-base">طراح رابط و تجربه کاربری</h2>
                  <h3 className="text-base opacity-70">لورم ایپسوم</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
