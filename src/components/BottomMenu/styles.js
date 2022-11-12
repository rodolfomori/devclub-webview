import styled from 'styled-components'

export const Bottom = styled.div`
  position: fixed;
  bottom: 0;
  background: #343434;
  width: 100vw;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2%;
`

export const ContainerItems = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;


  svg {
    min-width: 35px;
    min-height: 35px;
    color: #f0f0f0;
  }
`

export const Label = styled.p`
    color: #f0f0f0;
    font-size: 16px;
`

export const Image = styled.img`
  height: 30px;
`
