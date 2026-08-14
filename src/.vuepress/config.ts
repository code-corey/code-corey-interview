import { umamiAnalyticsPlugin } from "@vuepress/plugin-umami-analytics";
import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Corey 面试题",
  description: "Java / AI 面试题知识库（从主站拆分）",

  theme,

  plugins: [
    umamiAnalyticsPlugin({
      id: "561a9c25-2c91-44ee-a584-088d1935ca03",
      link: "https://cloud.umami.is/script.js",
      domains: ["interview.code-corey.com"],
    }),
  ],
});
