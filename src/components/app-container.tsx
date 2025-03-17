import React, {FC} from 'react';

interface APPContainerProps {
  children: React.ReactNode;
  appBackgroundColor?: string;
}
export const AppContainer: FC<APPContainerProps> = ({
  children,
  appBackgroundColor,
}) => {
  const appBg = appBackgroundColor ?? 'bg-[#EBF2FA]';
  return <div className={`${appBg} flex-1 w-[85%] mx-auto`}>{children}</div>;
};
