import styled from 'styled-components';

export const MovieRowStyled = styled.div`
  margin-bottom: 30px;
  h2{
    margin: 0 0 0 30px;
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
