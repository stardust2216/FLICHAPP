"use strict";
const common_vendor = require("../../common/vendor.js");
const customTabBar = () => "../../components/customTabBar.js";
const _sfc_main = {
  components: {
    customTabBar
  },
  data() {
    return {
      // 给AI的数据
      contents: "",
      // AI返回的数据
      results: ""
    };
  },
  methods: {
    search(res) {
      common_vendor.index.showToast({
        title: "搜索：" + res.value,
        icon: "none"
      });
      common_vendor.Ws.callFunction({
        name: "openkimiAI",
        data: {
          // 传入数据
          contents: this.contents
        }
      }).then((res2) => {
        this.results = res2;
        if (this.results.result == "") {
          console.log(0);
        } else {
          console.log(1);
        }
        this.contents = "";
      });
    },
    cancel(res) {
      common_vendor.index.showToast({
        title: "点击取消，输入值为：" + res.value,
        icon: "none"
      });
    },
    // 跳转过来的时候给的问候语
    openAi() {
      common_vendor.Ws.callFunction({
        name: "openkimiAI",
        data: {
          // 传入数据
          contents: "你好~很高兴认识你呀~"
        }
      }).then((res) => {
        this.results = res;
        if (this.results.result == "") {
          console.log(0);
        } else {
          console.log(1);
        }
        this.contents = "";
      });
    }
  },
  onLoad() {
    this.openAi();
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
  return common_vendor.e({
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
    e: common_vendor.o(($event) => this.contents = $event),
    f: common_vendor.p({
      placeholder: "请输入搜索内容",
      ["cancel-text"]: "取消",
      modelValue: this.contents
    }),
    g: this.results != ""
  }, this.results != "" ? {
    h: common_vendor.t(this.results.result)
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/FLICHAPP/pages/Consult/Consult.vue"]]);
wx.createPage(MiniProgramPage);
