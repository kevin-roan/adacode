import { ReviewCard } from "../components";

function Reviews() {
  return (
    <div className="review_container">
      <h1>
        What others say <span>about us</span>
      </h1>
      <div className="review_cards_wrapper">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
}

export default Reviews;
