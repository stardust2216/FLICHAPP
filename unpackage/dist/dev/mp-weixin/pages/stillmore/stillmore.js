"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.navigateTo && $options.navigateTo(...args)),
    b: common_vendor.o((...args) => $options.navigateTo && $options.navigateTo(...args)),
    c: common_vendor.o((...args) => $options.navigateTo && $options.navigateTo(...args)),
    d: common_vendor.o((...args) => $options.navigateTo && $options.navigateTo(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-063c1d97"], ["__file", "D:/English/VX_Project/FLICHAPP/pages/stillmore/stillmore.vue"]]);
wx.createPage(MiniProgramPage);
