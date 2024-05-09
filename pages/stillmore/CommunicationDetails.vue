<template>
	<view class="Details_Box">
		
		
		<!-- 标题 -->
		<view class="Top">
			
		</view>
		
		
		<!-- 内容主题 -->
		<view class="">
			
			
		</view>
		
		
		<!-- 评论区 -->
		<view class="">
			
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
			
			
			
			
		</view>
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 接收评论数据
				reviewlist:[],
				forunmID:1
			};
		},methods:{
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
				
			}
		},onLoad(option){
			let fid = option.forunmID
			console.log( fid )
			
		}
			
		
	}
</script>

<style lang="scss">

	
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
