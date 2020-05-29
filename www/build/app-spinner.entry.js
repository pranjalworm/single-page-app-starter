import { r as registerInstance, h } from './index-63e49e20.js';

const appSpinnerCss = ":root{--font-size-reference:16px;--font-size-x-large:2rem;--font-size-large:1.5rem;--font-size-normal:1rem;--font-size-small:0.8rem;--transition-duration:0.3s}:root{--tap-hightlight-color:rgba(0, 0, 0, 0);--scrollbar-shadow:rgba(0, 0, 0, 0.3)}.light-theme{--font-color:#8e8e8e;--font-color-dark:#777;--font-color-accent:#c43131;--font-color-accent-dark:#c91c1c;--font-color-toast:#fff;--background:#fff;--shadow:#efefef;--scrollbar-background:#f5f5f5}.dark-theme{--font-color:#8e8e8e;--font-color-dark:#777;--font-color-accent:#c43131;--font-color-accent-dark:#c91c1c;--font-color-toast:#fff;--background:#000;--shadow:#202020;--scrollbar-background:#606060}*{padding:0;margin:0;box-sizing:border-box;transition-duration:var(--transition-duration);background:var(--background);font-weight:bold}#spinner-root{text-align:center}#spinner-root #ripple{display:inline-block;position:relative;width:80px;height:80px}#spinner-root #ripple div{position:absolute;border:4px solid var(--font-color);opacity:1;border-radius:50%;animation:ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite}#spinner-root #ripple div:nth-child(2){animation-delay:-0.5s}@keyframes ripple{0%{top:36px;left:36px;width:0;height:0;opacity:1}100%{top:0px;left:0px;width:72px;height:72px;opacity:0}}";

const AppSpinner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { id: "spinner-root" }, h("div", { id: "ripple" }, h("div", null), h("div", null))));
    }
};
AppSpinner.style = appSpinnerCss;

export { AppSpinner as app_spinner };
