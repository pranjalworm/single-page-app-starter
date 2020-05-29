import { r as registerInstance, h, d as getAssetPath, c as getElement } from './index-63e49e20.js';
import { T as ThemeService } from './theme.service-bfff039a.js';
import './interfaces-9fcfccde.js';
import { R as RouteService } from './route.service-218efd4a.js';

var Utils;
(function (Utils) {
    Utils.isMobileScreen = () => {
        const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        return width < 780;
    };
    //The min and max are both inclusive
    Utils.getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
})(Utils || (Utils = {}));

const appHeaderCss = ":root{--font-size-reference:16px;--font-size-x-large:2rem;--font-size-large:1.5rem;--font-size-normal:1rem;--font-size-small:0.8rem;--transition-duration:0.3s}:root{--tap-hightlight-color:rgba(0, 0, 0, 0);--scrollbar-shadow:rgba(0, 0, 0, 0.3)}.light-theme{--font-color:#8e8e8e;--font-color-dark:#777;--font-color-accent:#c43131;--font-color-accent-dark:#c91c1c;--font-color-toast:#fff;--background:#fff;--shadow:#efefef;--scrollbar-background:#f5f5f5}.dark-theme{--font-color:#8e8e8e;--font-color-dark:#777;--font-color-accent:#c43131;--font-color-accent-dark:#c91c1c;--font-color-toast:#fff;--background:#000;--shadow:#202020;--scrollbar-background:#606060}*{padding:0;margin:0;box-sizing:border-box;transition-duration:var(--transition-duration);background:var(--background);font-weight:bold}#app-header-root.desktop{display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:0px 40px;height:14vh;margin:0% auto;z-index:100}#app-header-root.desktop #app-heading{font-size:var(--font-size-x-large);color:var(--font-color)}#app-header-root.desktop #app-heading:hover{cursor:pointer;color:var(--font-color-accent)}#app-header-root.desktop #menu{display:flex;flex-direction:row}#app-header-root.desktop a{color:var(--font-color);text-decoration:none}#app-header-root.desktop .link-active{color:var(--font-color-accent-dark) !important}@media (min-width: 780px){#app-header-root.desktop .menu-option-link:last-child .menu-option{padding-right:0}}#app-header-root.desktop .menu-option{padding:10px;margin-left:40px;font-size:var(--font-size-normal)}#app-header-root.desktop .menu-option:hover{cursor:pointer;color:var(--font-color-accent-dark)}#app-header-root.mobile{display:flex;flex-direction:column;align-items:center;padding:0px 20px;margin:0% auto;z-index:0;justify-content:center}#app-header-root.mobile #menu-header{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;z-index:100}#app-header-root.mobile #mobile-menu-button{width:50px;height:50px;display:flex;flex-direction:column;justify-content:space-between;align-items:center}#app-header-root.mobile #mobile-menu-button img{width:50%;filter:invert(51%) sepia(1%) saturate(0%) hue-rotate(160deg) brightness(90%) contrast(78%)}#app-header-root.mobile #mobile-menu-button #menu-line-1{margin-top:20px}#app-header-root.mobile #mobile-menu-button #menu-line-2{margin-bottom:20px}#app-header-root.mobile #app-heading{font-size:var(--font-size-x-large);color:var(--font-color)}#app-header-root.mobile #app-heading:hover{cursor:pointer;color:var(--font-color-accent)}#app-header-root.mobile .link-active{color:var(--font-color-accent-dark) !important}#app-header-root.mobile a{color:var(--font-color);text-decoration:none}#app-header-root.mobile .menu-option{padding:10px;font-size:var(--font-size-large)}#app-header-root.mobile .menu-option:hover{cursor:pointer;color:var(--font-color-accent-dark)}#app-header-root.mobile.closed-menu{height:14vh}#app-header-root.mobile.closed-menu #menu-wrapper{display:none}#app-header-root.mobile.opened-menu #menu-header{height:14vh}#app-header-root.mobile.opened-menu #mobile-menu-button #menu-line-1{z-index:100;transform-origin:center;transform:rotate(45deg) translate(1px, 4px)}#app-header-root.mobile.opened-menu #mobile-menu-button #menu-line-2{z-index:90;transform-origin:center;transform:rotate(-45deg) translate(1px, -4px)}#app-header-root.mobile.opened-menu #menu-wrapper{z-index:50;position:fixed;top:0;right:0;bottom:0;left:0;display:flex;flex-direction:column;align-items:center;justify-content:center}#app-header-root.mobile.opened-menu #menu-wrapper #menu{margin:80px 0}#app-header-root.mobile.opened-menu #menu-wrapper .menu-option-link{margin:20px auto;text-align:center}#app-header-root.mobile.opened-menu #menu-wrapper #controls-wrapper{width:50%}#app-header-root.mobile.opened-menu #menu-wrapper .control{display:flex;flex-direction:row;align-items:center;justify-content:space-between;font-size:var(--font-size-normal);color:var(--font-color)}.switch{position:relative;display:inline-block;width:45px;height:17px}.switch input{display:none}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#8e8e8e;-webkit-transition:0.4s;transition:0.4s;border-radius:17px}.slider:before{position:absolute;content:\"\";height:13px;width:13px;left:2px;bottom:2px;background-color:white;-webkit-transition:0.4s;transition:0.4s;border-radius:50%}input:checked+.slider{background-color:#2ab934}input:focus+.slider{box-shadow:0 0 1px #2196f3}input:checked+.slider:before{-webkit-transform:translateX(13px);-ms-transform:translateX(13px);transform:translateX(27.5px)}.fade-in{animation:fadeIn ease-in 0.2s}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}";

