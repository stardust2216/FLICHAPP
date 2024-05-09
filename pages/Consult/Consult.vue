<template>
	<!-- 导航栏 -->
	<customTabBar Title="趣学资讯"></customTabBar>
	<view class="bgc">

		<view class="AiChat" v-if="this.results != '' ">
			<view class="AiChatContents">
				<view class="AIcontent">
					<text class="AItext">{{this.results.result}}</text>
				</view>
				<image src="../../static/页面2/2.png" mode="aspectfit" class="AiChatImg"></image>
			</view>

		</view>
		<view class="input-group">
			<input type="text" v-model="inputText" placeholder="Type a message..." />
			<button @click="sendMessage">Send</button>
		</view>
	</view>
</template>

<script>
	import customTabBar from "../../components/customTabBar.vue"
	export default {
		components: {
			customTabBar
		},
		data() {
			return {
				// 给AI的数据
				contents: "",
				// AI返回的数据
				results: ""

			}
		},
		methods: {
			search(res) {
				uni.showToast({
					title: '搜索：' + res.value,
					icon: 'none'
				})


				// 接入AI功能
				uniCloud.callFunction({
					name: "openkimiAI",
					data: {
						// 传入数据
						contents: this.contents
					}
				}).then(res => {
					this.results = res
					if (this.results.result == '') {
						console.log(0)
					} else {
						console.log(1)
					}
					this.contents = ''
				})

			},
			cancel(res) {
				uni.showToast({
					title: '点击取消，输入值为：' + res.value,
					icon: 'none'
				})
			},


			// 跳转过来的时候给的问候语
			openAi() {
				uniCloud.callFunction({
					name: "openkimiAI",
					data: {
						// 传入数据
						contents: "你好~很高兴认识你呀~"
					}
				}).then(res => {
					this.results = res
					if (this.results.result == '') {
						console.log(0)
					} else {
						console.log(1)
					}
					this.contents = ''
				})

			}




		},
		onLoad() {
			// 打开页面自动调用函数
			this.openAi()


		}
	}
</script>

<style lang="scss">
	.bgc {
		padding-top: 30rpx;
	}

	@font-face {
		font-family: 'MyCustomFont';
		src: url('../static/fonts/SourceHanSerifCN-Light-5.otf') format('opentype');
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
		font-family: 'MyCustomFont';
	}

	.AiChatImg {
		width: 100rpx;
		height: 100rpx;
		margin-left: 30rpx;
	}

	.input-group {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
	}
</style>