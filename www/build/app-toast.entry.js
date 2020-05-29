import { r as registerInstance, h } from './index-63e49e20.js';
import { T as ToastMessageType } from './interfaces-9fcfccde.js';

const appToastCss = ":root{--font-size-reference:16px;--font-size-x-large:2rem;--font-size-large:1.5rem;--font-size-normal:1rem;--font-size-small:0.8rem;--transition-duration:0.3s}:root{--tap-hightlight-color:rgba(0, 0, 0, 0);--scrollbar-shadow:rgba(0, 0, 0, 0.3)}.light-theme{--font-color:#8e8e8e;--font-color-dark:#777;--font-color-accent:#c43131;--font-color-accent-dark:#c91c1c;--font-color-toast:#fff;--background:#fff;--shadow:#efefef;--scrollbar-background:#f5f5f5}.dark-theme{--font-color:#8e8e8e;--font-color-dark:#777;--font-color-accent:#c43131;--font-color-accent-dark:#c91c1c;--font-color-toast:#fff;--background:#000;--shadow:#202020;--scrollbar-background:#606060}*{padding:0;margin:0;box-sizing:border-box;transition-duration:var(--transition-duration);background:var(--background);font-weight:bold}#app-toast-root{width:fit-content;position:fixed;left:0;right:0;bottom:10vh;color:var(--font-color-toast);display:flex;justify-content:center;align-items:center;margin:0% auto;padding:10px;border-radius:50px;font-size:var(--font-size-small)}.success{background:#3838f2}.failure{background:red}";

const AppToast = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    toastContent() {
        if (!this.toastConfig) {
            return;
        }
        const styleClass = this.toastConfig.toastMessageType === ToastMessageType.Success ?
            'success' : 'failure';
        return (h("div", { id: "app-toast-root", class: styleClass }, this.toastConfig.message));
    }
    render() {
        return this.toastContent();
    }
};
AppToast.style = appToastCss;

export { AppToast as app_toast };
