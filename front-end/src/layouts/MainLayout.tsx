import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom';
import TopBarProgress from 'react-topbar-progress-indicator';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollToTop from 'react-scroll-to-top';

TopBarProgress.config({
  barColors: {
    '0': '#ef4444',
    '1.0': '#ef4444',
  },
});

export default function MainLayout() {
  const navigation = useNavigation();

  return (
    <div className='font-mono m-2 bg-white'>
      {navigation.state === 'loading' && <TopBarProgress />}
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTop smooth className='grid place-content-center' />
      <ScrollRestoration />
    </div>
  );
}
