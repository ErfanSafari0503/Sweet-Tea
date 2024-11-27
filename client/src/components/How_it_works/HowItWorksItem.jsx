import PropTypes from "prop-types";

HowItWorksItem.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  last: PropTypes.bool,
};

export default function HowItWorksItem({ title, paragraph, last = false }) {
  return (
    <div className="flex gap-10 ">
      <div className="relative w-fit self-stretch overflow-hidden">
        <div
          className={
            last
              ? "steps size-6 bg-zinc-600 p-2 border-2 border-slate-400 rounded-full ml-auto without"
              : "steps size-6 bg-zinc-600 p-2 border-2 border-slate-400 rounded-full ml-auto"
          }
        >
          <div></div>
        </div>
      </div>
      <div className="flex flex-col gap-2 grow items-start mb-10">
        <h2 className="font-bold text-xl text-blue-800">{title}</h2>
        <p className="text-base opacity-70">{paragraph}</p>
      </div>
    </div>
  );
}
