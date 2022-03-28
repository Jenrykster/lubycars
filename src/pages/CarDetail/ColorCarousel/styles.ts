import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  height: 200px;

  @media (max-width: 850px) {
    width: 75%;
  }
`;

export const CarouselSpinner = styled.div`
  display: flex;
  width: 85%;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 850px) {
    width: 60%;
  }
`;
export const CarouselDisplay = styled.div`
  display: grid;
  width: 300px;
  align-items: center;
`;

export const CarouselImage = styled.img<{
  position: number;
  isSelected?: boolean;
}>`
  grid-row: 1;
  grid-column: 1;
  transition: 0.2s ease;
  width: 85%;
  transform: ${(props) =>
    `translateX(${props.position * 110}%) ${
      props.isSelected ? 'scale(1.25)' : 'scale(0.85)'
    }`};

  @media (max-width: 850px) {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
  }
`;
