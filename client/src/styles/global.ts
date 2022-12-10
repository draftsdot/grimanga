import { createGlobalStyle } from 'styled-components';



export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: var(--ff-poppins);
    }

    body {
        width: 100%;
        height: 100vh;
        //line-height: 60px;
        overflow-x: hidden;
        font-size: var(--fz-normal);
        font-fanmily: var(--ff-nerdfont);
        color: ${ props => props.theme.colors.text_color_def };
        background: ${ props => props.theme.colors.background_color_def };
    }
`;
