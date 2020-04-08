let users = require('./user');
let groups = require('./group');
let messages = require('./messages');
let friendly = require('./friendly');
let expression = require('./expression');
let todo = require('./todo');
let caring = require('./caring');
let wishing = require('./wishing');
let record = require('./record');

module.exports = {
    ...users,
    ...groups,
    ...messages,
    ...friendly,
    ...expression,
    ...todo,
    ...caring,
    ...wishing,
    ...record
};
