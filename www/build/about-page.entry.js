import { r as registerInstance, h } from './index-63e49e20.js';

const aboutPageCss = ":root{--font-size-reference:16px;--font-size-x-large:2rem;--font-size-large:1.5rem;--font-size-normal:1rem;--font-size-small:0.8rem;--transition-duration:0.3s}:root{--tap-hightlight-color:rgba(0, 0, 0, 0);--scrollbar-shadow:rgba(0, 0, 0, 0.3)}.light-theme{--font-color:#8e8e8e;--font-color-dark:#777;--font-color-accent:#c43131;--font-color-accent-dark:#c91c1c;--font-color-toast:#fff;--background:#fff;--shadow:#efefef;--scrollbar-background:#f5f5f5}.dark-theme{--font-color:#8e8e8e;--font-color-dark:#777;--font-color-accent:#c43131;--font-color-accent-dark:#c91c1c;--font-color-toast:#fff;--background:#000;--shadow:#202020;--scrollbar-background:#606060}*{padding:0;margin:0;box-sizing:border-box;transition-duration:var(--transition-duration);background:var(--background);font-weight:bold}#about-me-root{display:flex;flex-direction:row;justify-content:space-between;margin:0% 40px;color:var(--font-color-dark);height:80vh}@media (max-width: 780px){#about-me-root{flex-direction:column-reverse;height:100%;margin:0% 30px}}#about-me-root #description{display:flex;flex-direction:column;height:70vh;justify-content:space-between;width:50%}@media (max-width: 780px){#about-me-root #description{width:100%;height:100%;justify-content:space-around;height:100%}}#about-me-root #description #source-link{text-decoration:none;color:var(--font-color-accent)}#about-me-root #image-div{text-align:center;height:70vh}#about-me-root #image-div img{height:100%}@media (max-width: 780px){#about-me-root #image-div{height:50vh;margin-bottom:20px}}";

const AboutPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { id: "about-page-root" }, h("p", null, "This is the about page"), h("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eligendi, delectus sed iste est rerum illo eos ab incidunt iusto obcaecati, perferendis dignissimos impedit quos! Neque ad molestiae amet et.")));
    }
};
AboutPage.style = aboutPageCss;

export { AboutPage as about_page };
