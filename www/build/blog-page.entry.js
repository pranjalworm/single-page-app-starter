import { r as registerInstance, h } from './index-63e49e20.js';

const blogPageCss = ":root{--font-size-reference:16px;--font-size-x-large:2rem;--font-size-large:1.5rem;--font-size-normal:1rem;--font-size-small:0.8rem;--transition-duration:0.3s}:root{--tap-hightlight-color:rgba(0, 0, 0, 0);--scrollbar-shadow:rgba(0, 0, 0, 0.3)}.light-theme{--font-color:#8e8e8e;--font-color-dark:#777;--font-color-accent:#c43131;--font-color-accent-dark:#c91c1c;--font-color-toast:#fff;--background:#fff;--shadow:#efefef;--scrollbar-background:#f5f5f5}.dark-theme{--font-color:#8e8e8e;--font-color-dark:#777;--font-color-accent:#c43131;--font-color-accent-dark:#c91c1c;--font-color-toast:#fff;--background:#000;--shadow:#202020;--scrollbar-background:#606060}*{padding:0;margin:0;box-sizing:border-box;transition-duration:var(--transition-duration);background:var(--background);font-weight:bold}";

const BlogPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "blog-page-root" }, "this is the blog page"));
    }
};
BlogPage.style = blogPageCss;

export { BlogPage as blog_page };
