'use client';
import {AppContainer} from '@/components/app-container';
import {Header} from '@/components/header';
import {Main} from '@/components/main';
import {Navigation} from '@/components/navigation';
import {SideBar} from '@/components/sidebar';

export default function Home() {
  return (
    <AppContainer>
      <div className="mt-10">
        <Header />
        <Navigation />
        <section className="grid grid-rows-auto md:grid-cols-4 gap-4 mt-1 mb-10">
          <SideBar />
          <Main />
        </section>
      </div>
    </AppContainer>
  );
}
