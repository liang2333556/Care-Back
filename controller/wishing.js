/**
 * Created by wyw on 2019/1/9.
 */
const apiModel = require("../model/apiModel");

const getWishing = (req, res) => {
    let params = req.body;
    apiModel.getWishing({...params}, (r) => { // 查看许愿墙
        res.json(r);
    })
};
const addWishing = (req, res) => {
    let params = req.body;
    apiModel.addWishing({...params}, (r) => { // 添加愿望
        res.json(r);
    })
};

module.exports = {
    getWishing,
    addWishing
};