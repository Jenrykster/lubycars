import { BsThreeDots } from 'react-icons/bs';
import {
  CarCardContainer,
  CardHeader,
  CarImage,
  PriceContainer,
  TitleBold,
  TitleContainer,
  TitleText,
} from './styles';

const Price = (props: { value: number }) => {
  return (
    <PriceContainer>
      <TitleBold>$</TitleBold>
      <TitleBold size={1.5}>{props.value}</TitleBold>
      <TitleText size={1}>/day</TitleText>
    </PriceContainer>
  );
};

const Title = (props: { brand: string; model: string }) => {
  return (
    <TitleContainer>
      <TitleBold>{props.brand}</TitleBold>
      <TitleText>{props.model}</TitleText>
    </TitleContainer>
  );
};

export const CarCard = (props: { image: string }) => {
  return (
    <CarCardContainer>
      <CardHeader>
        <Title brand='Ferrari' model='CALIFORNIA' />
        <BsThreeDots size={30} color='#C8C8CA' />
      </CardHeader>
      <CarImage src={props.image} />
      <Price value={10} />
    </CarCardContainer>
  );
};
