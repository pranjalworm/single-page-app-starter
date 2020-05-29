import { r as registerInstance, h } from './index-63e49e20.js';

const appFooterCss = ":root{--font-size-reference:16px;--font-size-x-large:2rem;--font-size-large:1.5rem;--font-size-normal:1rem;--font-size-small:0.8rem;--transition-duration:0.3s}:root{--tap-hightlight-color:rgba(0, 0, 0, 0);--scrollbar-shadow:rgba(0, 0, 0, 0.3)}.light-theme{--font-color:#8e8e8e;--font-color-dark:#777;--font-color-accent:#c43131;--font-color-accent-dark:#c91c1c;--font-color-toast:#fff;--background:#fff;--shadow:#efefef;--scrollbar-background:#f5f5f5}.dark-theme{--font-color:#8e8e8e;--font-color-dark:#777;--font-color-accent:#c43131;--font-color-accent-dark:#c91c1c;--font-color-toast:#fff;--background:#000;--shadow:#202020;--scrollbar-background:#606060}*{padding:0;margin:0;box-sizing:border-box;transition-duration:var(--transition-duration);background:var(--background);font-weight:bold}#app-footer-root{display:flex;flex-direction:row;align-items:baseline;justify-content:space-between;padding:50px 20px;margin:0% auto;z-index:100;color:var(--font-color)}@media (max-width: 780px){#app-footer-root{flex-direction:column-reverse}}.section{display:flex;flex-direction:row;justify-content:space-between;align-items:baseline;font-size:var(--font-size-normal)}@media (max-width: 780px){.section{flex-direction:column}}@media (min-width: 780px){.link:last-child{padding-right:0}}.link{padding:10px;color:var(--font-color);margin-bottom:20px}a{text-decoration:none;color:var(--font-color)}a:hover{color:var(--font-color-accent-dark)}";

const AppFooter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { id: 'app-footer-root' }, h("div", { class: 'section' }, "Footer Section 1"), h("div", { class: 'section' }, "Footer Section 2")));
    }
};
AppFooter.style = appFooterCss;

export { AppFooter as app_footer };
