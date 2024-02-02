import { Link } from 'react-router-dom';

const FilmsGalleryItem = ({ item }) => {
  return (
    <li>
      <Link to={`/movies/${item.id}`} state={{ from: '/' }}>
        {item.title}
      </Link>
    </li>
  );
};

export default FilmsGalleryItem;
