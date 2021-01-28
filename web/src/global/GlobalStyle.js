import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    font-size: 16px;
  }

  body {
    font-family: Poppins;
  }

  h1 {
   font-weight: bold;
  }

  h3 {
    font-size: 14px;
  }

  hr {
    border-top: 1px solid white;
  }

  .container {
    max-width: 1200px;
  }

  @media (max-width: 1200px) {
    .container {
      max-width: 94%;
    }
  }

  @media screen and ( max-width: 991px ) {
    img.responsive { width: 300px; }
    }
    @media screen and ( min-width: 992px) {
    img.responsive { width: 500px;}
    }
    img.responsive { height: auto; }

  @media screen and (min-width: 576px) {
    html {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 991px) {
  html{
    font-size: 14px;
  }
}
  
  @media screen and (min-width: 992px) {
    html {
      font-size: 18px;
    }
  }
`;
