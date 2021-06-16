import './index.scss';
import { ReactComponent as ArrowDown } from '../../assets/icons/icon-arrow-down.svg';
import Cards from '../cards';
import Testimonials from '../testimonials';
import Gallery from '../gallery';
import imageTransform from '../../assets/images/image-transform.jpg';
import imageStandOut from '../../assets/images/image-stand-out.jpg';
import imageGraphicDesign from '../../assets/images/image-graphic-design.jpg';
import imagePhotography from '../../assets/images/image-photography.jpg';

const displayCards = [
  [
    {
      type: 'text',
      title: 'Transform your brand',
      body: 'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.',
      color: 'hsl(51, 100%, 49%)',
    },
    {
      type: 'image',
      image: imageTransform,
    },
    'key-001',
  ],
  [
    {
      type: 'image',
      image: imageStandOut,
    },
    {
      type: 'text',
      title: 'Stand out to the right audience',
      body: 'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. ',
      color: 'hsl(7, 99%, 70%)',
    },
    'key-002',
  ],
  [
    {
      type: 'mixed',
      image: imageGraphicDesign,
      title: 'Graphic design',
      body: 'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.',
    },
    {
      type: 'mixed',
      image: imagePhotography,
      title: 'Photography',
      body: 'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.',
    },
    'key-003',
  ],
];

const Body = () => (
  <div className='main'>
    <div className='first'>
      <div className='floating-parts'>
        <h1 className='header-text'>We are creatives</h1>
        <ArrowDown />
      </div>
    </div>

    {displayCards.map(displayCard => (
      <Cards key={displayCard[2]} displayCard={displayCard} />
    ))}

    <Testimonials />
    <Gallery />
  </div>
);

export default Body;
