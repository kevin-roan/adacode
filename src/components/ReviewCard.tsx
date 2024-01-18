import { ImQuotesLeft } from "react-icons/im";

function ReviewCard({username,qualification,imgUrl,review}) {
  return (
    <div className="review_card_container">
      <ImQuotesLeft />
      <p>
        {review}
      </p>
      <div className="user_info">
        <img src={imgUrl} />
        <div className="user_header">
          <h3>{username}</h3>
          <p>{qualification}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
