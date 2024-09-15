import { Button } from '@/components/ui/button';
import React from 'react';
import styles from './merchNav.module.scss';

interface Props {
  active: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const MerchNav: React.FC<Props> = ({ active, handleClick }) => {
  return (
    <nav>
      <ul className={styles.navList}>
        <li className={`${active === 'all' && 'border-b-2 mb-[-10px] border-primary'}`}>
          <Button name={'all'} variant={'ghost'} onClick={handleClick}>
            Все
          </Button>
        </li>
        <li className={`${active === 't-shirts' && 'border-b-2 mb-[-10px] border-primary'}`}>
          <Button name={'t-shirts'} variant={'ghost'} onClick={handleClick}>
            Футболки
          </Button>
        </li>
        <li className={`${active === 'sweatshirts' && 'border-b-2 mb-[-10px] border-primary'}`}>
          <Button name={'sweatshirts'} variant={'ghost'} onClick={handleClick}>
            Свитшоты
          </Button>
        </li>
        <li className={`${active === 'bags' && 'border-b-2 mb-[-10px] border-primary'}`}>
          <Button name={'bags'} variant={'ghost'} onClick={handleClick}>
            Сумки
          </Button>
        </li>
        <li className={`${active === 'headwear' && 'border-b-2 mb-[-10px] border-primary'}`}>
          <Button name={'headwear'} variant={'ghost'} onClick={handleClick}>
            Головные уборы
          </Button>
        </li>
        <li className={`${active === 'bottles' && 'border-b-2 mb-[-10px] border-primary'}`}>
          <Button name={'bottles'} variant={'ghost'} onClick={handleClick}>
            Многоразовые бутылки
          </Button>
        </li>
        <li className={`${active === 'souvenirs' && 'border-b-2 mb-[-10px] border-primary'}`}>
          <Button name={'souvenirs'} variant={'ghost'} onClick={handleClick}>
            Сувениры
          </Button>
        </li>
      </ul>
    </nav>
  );
};
