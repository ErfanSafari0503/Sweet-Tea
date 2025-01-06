import PropTypes from "prop-types";

Features__Items.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  paragraph: PropTypes.string,
};

export default function Features__Items({ image, title, paragraph }) {
  return (
    <div className="flex gap-8 items-center">
      <div className="p-[4%] sm:p-6 bg-[#F4BA94] rounded-full">
        <img className="size-[10vw] sm:size-16" src={image} alt="" />
      </div>
      <div className="flex flex-col gap-4 items-start max-w-[70%]">
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-lg opacity-70">{paragraph}</p>
      </div>
    </div>
  );
}
