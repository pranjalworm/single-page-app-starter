import { r as registerInstance, h } from './index-63e49e20.js';
import { R as RouteService } from './route.service-218efd4a.js';

const pageNotFoundCss = ":root{--font-size-reference:16px;--font-size-x-large:2rem;--font-size-large:1.5rem;--font-size-normal:1rem;--font-size-small:0.8rem;--transition-duration:0.3s}:root{--tap-hightlight-color:rgba(0, 0, 0, 0);--scrollbar-shadow:rgba(0, 0, 0, 0.3)}.light-theme{--font-color:#8e8e8e;--font-color-dark:#777;--font-color-accent:#c43131;--font-color-accent-dark:#c91c1c;--font-color-toast:#fff;--background:#fff;--shadow:#efefef;--scrollbar-background:#f5f5f5}.dark-theme{--font-color:#8e8e8e;--font-color-dark:#777;--font-color-accent:#c43131;--font-color-accent-dark:#c91c1c;--font-color-toast:#fff;--background:#000;--shadow:#202020;--scrollbar-background:#606060}*{padding:0;margin:0;box-sizing:border-box;transition-duration:var(--transition-duration);background:var(--background);font-weight:bold}#page-not-found-root{display:flex;flex-direction:column;justify-content:center;text-align:center;margin:0% 50px;height:calc(100vh - 140px - 136px)}#page-not-found-root #banner404{height:30vh;color:var(--font-color)}#page-not-found-root #banner404 #oops{font-size:var(--font-size-x-large);color:var(--font-color-dark)}#page-not-found-root #banner404 #page-not-found{font-size:var(--font-size-large)}#page-not-found-root #banner404 #home-link{margin-top:40px;font-size:var(--font-size-large)}#page-not-found-root #banner404 #home-link a{color:var(--font-color-accent-dark);text-decoration:none !important}";

const PageNotFound = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const landingPageRoute = RouteService.getRoute("home" /* HOME */);
        return (h("div", { id: 'page-not-found-root' }, h("div", { id: 'banner404' }, h("div", { id: 'oops' }, "Oops!"), h("div", { id: 'page-not-found' }, "Page not found"), h("div", { id: 'home-link' }, h("stencil-route-link", { url: landingPageRoute.url[0], exact: true }, h("span", null, "Go to home >>"))))));
    }
};
PageNotFound.style = pageNotFoundCss;

export { PageNotFound as page_not_found };
