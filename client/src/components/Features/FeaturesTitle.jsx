import PropTypes from "prop-types";

FeaturesHead.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
};

export default function FeaturesHead({ title, paragraph }) {
  return (
    <>
      <div className="w-full text-center">
        <p className="font-bold text-3xl">{title}</p>
      </div>
      <div className="w-full text-center">
        <p className="text-xl">{paragraph}</p>
      </div>
    </>
  );
}
