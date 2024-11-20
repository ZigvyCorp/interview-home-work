import './GlobalStyle/index.scss';

type TGlobalStyle = {
  children: any;
};

export function GlobalStyle(props: TGlobalStyle) {
  return <div>{props.children}</div>;
}
