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
  width: 50px;
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

export const ColorInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  margin-right: 7.5rem;
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

export const CarPicture = styled.img`
  width: 80%;
  @media (max-width: 1100px) {
    width: 75%;
  }
  @media (max-width: 800px) {
    width: 86%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
