import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import Searchbar from '../Searchbar/Searchbar';
import FilmsSearchList from 'components/FilmsSearchList/FilmsSearchList';
import { fetchSearchFilms } from 'api/api';

const SearchFilms = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        setLoading(true);
        const { data } = await fetchSearchFilms(search);
        setFilms(data?.results ? data.results : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (search) {
      fetchFilms();
    }
  }, [search]);

  const handleSearch = ({ search }) => {
    setSearchParams({ search });
    setFilms([]);
  };

  const isPresent = Boolean(films.length);

  return (
    <div>
      <Searchbar onSubmit={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {isPresent && <FilmsSearchList items={films} />}
    </div>
  );
};

export default SearchFilms;
