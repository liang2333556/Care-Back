/**
 * Created by wyw on 2019/1/9.
 */
const apiModel = require("../model/apiModel");

const getRecord = (req, res) => {
    let params = req.body;
    apiModel.getRecord({...params}, (r) => { // 查询日志
        res.json(r);
    })
};
const addRecord = (req, res) => {
    let params = req.body;
    apiModel.addRecord({...params}, (r) => { // 添加日志
        res.json(r);
    })
};
const upRecord = (req, res) => {
    apiModel.upRecord(req.body, (r) => { // 修改日志
        res.json(r);
    })
};
const delRecord = (req, res) => {
    let params = req.body;
    apiModel.delRecord(params, (r) => { // 删除日志
        res.json(r);
    })
};

module.exports = {
    getRecord,
    addRecord,
    upRecord,
    delRecord
};