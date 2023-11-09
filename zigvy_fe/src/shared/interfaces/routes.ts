export interface IRouteItem {
  path: string;
  element: (props: any) => JSX.Element;
  isPrivate?: boolean;
}
