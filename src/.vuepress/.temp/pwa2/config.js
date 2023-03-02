import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "C:/DelphiStuff/_WebTech/VuePress/EhLib-vp-theme-hope/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup.js";
import SWUpdatePopup from "C:/DelphiStuff/_WebTech/VuePress/EhLib-vp-theme-hope/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup.js";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWUpdatePopup,
    
  ],
});
