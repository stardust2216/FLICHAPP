"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      icons: [
        // 假设这是您的图标数据，现在改为五个盒子的数据
        {
          pagePath: "Lesson/Lesson"
        },
        {
          pagePath: "Consult/Consult"
        },
        {
          pagePath: "index/index"
        },
        {
          pagePath: "experience/experience"
        },
        {
          pagePath: "stillmore/stillmore"
        }
      ]
    };
  },
  methods: {
    getIconStyle(index) {
      const positions = [
        {
          bottom: "860rpx",
          right: "230rpx"
        },
        {
          bottom: "600rpx",
          left: "50rpx"
        },
        {
          bottom: "530rpx",
          right: "230rpx"
        },
        {
          bottom: "530rpx",
          right: "10rpx"
        },
        {
          bottom: "300rpx",
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
        a: index,
        b: index === 2 ? 1 : "",
        c: common_vendor.s($options.getIconStyle(index)),
        d: common_vendor.o(($event) => $options.switchToTabPage(icon.pagePath), index)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d264e651"], ["__file", "E:/IT_Study/Uniapp/FLICHAPP/pages/start.vue"]]);
wx.createPage(MiniProgramPage);
