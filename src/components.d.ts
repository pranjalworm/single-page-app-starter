/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ToastConfig, } from "./components/app-toast/app-toast";
export namespace Components {
    interface AboutPage {
    }
    interface AppFooter {
    }
    interface AppHeader {
    }
    interface AppLanding {
    }
    interface AppRoot {
    }
    interface AppSpinner {
    }
    interface AppToast {
        "toastConfig": ToastConfig;
    }
    interface BlogPage {
    }
    interface PageNotFound {
    }
}
declare global {
    interface HTMLAboutPageElement extends Components.AboutPage, HTMLStencilElement {
    }
    var HTMLAboutPageElement: {
        prototype: HTMLAboutPageElement;
        new (): HTMLAboutPageElement;
    };
    interface HTMLAppFooterElement extends Components.AppFooter, HTMLStencilElement {
    }
    var HTMLAppFooterElement: {
        prototype: HTMLAppFooterElement;
        new (): HTMLAppFooterElement;
    };
    interface HTMLAppHeaderElement extends Components.AppHeader, HTMLStencilElement {
    }
    var HTMLAppHeaderElement: {
        prototype: HTMLAppHeaderElement;
        new (): HTMLAppHeaderElement;
    };
    interface HTMLAppLandingElement extends Components.AppLanding, HTMLStencilElement {
    }
    var HTMLAppLandingElement: {
        prototype: HTMLAppLandingElement;
        new (): HTMLAppLandingElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppSpinnerElement extends Components.AppSpinner, HTMLStencilElement {
    }
    var HTMLAppSpinnerElement: {
        prototype: HTMLAppSpinnerElement;
        new (): HTMLAppSpinnerElement;
    };
    interface HTMLAppToastElement extends Components.AppToast, HTMLStencilElement {
    }
    var HTMLAppToastElement: {
        prototype: HTMLAppToastElement;
        new (): HTMLAppToastElement;
    };
    interface HTMLBlogPageElement extends Components.BlogPage, HTMLStencilElement {
    }
    var HTMLBlogPageElement: {
        prototype: HTMLBlogPageElement;
        new (): HTMLBlogPageElement;
    };
    interface HTMLPageNotFoundElement extends Components.PageNotFound, HTMLStencilElement {
    }
    var HTMLPageNotFoundElement: {
        prototype: HTMLPageNotFoundElement;
        new (): HTMLPageNotFoundElement;
    };
    interface HTMLElementTagNameMap {
        "about-page": HTMLAboutPageElement;
        "app-footer": HTMLAppFooterElement;
        "app-header": HTMLAppHeaderElement;
        "app-landing": HTMLAppLandingElement;
        "app-root": HTMLAppRootElement;
        "app-spinner": HTMLAppSpinnerElement;
        "app-toast": HTMLAppToastElement;
        "blog-page": HTMLBlogPageElement;
        "page-not-found": HTMLPageNotFoundElement;
    }
}
declare namespace LocalJSX {
    interface AboutPage {
    }
    interface AppFooter {
    }
    interface AppHeader {
    }
    interface AppLanding {
    }
    interface AppRoot {
    }
    interface AppSpinner {
    }
    interface AppToast {
        "toastConfig"?: ToastConfig;
    }
    interface BlogPage {
    }
    interface PageNotFound {
    }
    interface IntrinsicElements {
        "about-page": AboutPage;
        "app-footer": AppFooter;
        "app-header": AppHeader;
        "app-landing": AppLanding;
        "app-root": AppRoot;
        "app-spinner": AppSpinner;
        "app-toast": AppToast;
        "blog-page": BlogPage;
        "page-not-found": PageNotFound;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "about-page": LocalJSX.AboutPage & JSXBase.HTMLAttributes<HTMLAboutPageElement>;
            "app-footer": LocalJSX.AppFooter & JSXBase.HTMLAttributes<HTMLAppFooterElement>;
            "app-header": LocalJSX.AppHeader & JSXBase.HTMLAttributes<HTMLAppHeaderElement>;
            "app-landing": LocalJSX.AppLanding & JSXBase.HTMLAttributes<HTMLAppLandingElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-spinner": LocalJSX.AppSpinner & JSXBase.HTMLAttributes<HTMLAppSpinnerElement>;
            "app-toast": LocalJSX.AppToast & JSXBase.HTMLAttributes<HTMLAppToastElement>;
            "blog-page": LocalJSX.BlogPage & JSXBase.HTMLAttributes<HTMLBlogPageElement>;
            "page-not-found": LocalJSX.PageNotFound & JSXBase.HTMLAttributes<HTMLPageNotFoundElement>;
        }
    }
}