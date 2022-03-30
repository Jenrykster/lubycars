import { carData as CAR_DATA } from '@data';
import { TransitionWrapper } from '@components';
import { CarGrid } from './CarGrid';
import { MainPageContainer } from './styles';

export const MainPage = () => {
  return (
    <TransitionWrapper>
      <MainPageContainer>
        <CarGrid cars={CAR_DATA.cars} />
      </MainPageContainer>
    </TransitionWrapper>
  );
};
