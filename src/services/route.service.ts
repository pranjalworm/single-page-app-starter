export interface Route {
  title?: string;
  url?: string | string[];
  exact?: boolean;
  urlMatch?: string | string[];
  component: string;
}


export const enum ROUTE_NAME {
  HOME = 'home',
  BLOG = 'blog',
  ABOUT = 'about',
  PAGE_NOT_FOUND = 'page-not-found'
}


export const ROUTES: { [key: string]: Route } = {
  [ROUTE_NAME.HOME]: {
    title: 'home',
    url: '/',
    urlMatch: ['/'],
    exact: true,
    component: 'app-landing'
  },
  [ROUTE_NAME.BLOG]: {
    title: 'blog',
    url: '/blog/',
    urlMatch: '/blog/*',
    component: 'blog-page'
  },
  [ROUTE_NAME.ABOUT]: {
    title: 'about',
    url: '/about',
    exact: true,
    component: 'about-page'
  },
  [ROUTE_NAME.PAGE_NOT_FOUND]: {
    component: 'page-not-found'
  }
};


export class RouteService {

  static getHeaderRoutes(): Route[] {

    const headerRoutes: Route[] = [
      ROUTES[ROUTE_NAME.HOME],
      ROUTES[ROUTE_NAME.BLOG],
      ROUTES[ROUTE_NAME.ABOUT]
    ]

    return headerRoutes;
  }


  static getAllRoutes(): Route[] {

    const routes: Route[] = Object.keys(ROUTES).map((key: ROUTE_NAME) => {
      return ROUTES[key]
    });

    return routes;
  }


  static getRoute(routeName: ROUTE_NAME): Route {
    return ROUTES[routeName];
  }
}