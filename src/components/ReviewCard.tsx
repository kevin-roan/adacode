import { ImQuotesLeft } from "react-icons/im";

function ReviewCard() {
  return (
    <div className="review_card_container">
      <ImQuotesLeft />
      <p>
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore cccculpa sint ad nisi Lorem pariatur mollit ex esse minim
        nulla eulpa sint ad nisi Lorem pariatur mollit ex esse exercitation anim
        est aliquip amet voluptate voluptate dolor minim nulla e
      </p>
      <div className="user_info">
        <img src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <div className="user_header">
          <h3>Joe Carter</h3>
          <p>Student</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
