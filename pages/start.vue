<template>
	<view class="bgc">


		<view class="img">
			<image src="../static/首页/circle-bgc.jpg" mode="aspectFit" class="image"></image>
			<view class="icon-container">
				<view v-for="(icon, index) in icons" :key="index" class="icon-box"
					:class="{ 'special-box': index === 2 }" :style="getIconStyle(index)"
					@click="switchToTabPage(icon.pagePath)">
				</view>
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
				icons: [
					// 假设这是您的图标数据，现在改为五个盒子的数据
					{
						pagePath: 'Lesson/Lesson'
					},
					{
						pagePath: 'Consult/Consult'
					},
					{
						pagePath: 'index/index'
					},
					{
						pagePath: 'experience/experience'
					},
					{
						pagePath: 'stillmore/stillmore'
					}
				]
			};
		},
		methods: {
			getIconStyle(index) {
				const positions = [{
						bottom: '860rpx',
						right: '230rpx'
					},
					{
						bottom: '600rpx',
						left: '50rpx'
					},
					{
						bottom: '530rpx',
						right: '230rpx'
					},
					{
						bottom: '530rpx',
						right: '10rpx'
					},
					{
						bottom: '300rpx',
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
		background-image: url('https://www.freeimg.cn/i/2024/05/06/6638eb90e4db6.jpg');
		background-size: cover;
		height: 100%;
		width: 100%;
	}

	.img {
		height: 80vh;
		position: relative;
		top: -100rpx;
	}

	.image {
		width: 100%;
		height: 100%;

	}

	.icon-container {
		position: relative;
	}

	.icon-box {
		position: absolute;
		width: 150rpx;
		height: 150rpx;
		background-color: rgba(0, 0, 0, 0);
	}
	.special-box {
		width: 230rpx;
		height: 240rpx;
	}

	

	@font-face {
		font-family: 'CustomFont';
		src: url('../static/fonts/XiangJiaoDaJiangJunLingGanTi-2.ttf') format('truetype');
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