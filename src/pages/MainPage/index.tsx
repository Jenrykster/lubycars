import React from 'react';
import { Header } from '../../components';
import { CarGrid } from './CarGrid';
import { MainPageContainer } from './styles';

const CAR_DATA = require('../../data/cars.json');

export const MainPage = () => {
  return (
    <React.Fragment>
      <Header />
      <MainPageContainer>
        <CarGrid cars={CAR_DATA.cars} />
      </MainPageContainer>
    </React.Fragment>
  );
};
