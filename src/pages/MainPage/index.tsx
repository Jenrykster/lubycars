import React from 'react';
import { TransitionWrapper } from '../../components';
import { CarGrid } from './CarGrid';
import { MainPageContainer } from './styles';

const CAR_DATA = require('../../data/cars.json');

export const MainPage = () => {
  return (
    <TransitionWrapper>
      <MainPageContainer>
        <CarGrid cars={CAR_DATA.cars} />
      </MainPageContainer>
    </TransitionWrapper>
  );
};
