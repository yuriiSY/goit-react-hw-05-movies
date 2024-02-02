import { NavLink } from 'react-router-dom';

import styles from './main-menu.module.css';

const MainMenu = () => {
  return (
    <ul className={styles.menu}>
      <li className="">
        <NavLink to="/" className={styles.link}>
          Home
        </NavLink>
      </li>
      <li className="">
        <NavLink to="/movies" className={styles.link}>
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default MainMenu;
