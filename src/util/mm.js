/*
* @Author: Marte
* @Date:   2017-09-29 11:17:51
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-29 18:21:42
*/

'use strict';

var _mm = {
    request : function(param){
        var _this = this;
        $.ajax({
            type     : param.method || 'get',
            url      : param.url    || '',
            dataType : param.type   || 'json',
            data     : param.data   || '',
            success  : function(res){
                // 请求成功
                if(0 == res.status){
                    typeof param.success === 'function' && param.success(res.data, res.msg);
                }
                // 没有登录状态，需要强制登录
                else if(10 === res.status){
                    _this.doLogin();
                //请求数据错误
                }else if(1 === res.status){
                    typeof param.error === 'function' && param.error(res.msg);
                }
            },
            error    : function(err){
                typeof param.error === 'function' && param.error(err.statusText);
            }
        });
    },
    doLogin : funciton(){
        window.location.href = './login.html?redirect=' + encodeURIComponent(window.location.href);
    }
};

module.exports = _mm;