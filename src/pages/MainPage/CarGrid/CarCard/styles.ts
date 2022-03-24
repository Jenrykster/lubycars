import { BsThreeDots } from 'react-icons/bs';
import styled from 'styled-components';

export const CardData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  margin-top: 0.2rem;
`;

export const TitleText = styled.p<{ size?: number }>`
  margin: 0;
  color: #313136;
  font-weight: 200;
  font-size: ${(props) => (props.size ? props.size + 'rem' : '1.25rem')};
  margin-top: auto;
`;

export const TitleBold = styled.p<{ size?: number }>`
  margin: 0;
  font-weight: 800;
  color: #313136;
  font-size: ${(props) => (props.size ? props.size + 'rem' : 'initial')};
`;

export const HiddenMessage = styled(TitleBold)`
  color: white;
  font-weight: 500;
  transition: 0.1s ease-in;
  opacity: 0%;
  margin-top: auto;
`;

export const CarImage = styled.img`
  width: 90%;
  transition: 0.15s ease-in-out;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
`;

export const ThreeDots = styled(BsThreeDots)`
  transition: 0.1s ease-in;
  color: #c8c8ca;
`;

export const CarCardGradient = styled.div`
  display: flex;
  background: linear-gradient(52deg, #a1a7f4 0%, #e6d3f1 100%);
  border-radius: 20px;
`;

export const CarCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  background-color: #f8f8fa;
  opacity: 95%;
  border-radius: 20px;
  padding: 1.5rem;
  transition: all 0.4s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: transparent;
    opacity: 100%;

    ${CarImage} {
      transform: scale(1.05);
    }

    ${HiddenMessage} {
      opacity: 100%;
    }

    ${ThreeDots} {
      color: #313136;
      opacity: 64%;
    }
  }
`;
