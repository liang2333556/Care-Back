/**
 * Created by wyw on 2019/1/9.
 */
const db = require('../utils/database');

let wishing = db.model("wishing", {
    userId: String, // 用户id
    wishTime: String, // 许愿时间
    wish: String // 愿望
});

const getWishing = (params, callback) => { //
    wishing.find(params).sort({'wishTime': -1}).then(r => {
        callback({code: 0, data: r});
    }).catch(err => {
        callback({code: -1, data: '查找失败'});
    })
};

const addWishing = (params, callback) => { //
    console.log(params)
    wishing.create(params).then(r => {
        console.log(r)
        if (r['_id']) {
            callback({code: 0, data: r['_id']});
        } else {
            callback({code: -1, data: '添加失败'});
        }
    }).catch(err => {
        callback({code: -1, data: '添加失败'});
    })
};

module.exports = {
    getWishing,
    addWishing
};