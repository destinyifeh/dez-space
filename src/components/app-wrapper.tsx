import React, {FC} from 'react';

interface APPWrapperProps {
  children: React.ReactNode;
}
export const AppInnerContainer: FC<APPWrapperProps> = ({children}) => {
  return (
    <div className="mt-10 w-[85%] mx-auto">
      <div>{children}</div>
    </div>
  );
};
