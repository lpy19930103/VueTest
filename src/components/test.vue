<template>
    <div ip="app">
        <h1>hello app</h1>
        <p>
            <router-link to="/foo">Go to foo</router-link>
            <router-link to="/bar">Go to bar</router-link>
        </p>
        <router-view></router-view>
    </div>

</template>

<script>
    import Vue from 'vue'
    import VueRouter from 'vue-router'
    Vue.use(VueRouter);

    const foo = {template: '<div>foo</div>'};
    const bar = {template: '<div>bar</div>'};

    const routes = [{path: '/foo', component: foo}, {path: '/bar', component: bar}];

    var vueRouter = new VueRouter({
        routes
    });
    new Vue({
        vueRouter
    }).$mount('#app');


    export default {
        name: "test01"
    }
</script>

<style scoped>

</style>
