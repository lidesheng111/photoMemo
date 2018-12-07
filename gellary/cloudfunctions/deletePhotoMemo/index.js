// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const _ = db.command
const photoMemo =db.collection('photoMemories')

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  try {
    return await photoMemo.where({
      url: event.id
    }).remove()
  } catch (e) {
    console.error(e)
  }
}