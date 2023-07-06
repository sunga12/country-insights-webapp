import { Link } from 'react-router-dom';
import mic from '../assets/microphone-solid.svg';
import settings from '../assets/gear-solid.svg';
import back from '../assets/chevron-left-solid.svg';

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">
          <img className="icon" src={back} alt="back" />
        </Link>
        <p>
          Countries
        </p>
        <img className="icon" src={mic} alt="audio" />
        <img className="icon" src={settings} alt="settings" />
      </nav>
    </>
  );
}

export default Navbar;
