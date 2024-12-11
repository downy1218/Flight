import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    @font-face{
        font-family:'AbrliFatface';
        src: url('/Fonts/AbrilFatface-Regular.ttf') format('truetype');
        font-weight: light;
        font-style: normal;
    }
    @font-face{
        font-family:'PTSerif-Regular';
        src: url('/Fonts/PTSerif-Regular.ttf') format('truetype');
        font-weight: light;
        font-style: normal;
    }
    @font-face{
        font-family:'PTSerif-Bold';
        src: url('/Fonts/PTSerif-Bold.ttf') format('truetype');
        font-weight: light;
        font-style: normal;
    }
    @font-face{
        font-family:'PTSerif-BoldItalic';
        src: url('/Fonts/PTSerif-BoldItalic.ttf') format('truetype');
        font-weight: light;
        font-style: normal;
    }
    @font-face{
        font-family:'PTSerif-Italic';
        src: url('/Fonts/PTSerif-Italic.ttf') format('truetype');
        font-weight: light;
        font-style: normal;
    }

`

export default GlobalStyle;