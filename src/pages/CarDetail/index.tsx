import { useParams } from 'react-router-dom';
import {
  CarDetailContainer,
  CarInformationHeader,
  CarLogo,
  BoldText,
  ColorInfoContainer,
  LightText,
  CarInfoContainer,
  CarInformationBody,
} from './styles';
import { Car } from '../../shared/types';
import { CarImage } from '../MainPage/CarGrid/CarCard/styles';

const CAR_DATA: { cars: Car[] } = require('../../data/cars.json');
const carImages = require.context('../../assets/cars', true);

const Title = (props: { name: string; price: number }) => {
  return (
    <div>
      <BoldText>{props.name}</BoldText>
      <LightText>${props.price}/day</LightText>
    </div>
  );
};

const ColorInfo = (props: { color: string; number: number }) => {
  return (
    <ColorInfoContainer>
      <BoldText>{props.number.toString().padStart(2, '0')}</BoldText>
      <LightText size='1.5rem'>{props.color}</LightText>
    </ColorInfoContainer>
  );
};

export const CarDetail = () => {
  const params = useParams();
  let selectedCar: Car | undefined;
  selectedCar = CAR_DATA.cars.find((car) => {
    if (params.id) {
      return car.id === parseInt(params!.id);
    }
    return false;
  });

  return (
    <CarDetailContainer>
      <CarInformationHeader>
        <CarInfoContainer>
          <CarLogo src={carImages(selectedCar!.logo)} />
          <Title
            name={selectedCar!.brand + ' ' + selectedCar!.model}
            price={selectedCar!.price}
          />
        </CarInfoContainer>
        <ColorInfo color='Yellow' number={2} />
      </CarInformationHeader>
      <CarInformationBody>
        <CarImage src={carImages('./ferrari/colors/red-big.png')} />
      </CarInformationBody>
    </CarDetailContainer>
  );
};