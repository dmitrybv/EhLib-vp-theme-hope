import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { defineCustomElement } from 'vue';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { getDirname, path } from '@vuepress/utils';

export default defineUserConfig({
  base: "/online-help/",

  locales: {
    "/": {
      lang: "en-US",
      title: "EhLib.VCL Developer’s guide",
      description: "EhLib.VCL Developer’s guide",
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

    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    })
  ],

  theme,

  shouldPrefetch: false,
  //copyCode: false,
});


// const MyVueElement = defineCustomElement({
//   // normal Vue component options here
//   props: {},
//   emits: {},
//   template: `...`,

//   // defineCustomElement only: CSS to be injected into shadow root
//   styles: [`/* inlined css */`]
// })

// // Register the custom element.
// // After registration, all `<my-vue-element>` tags
// // on the page will be upgraded.
// customElements.define('my-vue-element', MyVueElement)

// // You can also programmatically instantiate the element:
// // (can only be done after registration)
// document.body.appendChild(
//   new MyVueElement({
//     // initial props (optional)
//   })
// )