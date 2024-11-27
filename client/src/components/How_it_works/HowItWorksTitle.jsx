import PropTypes from "prop-types";

HowItWorksTitle.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
};

export default function HowItWorksTitle({ title, paragraph }) {
  return (
    <div className="w-full flex flex-col items-center gap-5">
      <p className="font-bold text-3xl">{title}</p>
      <p className="text-2xl opacity-70">{paragraph}</p>
    </div>
  );
}
