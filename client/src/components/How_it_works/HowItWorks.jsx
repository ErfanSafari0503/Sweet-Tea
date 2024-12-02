import HowItWorksItem from "./HowItWorksItem";
import Button from "../Reusable/Button";

export default function HowItWorks() {
  return (
    <section className="flex w-full flex-col mb-14">
      <article className="flex w-full flex-col gap-14">
        <div className="w-full flex flex-col items-center gap-5">
          <p className="font-bold text-3xl">چجوری کار میکنه؟</p>
          <p className="text-2xl opacity-70">
            توی 4 مرحله ساده چایی نبات بگیر!
          </p>
        </div>
        <div className="w-full flex flex-col min-[700px]:px-20">
          <HowItWorksItem
            title="1. ثبت‌نام کن و لینک بگیر"
            paragraph="یک حساب کاربری بساز و لینک اختصاصی خودت رو دریافت کن."
          />
          <HowItWorksItem
            title="2. چایی نبات هدیه بگیر"
            paragraph="دوستانت لینک تو رو می‌فرستن و بهت چایی نبات هدیه می‌دن."
          />
          <HowItWorksItem
            title="3. چایی نباتت رو برداشت کن"
            paragraph="برو به داشبوردت، درخواست برداشت ثبت کن."
          />
          <HowItWorksItem
            title="4. در دانشگاه دریافت کن"
            paragraph="کد QR رو به فروشنده نشون بده و چاییت رو دریافت کن."
            last={true}
          />
          <div className="w-full">
            <Button styles="w-full bg-blue-700 p-4 rounded-lg text-zinc-50 text-lg">
              سفارش بده
            </Button>
          </div>
        </div>
      </article>
    </section>
  );
}
