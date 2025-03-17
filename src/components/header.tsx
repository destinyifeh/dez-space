import {appDarkTheme, appDefaultTheme, pacificoFont} from '@/constants/style';
import {useAppStore} from '@/state-managers/app-store';
import Image from 'next/image';

export const Header = () => {
  const {setTheme, theme} = useAppStore(state => state);

  const handleThemeChange = () => {
    if (theme.type === 'default') {
      setTheme(appDarkTheme);
    } else {
      setTheme(appDefaultTheme);
    }
  };
  return (
    <div className="flex flex-row  items-center justify-between mb-5">
      <div className="flex flex-row space-x-1">
        <p className={`${pacificoFont.className} text-xl text-black`}>
          Destiny
        </p>
        <p
          className={`${pacificoFont.className} text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#FF9C1A] to-[#ED250A]`}>
          Ifehor
        </p>
      </div>
      <button
        className="w-[50px] h-[50px] rounded-full border-[#E1E8EF] border-[1px] flex flex-col justify-center items-center cursor-pointer"
        onClick={handleThemeChange}>
        <Image src={require('../../public/assets/themeIcon.png')} alt="mood" />
      </button>
    </div>
  );
};
