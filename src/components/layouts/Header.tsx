export interface IHeader {
  className?: string;
  children?: string | Array<string> | JSX.Element | any;
}
const Header = ({ className = "", children }: IHeader) => {
  return (
    <header className={`${className} bg-light_bg h-[var(--head-height)] w-full fixed top-0 left-0 z-[200]`}>
      {children}
    </header>
  );
};

export default Header;
