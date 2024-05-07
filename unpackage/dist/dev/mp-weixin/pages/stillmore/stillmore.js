"use strict";
const common_vendor = require("../../common/vendor.js");
const customTabBar = () => "../../components/customTabBar.js";
const _sfc_main = {
  components: {
    customTabBar
  },
  methods: {
    navigateTo(event) {
      const url = event.currentTarget.dataset.url;
      if (url) {
        common_vendor.index.navigateTo({
          url,
          success: function() {
            console.log("跳转成功");
          },
          fail: function(err) {
            console.error("跳转失败", err);
          }
        });
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
      Title: "趣学更多"
    }),
    b: common_vendor.o((...args) => $options.navigateTo && $options.navigateTo(...args)),
    c: common_vendor.o((...args) => $options.navigateTo && $options.navigateTo(...args)),
    d: common_vendor.o((...args) => $options.navigateTo && $options.navigateTo(...args)),
    e: common_vendor.o((...args) => $options.navigateTo && $options.navigateTo(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-063c1d97"], ["__file", "D:/English/VX_Project/FLICHAPP/pages/stillmore/stillmore.vue"]]);
wx.createPage(MiniProgramPage);
