import FrequentlyAskedQuestionItem from "./FrequentlyAskedQuestionItem";

export default function FrequentlyAskedQuestion() {
  return (
    <section className="flex w-full flex-col pt-14 mb-14 px-8">
      <article className="flex w-full flex-col gap-12">
        <div className="w-full text-center">
          <h1 className="font-bold text-3xl">سوالات متداول</h1>
        </div>
        <div className="w-full flex flex-col gap-6">
          <FrequentlyAskedQuestionItem
            question="چطور می‌تونم چایی نبات دریافت کنم؟"
            answer="ابتدا در سایت ثبت‌نام کن و وارد حساب کاربری خودت شو. لینک حمایت اختصاصی خودت رو از داشبورد دریافت کن و برای دوستانت بفرست. وقتی کسی بهت چایی نبات هدیه بده، می‌تونی از داشبورد درخواست برداشت ثبت کنی و در بوفه دانشگاه دریافتش کنی."
            enabled={true}
          />
          <FrequentlyAskedQuestionItem
            question="اگر کسی حساب کاربری نداشته باشه، می‌تونم بهش چایی نبات هدیه بدم؟"
            answer="بله، امکانش هست! می‌تونی با وارد کردن شماره تلفن، آیدی تلگرام یا ایمیل، به کسی که حساب نداره هم چایی نبات هدیه بدی. وقتی حسابش رو ایجاد کنه، هدیه بهش منتقل می‌شه."
          />
          <FrequentlyAskedQuestionItem
            question="چطور می‌تونم درخواست برداشت ثبت کنم؟"
            answer="بعد از اینکه دوستانت بهت چایی نبات هدیه دادن، وارد داشبوردت شو و روی گزینه برداشت کلیک کن. سپس به بوفه دانشگاه برو، کد QR خودت رو نشون بده و چاییت رو دریافت کن."
          />
          <FrequentlyAskedQuestionItem
            question=" آیا می‌تونم زمان مشخصی برای هدیه دادن چایی نبات تنظیم کنم؟"
            answer="بله، این امکان وجود داره! می‌تونی هنگام هدیه دادن، تاریخ و ساعت مشخصی رو تعیین کنی. این قابلیت برای دعوت به ملاقات یا آشنایی با افراد جدید خیلی کاربردیه."
          />
        </div>
      </article>
    </section>
  );
}
