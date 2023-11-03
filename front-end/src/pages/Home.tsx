import PostList from '../components/PostList';
// import BtnReadMore from '../components/BtnReadMore';
import InputSearch from '../components/InputSearch';

export default function Home() {
  return (
    <main>
      <div className='max-w-sm mx-auto px-2 mt-10'>
        <InputSearch />
      </div>
      <PostList />
      {/* <div className='grid place-content-center mt-10'>
        <BtnReadMore />
      </div> */}
    </main>
  );
}
