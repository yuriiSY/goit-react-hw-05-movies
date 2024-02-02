import styles from './films-page.module.css';
import SearchFilms from 'components/SearchFilm/SearchFilm';

const FilmsPage = () => {
  return (
    <div>
      <p>Search</p>
      <SearchFilms />
    </div>
  );
};

export default FilmsPage;
