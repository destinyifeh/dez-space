import {useAppStore} from '@/state-managers/app-store';
import {
  ContactContent,
  HomeContent,
  ResumeContent,
  WorkContent,
} from './main-contents';

export const Main = () => {
  const {activeNav, myTheme} = useAppStore(state => state);

  return (
    <main
      style={{backgroundColor: myTheme.background}}
      className={`${
        activeNav === 'home' ? ' min-h-[533px] xl:h-[533px]' : 'min-h-[533px]'
      } row-span-3 md:col-span-3 rounded-lg p-3`}>
      <article className="px-8">
        {activeNav === 'home' && <HomeContent />}

        {activeNav === 'resume' && <ResumeContent />}
        {activeNav === 'work' && <WorkContent />}
        {activeNav === 'contact' && <ContactContent />}
      </article>
    </main>
  );
};
