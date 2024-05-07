<template>
	<view class="bgc">
		<view class="martHead">
			<image src="https://www.freeimg.cn/i/2024/05/07/6639d0eb1a423.webp" mode=""></image>
			<text>蓝色海洋的馈赠\n———北海贝雕</text>
		</view>
		<text style="top: 30rpx;font-family: 'MyCustomFontBold';">文创精品</text>
		<view class="mart">
			<view class="martText">
				<text style="font-size: 50rpx;">炮龙娃</text>
				<text >系列</text>
			</view>
			<view class="martImg">
				<image class="img1" src="../../static/页面4/T500 (40).png" mode=""></image>
				<image class="img2" src="../../static/页面4/T500(27).png" mode=""></image>
				<image class="img3" src="../../static/页面4/tangchibei.png" mode=""></image>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.bgc{
		padding: 25rpx;
		margin-top: 20rpx;
	}
	.martHead {
		background-image: linear-gradient(to bottom, #d7c8b7, #e5e3d9, #ecf2ec);
		display: flex;
		flex-direction: row;
		justify-content: center;
		border-radius: 10rpx;
		margin: auto;
		padding-top: 20rpx;
		margin-bottom: 30rpx;
		width: 700rpx;
		height: 300rpx;
	}
	.martHead image{
		width: 320rpx;
		height: 220rpx;
		margin-right: 30rpx;
		margin-top: 15rpx;
		border-radius: 5rpx;
	}
	.martHead text{
		font-family: 'MyCustomFontBold';
		font-size: 40rpx;
		margin-left: 20rpx;
		margin-top: 50rpx;
	}
	.mart{
		width: 700rpx;
		height: 700rpx;
		padding: 25rpx;
		margin-top: 40rpx;
		background-color: #dcd3ca;
		border-radius: 10rpx;
	}
	.martText{
		font-family: 'MyCustomFont';
		font-weight: bold;
		color: #7f8350;
		font-size: 40rpx;
	}
	.martImg{
		position: absolute;
	}
	.img1{
		height: 600rpx;
		width: 720rpx;
		right: 200rpx;
	}
	.img2{
		height: 480rpx;
		width: 600rpx;
		left: 200rpx;
		bottom: 750rpx;
	}
	.img3{
		height: 450rpx;
		width: 650rpx;
		left: 150rpx;
		bottom: 900rpx;
	}
</style>