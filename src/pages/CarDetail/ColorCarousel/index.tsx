import { useState } from 'react';
import { ArrowButton } from '../../../components';
import { Color } from '../../../shared/types';
import {
  CarouselContainer,
  CarouselDisplay,
  CarouselImage,
  CarouselSpinner,
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

const generateInitialPositions = () => {
  const startPosition = Math.floor(3 / 2);
  const positions = [];
  let colorId = 1;
  for (let i = -startPosition; i <= startPosition; i++) {
    positions.push({ id: colorId, pos: i });
    colorId++;
  }
  return positions;
};

export const ColorCarousel = (props: { colorList?: Color[] }) => {
  const [selectedColor, setSelectedColor] = useState(1);

  const [positions, setPositions] = useState(generateInitialPositions());

  const rotate = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      setSelectedColor((prev) => (prev < 3 ? prev + 1 : 1));
      setPositions((prev) => {
        return prev.map((pos) => {
          const newPos = pos.pos < 1 ? pos.pos + 1 : -1;
          return { id: pos.id, pos: newPos };
        });
      });
    } else {
      setSelectedColor((prev) => prev - 1);
    }
    console.log(selectedColor);
    console.log(positions);
  };

  const getPosition = (id: number) => {
    return positions.find((posData) => posData.id === id)!.pos;
  };
  const generateCarousel = () => {
    return COLOR_DATA.map((color) => {
      return (
        <CarouselImage
          key={color.id}
          src={carImages(color.pic)}
          position={getPosition(color.id)}
          isSelected={getPosition(color.id) === 0}
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
        onClick={() => rotate('left')}
      />
      <CarouselSpinner>
        <CarouselDisplay>{generateCarousel()}</CarouselDisplay>
      </CarouselSpinner>
      <ArrowButton
        color='white'
        backgroundColor='#313136'
        arrowDirection='right'
        onClick={() => rotate('right')}
      />
    </CarouselContainer>
  );
};
