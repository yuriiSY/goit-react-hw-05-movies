const CastListItem = ({ item }) => {
  return (
    <li>
      <img
        src={
          item.profile_path
            ? `https://image.tmdb.org/t/p/original/${item.profile_path}`
            : ''
        }
        alt=""
        width="80"
        height="80"
      />
      <h3>{item.name}</h3>
      <p>{item.character}</p>
    </li>
  );
};

export default CastListItem;
