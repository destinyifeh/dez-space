import {ThemeColorProps} from '@/constants/app-types';
import {appDefaultTheme, ISDEFAULT_THEME} from '@/constants/style';
import {create} from 'zustand';

type States = {
  activeNav: string;
  workNav: string;
  currentTheme: string;
  theme: ThemeColorProps;
};

type Actions = {
  setNavigationState: (currentNav: string) => void;
  setWorkNavState: (currentNav: string) => void;
  setTheme: (theme: ThemeColorProps) => void;
};

const initialState: States = {
  activeNav: 'home',
  workNav: 'all',
  currentTheme: ISDEFAULT_THEME,
  theme: appDefaultTheme,
};

export const useAppStore = create<States & Actions>((set, get) => ({
  ...initialState,
  setNavigationState(currentNav) {
    console.log(currentNav, 'currentNav');
    set({activeNav: currentNav});
  },
  setWorkNavState(currentNav) {
    console.log(currentNav, 'workNav');
    set({workNav: currentNav});
  },
  setTheme: (theme: ThemeColorProps) => {
    console.log('themeColor:', theme);
    set({theme: theme});
  },
}));
