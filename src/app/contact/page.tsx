'use client';
import {AppContainer} from '@/components/app-container';
import {Header} from '@/components/header';
import {Main} from '@/components/main';
import {Navigation} from '@/components/navigation';
import {SideBar} from '@/components/sidebar';
import {useAppStore} from '@/state-managers/app-store';
import {useEffect} from 'react';

export default function Contact() {
  const {setNavigationState} = useAppStore(state => state);
  useEffect(() => {
    setNavigationState('contact');
  }, []);
  return (
    <AppContainer>
      <div className="mt-10">
        <Header />
        <Navigation />
        <section className="grid grid-rows-auto md:grid-cols-4 gap-4 mt-1 mb-5">
          <SideBar />
          <Main />
        </section>
      </div>
    </AppContainer>
  );
}
