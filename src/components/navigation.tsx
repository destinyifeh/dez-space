import {useAppStore} from '@/state-managers/app-store';
import Image from 'next/image';
import {FC} from 'react';

export const Navigation: FC = () => {
  const {setNavigationState, activeNav, setWorkNavState, myTheme} = useAppStore(
    state => state,
  );

  const handleNav = (nav: string) => {
    setWorkNavState('all');
    if (nav === 'resume') {
      setNavigationState('resume');
    } else if (nav === 'work') {
      setNavigationState('work');
    } else if (nav === 'contact') {
      setNavigationState('contact');
    } else {
      setNavigationState('home');
    }
  };
  return (
    <nav
      style={{backgroundColor: myTheme.background}}
      className="w-[100%] h-[100px] md:w-[503px] px-5 md:px-0 flex justify-center ml-auto items-center border-[#E1E8EF] border-[1px] rounded-lg">
      <ul className="flex space-x-10">
        <button
          onClick={() => handleNav('home')}
          className="active:bg-gray-[#E1E8EF] cursor-pointer rounded-lg">
          <Image
            src={require(activeNav === 'home'
              ? '../../public/assets/Home_card_active.png'
              : '../../public/assets/Home_card.png')}
            alt="Home nav icon"
          />
        </button>
        <button
          onClick={() => handleNav('resume')}
          className="active:bg-gray-[#E1E8EF] cursor-pointer rounded-lg">
          <Image
            src={require(activeNav === 'resume'
              ? '../../public/assets/Resume_card_active.png'
              : '../../public/assets/Resume_card.png')}
            alt="Resume nav icon"
          />
        </button>
        <button
          onClick={() => handleNav('work')}
          className="active:bg-gray-[#E1E8EF] cursor-pointer rounded-lg">
          <Image
            src={require(activeNav === 'work'
              ? '../../public/assets//work_card_active.png'
              : '../../public/assets/work_card.png')}
            alt="Work nav icon"
          />
        </button>
        <button
          onClick={() => handleNav('contact')}
          className="active:bg-gray-[#E1E8EF] cursor-pointer rounded-lg">
          <Image
            src={require(activeNav === 'contact'
              ? '../../public/assets/contact_card_active.png'
              : '../../public/assets/contact_card.png')}
            alt="Contact nav icon"
          />
        </button>
      </ul>
    </nav>
  );
};
