import { Link } from 'react-router-dom';

export default function NoMatch() {
  return (
    <div className='font-sans h-screen w-full flex justify-center items-center'>
      <div className='max-w-3xl text-center grid grid-cols-1 gap-4'>
        <h2 className=' text-slate-800 font-semibold text-3xl tracking-tight'>
          404 Not Found
        </h2>
        <Link to='/' className='text-xl tracking-tight text-slate-800'>
          Go to the home page
        </Link>
      </div>
    </div>
  );
}
