"use strict";
const common_vendor = require("../../common/vendor.js");
const customTabBar = () => "../../components/customTabBar.js";
const _sfc_main = {
  components: {
    customTabBar
  },
  methods: {
    navigateToPage(pageName) {
      switch (pageName) {
        case "AR体验":
          common_vendor.index.navigateTo({
            url: "/pages/experience/AR"
          });
          break;
        case "线上闯关":
          common_vendor.index.navigateTo({
            url: "/pages/experience/challenge"
          });
          break;
        case "线下研学":
          common_vendor.index.navigateTo({
            url: "/pages/experience/study"
          });
          break;
      }
    }
  }
};
if (!Array) {
  const _component_customTabBar = common_vendor.resolveComponent("customTabBar");
  _component_customTabBar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      Title: "趣学体验"
    }),
    b: common_vendor.o(($event) => $options.navigateToPage("AR体验")),
    c: common_vendor.o(($event) => $options.navigateToPage("线上闯关")),
    d: common_vendor.o(($event) => $options.navigateToPage("线下研学"))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/IT_Study/Uniapp/FLICHAPP/pages/experience/experience.vue"]]);
wx.createPage(MiniProgramPage);
