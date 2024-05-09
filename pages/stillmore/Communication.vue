<template>
	<view class="bgc">
		
		
		<!-- 内容卡片 -->
		<view class="CommunicationHead" v-for="(item,index) in forumlist" :key="index" @click="getDetails(item.forunmID)">
			
			<!-- 头像 -->
			<view class="avatarhead">
				<image class="avatar" :src="item.head" mode=""></image>
				<text>{{item.username}}</text>
			</view>
			
			<!-- 标题 -->
			<view class="CommunicationHead_text_title">
				<text style="color: aliceblue;font-family: 'MyCustomFont';font-size: 40rpx;">{{item.title}}</text>
			</view>
		
			<!-- 内容 -->
			<view class="CommunicationHead_text_content">
				<text style="color: aliceblue;font-family: 'MyCustomFont';font-size: 20rpx;font-weight: 100;">{{item.content}}</text>
			</view>
		
			<!-- 评论按钮 -->
			<view class="CommunicationHead_text_but" @click="openReview(item.forunmID)">
				<uni-icons type="chatbubble" size="30"></uni-icons>
				<P>评论</P>
			</view>

		</view>
		
		
		<!-- 弹出框来显示 -->
		<view class="HiddenReview">
			
			<text style="font-family: 'MyCustomFontBold';font-size: 40rpx;">评论</text>
			
			<!-- 评论卡片 -->
			<view class="discussion">
				<view class="comment" v-for="(item, index) in reviewlist" :key="index">
					<!-- 图片 item.head -->
					<image class="avatar" src="/static/页面4/aniuguo_.png" />
					<view class="message-content">
						<text class="username">{{ item.username }}</text>
						<text class="text">{{ item.content }}</text>
					</view>
				</view>
			</view>
			
		</view>
		
		
		
		<!-- 新建内容 -->
		<navigator url="/pages/stillmore/Newdiscuss">
			<uni-fab ref="fab" />
		</navigator>
		
	</view>

</template>

<script>
	export default {
		data() {
			return {
			
				// 接收评论数据
				reviewlist:[],
				
				// 接收论坛数据
				forumlist:[],
				
				// 页数
				skip:0,
		
				// 论坛ID
				forunmID:1
			}
		},
		methods: {
			
			// 获取论坛内容
			openOW(){
				uniCloud.callFunction({
					name:"CommunicationOWGet",
					data:{
						skip:this.skip
					}
				}).then(res => {
					this.forumlist = res.result.data
					console.log("论坛内容",this.forumlist)
				})
			},

			// 获取评论信息
			openRE(){
				uniCloud.callFunction({
					name:"CommunicationAllGet",
					data:{
						forunmID:this.forunmID
					}
				}).then(res => {
					this.reviewlist = res.result.data
					console.log("评论内容",this.reviewlist)
				})
				
			},



			// 读取论坛ID
			openReview(e){
				console.log(e)
			},
			
			getDetails(id){
				uni.navigateTo({
					url:`/pages/stillmore/CommunicationDetails?forunmID=${id}`
				})
				
			}
			



		},onLoad() {
			this.openOW()
			this.openRE()
		}
		
	}
</script>

<style lang="scss">
	.bgc {
		padding: 25rpx;
		margin-top: 20rpx;
	}

	.CommunicationHead {
		width: 700rpx;
		min-height: 300rpx;
		background: #988576;
		border-radius: 40rpx;
		margin-bottom: 40rpx;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		
		
		.CommunicationHead_text_title{
			padding:0 10rpx 5rpx 10rpx;
		}
		
		.CommunicationHead_text_content{
			padding: 0 15rpx 10rpx 15rpx ;
		}
		
		.CommunicationHead_text_but{
			width: 700rpx;
			height: 100rpx;
			
	
			
		}
		
	}

	.avatarhead {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	.avatarhead text {
		font-family: 'MyCustomFont';
		font-size: 40rpx;
		color: white;
		margin-top: 70rpx;
	}

	.avatar {
		width: 150rpx;
		height: 150rpx;
		padding: 25rpx;
		overflow: hidden;
	}

	.discussion {
		display: flex;
		flex-direction: column;
		align-items: flex-start;

	}

	.comment {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		width: 700rpx;
		height: auto;
		margin-bottom: 20rpx;
		background-color: #e5d7ca;
		border-radius: 15rpx;
	}

	.message-content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-left: 20rpx;
		white-space: normal;
		overflow: hidden;
		flex: 1;
		padding: 5rpx;
	}

	.username {
		font-family: 'MyCustomFontBold';
		font-weight: bold;
		margin-top: 20rpx;

	}

	.message-content text {
		font-family: 'MyCustomFont';
		margin-top: 20rpx;

	}
</style>