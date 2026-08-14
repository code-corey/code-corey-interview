import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://interview.code-corey.com",

  author: {
    name: "Corey",
    url: "https://www.code-corey.com",
  },

  logo: "https://theme-hope-assets.vuejs.press/logo.svg",

  repo: "code-corey/code-corey-interview",

  docsDir: "src",
  docsBranch: "master",

  navbar,
  sidebar,

  footer: "Corey 面试题 · 主站 <a href=\"https://www.code-corey.com/\">www.code-corey.com</a>",
  displayFooter: true,

  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  markdown: {
    align: true,
    attrs: false,
    codeTabs: true,
    figure: false,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    mark: true,
    mermaid: false,
    spoiler: true,
    sub: true,
    tabs: true,
    tasklist: true,
    vPre: true,
  },

  plugins: {
    blog: true,
    catalog: true,

    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      prefix: "fa6-solid:",
    },
  },
});
