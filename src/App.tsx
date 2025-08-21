import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Outlet, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { activeClass } from './servises';

export const App = () => {
  useEffect(() => {
    document.documentElement.classList.add("has-navbar-fixed-top");
  }, []);

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to=".."
              className={activeClass}
            >
              Home
            </NavLink>
            <NavLink
              to="tabs"
              className={activeClass}
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  )
}
