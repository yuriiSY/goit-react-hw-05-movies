import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchDetails } from 'api/api';
import { Link, Outlet } from 'react-router-dom';

const SinglePost = () => {
  const [film, setFilm] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const { data } = await fetchDetails(movieId);
        setFilm(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [movieId]);

  const dateString = film?.release_date;
  const dateObject = new Date(Date.parse(dateString));
  const year = dateObject.getFullYear();

  const genres = film?.genres
    ? film.genres.map(genre => genre.name).join(',')
    : '';

  const from = location.state?.from || '/';

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <button onClick={() => navigate(from)} type="button">
        Go back
      </button>
      {film && (
        <div>
          <div className="FilmDetails">
            <div>
              <img
                src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
                alt={film.title}
                width="240"
                height="240"
              />
            </div>
            <div>
              <div>
                <h2>{film.original_title + ' ' + year}</h2>
                <p>User Score:{film.vote_average}</p>
              </div>
              <div>
                <h3>Overview</h3>
                <p>{film.overview}</p>
              </div>
              <div>
                <h3>Genres</h3>
                <p>{genres}</p>
              </div>
            </div>
          </div>
          <div>
            <h3>Additional information</h3>
            <ul className="Infolist">
              <li>
                <Link to="cast" state={{ from }}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to="reviews" state={{ from }}>
                  Reviews
                </Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default SinglePost;
