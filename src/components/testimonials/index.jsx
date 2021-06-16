import './index.scss';
import emily from '../../assets/images/image-emily.jpg';
import thomas from '../../assets/images/image-thomas.jpg';
import jennie from '../../assets/images/image-jennie.jpg';

const testimonials = [
  {
    image: emily,
    body: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
    name: 'Emily R.',
    position: 'Marketing Director',
  },
  {
    image: thomas,
    body: 'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
    name: 'Thomas S.',
    position: 'Chief Operating Officer',
  },
  {
    image: jennie,
    body: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
    name: 'Jennie F.',
    position: 'Business Owner',
  },
];

const Card = ({ image, body, name, position }) => (
  <div className='testimonial-card'>
    <img src={image} alt='' />
    <p>{body}</p>
    <span className='name header-text'>{name}</span>
    <span className='position'>{position}</span>
  </div>
);

const Testimonials = () => (
  <div className='testimonials'>
    <h3 className='header-text'>Client Testimonials</h3>
    <div className='cards'>
      {testimonials.map(testimonial => (
        <Card key={testimonial.name} {...testimonial} />
      ))}
    </div>
  </div>
);

export default Testimonials;
