import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReview } from 'api/api';
import ReviewsList from 'components/ReviewsList/ReviewsList';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
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
        const { data } = await fetchReview(movieId);
        setReviews(data?.results ? data.results : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCasts();
  }, [movieId]);

  const isReviews = Boolean(reviews.length);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {isReviews && <ReviewsList items={reviews} />}
    </>
  );
};

export default ReviewsPage;
