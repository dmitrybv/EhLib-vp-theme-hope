import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/online-help-vuepress-hope/",

  locales: {
    "/": {
      lang: "en-US",
      title: "EhLib.VCL Developer’s guide",
      description: "A docs demo for vuepress-theme-hope",
    },
    // "/zh/": {
    //   lang: "zh-CN",
    //   title: "文档演示",
    //   description: "vuepress-theme-hope 的文档演示",
    // },
  },

  plugins: [
    searchProPlugin({
      indexContent: true,
      // your options
    }),
  ],

  theme,

  shouldPrefetch: false,
  //copyCode: false,
});
