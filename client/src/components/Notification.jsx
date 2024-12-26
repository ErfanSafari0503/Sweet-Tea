export default function Notification() {
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <div className="flex w-10/12 justify-between gap-4 items-center p-4 border-default rounded-xl shadow-md">
        <div>
          <img className="w-40  " src="src/images/success-icon.svg" alt="" />
        </div>
        <div>
          <p className="text-sm opacity-60">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است،
          </p>
        </div>
      </div>
    </div>
  );
}
