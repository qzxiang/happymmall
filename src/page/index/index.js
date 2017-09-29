/*
* @Author: Marte
* @Date:   2017-09-28 12:21:38
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-29 23:05:08
*/

'use strict';
var _mm = require('util/mm.js');

console.log(_mm.getUrlParam('test'));

var html = '<div>{{data}}</div>'
var data = {
    data: "test"
}
console.log(_mm.renderHtml(html, data));