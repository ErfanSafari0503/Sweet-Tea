import { useState } from "react";
import ComentsSlide from "./ComentsSlide";
import Button from "../Reusable/Button";
import commentsData from "../../jsons/comments.json";

export default function Comments() {
  const [slideId, setSlideId] = useState(1);

  const comments = commentsData.comments;

  function handleSlideIncrease() {
    if (slideId < comments.length) {
      setSlideId(slideId + 1);
    }
  }

  function handleSlideDecrease() {
    if (slideId > 1) {
      setSlideId(slideId - 1);
    }
  }

  return (
    <section className="flex w-full flex-col my-16 pt-8 bg-slate-200 rounded-lg pb-4 relative">
      <div className="w-full text-center">
        <h1 className="font-bold text-3xl">نظرات مشتریان</h1>
      </div>
      <article className="flex w-full pt-8 pb-4 overflow-hidden">
        {comments
          .filter((comment) => comment.id === slideId)
          .map((comment) => (
            <ComentsSlide
              key={comment.id}
              quoteImage={comment.quoteImage}
              quoteText={comment.quoteText}
              authorImage={comment.authorImage}
              authorName={comment.authorName}
            />
          ))}
      </article>
      <Button
        styles={
          slideId === 1
            ? "btn-left absolute left-8 bottom-16 hidden"
            : "btn-left absolute left-8 bottom-16"
        }
        onClick={handleSlideDecrease}
      >
        <img className="size-10" src="src/images/Left.svg" alt="" />
      </Button>
      <Button
        styles={
          slideId === 9
            ? "btn-right absolute right-8 bottom-16 hidden"
            : "btn-right absolute right-8 bottom-16"
        }
        onClick={handleSlideIncrease}
      >
        <img className="size-10" src="src/images/Right.svg" alt="" />
      </Button>
    </section>
  );
}
