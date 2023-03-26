import { NavLink, Link, useLocation } from 'react-router-dom';

import './AppHeader.scss';

const AppHeader = () => {
  const { pathname } = useLocation();
  const styledLink = pathname.includes('/characters');

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
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive || styledLink ? '#9F0013' : 'inherit',
              })}
            >
              Characters
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/comics"
              style={({ isActive }) => ({
                color: isActive ? '#9F0013' : 'inherit',
              })}
            >
              Comics
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
