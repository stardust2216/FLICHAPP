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
<<<<<<< HEAD
			
				// 接收评论数据
				reviewlist:[],
				
				// 接收论坛数据
				forumlist:[],
				
				// 页数
				skip:0,
		
				// 论坛ID
				forunmID:1
=======
				head: {
					username: '请叫我刘三姐',
					avatar: 'https://www.freeimg.cn/i/2024/05/09/663c30eba62e3.png',
					title: '先去桂林还是阳朔?让三姐带你攻略桂林最美旅途风光!',
					text: '桂林最值得看的就是象鼻山~但现在的象鼻山都是旅行团,嘈杂非常步道两侧都是低劣小商品,实在扫兴桂林作为一个老牌旅游城市,景点管理太差了除了象鼻山,桂林的滨江路和解放桥还可以走走其他就没啥好看的了大家想看象鼻山的话看我的图就行,没必要专门跑到桂林去看,当然这只是我的看法,大家看有啥更好的推荐敬请评论区下方留言~'
				},
				comment: [{
						username: '阿牛哥',
						avatar: 'https://www.freeimg.cn/i/2024/05/09/663c30eb5966e.png',
						text: '象鼻山是在阳朔还是桂林？'
					},
					{
						username: '爱旅游的小趴菜儿',
						avatar: 'https://www.freeimg.cn/i/2024/05/09/663c30e86f91b.png',
						text: '姐妹，我想问一下，遇龙河也是在兴坪古镇附近么？还是在阳朔县？我现在在桂林不知道是坐车到阳朔站还是兴坪古镇?'
					}
				]
>>>>>>> d6e4eeab3e1d6df9b43557a073844e97d1d6f57e
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