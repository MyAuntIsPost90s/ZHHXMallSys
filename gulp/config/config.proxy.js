/*
* 转发配置文件
*
* create by cch
*/

//各个环境转发地址
var proxyHead="/Gateway";
var proxyHosts=[
    { name:'dev',host:'http://localhost:8081' } //开发环境
    ,{name:'test',host:'http://47.92.39.90:8080/ZHHXMallGateway'} //测试环境
];

function getProxyHost(name) {
    for(var i=0;i<proxyHosts.length;i++){
        if(proxyHosts[i].name==name){
            return proxyHosts[i].host;
        }
    }
    return null;
}

function getProxyHead(){
    return proxyHead;
}

module.exports={
    getProxyHost:getProxyHost,
    getProxyHead:getProxyHead
};