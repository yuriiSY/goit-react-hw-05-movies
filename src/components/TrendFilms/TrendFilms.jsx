import { useState, useEffect } from 'react';
import { fetchTrends } from 'api/api';

import FilmsGallery from 'components/FilmsGallery/FilmsGallery';

const TrendFilms = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const { data } = await fetchTrends();
        setFilms(data?.results ? data.results : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      {loading && <p>Loading</p>}
      {error && <p>{error}</p>}
      <FilmsGallery items={films} />
    </div>
  );
};

export default TrendFilms;
