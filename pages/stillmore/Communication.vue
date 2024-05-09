<template>
	<view class="bgc">
		<view class="CommunicationHead">
			<view class="avatarhead">
				<image class="avatar" :src="head.avatar" mode=""></image>
				<text>{{head.username}}</text>
			</view>
			<text style="color: aliceblue;font-family: 'MyCustomFont';font-size: 40rpx;">{{head.title}}</text>
			<text
				style="color: aliceblue;font-family: 'MyCustomFont';font-size: 20rpx;font-weight: 100;">{{head.text}}</text>
		</view>
		<text style="font-family: 'MyCustomFontBold';font-size: 40rpx;">评论</text>
		<view class="discussion">
			<view class="comment" v-for="(item, index) in comment" :key="index">
				<image class="avatar" :src="item.avatar" />
				<view class="message-content">
					<text class="username">{{ item.username }}</text>
					<text class="text">{{ item.text }}</text>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
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
			}
		},
		methods: {

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
		height: 500rpx;
		background: #988576;
		border-radius: 40rpx;
		margin-bottom: 40rpx;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
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