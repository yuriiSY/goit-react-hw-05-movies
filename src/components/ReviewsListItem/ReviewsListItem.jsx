import { Link } from 'react-router-dom';

const ReviewsListItem = ({ item }) => {
  return (
    <li className="ReviewsItem">
      <h3>Author: {item.author}</h3>
      <p>Author rating: {item.rating}</p>
      <p>{item.content}</p>
    </li>
  );
};

export default ReviewsListItem;
