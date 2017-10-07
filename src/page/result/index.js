/*
* @Author: Marte
* @Date:   2017-10-07 23:47:59
* @Last Modified by:   Marte
* @Last Modified time: 2017-10-08 01:32:00
*/

'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function(){
    var type        = _mm.getUrlParam('type') || 'default',
        $element    = $('.' + type + '-success');
    //显示对应的提示元素
    $element.show();
})