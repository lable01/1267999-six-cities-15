import { TReview } from 'types/review.ts';
import { getCurrentDate, getStarsWidth } from '../../utils/function.ts';

type TReviewsInfo = {
  review: TReview;
};

function ReviewsInfo({ review }: TReviewsInfo) {
  const { name, stars, date, userUrl, comment } = review;
  const starWidth = getStarsWidth(stars);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={userUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${starWidth}` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={getCurrentDate(date, true)}>
          {getCurrentDate(date, false)}
        </time>
      </div>
    </li>
  );
}

export default ReviewsInfo;
