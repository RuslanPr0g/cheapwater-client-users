import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    src: url('fonts/OpenSans-ExtraBold.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url('fonts/OpenSans-ExtraBoldItalic.ttf') format('truetype');
    font-weight: 800;
    font-style: italic;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('fonts/OpenSans-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url('fonts/OpenSans-BoldItalic.ttf') format('truetype');
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('fonts/OpenSans-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url('fonts/OpenSans-SemiBoldItalic.ttf') format('truetype');
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('fonts/OpenSans-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url('fonts/OpenSans-Italic.ttf') format('truetype');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('fonts/OpenSans-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url('fonts/OpenSans-LightItalic.ttf') format('truetype');
    font-weight: 300;
    font-style: italic;
  }

  * {
    margin: 0;
    padding: 0;
    
  }

  html {
    height:100%;
    font-family: 'Open Sans', sans-serif;
    
  }
`

export default GlobalStyle
