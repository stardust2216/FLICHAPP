'use strict';

const db = uniCloud.database()

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	let {content,forunmID} = event
	
	let res = db.collection("forunmRE").add({
		username:"RockCandy",
		head:"https://www.freeimg.cn/i/2024/05/10/663d6e898d656.jpg",
		content:content,
		forunmID:forunmID,
		createTime:Date.now(),
		updateTime:Date.now()
	})
	
	//返回数据给客户端
	return res
};
