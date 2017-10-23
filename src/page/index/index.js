/*
* @Author: Marte
* @Date:   2017-09-28 12:21:38
* @Last Modified by:   Marte
* @Last Modified time: 2017-10-11 20:57:15
*/

'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('util/slider/index.js');
var navSide = require('page/common/nav-side/index.js');
var templateBanner = require('./banner.string');
var _mm = require('util/mm.js');

$(function() {
    //渲染banner的html
    var bannerHtml = _mm.renderHtml(templateBanner);
    //初始化banner
    $('.banner-con').html(bannerHtml);
    var $slider = $('.banner').unslider({
        dots: true
    });
    //前一张和后一张的时间绑定
    $('.banner-con .banner-arrow').click(function(){
        var forward = $(this).hasClass('prev') ? 'prev' : 'next';
        $slider.data('unslider')[forward]();
    })
});


