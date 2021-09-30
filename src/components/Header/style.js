import styled from 'styled-components';

export const HeaderStyled = styled.header`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
  background: transparent;
  transition: all ease .4s;
  &.black{
    background-color: #141414;
  }
  .img-controler{
    height: 30px;
    img{
     height: 100%;
   }
  }

`;
