"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 图标数据，包含图标路径、文字和对应跳转页面的路径
      icons: [
        {
          src: "../static/首页/keCheng.png",
          label: "趣学课程",
          pagePath: "Lesson/Lesson"
        },
        {
          src: "../static/首页/zixun.png",
          label: "趣学资讯",
          pagePath: "Consult/Consult"
        },
        {
          src: "../static/首页/feiYi.png",
          label: "趣学非遗",
          pagePath: "index/index"
        },
        {
          src: "../static/首页/tiYan.png",
          label: "趣学体验",
          pagePath: "experience/experience"
        },
        {
          src: "../static/首页/gengDuo.png",
          label: "趣学更多",
          pagePath: "stillmore/stillmore"
        }
      ]
    };
  },
  methods: {
    // 动态获取每个图标的位置样式
    getIconStyle(index) {
      const positions = [
        {
          top: "220rpx",
          right: "240rpx"
        },
        {
          top: "480rpx",
          left: "50rpx"
        },
        {
          top: "450rpx",
          right: "230rpx"
        },
        {
          top: "540rpx",
          right: "10rpx"
        },
        {
          top: "790rpx",
          left: "200rpx"
        }
      ];
      return positions[index] || {};
    },
    // 页面跳转方法
    switchToTabPage(pagePath) {
      common_vendor.index.switchTab({
        url: pagePath
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.icons, (icon, index, i0) => {
      return {
        a: index === 2 ? 1 : "",
        b: icon.src,
        c: index !== 2 ? 1 : "",
        d: index === 2 ? 1 : "",
        e: common_vendor.t(icon.label),
        f: index === 2 ? 1 : "",
        g: index,
        h: common_vendor.s($options.getIconStyle(index)),
        i: common_vendor.o(($event) => $options.switchToTabPage(icon.pagePath), index)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d264e651"], ["__file", "E:/FLICHAPP/pages/start.vue"]]);
wx.createPage(MiniProgramPage);
