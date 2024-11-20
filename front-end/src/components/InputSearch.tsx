import { useState } from 'react';
import { useAppDispatch } from '../libs/redux/hook';
import { postActions } from '../libs/redux/reducers/posts/postsReducer';
import IconSearchHeart from './icons/IconSearchHeart';

export default function InputSearch() {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(postActions.setFilter({ page: 1, key: value }));
  };

  return (
    <form onSubmit={handleSubmit} className='flex'>
      <button
        type='submit'
        className='group hover:bg-[#ed1b24] transition-all duration-300 w-10 h-10 grid place-content-center bg-[#e6e6e6] border-[3.5px] border-black'
      >
        <IconSearchHeart
          width={20}
          height={20}
          className='group-hover:text-white transition-all duration-300'
        />
      </button>
      <input
        onChange={handleChange}
        value={value}
        className='px-3 py-1 flex-1 outline-none border-[3.5px] border-l-0 border-black'
        type='text'
        placeholder='Search by title'
      />
    </form>
  );
}
