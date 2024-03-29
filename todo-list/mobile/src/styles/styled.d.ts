import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    color: {
      primary: string;
      secondary: string;
      tertiary: string;

      white: string;
      black: string;
      input: string;
    };
    font: {
      forum: string;
      roboto: string;
      economica: string;
    };
  }
}
