"use strict";
const common_vendor = require("../../common/vendor.js");
const customTabBar = () => "../../components/customTabBar.js";
const _sfc_main = {
  components: {
    customTabBar
  }
};
if (!Array) {
  const _component_customTabBar = common_vendor.resolveComponent("customTabBar");
  _component_customTabBar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      Title: "趣学非遗"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/IT_Study/Uniapp/FLICHAPP/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
