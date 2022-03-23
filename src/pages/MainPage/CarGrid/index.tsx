import { CarCard } from './CarCard';
import { CarGridContainer } from './styles';

const carImages = require.context('../../../assets/cars', true);

export const CarGrid = () => {
  return (
    <CarGridContainer>
      <CarCard image={carImages('./ferrari/california.png')} />
      <CarCard image={carImages('./ferrari/california.png')} />
      <CarCard image={carImages('./ferrari/california.png')} />
      <CarCard image={carImages('./ferrari/california.png')} />
      <CarCard image={carImages('./ferrari/california.png')} />
      <CarCard image={carImages('./ferrari/california.png')} />
      <CarCard image={carImages('./ferrari/california.png')} />
      <CarCard image={carImages('./ferrari/california.png')} />
      <CarCard image={carImages('./ferrari/california.png')} />
      <CarCard image={carImages('./ferrari/california.png')} />
      <CarCard image={carImages('./ferrari/california.png')} />
      <CarCard image={carImages('./ferrari/california.png')} />
      <CarCard image={carImages('./ferrari/california.png')} />
      <CarCard image={carImages('./ferrari/california.png')} />
      <CarCard image={carImages('./ferrari/california.png')} />
      <CarCard image={carImages('./ferrari/california.png')} />
      <CarCard image={carImages('./ferrari/california.png')} />
      <CarCard image={carImages('./ferrari/california.png')} />
      <CarCard image={carImages('./ferrari/california.png')} />
      <CarCard image={carImages('./ferrari/california.png')} />
      <CarCard image={carImages('./ferrari/california.png')} />
      <CarCard image={carImages('./ferrari/california.png')} />
      <CarCard image={carImages('./ferrari/california.png')} />
      <CarCard image={carImages('./ferrari/california.png')} />
      <CarCard image={carImages('./ferrari/california.png')} />
      <CarCard image={carImages('./ferrari/california.png')} />
      <CarCard image={carImages('./ferrari/california.png')} />
    </CarGridContainer>
  );
};
