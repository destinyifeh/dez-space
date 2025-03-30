import {appDarkTheme, appDefaultTheme} from '@/constants/style';
import {useAppStore} from '@/state-managers/app-store';
import React, {FC, useEffect} from 'react';

interface APPContainerProps {
  children: React.ReactNode;
  appBackgroundColor?: string;
}
export const AppContainer: FC<APPContainerProps> = ({
  children,
  appBackgroundColor,
}) => {
  const {myTheme, setTheme} = useAppStore();

  useEffect(() => {
    // Attempt to retrieve the stored theme from localStorage
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
      // Apply the stored theme
      const theme = storedTheme === 'default' ? appDefaultTheme : appDarkTheme;
      setTheme(theme);
    } else {
      // No stored theme found; check system preference
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      const theme = prefersDark ? appDarkTheme : appDefaultTheme;
      setTheme(theme);
    }
  }, [setTheme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? appDarkTheme : appDefaultTheme;
      setTheme(newTheme);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [setTheme]);

  const appBg = appBackgroundColor ?? 'bg-[#EBF2FA]';
  return (
    <div
      style={{
        backgroundColor:
          myTheme.type === 'default' ? '#EBF2FA' : myTheme.background,
      }}
      className={`${appBg} flex flex-1 w-full min-h-screen mx-auto`}>
      {children}
    </div>
  );
};
