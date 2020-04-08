/**
 * Created by wyw on 2019/1/9.
 */

const api = require('../controller/apiList');
let express = require('express');
let router = express.Router();

router.post('/getRecord', api.getRecord); // 查找日志
router.post('/addRecord', api.addRecord); // 添加日志
router.post('/upRecord', api.upRecord); // 更新日志
router.post('/delRecord', api.delRecord); // 更新日志

module.exports = router;