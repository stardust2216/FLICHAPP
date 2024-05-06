"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/start.js";
  "./pages/Consult/Consult.js";
  "./pages/Lesson/Lesson.js";
  "./pages/index/index.js";
  "./pages/experience/experience.js";
  "./pages/stillmore/stillmore.js";
  "./pages/stillmore/IntangibleHeritageMart.js";
  "./pages/stillmore/FunLearnCustom.js";
  "./pages/stillmore/ContactUs.js";
  "./pages/stillmore/Communication.js";
  "./pages/Consult/figure.js";
  "./pages/Consult/Information.js";
  "./pages/Consult/AiChat/AiChat.js";
  "./pages/experience/AR.js";
  "./pages/experience/challenge.js";
  "./pages/experience/study.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.warn("当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！");
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/English/VX_Project/FLICHAPP/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
