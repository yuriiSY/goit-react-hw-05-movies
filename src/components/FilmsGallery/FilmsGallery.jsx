import FilmsGalleryItem from 'components/FilmsGalleryItem/FilmsGalleryItem';

const FilmsGallery = ({ items }) => {
  const elements = items.map(item => (
    <FilmsGalleryItem key={item.id} item={item} />
  ));

  return <ul>{elements}</ul>;
};

export default FilmsGallery;
