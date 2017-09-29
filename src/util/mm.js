/*
* @Author: Marte
* @Date:   2017-09-29 11:17:51
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-29 13:57:11
*/

'use strict';

var _mm = {
    request : function(param){
        $.ajax({
            type     : param.method || 'get',
            url      : param.url    || '',
            dataType : param.type   || 'json',
            data     : param.data   || '',
            success  : function(res){
                // 请求成功
                if(0 == res.status){
                    typeof param.success === 'function' && param.success(res.data, res.msg)
                }
                // 没有登录状态，需要强制登录
                else if(10 === res.status){

                }
            },
            error    : function(err){

            }
        });
    }
};

module.exports = _mm;