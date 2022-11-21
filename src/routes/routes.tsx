import { About, Home, News } from "~/pages";
import { CustomRoute } from "~/models/CustomRoute.interface";
import { backgroundImages, newsImages } from "~/assets/images";

export const routes: CustomRoute[] = [
  {
    index: true,
    element: <Home />,
    name: "Home",
    navbar: true,
    backgroundImage: backgroundImages.macchuPicchu,
  },
  {
    path: "/news",
    element: <News />,
    name: "News",
    navbar: true,
    backgroundImage: newsImages.award,
  },
  {
    path: "/about",
    element: <About />,
    name: "About",
    navbar: true,
    backgroundImage: backgroundImages.about,
  },
];

export const routesObject = routes.reduce<Record<string, CustomRoute>>(
  (prev, curr) => {
    if (!prev[curr.name]) prev[curr.name] = curr;
    return { ...prev };
  },
  {}
);

export const currentRoute: (pathname: string) => CustomRoute = (
  pathname: string
) => routes.find((route) => route.path === pathname) || routesObject.Home;
