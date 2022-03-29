import styled from 'styled-components';

export const CarDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.2rem 4rem;
  @media (max-width: 800px) {
    height: 80vh;
    justify-content: space-between;
  }
  @media (max-width: 1000px) {
    padding: 0rem 3rem;
  }
`;

export const CarInformationHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  justify-content: space-between;
`;

export const CarInfoContainer = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

export const CarLogo = styled.img`
  width: 25%;
  margin: 1rem;
`;

export const BoldText = styled.p<{ size: number }>`
  color: #313136;
  font-weight: 700;
  font-size: ${(props) => props.size + 'rem'};
  margin: 0;
  @media (max-width: 1100px) {
    font-size: ${(props) => props.size / 1.4 + 'rem'};
  }
`;

export const LightText = styled.p<{ size?: string }>`
  color: #313136;
  font-weight: 300;
  font-size: ${(props) => (props.size ? props.size : '2rem')};
  margin: 0;
`;

export const ColorInfoContainer = styled.div<{ transitioning?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  margin-right: 7.5rem;
  transition: 0.2s ease-in-out;
  transform: ${(props) => (props.transitioning ? 'scaleX(0)' : 'scaleX(1)')};

  @media (max-width: 800px) {
    margin-right: 2rem;
  }
`;

export const CarInformationBody = styled.div`
  display: flex;
  margin-top: -7.2rem;
  justify-content: center;

  @media (max-width: 1100px) {
    margin-top: -5rem;
  }
  @media (max-width: 800px) {
    margin-top: -2rem;
  }
`;

export const CarPicture = styled.img<{ transitioning?: boolean }>`
  transition: 0.5s ease;
  width: 100%;
  height: 330px;
  min-width: 200px;
  min-height: 150px;
  opacity: ${(props) => (props.transitioning ? '0%' : '100%')};
  @media (max-width: 1100px) {
    height: 280px;
  }
  @media (max-width: 800px) {
    height: 200px;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    min-width: 250px;
    min-height: 125px;
  }
`;
