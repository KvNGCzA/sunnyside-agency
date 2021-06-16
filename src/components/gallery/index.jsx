import './index.scss';
import image01 from '../../assets/images/image-01.jpg';
import image02 from '../../assets/images/image-02.jpg';
import image03 from '../../assets/images/image-03.jpg';
import image04 from '../../assets/images/image-04.jpg';

const images = [
  { image: image01, key: 'key001' },
  { image: image02, key: 'key002' },
  { image: image03, key: 'key003' },
  { image: image04, key: 'key004' },
];

const Gallery = () => (
  <div className='gallery'>
    {images.map(image => (
      <div
        key={image.key}
        className='gallery-image'
        style={{
          background: `url(${image.image}) no-repeat center center`,
          backgroundSize: 'cover',
        }}
      ></div>
    ))}
  </div>
);

export default Gallery;
