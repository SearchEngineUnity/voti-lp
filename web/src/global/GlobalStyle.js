import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    font-size: 14px;
  }

  body {
    font-family: Arial;
  }

  h1, h2 {
   
  }

  h3 {
    font-size: 14px;
  }

  li {
    font-size: 16px;
  }

  a:link
  {
      color:#FFFFFF;
      text-decoration: none;
      font-size: 14px;
  }
  
  a:visited
  {
      color:#FFFFFF;
      text-decoration: none;
      font-size: 14px;
  }
  
  a:hover 
  {
      color:#FFFFFF;
      text-decoration: none;
      font-size: 14px;
  }

  hr {
    border-top: 1px solid white;
  }

  @media screen and (min-width: 576px) {
    html {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 991px) {
    padding-top: 18rem;
    margin-top: -18rem;
  }
}
  
  @media screen and (min-width: 992px) {
    html {
      font-size: 18px;
    }
  }
`;
