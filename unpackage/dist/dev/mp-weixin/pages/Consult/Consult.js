"use strict";
const common_vendor = require("../../common/vendor.js");
const customTabBar = () => "../../components/customTabBar.js";
const _sfc_main = {
  components: {
    customTabBar
  },
  data() {
    return {};
  },
  methods: {
    search(res) {
      common_vendor.index.showToast({
        title: "搜索：" + res.value,
        icon: "none"
      });
    },
    cancel(res) {
      common_vendor.index.showToast({
        title: "点击取消，输入值为：" + res.value,
        icon: "none"
      });
    }
  }
};
if (!Array) {
  const _component_customTabBar = common_vendor.resolveComponent("customTabBar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  (_component_customTabBar + _easycom_uni_icons2 + _easycom_uni_search_bar2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_search_bar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      Title: "趣学资讯"
    }),
    b: common_vendor.p({
      color: "#989898",
      size: "18",
      type: "home"
    }),
    c: common_vendor.o($options.search),
    d: common_vendor.o($options.cancel),
    e: common_vendor.p({
      placeholder: "请输入搜索内容",
      ["cancel-text"]: "取消"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/English/VX_Project/FLICHAPP/pages/Consult/Consult.vue"]]);
wx.createPage(MiniProgramPage);
