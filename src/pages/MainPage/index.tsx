import React from 'react';
import { CarGrid } from './CarGrid';
import { MainPageContainer } from './styles';

const CAR_DATA = require('../../data/cars.json');

export const MainPage = () => {
  return (
    <React.Fragment>
      <MainPageContainer>
        <CarGrid cars={CAR_DATA.cars} />
      </MainPageContainer>
    </React.Fragment>
  );
};
