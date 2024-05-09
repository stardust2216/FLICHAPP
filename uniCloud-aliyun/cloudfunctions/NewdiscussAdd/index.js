'use strict';

const db = uniCloud.database()

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	let {detail} = event
	
	
	let res = await db.collection("forunmOW").add({
		username:"冰糖",
		head:"头像",
		createTime:Date.now(),
		updateTime:Date.now(),
		...detail
	})
	

	//返回数据给客户端
	return detail
};
