import { useRouteError } from 'react-router-dom';

export default function ErrorBoundary() {
  const error = useRouteError() as Error;

  return (
    <div className='font-sans h-screen w-full flex justify-center items-center'>
      <div className='max-w-3xl text-center grid grid-cols-1 gap-4'>
        <h1 className='text-slate-800 font-semibold text-3xl tracking-tight'>
          Uh oh, something went terribly wrong 😩
        </h1>
        <p className='italic text-lg tracking-tight text-slate-600'>
          {error.message || JSON.stringify(error)}
        </p>
        <button
          className='text-xl tracking-tight text-slate-800'
          onClick={() => (window.location.href = '/')}
        >
          Click here to reload the app
        </button>
      </div>
    </div>
  );
}
