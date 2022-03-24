import {
  CarCardContainer,
  CarCardGradient,
  CardData,
  CarImage,
  HiddenMessage,
  PriceContainer,
  ThreeDots,
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
    <CarCardGradient>
      <CarCardContainer>
        <CardData>
          <Title brand='Ferrari' model='CALIFORNIA' />
          <ThreeDots size={30} />
        </CardData>
        <CarImage src={props.image} />
        <CardData>
          <HiddenMessage size={1}>Book Now</HiddenMessage>
          <Price value={10} />
        </CardData>
      </CarCardContainer>
    </CarCardGradient>
  );
};
