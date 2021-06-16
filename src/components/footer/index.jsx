import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as Facebook } from '../../assets/icons/icon-facebook.svg';
import { ReactComponent as Twitter } from '../../assets/icons/icon-twitter.svg';
import { ReactComponent as Pinterest } from '../../assets/icons/icon-pinterest.svg';
import { ReactComponent as Instagram } from '../../assets/icons/icon-instagram.svg';
import './index.scss';

const socials = [Facebook, Instagram, Twitter, Pinterest];
const keys = ['facebook', 'instagram', 'twitter', 'pinterest'];

const Footer = () => (
  <footer>
    <Logo className='logo' fill='#2C7566' />
    <ul>
      <li>About</li>
      <li>Services</li>
      <li>Projects</li>
    </ul>
    <ul className='socials'>
      {socials.map((Social, index) => (
        <li key={keys[index]}>
          <Social className='social-icon' fill='#2C7566' />
        </li>
      ))}
    </ul>
  </footer>
);

export default Footer;
