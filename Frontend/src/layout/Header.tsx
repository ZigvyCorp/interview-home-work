import { type FC } from 'react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { ReactNodeLike } from 'prop-types';
import { TextInput } from '../components/FormControl';
import { useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';

interface FormData {
  search: string;
}

const Header: FC<{ children: NonNullable<ReactNodeLike> }> = ({ children }) => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onChange' });

  const onSubmit = (data: FormData): void => {
    const search = data.search.trim();
    if (search === '') {
      navigate('/');
    } else {
      navigate(`/?search=${data.search}`);
    }
  };
  return (
    <>
      <header className="fixed h-6rem px-4 py-3 w-full surface-100 z-5">
        <div className="flex justify-content-between align-items-center">
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/logo-no-background.png`}
              alt="Logo"
              width={64}
              height={64}
              className="object cursor-pointer"
            />
          </Link>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              void handleSubmit(onSubmit)(event);
            }}
            autoComplete="off"
          >
            <div className="relative">
              <Button
                icon="pi pi-search"
                rounded
                text
                aria-label="Search"
                className="absolute right-0 top-0"
                type="submit"
              />
              <TextInput
                control={control}
                errors={errors}
                name="search"
                placeholder="Search"
                type="text"
                className="pr-6"
                defaultValue={
                  new URLSearchParams(location.search).get('search') ?? ''
                }
              />
            </div>
          </form>

          <div className="flex gap-2 align-items-center">
            <Avatar
              label="A"
              shape="circle"
              size="large"
              className="bg-primary text-white"
            />
            <p className="m-0">Alison Hames</p>
          </div>
        </div>
      </header>
      {children}
    </>
  );
};

export default Header;
