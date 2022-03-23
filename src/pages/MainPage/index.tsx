import React from 'react';
import { Header } from '../../components';
import { CarGrid } from './CarGrid';
import { MainPageContainer } from './styles';

export const MainPage = () => {
  return (
    <React.Fragment>
      <Header />
      <MainPageContainer>
        <CarGrid />
      </MainPageContainer>
    </React.Fragment>
  );
};
