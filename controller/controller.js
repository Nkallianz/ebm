let read = require('read-file-utf8');
let loki = require('lokijs');
let db = new loki('db.json');
let data = read(__dirname + '/db.json');
db.loadJSON(data);
window.Vue = require('vue');
let produtos = db.getCollection('produtos');

new Vue({
    el: 'body',
    data: {
        users: [],


    }
})