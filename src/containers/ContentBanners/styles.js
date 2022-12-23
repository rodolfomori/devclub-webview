import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #000;
  padding-bottom: 100px;

  a {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }
`
export const ContainerItems = styled.div`
  margin-top: 20px;
  width: 50%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 7px;
  gap: 10px;
  background: #5d44c7;

  svg {
    height: 45px;
    width: 45px;
  }

  p {
    color: white;
    font-weight: bold;
    font-size: 17px;
  }
`

export const Banner = styled.img`
  margin-top: 20px;
  width: 100%;
  border-radius: 10px;
`
