"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "customTabBar",
  props: ["Title"],
  setup() {
    const statusBarHeight = common_vendor.ref(0);
    const SYSTEM_INFO = common_vendor.index.getSystemInfoSync();
    console.log(SYSTEM_INFO.statusBarHeight);
    statusBarHeight.value = SYSTEM_INFO.statusBarHeight;
    return {
      statusBarHeight
      // 将statusBarHeight暴露给模板
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $setup.statusBarHeight + "px",
    b: common_vendor.t($props.Title)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/FLICHAPP/components/customTabBar.vue"]]);
wx.createComponent(Component);
