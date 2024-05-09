'use strict';

const db = uniCloud.database()


exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	// 页数
	let {skip} = event
	
	// 获取的数据
	let res = db.collection("forunmOW").limit(10).skip(skip).get()
	
	
	//返回数据给客户端
	return res
};
