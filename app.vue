<template>
    <div class="title">
        <div>
            <image class='logo'></image>
            <span class='des' style="margin-left: 80px">管理平台</span>
            <a href="#" class="logout">注销</a>
            <a href="#" class="user">管理员：张三</a>
        </div>
    </div>
    <div id="container">
        <ul id="nav">
            <li v-for="(item ,i) in navs" class="nav-item" :class="{'nav-item-active':item.isActive}"
                @click="navClick(i)">
                <a style="color: white" href="#">{{item.text}} </a>
            </li>
        </ul>

        <div id="content">
            <div class="home" v-show="page[0].show">
                <p class="homeTitle">公司名称</p>
                <div class="left">
                    <p class="leftTitle">审核进度表</p>
                    <div class="all">
                        <span style="color: #333333;font-size: 18px">公司注册总人数：</span>
                        <span style="color: #333333;font-size: 18px">{{statisticsInfo.total}}</span>
                    </div>
                    <div class="all">
                        <span style="color: #333333;font-size: 15px">已审核：</span>
                        <span style="color: #333333;font-size: 15px">{{statisticsInfo.audited}}</span>
                    </div>
                    <div class="all">
                        <span style="color: red;font-size: 15px">未审核：</span>
                        <span style="color: red;font-size: 15px">{{statisticsInfo.unreviewed}}</span>
                        <a class="review" href="#">立即审核</a>
                    </div>
                    <div class="all">
                        <span style="color: #666666;font-size: 15px">已冻结：</span>
                        <span style="color: #666666;font-size: 15px">{{statisticsInfo.freeze}}</span>
                    </div>

                </div>

                <div class="right">
                    <div class="top">
                        <div class='topTitle' style="color: #666666;font-size: 14px;">
                            今日订单数
                            <div style="color: #333333;font-size: 20px;margin-top: 10px">{{statisticsInfo.orderTotal}}</div>
                        </div>
                        <img class='icon' src="images/icon1.png" alt="">
                    </div>
                    <div class="bottom">
                        <div class='topTitle' style="color: #666666;font-size: 14px;">
                            今日订单金额
                            <div style="color: #333333;font-size: 20px;margin-top: 10px">{{statisticsInfo.totalMoney}}</div>
                        </div>
                        <img class='icon' src="images/icon1.png" alt="">
                    </div>

                </div>
            </div>
            <div class="body" v-show="page[1].show">
                <page2></page2>
            </div>
            <div class="body" v-show="page[2].show">订单汇总</div>
            <div class="body" v-show="page[3].show">订单详情</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        el() {
            return '#container'
        },
        data() {
            return {
                navs: [{text: '首页', isActive: true},
                    {text: '人员名单', isActive: false},
                    {text: '订单汇总', isActive: false},
                    {text: '订单详情', isActive: false},],
                page: [{show: true}, {show: false}, {show: false}, {show: false},],
                statisticsInfo: {
                    total: 300,
                    audited: 200,
                    unreviewed: 50,
                    freeze: 50,
                    orderTotal: 10,
                    totalMoney: 100
                }
            }
        },
        methods() {
            return {
                navClick: function (index) {
                    this.navs.forEach((data, i) => {
                        data.isActive = (index === i);
                    });
                    this.page.forEach((data, i) => {
                        data.show = (index === i);
                    })
                }
            }
        }
    }
</script>

<style>
    body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td {
        margin: 0;
        padding: 0;
    }

    body {
        background: #fff;
        color: #555;
        font-size: 14px;
        font-family: Verdana, Arial, Helvetica, sans-serif;
    }

    td, th, caption {
        font-size: 14px;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: normal;
        font-size: 100%;
    }

    address, caption, cite, code, dfn, em, strong, th, var {
        font-style: normal;
        font-weight: normal;
    }

    a {
        color: #555;
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }

    img {
        border: none;
    }

    ol, ul, li {
        list-style: none;
    }

    input, textarea, select, button {
        font: 14px Verdana, Helvetica, Arial, sans-serif;
    }

    table {
        border-collapse: collapse;
    }

    html {
        overflow-y: scroll;
    }

    .clearfix:after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }

    .clearfix {
        *zoom: 1;
    }

    .title {
        position: relative;
        height: 70px;
        width: 100%;
        background-color: #21273b;
    }

    .logo {
        margin-top: -30px;
        top: 50%;
        left: 25px;
        position: absolute;
        height: 60px;
        width: 45px;
        background: url("images/logo.png") no-repeat;
    }

    .user {
        margin-right: 30px;
        float: right;
        font-size: 15px;
        color: white;
        line-height: 70px;
    }

    .logout {

        margin-right: 30px;
        float: right;
        font-size: 15px;
        color: white;
        line-height: 70px;
    }

    .title .des {
        font-size: 25px;
        color: white;
        line-height: 70px;
    }

    #container {
        background: #f8f8f8;
        width: 100%;
    }

    #nav {
        position: absolute;
        left: 0;
        top: 70px;
        bottom: 0;
        float: left;
        width: 10%;
        height: 100%;
        background-color: #30364c;
    }

    .nav-item {
        padding-left: 25px;
        line-height: 50px;
        font-size: 15px;
        color: white;
        height: 50px;

    }

    .nav-item-active {
        background: #268ef1;
    }

    #content {
        margin-top: 20px;
        margin-left: 15%;
        width: 90%;
        float: left;
    }

    #content .home {
        background-color: white;

    }

    #content .home .homeTitle {
        color: #333333;
        font-size: 20px;
        margin-top: 10px;
        margin-left: 20px;
        position: absolute;
    }

    .left, .right {
        height: 250px;
        margin-top: 45px;
        float: left;
        width: 320px;
        margin-left: 20px;
    }

    .left {
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1), 0 2px 20px 0 rgba(0, 0, 0, 0.1);
    }

    .top, .bottom {
        position: relative;
        height: 120px;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1), 0 2px 20px 0 rgba(0, 0, 0, 0.1);
    }

    .bottom {
        margin-top: 10px;
    }

    .left .leftTitle {
        margin-top: 20px;
        text-align: center;
        width: 320px;
        color: #333333;
        font-size: 20px;
        margin-bottom: 20px;
    }

    .left span {
        display: inline-block;
        margin-bottom: 20px;
        margin-left: 20px;
    }

    .review {
        float: right;
        color: blue;
        font-size: 15px;
        margin-right: 20px;
    }

    .right .icon {
        border-radius: 5px;
        margin-top: -40px;
        width: 80px;
        height: 80px;
        background: pink;
        position: absolute;
        top: 50%;
        right: 30px

    }

    .topTitle {
        left: 20px;
        margin-top: -30px;
        top: 50%;
        position: absolute;
    }


</style>
