import Home from "../pages/Home";

export const Path = {
  Home: "/",
};

type props = {
  path: string;
  page: React.FC;
}[];

export const routes: props = [{ path: Path.Home, page: Home }];
