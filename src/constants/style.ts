import {Pacifico, Poppins, Raleway} from 'next/font/google';
import {ThemeColorProps} from './app-types';

export const pacificoFont = Pacifico({
  variable: '--font-pacifico',
  weight: '400',
  subsets: ['latin'],
});

export const ralewayFont = Raleway({
  // variable: '--font-ra',
  // weight: '400',
  subsets: ['latin'],
});

export const poppinsFont = Poppins({
  weight: '400',
  subsets: ['latin'],
});

export const appDefaultTheme: ThemeColorProps = {
  type: 'default',
  text: '#000000',
  background: '#fff',
};

export const appDarkTheme: ThemeColorProps = {
  type: 'dark',
  text: '#57657A',
  background: '#151718',
};

export const ISDEFAULT_THEME = 'default';
export const ISDARK_THEME = 'dark';
