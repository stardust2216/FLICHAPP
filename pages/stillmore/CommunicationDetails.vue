<template>
	<view class="Details_Box">
		
		
		<!-- 标题 -->
		<view class="Top">
			
		</view>
		
		
		<!-- 内容主题 -->
		<view class="DetailsContent">
			
			<view class="DetailsContent_Box">
				
			
				
				
			</view>
			
		</view>
		
		

		
		
		
		<!-- 评论区 -->
		<view class="">
			
			<view class="HiddenReview">
				
				<text style="font-family: 'MyCustomFontBold';font-size: 40rpx;">评论</text>
				<p class="HiddenReview_msg" v-if="msg == 0">暂无评论.....</p>
				
				<!-- 评论卡片 -->
				<view class="discussion">
					<view class="comment" v-for="(item, index) in reviewlist" :key="index">
						<!-- 图片 item.head -->
						<image class="avatar" :src="item.head" />
						<view class="message-content">
							<text class="username">{{ item.username }}</text>
							<text class="text">{{ item.content }}</text>
						</view>
					</view>
				</view>
				
			</view>
			
		</view>
		
		
		<!-- 输入区 -->
		<view class="Detailinput">
			<form  @submit="submint">
				<input type="text" placeholder="输入框" class="Detailinput_text" name="content" v-model.trim="this.inputtext" />
				<button form-type="submit" type="primary">发送</button>
			</form>
		</view>
		
		
		
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 接收评论数据
				reviewlist:[],
				forunmID:1,
				msg:1,
				inputtext:""
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

					// 判断是否有评论
					if(this.reviewlist == ''){
						this.msg = 0
						console.log("暂无评论")
					}else{
						this.msg = 1
						console.log("存在数据")
					}
				})
			},
			
			submint(e){
				 let textcontent =  e.detail.value.content
				 
				 uniCloud.callFunction({
				 	name:"CommunicationDetailsAdd",
					data:{
						content:textcontent,
						forunmID:this.forunmID
					}
				 }).then(res => {
					 console.log(res)
					 // 重新加载
					 this.openRE()
				 })
					
				 this.inputtext = ''
				
			}
			
			
			
		},onLoad(option){
			// 接受论坛页面传递数据
			let fid = option.forunmID
			this.forunmID = parseInt(fid)
			// 获取云数据库数据
			this.openRE()
			
		}
			
		
	}
</script>

<style lang="scss">
	
	// 主体
	.Details_Box{
	
			display: flex;
			flex-direction: column;
			min-height: 100vh;
			
			
			// 输入框
			.Detailinput{
				width: 100%;
				min-height: 65rpx;
				margin-top: auto;
				background-color: aqua;
				border: 2rpx;
				.Detailinput_text{
					min-height: 60rpx;
					padding: 4rpx;
				}
			}
			
			
			
			
			
			
			
			
			
			// 评论SCSS
			
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
				padding: 20rpx;
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
	}

</style>
