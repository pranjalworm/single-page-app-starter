const ROUTES = {
    ["home" /* HOME */]: {
        title: 'home',
        url: '/',
        urlMatch: ['/'],
        exact: true,
        component: 'app-landing'
    },
    ["blog" /* BLOG */]: {
        title: 'blog',
        url: '/blog/',
        urlMatch: '/blog/*',
        component: 'blog-page'
    },
    ["about" /* ABOUT */]: {
        title: 'about',
        url: '/about',
        exact: true,
        component: 'about-page'
    },
    ["page-not-found" /* PAGE_NOT_FOUND */]: {
        component: 'page-not-found'
    }
};
class RouteService {
    static getHeaderRoutes() {
        const headerRoutes = [
            ROUTES["home" /* HOME */],
            ROUTES["blog" /* BLOG */],
            ROUTES["about" /* ABOUT */]
        ];
        return headerRoutes;
    }
    static getAllRoutes() {
        const routes = Object.keys(ROUTES).map((key) => {
            return ROUTES[key];
        });
        return routes;
    }
    static getRoute(routeName) {
        return ROUTES[routeName];
    }
}

export { RouteService as R };
