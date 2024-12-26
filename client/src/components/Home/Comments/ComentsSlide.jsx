import PropTypes from "prop-types";

ComentsSlide.propTypes = {
  quoteImage: PropTypes.string,
  quoteText: PropTypes.string,
  authorImage: PropTypes.string,
  authorName: PropTypes.string,
};

export default function ComentsSlide({
  quoteImage,
  quoteText,
  authorImage,
  authorName,
}) {
  return (
    <div className="flex shrink-0 w-full flex-col gap-12">
      <div className="w-full flex flex-col gap-6 items-center">
        <div>
          <img className="size-14" src={quoteImage} alt="" />
        </div>
        <div className="w-full px-10 text-center">
          <p className="opacity-70 text-xl">{quoteText}</p>
        </div>
      </div>
      <div className="flex justify-center px-10">
        <div className="flex flex-col items-center gap-4 order-2">
          <img className="size-16" src={authorImage} alt="" />
          <caption className="text-xl font-bold">{authorName}</caption>
        </div>
      </div>
    </div>
  );
}
