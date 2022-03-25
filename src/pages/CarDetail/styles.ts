import styled from 'styled-components';

export const CarDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 4rem;
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
  margin: 1rem;
`;

export const BoldText = styled.p`
  color: #313136;
  font-weight: 700;
  font-size: 2rem;
  margin: 0;
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
`;

export const CarInformationBody = styled.div`
  display: flex;
  margin-top: -4rem;
`;

export const CarPicture = styled.img``;
