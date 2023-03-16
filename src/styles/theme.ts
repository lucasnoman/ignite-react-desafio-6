import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    yellow: {
      '800': '#FFBA08',
      '800/50': '#FFBA0880'
    },
    dark: {
      '900': '#000',
      '600': '#47585B',
      '500': '#999999',
      '500/50': '#99999980',
    },
    light: {
      '100': '#fff',
      '200': '#F5F8FA',
      '300': '#DADADA'
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'light.100',
        color: 'dark.600',
      },
    },
  },
});
