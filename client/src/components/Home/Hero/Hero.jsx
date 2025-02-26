import { Link } from "react-router-dom";
import Button from "../../Reusable/Button";

export default function Hero() {
  return (
    <section className="flex w-full flex-col py-14 px-8 items-center gap-8 xl:w-fit xl:bg-[url('src/images/Pattern.svg')] xl:max-w-[60%]">
      <div className="xl:self-start">
        <p className="text-4xl font-bold">چایی نبات بده، لبخند بگیر!</p>
      </div>
      <div className="flex w-full flex-col gap-4">
        <div>
          <p className="text-lg text-center xl:hidden">
            چایی نبات هدیه بده و یک خاطره به یادموندنی واسه دوستات بساز. سفارش
            بده تا چای گرم و خوش عطرشون تو بوفه دانشگاه برسه به دستشون.
          </p>
          <p className="hidden xl:block text-base text-pretty">
            اگه دنبال یه راه ساده برای خوشحال کردن دوستات هستی، چای نبات رو هدیه
            بده! سفارش بده و بذار چای گرم و دل‌چسبشون رو تو بوفه دانشگاه تحویل
            بگیرن؛ یه حرکت ساده ولی به‌یادموندنی که کلی حس خوب می‌سازه.
          </p>
        </div>
        <div className="w-full flex flex-col items-center gap-1 xl:flex-row xl:gap-2">
          <div className="flex -mr-6">
            <img
              className="size-8 border-default border-stone-400 rounded-full relative flex right-6"
              src="/images/shamsi.png"
              alt=""
            />
            <img
              className="size-8 border-default border-stone-400 rounded-full relative flex right-4"
              src="/images/sharif.png"
              alt=""
            />
            <img
              className="size-8 border-default border-stone-400 rounded-full relative flex right-2"
              src="/images/taba.png"
              alt=""
            />
            <img
              className="size-8 border-default border-stone-400 rounded-full relative flex"
              src="/images/tehran.png"
              alt=""
            />
          </div>
          <div>
            <span className="text-primary">+12</span>
          </div>
          <div>
            <span className="text-lg xl:text-base">دانشگاه های فعال</span>
          </div>
          <div className="hidden xl:block mr-auto bg">
            <Button styles="bg-primary p-2 rounded-xl rounded-lg text-zinc-50 text-base">
              سفارش بده!
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full xl:hidden">
        <Button styles="w-full bg-primary p-4 rounded-xl text-zinc-50 text-2xl">
          <Link to="/sign-up">
            <p className="flex justify-center gap-2">
              ثبت‌نام
              <img className="w-8" src="/images/left-arrow.svg" alt="" />
            </p>
          </Link>
        </Button>
      </div>
    </section>
  );
}
