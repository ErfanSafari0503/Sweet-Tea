import FeaturesItems from "./FeaturesItem";

export default function Features() {
  return (
    <section className="flex flex-col w-full gap-10 mb-14 px-8 py-8 bg-secondary">
      <article className="flex flex-col w-full items-center gap-5">
        <div className="w-full text-center">
          <p className="font-bold text-3xl">چرا از «چایی نبات» استفاده کنم؟</p>
        </div>
        <div className="w-full text-center">
          <p className="text-xl">
            چون ما در چایی نبات بهت کمک می‌کنیم که لحظه‌های قشنگ رو با دوستات به
            اشتراک بذاری
          </p>
        </div>
      </article>
      <article className="flex w-full flex-col gap-10">
        <FeaturesItems
          image="/images/suprise-1.svg"
          title="چایی نبات هدیه بده یا هدیه بگیر!"
          paragraph="با لینک اختصاصی خودت، از دوستانت چایی نبات بگیر یا برای اون‌ها هدیه بفرست. سریع و دوستانه!"
        />
        <FeaturesItems
          image="/images/card-1.svg"
          title="حتی برای کسایی که حساب ندارن"
          paragraph="با شماره تلفن، تلگرام یا ایمیل، به کسی که حساب نداره هم چایی نبات هدیه بده."
        />
        <FeaturesItems
          image="/images/wow-1.svg"
          title="زمان‌بندی کن و سورپرایز کن!"
          paragraph="برای آشنایی با کراش یا دعوت به یک دیت، چایی نبات رو با تاریخ و ساعت تنظیم کن."
        />
      </article>
    </section>
  );
}
