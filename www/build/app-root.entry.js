import { r as registerInstance, h, c as getElement } from './index-63e49e20.js';
import { R as RouteService } from './route.service-218efd4a.js';

const appRootCss = ":root{--font-size-reference:16px;--font-size-x-large:2rem;--font-size-large:1.5rem;--font-size-normal:1rem;--font-size-small:0.8rem;--transition-duration:0.3s}:root{--tap-hightlight-color:rgba(0, 0, 0, 0);--scrollbar-shadow:rgba(0, 0, 0, 0.3)}.light-theme{--font-color:#8e8e8e;--font-color-dark:#777;--font-color-accent:#c43131;--font-color-accent-dark:#c91c1c;--font-color-toast:#fff;--background:#fff;--shadow:#efefef;--scrollbar-background:#f5f5f5}.dark-theme{--font-color:#8e8e8e;--font-color-dark:#777;--font-color-accent:#c43131;--font-color-accent-dark:#c91c1c;--font-color-toast:#fff;--background:#000;--shadow:#202020;--scrollbar-background:#606060}*{padding:0;margin:0;box-sizing:border-box;transition-duration:var(--transition-duration);background:var(--background);font-weight:bold}*{background:var(--background)}#app-root{max-width:1280px !important;min-width:320px !important;margin:0% auto;position:relative;overflow:hidden}#app-root app-toast{z-index:200;display:none}";

const TOAST_VISIBLE_TIMEOUT = 3000;
const AppRoot = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.routes = [];
        this.appToastRef = null;
        this.routes = RouteService.getAllRoutes();
    }
    showToastHandler(event) {
        const toastConfig = event.detail;
        if (!toastConfig.message)
            return;
        this.appToastRef.toastConfig = toastConfig;
        this.appToastRef.style.display = 'flex';
        setTimeout(() => {
            this.appToastRef.style.display = 'none';
        }, TOAST_VISIBLE_TIMEOUT);
    }
    componentDidLoad() {
        this.appToastRef = this.host.shadowRoot.querySelector('app-toast');
    }
    render() {
        return (h("div", { id: "app-root" }, h("app-toast", null), h("app-header", null), h("main", null, h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, this.routes.map((route) => {
            if (route.exact === true) {
                return (h("stencil-route", { url: route.url, component: route.component, exact: true }));
            }
            return (h("stencil-route", { url: route.url, component: route.component }));
        }), h("stencil-route", { component: "page-not-found" })))), h("app-footer", null)));
    }
    get host() { return getElement(this); }
};
AppRoot.style = appRootCss;

export { AppRoot as app_root };
