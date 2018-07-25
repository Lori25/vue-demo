window.onload = function () {
    var lessonList = [
        '小组|主题|概要|主讲人|时间|备注',
        '标准|浏览器工作原理|浏览器解析资源，渲染界面，调试面板详解|任高池|2018/07/18|',
        '开发必备|前端自动化工具简介和webpack基础|前端模块化、前端自动化工具发展历史、webpack基础知识。webpack工作原理、webpack+react简易配置|淳杨乔|2018/07/25|可提前粗览react基础知识',
        '框架|vue基础和vue全家桶的使用|概要讲解vue基础知识(watch,computed,v-for等),及vue+vue-router+vuex+axios全家桶的使用|杨雪梅|2018/08/01|可提前看一下vue基础知识',
        '偏后台|待定||严亮|2018/08/08|',
        '……| '
    ];

    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!',
            desc: '此站点基于 Nginx + NodeJS (Ubuntu)',
            url: 'https://note.youdao.com/share/?id=b802115ca4001995f14f28ea1d5b8f84&type=note#/',
            gitMsg: {
                desc: '本项目采用 git 作为代码管理工具',
                url: 'http://note.youdao.com/noteshare?id=d67123eaa3757b8b1d7ea69d86727fe9'
            }
        },
        computed: {
            lessonList: function() {
                var tmpList = [];
                lessonList.forEach(function(item) {
                    var tmp = item.split('|');
                    tmpList.push(tmp);
                });
                return tmpList; 
            }
        }
    });
};
