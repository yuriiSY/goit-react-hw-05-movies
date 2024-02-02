import FilmsSearchListItem from 'components/FilmsSearchListItem/FilmsSearchListItem';

const FilmsSearchList = ({ items }) => {
  const elements = items.map(item => (
    <FilmsSearchListItem key={item.id} item={item} />
  ));

  return <ul>{elements}</ul>;
};

export default FilmsSearchList;
