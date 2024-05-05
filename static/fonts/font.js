// 第三方字体库调用
let loadFont = function() {
    // 所有的.tff文件
	const fontsArr = [
		// 'Xiquegufengxiaokaiti',
		// 'Xiquejuzhengti',
		// 'Xiqueledunti',
		// 'Xiquexiaoqingsongti',
		// 'Xiqueyanshuti',
		// 'Zixiaohunfeimoshoushu',
		// 'Zixiaohungeyixiaoshoujixinkaiti',
		// 'Zixiaohunqiankunshoushu',
		// 'Zixiaohunxingchaohaibaoti',
		'XiangJiaoDaJiangJunLingGanTi-2',
		// 'SourceHanSerifCN-Light-5'
	]

	fontsArr.forEach(itm => {
		wx.loadFontFace({
			family: `${itm}`, //设置一个font-family使用的名字 中文或英文
			global: true, //是否全局生效
			source: `url("/static/fonts/${itm}.ttf")`, //字体资源的地址
			success: function(e) {
				console.log(itm, '===>字体调用成功');
			},
			fail: function(e) {
				console.log(itm, '===>字体调用失败');
			},
		});
	})
};
// module.exports = {
// 	loadFont: loadFont,
// };
export {
	loadFont
}
