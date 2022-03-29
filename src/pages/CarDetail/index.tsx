import { useNavigate, useParams } from 'react-router-dom';
import {
  CarDetailContainer,
  CarInformationHeader,
  CarLogo,
  BoldText,
  ColorInfoContainer,
  LightText,
  CarInfoContainer,
  CarInformationBody,
  CarPicture,
  ButtonText,
  GoBackButtonContainer,
  BookButtonContainer,
} from './styles';
import { Car } from '../../shared/types';
import { ColorCarousel } from './ColorCarousel';
import { useEffect, useRef, useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { TransitionWrapper } from '../../components';

const CAR_DATA: { cars: Car[] } = require('../../data/cars.json');
const carImages = require.context('../../assets/cars', true);

const Title = (props: { name: string; price: number }) => {
  return (
    <div>
      <BoldText size={1.6}>{props.name}</BoldText>
      <LightText>${props.price}/day</LightText>
    </div>
  );
};

const ColorInfo = (props: {
  color: string;
  number: number;
  transitioning: boolean;
}) => {
  return (
    <ColorInfoContainer transitioning={props.transitioning}>
      <BoldText size={2}>{props.number.toString().padStart(2, '0')}</BoldText>
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
  const firstRun = useRef(true);
  const nav = useNavigate();
  const [selectedColor, setSelectedColor] = useState(selectedCar?.colors[1]);
  const [actualCarImage, setActualCarImage] = useState(
    carImages(selectedColor!.pics[1])
  );
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeCarInfo = (sel: number) => {
    setSelectedColor(selectedCar?.colors.find((color) => color.id === sel));
  };

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    const changeImage = () => {
      setIsTransitioning(false);
      setActualCarImage(carImages(selectedColor!.pics[1]));
    };
    setIsTransitioning(true);

    setTimeout(changeImage, 300);
  }, [selectedColor]);

  return (
    <TransitionWrapper>
      <CarDetailContainer>
        <CarInformationHeader>
          <CarInfoContainer>
            <CarLogo src={carImages(selectedCar!.logo)} />
            <Title
              name={selectedCar!.brand + ' ' + selectedCar!.model}
              price={selectedCar!.price}
            />
          </CarInfoContainer>
          <ColorInfo
            color={selectedColor!.color}
            number={0 + selectedColor!.id}
            transitioning={isTransitioning}
          />
        </CarInformationHeader>
        <CarInformationBody>
          <GoBackButtonContainer onClick={() => nav('/')}>
            <BsArrowLeft />
            <ButtonText color='#313136'>Back to catalog</ButtonText>
          </GoBackButtonContainer>
          <CarPicture src={actualCarImage} transitioning={isTransitioning} />
        </CarInformationBody>
        <BookButtonContainer
          onClick={() => alert('Booked car ' + selectedCar?.model)}
        >
          <ButtonText color='white'>Book now</ButtonText>
          <BsArrowRight color='white' />
        </BookButtonContainer>
        <ColorCarousel
          colorList={selectedCar!.colors}
          onSelectedColorChange={changeCarInfo}
        />
      </CarDetailContainer>
    </TransitionWrapper>
  );
};
