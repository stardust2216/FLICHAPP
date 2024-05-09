"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      //存储
      valiFormData: {
        title: "",
        address: "",
        content: ""
      },
      // 校验
      rules: {
        title: {
          rules: [{
            required: true,
            errorMessage: "标题不能为空"
          }]
        },
        content: {
          rules: [{
            required: true,
            errorMessage: "内容不能为空"
          }]
        }
      }
    };
  },
  methods: {
    submit(ref) {
      this.$refs[ref].validate().then((res) => {
        console.log("success", res);
        let detail = res;
        common_vendor.index.showToast({
          title: `校验通过`
        });
        common_vendor.Ws.callFunction({
          name: "NewdiscussAdd",
          data: {
            detail
          }
        }).then((res2) => {
          console.log("传入结果", res2);
        });
      }).catch((err) => {
        console.log("err", err);
      });
    }
  },
  onLoad() {
  }
};
if (!Array) {
  const _easycom_uni_popup_message2 = common_vendor.resolveComponent("uni-popup-message");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_popup_message2 + _easycom_uni_popup2 + _easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2 + _easycom_uni_section2)();
}
const _easycom_uni_popup_message = () => "../../uni_modules/uni-popup/components/uni-popup-message/uni-popup-message.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_popup_message + _easycom_uni_popup + _easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms + _easycom_uni_section)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: _ctx.msgType,
      message: _ctx.messageText,
      duration: 2e3
    }),
    b: common_vendor.sr("message", "ad40783a-0"),
    c: common_vendor.p({
      type: "message"
    }),
    d: common_vendor.o(($event) => $data.valiFormData.title = $event),
    e: common_vendor.p({
      placeholder: "请输入内容标题",
      modelValue: $data.valiFormData.title
    }),
    f: common_vendor.p({
      label: "标题",
      required: true,
      name: "title"
    }),
    g: common_vendor.o(($event) => $data.valiFormData.address = $event),
    h: common_vendor.p({
      placeholder: "请输入推荐地址",
      modelValue: $data.valiFormData.address
    }),
    i: common_vendor.p({
      label: "景区地址",
      name: "address"
    }),
    j: common_vendor.o(($event) => $data.valiFormData.content = $event),
    k: common_vendor.p({
      type: "textarea",
      placeholder: "请输入论坛内容",
      modelValue: $data.valiFormData.content
    }),
    l: common_vendor.p({
      label: "内容介绍",
      required: true,
      name: "content"
    }),
    m: common_vendor.sr("valiForm", "ad40783a-3,ad40783a-2"),
    n: common_vendor.p({
      rules: $data.rules,
      modelValue: $data.valiFormData
    }),
    o: common_vendor.o(($event) => $options.submit("valiForm")),
    p: common_vendor.p({
      title: "新建内容",
      type: "line"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/IT_Study/Uniapp/FLICHAPP/pages/stillmore/Newdiscuss.vue"]]);
wx.createPage(MiniProgramPage);
