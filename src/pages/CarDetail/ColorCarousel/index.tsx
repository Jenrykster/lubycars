import { useState } from 'react';
import { ArrowButton } from '../../../components';
import { Color } from '../../../shared/types';
import {
  CarouselContainer,
  CarouselDisplay,
  CarouselImage,
  CarouselSpinner,
  Positions,
} from './styles';

const carImages = require.context('../../../assets/cars', true);

const COLOR_DATA = [
  {
    id: 1,
    color: 'Red',
    pic: './ferrari/colors/red.png',
  },
  {
    id: 2,
    color: 'Yellow',
    pic: './ferrari/colors/yellow.png',
  },
  {
    id: 3,
    color: 'Gray',
    pic: './ferrari/colors/gray.png',
  },
];

export const ColorCarousel = (props: { colorList?: Color[] }) => {
  const [selectedColor, setSelectedColor] = useState(2); // Uses car id to determine carousel order

  const getPosition = (id: number) => {
    if (selectedColor === 1 && id === 2) return 'right';
    if (selectedColor === 2 && id === 3) return 'right';
    if (selectedColor === 2 && id === 1) return 'left';
    if (selectedColor === 3 && id === 2) return 'left';
    return 'center';
  };
  const generateCarousel = () => {
    return COLOR_DATA.map((color) => {
      return (
        <CarouselImage
          key={color.id}
          src={carImages(color.pic)}
          position={getPosition(color.id)}
        />
      );
    });
  };
  return (
    <CarouselContainer>
      <ArrowButton
        color='white'
        backgroundColor='#313136'
        arrowDirection='left'
        onClick={() => setSelectedColor((prev) => (prev > 1 ? prev - 1 : 3))}
      />
      <CarouselSpinner>
        <CarouselDisplay>{generateCarousel()}</CarouselDisplay>
      </CarouselSpinner>
      <ArrowButton
        color='white'
        backgroundColor='#313136'
        arrowDirection='right'
        onClick={() => setSelectedColor((prev) => (prev < 3 ? prev + 1 : 1))}
      />
    </CarouselContainer>
  );
};
