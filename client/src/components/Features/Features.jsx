import FeaturesItems from "./FeaturesItem";
import FeaturesHead from "./FeaturesTitle";

export default function Features() {
  return (
    <section className="flex flex-col w-full gap-10 mb-14">
      <article className="flex flex-col w-full items-center gap-5">
        <FeaturesHead
          title="چرا از «چایی نبات» استفاده کنم؟"
          paragraph="چون ما در چایی نبات بهت کمک می‌کنیم که لحظه‌های قشنگ رو با دوستات به اشتراک بذاری"
        />
      </article>
      <article className="flex w-full flex-col gap-10">
        <FeaturesItems
          image="src/images/suprise 1.svg"
          title="چایی نبات هدیه بده یا هدیه بگیر!"
          paragraph="با لینک اختصاصی خودت، از دوستانت چایی نبات بگیر یا برای اون‌ها هدیه بفرست. سریع و دوستانه!"
        />
        <FeaturesItems
          image="src/images/card 1.svg"
          title="حتی برای کسایی که حساب ندارن"
          paragraph="با شماره تلفن، تلگرام یا ایمیل، به کسی که حساب نداره هم چایی نبات هدیه بده."
        />
        <FeaturesItems
          image="src/images/wow 1.svg"
          title="زمان‌بندی کن و سورپرایز کن!"
          paragraph="برای آشنایی با کراش یا دعوت به یک دیت، چایی نبات رو با تاریخ و ساعت تنظیم کن."
        />
      </article>
    </section>
  );
}
