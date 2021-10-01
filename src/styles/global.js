import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  box-sizing: border-box;
}
body{
  background-color: #111;
  color: white;
  margin: 0;
  font-family: 'Roboto', sans-serif;
}
.lists{
  margin-top:-150px;
}
.loading{
  position: fixed;
  left: 0;
  top: 0;
  right: auto;
  bottom: 0;
  z-index: 99;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 100%;
    background-position: center;
    background-size: cover;
  }
}
`
