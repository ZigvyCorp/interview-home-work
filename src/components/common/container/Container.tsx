export interface IContainer {
  className?: string;
  fluid?: boolean;
  children?: any;
}

const Container = ({ className = "", fluid, children }: IContainer) => {
  return (
    <div
      className={`container w-full ${
        !fluid ? "max-w-[1100px] md:max-w-[1200px] 2xl:max-w-[1390px]" : "max-w-full"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
