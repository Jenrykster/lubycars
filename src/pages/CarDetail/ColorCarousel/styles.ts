import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  background-color: blue;
`;

export const CarouselSpinner = styled.div`
  display: flex;
  background-color: greenyellow;
  width: 85%;
  justify-content: center;
  overflow-x: hidden;
`;
export const CarouselDisplay = styled.div`
  display: grid;
  width: 300px;
  align-items: center;
  background-color: red;
`;

export enum Positions {
  left = '-105%',
  right = '135%',
  center = '0%',
}
export const CarouselImage = styled.img<{
  position: 'left' | 'right' | 'center';
}>`
  grid-row: 1;
  grid-column: 1;
  transition: 0.2s ease;
  width: ${(props) => (props.position === 'center' ? '300px' : '250px')};
  transform: ${(props) => `translateX(${Positions[props.position]})`};
`;
