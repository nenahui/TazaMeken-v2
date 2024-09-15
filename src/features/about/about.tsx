import React from 'react';
import MainText from './components/mainText/mainText';
import ContactUs from './components/contactUs/contactUs';
import AboutImages from '@/assets/aboutImages.svg';
import styles from './styles.module.scss'
import Rating from './components/rating/rating';
import OurSolution from './components/ourSolution/ourSolution';
import Together from './components/togetherBlock/together';
import Cards from './components/aboutCards/cards';
import CardList from './components/cardList/cardList';
import Companies from './components/companies/companies';
import Answers from './components/ansewrs/answers';
import Invitation from './components/invitation/invitation';

export const About: React.FC = () => {
  return <>
    <div className={styles.mainBlockWrapper}>
      <div>
        <MainText />
        <ContactUs />
      </div>
      <img className={styles.MainImage} src={AboutImages} alt="" />
    </div>
    <Rating />
    <OurSolution />
    <Together />
    <Cards />
    <CardList />
    <Companies />
    <Answers /> 
    <Invitation />
  </>;
};
