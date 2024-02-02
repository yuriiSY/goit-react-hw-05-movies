import ReviewsListItem from 'components/ReviewsListItem/ReviewsListItem';

const ReviewsList = ({ items }) => {
  const elements = items.map(item => (
    <ReviewsListItem key={item.id} item={item} />
  ));

  return <ul className="ReviewsList">{elements}</ul>;
};

export default ReviewsList;