const landingPageRoute = RouteService.getRoute("home" /* HOME */);
const AppHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.displayHeader = true;
        this.openMobileMenu = false;
        this.siteHeading = 'Single Page Progressive Web App';
        this.menuOptions = null;
    }
    componentWillLoad() {
        this.menuOptions = RouteService.getHeaderRoutes();
        this.viewingOnMobile = Utils.isMobileScreen();
    }
    menuButtonClickHandler() {
        this.openMobileMenu = !this.openMobileMenu;
    }
    menuItemClickHandler() {
        this.openMobileMenu = false;
    }
    toggleTheme() {
        ThemeService.toggleTheme();
    }
    getMenuItems() {
        const currentTheme = ThemeService.getCurrentTheme();
        let toggleButton = h("input", { type: "checkbox", id: "toggleButton", onChange: () => this.toggleTheme() });
        if (currentTheme === ThemeService.ThemeClass.DarkTheme) {
            toggleButton = h("input", { checked: true, type: "checkbox", id: "toggleButton", onChange: () => this.toggleTheme() });
        }
        const mobileMenuControls = this.viewingOnMobile ? (h("div", { id: "controls-wrapper" }, h("div", { class: "control" }, h("span", null, "night mode"), h("label", { class: "switch" }, toggleButton, h("div", { class: "slider round" }))))) : '';
        return (h("div", { id: "menu-wrapper", class: "fade-in" }, h("div", { id: "menu" }, this.menuOptions.map((menuOption) => {
            return (h("div", { class: "menu-option-link" }, h("stencil-route-link", { url: (Array.isArray(menuOption.url)
                    ? menuOption.url[0]
                    : menuOption.url), urlMatch: menuOption.urlMatch, exact: true }, h("span", { class: 'menu-option', onClick: () => { this.menuButtonClickHandler(); } }, menuOption.title))));
        })), mobileMenuControls));
    }
    getDesktopMenu() {
        return (h("header", { id: 'app-header-root', class: "desktop", style: { 'display': this.displayHeader ? 'flex' : 'none' } }, h("stencil-route-link", { url: landingPageRoute.url[0] }, h("div", { id: 'app-heading' }, this.siteHeading)), this.getMenuItems()));
    }
    getMobileMenu() {
        const menuLineSrc = getAssetPath('../../assets/icon/menu-line.svg');
        const menuStyle = this.openMobileMenu ? 'opened-menu' : 'closed-menu';
        const styleClass = 'mobile ' + menuStyle;
        return (h("header", { id: 'app-header-root', class: styleClass, style: { 'display': this.displayHeader ? 'flex' : 'none' } }, h("div", { id: "menu-header" }, h("stencil-route-link", { url: landingPageRoute.url[0] }, h("div", { id: 'app-heading' }, this.siteHeading)), h("div", { id: "mobile-menu-button", onClick: () => { this.menuButtonClickHandler(); } }, h("img", { src: menuLineSrc, id: "menu-line-1", class: "menu-line" }), h("img", { src: menuLineSrc, id: "menu-line-2", class: "menu-line" }))), this.getMenuItems()));
    }
    render() {
        {
            return this.viewingOnMobile ? this.getMobileMenu() : this.getDesktopMenu();
        }
    }
    static get assetsDirs() { return ["../../assets"]; }
    get host() { return getElement(this); }
};
AppHeader.style = appHeaderCss;

export { AppHeader as app_header };
