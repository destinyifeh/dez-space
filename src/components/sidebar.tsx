import {RESUME_LINK} from '@/constants/configs';
import {ralewayFont} from '@/constants/style';
import {useAppStore} from '@/state-managers/app-store';
import Image from 'next/image';
import Link from 'next/link';

export const SideBar = () => {
  const {theme} = useAppStore(state => state);

  return (
    <aside
      style={{backgroundColor: theme.background}}
      className="row-span-1 md:col-span-1 rounded-lg p-3">
      <div className="relative w-full mt-2 md:mt-15">
        <span className="md:absolute bottom-[1px] left-1/2 transform -translate-x-1/2">
          <Image
            src={
              'https://media.licdn.com/dms/image/v2/D4D03AQFmlrwBoFL6WQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712058393767?e=1747872000&v=beta&t=QZIKdPb-2fCArPYBgJKZRX--9fLD8c-P6xWFFd8H_iE'
            }
            width={150}
            height={155}
            alt="Destiny Ifehor Picture"
            className="w-[150px] h-[155px] rounded-lg mx-auto"
          />
        </span>
      </div>

      <div className="flex flex-col items-center">
        <h3
          style={{color: theme.text}}
          className={`${ralewayFont.className} font-bold text-lg mb-1`}>
          Destiny Ifehor
        </h3>
        <p
          className={`${ralewayFont.className} text-sm`}
          style={{color: theme.text}}>
          Software Developer
        </p>
      </div>
      <div className="flex flex-row gap-3 justify-center mt-3">
        <Link
          href="https://www.linkedin.com/in/destiny-ifehor-99686a15b/"
          target="_blank">
          <Image
            src={require('../../public/assets/Linkedin.png')}
            alt="Linkedin"
            // className="h-[50px] w-[50px]"
          />
        </Link>
        <Link href="https://github.com/destinyifeh" target="_blank">
          <Image
            src={require('../../public/assets/Github.png')}
            alt="Github"
            className=""
          />
        </Link>
      </div>
      <div className="w-[100%] min-h-[300px] bg-[#F2F5F9] px-8 py-3 my-3 rounded-lg">
        <div className="flex flex-row gap-4 border-b-1 border-[#E3E3E3] py-3 ">
          <span>
            <Image
              src={require('../../public/assets/phone_icon.png')}
              alt="My phone number"
              className=""
            />
          </span>
          <div className="">
            <p
              className={`${ralewayFont.className} text-[#1A1003] text-base leading-[18px]`}>
              Phone
            </p>
            <p
              className={`${ralewayFont.className} text-[#000000] text-base font-bold w-full break-all`}>
              09033662731
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-4 border-b-1 border-[#E3E3E3] py-3 ">
          <span>
            <Image
              src={require('../../public/assets/email_icon.png')}
              alt="email"
              className=""
            />
          </span>
          <div className="">
            <p
              className={`${ralewayFont.className} text-[#1A1003] text-base leading-[18px]`}>
              Email
            </p>
            <p
              className={`${ralewayFont.className} text-[#000000] text-base font-bold break-all`}>
              destinyifehor@gmail.com
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-4 border-b-1 border-[#E3E3E3] py-3 ">
          <span>
            <Image
              src={require('../../public/assets/location-icon.png')}
              alt="My location"
              className=""
            />
          </span>
          <div className="">
            <p
              className={`${ralewayFont.className} text-[#1A1003] text-base leading-[18px]`}>
              Location
            </p>
            <p
              className={`${ralewayFont.className} text-[#000000] text-base font-bold`}>
              Lagos, Nigeria
            </p>
          </div>
        </div>

        <div className="mt-5">
          <Link href={RESUME_LINK}>
            <Image
              src={require('../../public/assets/download_cv_bt.png')}
              alt="Download resume"
              className="mx-auto"
            />
          </Link>
        </div>
      </div>
    </aside>
  );
};
