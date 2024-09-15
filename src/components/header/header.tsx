import { UserIc } from '@/assets/icons/user';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link to={'/'}>
        <img src={'/logo.svg'} alt={'Taza Meken'} />
      </Link>

      <nav>
        <ul className={styles.nav}>
          <li>
            <Link to={'/'}>Главная</Link>
          </li>
          <li>
            <Link to={'/eco-merch'}>ECO Мерч</Link>
          </li>
          <li>
            <Link to={'/about'}>О нас</Link>
          </li>
          <li>
            <Link to={'/articles'}>Статьи</Link>
          </li>
          <li>
            <Link to={'/events'}>Мероприятия</Link>
          </li>
        </ul>
      </nav>

      <Link to={'/login'} className={styles.logo}>
        <UserIc className={styles.logoIcon} />
      </Link>
    </header>
  );
};
