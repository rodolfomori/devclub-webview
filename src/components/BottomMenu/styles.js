import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  background: #343434;
  width: 95%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin: 0 0 18px;
  border-radius: 15px;
  margin-left: 2.5%;
`;

export const ContainerItems = styled.div`
  display: flex;
  max-height: 85%;
  flex-direction: column;
  align-items: center;
  background: ${(props) => (props.spotlight ? '#4b4b45' : '#343434;')};
  padding: 5px;
  border-radius: 5px;
  border: none;

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const Label = styled.p`
    color: #f0f0f0;
    font-size: 14px;
`;

export const Img = styled.img`
    height: 26px;
`;
