import { S as StorageKeys } from './interfaces-9fcfccde.js';

/**
 * Acts as single point proxy for SessionStorage and LocalStorage APIs
 */
class StorageService {
    static getItem(key) {
        let value = StorageService.sessionStorage.getItem(key);
        if (value !== undefined)
            return value;
        return StorageService.localStorage.getItem(key);
    }
    static setItem(key, value, persist) {
        if (persist) {
            StorageService.localStorage.setItem(key, value);
        }
        else {
            StorageService.sessionStorage.setItem(key, value);
        }
    }
}
StorageService.localStorage = window.localStorage;
StorageService.sessionStorage = window.sessionStorage;

var ThemeService;
(function (ThemeService) {
    let ThemeClass;
    (function (ThemeClass) {
        ThemeClass["DarkTheme"] = "dark-theme";
        ThemeClass["LightTheme"] = "light-theme";
    })(ThemeClass = ThemeService.ThemeClass || (ThemeService.ThemeClass = {}));
    const bodyRef = document.querySelector('body');
    ThemeService.init = () => {
        bodyRef.classList.add(getInitTheme());
        registerListener();
    };
    const registerListener = () => {
        window.addEventListener('keyup', (event) => {
            const key = event.key;
            if (key === 'd' || key === 'D') {
                ThemeService.toggleTheme();
            }
        });
    };
    ThemeService.toggleTheme = () => {
        if (ThemeService.getCurrentTheme() === ThemeClass.LightTheme) {
            bodyRef.classList.remove(ThemeClass.LightTheme);
            bodyRef.classList.add(ThemeClass.DarkTheme);
            setCurrentTheme(ThemeClass.DarkTheme);
        }
        else {
            bodyRef.classList.remove(ThemeClass.DarkTheme);
            bodyRef.classList.add(ThemeClass.LightTheme);
            setCurrentTheme(ThemeClass.LightTheme);
        }
    };
    const getInitTheme = () => {
        const date = new Date();
        const hour = date.getHours();
        // use dark theme during night
        if (hour === 23 || (hour >= 0 && hour <= 7)) {
            setCurrentTheme(ThemeClass.DarkTheme);
            return ThemeClass.DarkTheme;
        }
        setCurrentTheme(ThemeClass.LightTheme);
        return ThemeClass.LightTheme;
    };
    ThemeService.getCurrentTheme = () => {
        return StorageService.getItem(StorageKeys.CurrentTheme);
    };
    const setCurrentTheme = (themeClass) => {
        StorageService.setItem(StorageKeys.CurrentTheme, themeClass);
    };
})(ThemeService || (ThemeService = {}));

export { ThemeService as T };
