/**
 * Created by wyw on 2019/1/9.
 */
const db = require('../utils/database');
let caring = db.model("caring", {
    userM: String, //
    userY: String, //
    caring: String // 是否已点爱心 1:是  0:否
});

const getCaring = (params, callback) => { //
    caring.find(params).then(r => {
        callback({code: 0, data: r});
    }).catch(err => {
        callback({code: -1, data: '查找失败'});
    })
};

const addCaring = (params, callback) => { //
    caring.create(params).then(r => {
        if (r['_id']) {
            callback({code: 0, data: r['_id']});
        } else {
            callback({code: -1, data: '添加失败'});
        }
    }).catch(err => {
        callback({code: -1, data: '添加失败'});
    })
};

const upCaring = (params, callback) => { //
    caring.update({userM: params.userM, userY: params.userY}, {caring:params.caring}).then(raw => {
        if (raw.nModified > 0) {
            callback({code: 0});
        } else {
            callback({code: -1});
        }
    }).catch(err => {
        callback({code: -1, data: '编辑失败'});
    })
};

module.exports = {
    getCaring,
    addCaring,
    upCaring
};