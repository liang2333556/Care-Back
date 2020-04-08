/**
 * Created by wyw on 2019/1/9.
 */

const api = require('../controller/apiList');
let express = require('express');
let router = express.Router();

router.post('/getWishing', api.getWishing); // 查看许愿墙
router.post('/addWishing', api.addWishing); // 添加愿望

module.exports = router;