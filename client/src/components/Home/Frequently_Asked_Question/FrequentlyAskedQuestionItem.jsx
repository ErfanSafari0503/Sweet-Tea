import PropTypes from "prop-types";
import { useState } from "react";

FrequentlyAskedQuestionItem.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
  enabled: PropTypes.bool,
};

export default function FrequentlyAskedQuestionItem({
  question,
  answer,
  enabled = false,
}) {
  const [isOpen, setIsOpen] = useState(enabled);

  function handleShowAnswer() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="w-full flex flex-col gap-4 px-4 py-6 rounded-xl bg-white shadow-md">
      <div className="flex justify-between gap-16">
        <p className="font-bold text-xl">{question}</p>
        <img
          className="lg:size-10"
          src="src/images/arrow-down.svg"
          alt=""
          onClick={handleShowAnswer}
        />
      </div>
      <p
        className={
          isOpen
            ? "text-base opacity-70 px-2"
            : "hidden text-base opacity-70 px-2"
        }
      >
        {answer}
      </p>
    </div>
  );
}
