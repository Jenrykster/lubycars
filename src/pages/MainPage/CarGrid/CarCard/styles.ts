import styled from 'styled-components';

export const CarCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #f8f8fa;
  border-radius: 20px;
  padding: 1rem;
`;

export const CardHeader = styled.div`
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

export const CarImage = styled.img`
  width: 90%;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
`;
