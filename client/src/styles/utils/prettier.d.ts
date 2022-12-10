import 'styled-components';



declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            background_color_def: string;
            background_color_alt: string;
            background_color_bar: string;

            icon_color: string;
            line_color: string;

            text_color_def: string;
            text_color_alt: string;

        }
    }
}
