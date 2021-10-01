import styled from 'styled-components';

export const MovieRowStyled = styled.div`
  margin-bottom: 30px;
  position: relative;
  h2{
    margin: 0 0 0 30px;
  }
  .movieRow{
    position: absolute;
    width: 40px;
    height: 225px;
    z-index:99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: rgba(0,0,0,0.6);
    cursor: pointer;
    opacity: 0;
    transition: .4s;
    top: 20%;
  }
  .movieRow-left{
    left: 0;
  
  }
  .movieRow-right{
    right: 0;
  }
  &:hover .movieRow-left{
    opacity: 1;
  }
  &:hover .movieRow-right{
    opacity: 1;
  }

  .movieRow--listarea{
    overflow-x: hidden;
    padding: 30px;
  }
  .movieRow--list{
    width: 99999px;
  }
  .movieRow--item {
    display: inline-block;
    width: 150px;
    cursor: pointer;
    img{
      width: 100%;
      transform: scale(0.9);
      transition: all ease .4s;
      &:hover{
        transform: scale(1);
      }
    }
  }
`;
