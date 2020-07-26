<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    created(){
      console.log(12313213444,'-======')
    }
  }
</script>
<style>
* {
  padding: 0;
  margin: 0;
  font-family: PingFang SC,Lantinghei SC,Helvetica Neue,Helvetica,Arial,Microsoft YaHei,"微软雅黑",STHeitiSC-Light,simsun,"宋体",WenQuanYi Zen Hei,WenQuanYi Micro Hei,"sans-serif";
}
html,body {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: #f1f2f9;
}
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
input {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 1;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
}
button {
      display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    border-color: #dcdfe6;
    background: #3a8ee6;
    border-color: #3a8ee6;
    color: #fff;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
}
a{text-decoration:underline;text-decoration:none;text-decoration:none;font-family:tahoma,arial,\5b8b\4f53,sans-serif;_font-family:arial,sans-serif}
a:hover{text-decoration:underline;text-decoration:none;text-decoration:none;font-family:tahoma,arial,\5b8b\4f53,sans-serif;_font-family:arial,sans-serif}

li{list-style:none}
a {
  color: #000;
}
a:link { 
  font-size: 12px; 
  color: #000000; 
  text-decoration: none; 
} 
a:visited { 
  font-size: 12px; 
  color: #000000; 
  text-decoration: none; 
} 
a:hover { 
  font-size: 12px; 
  color: #999999; 
  text-decoration: underline; 
  text-decoration:none;
} 
</style>
