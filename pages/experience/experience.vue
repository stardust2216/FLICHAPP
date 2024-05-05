<template>
	<view class="bgc">
		<view class="box1" @click="navigateToPage('AR体验')">
			<view class="boxTitle">
				<image src="../../static/页面3/2.png" mode=""></image>
				<text>AR体验</text>
			</view>
			<view class="boxText">
				<image src="../../static/页面3/1.png" mode=""></image>
				<text>点击认识广西各地特色非遗传统文化</text>
			</view>
		</view>
		<view class="box2" @click="navigateToPage('线上闯关')">
			<view class="boxTitle">
				<image src="../../static/页面3/4.png" mode="aspectFit"></image>
				<text>线上闯关</text>
			</view>
			<view class="box2Text">
				<image src="../../static/页面3/1.png" mode="aspectFit" ></image>
				<text >点击参与更多游戏</text>
			</view>
		</view>
		<view class="box3" @click="navigateToPage('线下研学')">
			<view class="boxTitle">
				<image src="../../static/页面3/3.png" mode="aspectFit"></image>
				<text>线下研学</text>
			</view>
			<view class="box3Text">
				<image src="../../static/页面3/1.png" mode=""></image>
				<text>校内外研学场地及预约</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			navigateToPage(pageName) {
				// 根据页面名称跳转到不同的页面
				switch (pageName) {
					case 'AR体验':
						uni.navigateTo({
							url: '/pages/experience/AR'
						});
						break;
					case '线上闯关':
						uni.navigateTo({
							url: '/pages/experience/challenge'
						});
						break;
					case '线下研学':
						uni.navigateTo({
							url: '/pages/experience/study'
						});
						break;
					default:
						break;
				}
			}
		}
	};
</script>

<style lang="scss">
	
	.bgc {
		height: 100%;
		width: 100%;
		position: absolute;
		background-image: url('../../static/background-img.png');
		background-size: cover;
		padding-top: 30rpx;
	}

	.box1 {
		width: 680rpx;
		background-color: #f7f3e8;
		box-shadow: 0 8px 4px rgba(229, 220, 209, 1.0),
		            6px 8px 4px rgba(229, 220, 209, 1.0);
		height: 270rpx;
		margin: auto;
		display: flex;
		flex-direction: column;
		padding: 30rpx;
		border-radius: 10rpx;
	}
	@font-face {
		font-family: 'MyCustomFont';
		src: url('../static/fonts/SourceHanSerifCN-Light-5.otf') format('opentype');
	}
	.boxTitle {
		font-family: 'MyCustomFont';
		width: 660rpx;
	}
	.boxTitle image {
		width: 140rpx;
		height: 75rpx;
		float: left;
	}
	.boxTitle text{
		font-size: 25px;
		font-weight: bold;
		margin-left: 20rpx;
		color: #41210c;
	}
	.boxText{
		font-family: 'MyCustomFont';
		margin-top:50rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}
	.boxText image {
		width: 20rpx;
		height: 20rpx;
		margin-top: 15rpx;
	}
	.boxText text{
		font-size: 32rpx;
		margin-top: 5rpx;
		color: #917559;
		letter-spacing: 1px;
		line-height: 1.2;
	}
	.box2{
		width: 680rpx;
		background-color: #f7f3e8;
		box-shadow: 0 8px 4px rgba(229, 220, 209, 1.0),
		            6px 8px 4px rgba(229, 220, 209, 1.0);
		height: 270rpx;
		margin: auto;
		display: flex;
		flex-direction: column;
		padding: 30rpx;
		border-radius: 10rpx;
		margin-top: 80rpx;
	}
	.box3{
		width: 680rpx;
		background-color: #f7f3e8;
		box-shadow: 0 8px 4px rgba(229, 220, 209, 1.0),
		            6px 8px 4px rgba(229, 220, 209, 1.0);
		height: 270rpx;
		margin: auto;
		display: flex;
		flex-direction: column;
		padding: 30rpx;
		border-radius: 10rpx;
		margin-top: 100rpx;
	}
	.box2Text{
		font-family: 'MyCustomFont';
		margin-top:50rpx;
	}
	.box2Text image{
		width: 20rpx;
		height: 20rpx;
		margin-top: 15rpx;
	}
	.box2Text text{
		font-size: 32rpx;
		margin-top: 10rpx;
		margin-left: 25rpx;
		color: #917559;
		letter-spacing: 1px;
		line-height: 1.2;
	}
	.box3Text{
		font-family: 'MyCustomFont';
		margin-top:50rpx;
	}
	.box3Text image{
		width: 20rpx;
		height: 20rpx;
		margin-top: 15rpx;
	}
	.box3Text text{
		font-size: 32rpx;
		margin-top: 10rpx;
		margin-left: 25rpx;
		color: #917559;
		letter-spacing: 1px;
		line-height: 1.2;
	}
</style>