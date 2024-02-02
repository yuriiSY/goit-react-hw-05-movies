import CastListItem from 'components/CastListItem/CastListItem';

const CastList = ({ items }) => {
  const elements = items.map(item => (
    <CastListItem key={item.id} item={item} />
  ));

  return <ul>{elements}</ul>;
};

export default CastList;
