<template>
	<view class="bgc">
		<view class="bgc-circle">
			<image src="../static/首页/circle.png" mode="" style="width: 770rpx;height: 870rpx;"></image>
		</view>
		<view class="icon-container">
			<!-- 遍历一个包含图标信息的数组来动态生成图标和文字 -->
			<view v-for="(icon, index) in icons" :key="index" class="imgIcon" :style="getIconStyle(index)"
				@click="switchToTabPage(icon.pagePath)">
				<view :class="{ 'circle': index !== 2, 'feiyi-circle': index === 2 }">
					<image class="icon" :class="{ 'feiyi-icon': index === 2 }" :src="icon.src" />
				</view>
				<text class="icon-label" :class="{ 'feiyi-label': index === 2 }">{{ icon.label }}</text>
			</view>
		</view>
		<view class="bottom">
			<image src="../static/首页/feiYi.png" style="width: 80rpx;height: 80rpx;"></image>
			<text class="bottom-text">让非遗触手可及</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			// 图标数据，包含图标路径、文字和对应跳转页面的路径
			icons: [{
					src: '../static/首页/keCheng.png',
					label: '趣学课程',
					pagePath: 'Consult/Consult'
				},
				{
					src: '../static/首页/zixun.png',
					label: '趣学资讯',
					pagePath: 'Lesson/Lesson'
				},
				{
					src: '../static/首页/feiYi.png',
					label: '趣学非遗',
					pagePath: 'index/index'
				},
				{
					src: '../static/首页/tiYan.png',
					label: '趣学体验',
					pagePath: 'experience/experience'
				},
				{
					src: '../static/首页/gengDuo.png',
					label: '趣学更多',
					pagePath: 'stillmore/stillmore'
				}
			]
		};
	},
	methods: {
		// 动态获取每个图标的位置样式
		getIconStyle(index) {
			const positions = [{
					top: '220rpx',
					right: '240rpx'
				},
				{
					top: '480rpx',
					left: '50rpx'
				},
				{
					top: '450rpx',
					right: '230rpx'
				},
				{
					top: '540rpx',
					right: '10rpx'
				},
				{
					top: '790rpx',
					left: '200rpx'
				}
			];
			return positions[index] || {};
		},
		// 页面跳转方法
		switchToTabPage(pagePath) {
			uni.switchTab({
				url: pagePath
			});
		}
	}
};
</script>

<style scoped>
	.bgc {
		background-image: url('../static/strat-bgc.jpg');
		background-size: cover; 
		height: 100%;
		width: 100%;
		position: absolute;
	}

	.icon-container {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		padding: 10px;
	}

	.imgIcon {
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.circle {
		width: 70px;
		height: 65px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		margin-bottom: 5px;
	}

	.icon {
		width: 50px;
		height: 45px;
		margin-bottom: 5px;
		border-radius: 50%;
	}

	.feiyi-icon {
		width: 250rpx;
		height: 240rpx;
		background-color: transparent;
	}

	.feiyi-circle {
		background-color: transparent;
	}

	@font-face {
		font-family: 'CustomFont';
		src: url('../static/fonts/XiangJiaoDaJiangJunLingGanTi-2.ttf') format('truetype');
	}

	.icon-label {
		font-family: 'CustomFont';
		font-size: 20px;
		color: #696a60;
		line-height: 40px;
		
	}

	/* 单独为趣学非遗文字设置样式 */
	.feiyi-label {
		font-size: 25px;
		color: black; 
		font-weight: normal; 
	}

	.bottom {
		position: absolute;
		bottom: 0;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.bottom-text {
		line-height: 40px;
		font-weight: bold;
		margin-top: 10rpx;
		font-size: 16px;
		color: white;
	}

	.bgc-circle {
		margin-top: 150rpx;
	}
</style>
