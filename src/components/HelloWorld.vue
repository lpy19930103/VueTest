<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links 123321321321111111 hello world</h2>

    <router-link to="test02">go to 111111</router-link>
    <router-link to="/test01">Go to Foo</router-link>
    <router-link to="/">Go to Foo111111</router-link>
    <router-link to="/test02">Go to Bar</router-link>
  </div>


</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
