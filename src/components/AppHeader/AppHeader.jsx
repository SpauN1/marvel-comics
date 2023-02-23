import { NavLink, Link } from 'react-router-dom';

import './AppHeader.scss';

const isActive = ({ isActive }) => {
  return { color: isActive ? '#9f0013' : 'inherit' };
};

const AppHeader = () => {
  return (
    <header className="app__header">
      <h1 className="app__title">
        <Link to="/">
          <span>Marvel</span> information portal
        </Link>
      </h1>
      <nav className="app__menu">
        <ul>
          <li>
            <NavLink end to="/" style={isActive}>
              Characters
            </NavLink>
          </li>
          <li>
            <NavLink end to="/comics" style={isActive}>
              Comics
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
