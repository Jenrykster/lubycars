import { Car } from '@types';
import { carImages } from '@assets';
import { CarCard } from './CarCard';
import { CarGridContainer } from './styles';

export const CarGrid = (props: { cars: Car[] }) => {
  const generateCarComponents = () => {
    return props.cars.map((carData) => {
      return (
        <CarCard
          key={carData.id}
          id={carData.id}
          image={carImages('./' + carData.picture)}
          brand={carData.brand}
          model={carData.model}
          price={carData.price}
        />
      );
    });
  };
  return (
    <CarGridContainer>
      {/*  <CarCard image={carImages('./ferrari/california.png')} />*/}
      {generateCarComponents()}
    </CarGridContainer>
  );
};
