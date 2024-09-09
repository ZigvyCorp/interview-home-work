function Header() {
  return (
    <header className='flex h-28 justify-between'>
      <div>
        <img
          className='object-fit h-full'
          src='/zigvy-logo.svg'
          alt='Zigvy Logo'
        />
      </div>
      <div className='flex-center'>
        <p className='text-center'>Blogs</p>
      </div>
      <div>AVATAR</div>
    </header>
  );
}

export default Header;
