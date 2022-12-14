import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: ${(props) => (props.isAndroid ? '25px' : 0)};
  background: #000;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;

`;

export const ContainerItems = styled.button`
  height: 100%;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
  z-index: 9999999;
`;
