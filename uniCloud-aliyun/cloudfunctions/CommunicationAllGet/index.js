'use strict';

const db = uniCloud.database()

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	let {forunmID} = event
	
	let res = db.collection("forunmRE").where({
		forunmID:forunmID
	}).get()
	
	//返回数据给客户端
	return res
};
