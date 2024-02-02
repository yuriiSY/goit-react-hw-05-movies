import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'api/api';
import CastList from 'components/CastList/CastList';

const CastPage = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchCasts = async () => {
      if (!movieId) {
        return;
      }
      try {
        setLoading(true);
        const { data } = await fetchCast(movieId);
        setCast(data?.cast ? data.cast : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCasts();
  }, [movieId]);

  const isCast = Boolean(cast.length);
  console.log(cast);
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {isCast && <CastList items={cast} />}
    </>
  );
};

export default CastPage;
