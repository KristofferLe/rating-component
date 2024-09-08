import React, { useState } from "react";
import { StyledContainer, Rate, ThankYou } from "./containerStyles";
import { FaStar } from "react-icons/fa6";
import Rating from "../img/rating.svg";

export default function RatingCard() {
  const [hasRated, setHasRated] = useState(false);
  const [rating, setRating] = useState(undefined);
  const handleSetRating = ({ target }) => setRating(target.value);
  const handleRatingSubmit = () => setHasRated(true);

  const scores = [
    {
      rating: 1,
      value: "1",
    },
    {
      rating: 2,
      value: "2",
    },
    {
      rating: 3,
      value: "3",
    },
    {
      rating: 4,
      value: "4",
    },
    {
      rating: 5,
      value: "5",
    },
  ];

  return (
    <StyledContainer>
      {!hasRated ? (
        <Rate>
          <i className="star">
            <FaStar />
          </i>
          <h1 className="message">How did we do?</h1>
          <p className="description">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <section className="rating-numbers">
            {scores.map((score) => (
              <button
                className={rating === score.value ? "active" : ""}
                key={score.value}
                value={score.value}
                onClick={handleSetRating}
              >
                {score.rating}
              </button>
            ))}
          </section>
          <button
            className="submit"
            onClick={handleRatingSubmit}
            disabled={!rating}
          >
            SUBMIT
          </button>
        </Rate>
      ) : (
        <ThankYou>
          <img src={Rating} />
          <span className="score">You selected {rating} out of 5 </span>
          <h1 className="thanks">Thank You!</h1>
          <p className="message">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </ThankYou>
      )}
    </StyledContainer>
  );
}
