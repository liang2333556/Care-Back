/**
 * Created by wyw on 2019/1/9.
 */
const apiModel = require("../model/apiModel");

const getCaring = (req, res) => {
    let params = req.body;
    apiModel.getCaring({...params}, (r) => { // 添加爱心
        res.json(r);
    })
};
const addCaring = (req, res) => {
    let params = req.body;
    apiModel.addCaring({...params}, (r) => { // 添加爱心
        res.json(r);
    })
};
const upCaring = (req, res) => {
    let params = req.body;
    apiModel.upCaring({...params}, (r) => { // 修改爱心
        res.json(r);
    })
};

module.exports = {
    getCaring,
    addCaring,
    upCaring
};