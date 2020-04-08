/**
 * Created by wyw on 2019/1/9.
 */
const db = require('../utils/database');
let record = db.model("record", {
    userId: String, // 用户id
    title: String, // 日志标题
    content: String, // 日志内容
    createTime: String, // 创建时间
    updateTime: String // 更新时间
});

const getRecord = (params, callback) => { //
    record.find(params).sort({'updateTime': -1}).then(r => {
        callback({code: 0, data: r});
    }).catch(err => {
        callback({code: -1, data: '查找失败'});
    })
};

const addRecord = (params, callback) => { //
    record.create(params).then(r => {
        if (r['_id']) {
            callback({code: 0, data: r['_id']});
        } else {
            callback({code: -1, data: '添加失败'});
        }
    }).catch(err => {
        callback({code: -1, data: '添加失败'});
    })
};

const upRecord = (params, callback) => { //
    record.update({_id: params._id}, {title:params.title,content:params.content,updateTime:params.updateTime}).then(raw => {
        if (raw.nModified > 0) {
            callback({code: 0});
        } else {
            callback({code: -1});
        }
    }).catch(err => {
        callback({code: -1, data: '更新失败'});
    })
};
const delRecord = (params, callback) => { //
    record.remove(params).then(raw => {
        if (raw.ok > 0) {
            callback({code: 0});
        } else {
            callback({code: -1});
        }
    }).catch(err => {
        callback({code: -1, data: '删除失败'});
    })
};

module.exports = {
    getRecord,
    addRecord,
    upRecord,
    delRecord
};