import { Link, useLocation } from 'react-router-dom';

const FilmsSearchListItem = ({ item }) => {
  const location = useLocation();

  return (
    <li>
      <Link to={`/movies/${item.id}`} state={{ from: location }}>
        {item.title}
      </Link>
    </li>
  );
};

export default FilmsSearchListItem;
