'use client';

import Blog from '@/components/Blog';
import AuthProvider from '@/components/Providers/AuthProvider';
import { saveLogin } from '@/redux/features/auth-slice';
import { useAppDispatch } from '@/redux/hook';
import blogService from '@/services/blogService';
import { IBlog } from '@/types/blog';
import { useParams } from 'next/navigation';
import { useLayoutEffect, useState } from 'react';

export default function Home() {
  const { id } = useParams();
  const [blog, setBlog] = useState<IBlog | null>();
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    async function fetchBlog() {
      try {
        const data = await blogService.getBlog(id as string);

        setBlog(data);
      } catch (error) {
        if ((error as any).response.status === 401) {
          dispatch(saveLogin(null));
        }
      }
    }

    fetchBlog();
  }, [id]);

  return (
    <AuthProvider>
      {blog ? <Blog blog={blog}></Blog> : <>No data</>}
    </AuthProvider>
  );
}
