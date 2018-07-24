/*
* 转发配置文件
*
* create by cch
*/

//各个环境转发地址
var proxyHosts=[
    { name:'dev',host:'http://localhost:8089' } //开发环境
    ,{name:'test',host:'http://localhost:8089'} //测试环境
];

function getProxyHost(name) {
    for(var i=0;i<proxyHosts.length;i++){
        if(proxyHosts[i].name==name){
            return proxyHosts[i].host;
        }
    }
    return null;
}

module.exports={
    getProxyHost:getProxyHost
};