import './index.scss';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

const Header = () => (
  <header>
    <Logo fill='#FFF' />
    <ul>
      <li>About</li>
      <li>Services</li>
      <li>Projects</li>
      <li className='header-text'>Contact</li>
    </ul>
  </header>
);

export default Header;
