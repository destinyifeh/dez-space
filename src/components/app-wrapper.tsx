import React, {FC} from 'react';

interface APPWrapperProps {
  children: React.ReactNode;
  appBackgroundColor?: string;
}
export const APPWrapper: FC<APPWrapperProps> = ({
  children,
  appBackgroundColor,
}) => {
  const appBg = appBackgroundColor ?? 'bg-[#EBF2FA]';
  return (
    <div className={`${appBg} h-screen`}>
      <div>{children}</div>
    </div>
  );
};
