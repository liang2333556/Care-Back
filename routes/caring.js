/**
 * Created by wyw on 2019/1/9.
 */

const api = require('../controller/apiList');
let express = require('express');
let router = express.Router();

router.post('/getCaring', api.getCaring); // 查找爱心
router.post('/addCaring', api.addCaring); // 添加爱心
router.post('/upCaring', api.upCaring); // 更新爱心

module.exports = router;