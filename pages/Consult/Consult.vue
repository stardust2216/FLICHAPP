<template>
	<view class="bgc">
		<view class="seach">
			<uni-search-bar placeholder="请输入搜索内容" @confirm="search" @cancel="cancel" cancel-text="取消">
				<uni-icons slot="searchIcon" color="#989898" size="18" type="home" />
			</uni-search-bar>
		</view>
		<view class="Information">
			<image src="../../static/页面4/4.png" mode="aspectfit" class="heritage-image"></image>
			<view class="content">
				<text class="title">非遗介绍</text>
				<text>温，广西壮族自治区南宁市地方传统戏剧，</text>
			</view>
		</view>
		<view class="figure">
			<image src="../../static/页面4/4.png" mode="aspectfit" class="heritage-image"></image>
			<view class="content">
				<text class="title">非遗介绍</text>
				<text>温，广西壮族自治区南宁市地方传统戏剧，</text>
			</view>
		</view>
		<view class="AiChat">
			<view class="AiChatContents">
				<view class="AIcontent">
					<text class="AItext">以上内容是根据您的喜好,定制推送的内容,你还可以想我询问想了解的问题</text>
				</view>
				<image src="../../static/页面2/2.png" mode="aspectfit" class="AiChatImg"></image>
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
			search(res) {
				uni.showToast({
					title: '搜索：' + res.value,
					icon: 'none'
				})
			},
			cancel(res) {
				uni.showToast({
					title: '点击取消，输入值为：' + res.value,
					icon: 'none'
				})
			}
		}
	}
</script>

<style lang="scss">
	.bgc {
		height: 100%;
		width: 100%;
		position: absolute;
		background-color: #fff;
		padding-top: 20rpx;
	}

	.Information {
		position: absolute;
		top: 100px;
		padding: 20px;
		left: 25rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		background-image: linear-gradient(to bottom, #d9cdbc, #ded8ca, #eef7f3);
		border-radius: 10rpx;
		width: 700rpx;
	}

	.content {
		margin-left: 25rpx;
	}

	.title {
		font-size: 24px;
		margin-bottom: 20px;
		color: #b29f89;
	}

	.content text {
		display: block;
		text-align: left;
		line-height: 1.6;
		margin-bottom: 10px;
		color: #b29f89;
	}

	.heritage-image {
		width: 230rpx;
		height: 200rpx;
		/* 根据需要调整图片宽度 */
		margin-top: 20px;
		margin-left: -15rpx;
	}

	.figure {
		position: absolute;
		top: 300px;
		padding: 20px;
		left: 25rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		background-image: linear-gradient(to bottom, #d9cdbc, #ded8ca, #eef7f3);
		border-radius: 10rpx;
		width: 700rpx;
	}

	.AiChat {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		left: 35rpx;
		width: 700rpx;
		position: absolute;
		top: 600px;
	}

	.AiChatContents {
		display: flex;
		align-items: center;
		/* 垂直居中 */
		justify-content: flex-end;
		
	}

	.AIcontent {
		margin-left: 25rpx;
		border-radius: 10rpx;
		background-image: linear-gradient(to right, #f4f0e7, #eee3cd, #e7d3a6);
		width: 550rpx;
	}

	.AIcontent text {
		display: block;
		text-align: left;
		line-height: 1.3;
		padding: 15rpx;
		margin-bottom: 10px;
		color: #ceb17f;
		
	}

	.AiChatImg {
		width: 100rpx;
		height: 100rpx;
		margin-left: 30rpx;
	}
</style>