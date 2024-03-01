import Blogs from '@/components/Blogs';
import Header from '@/components/Header';
import AuthProvider from '@/components/Providers/AuthProvider';

export default function Home() {
  return (
    <AuthProvider>
      <Header></Header>
      <Blogs></Blogs>
    </AuthProvider>
  );
}
