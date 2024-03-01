'use client';

import { useAppSelector } from '@/redux/hook';
import { useRouter } from 'next/navigation';
import React from 'react';

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();

  const user = useAppSelector((state) => state.auth).user;

  if (!user || !user.id) {
    router.push('/login');
    return <></>;
  }

  return <>{children}</>;
}
