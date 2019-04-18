<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import { MessageBox } from 'element-ui';
export default {
  el :'#app',
  data() {
    return {

    }
  },
  created: function() {
    MessageBox.alert('新闻可通过点击标题查看详情，再按一次标题即可退出。请在地图上选点后查阅相关城市新闻。', '新手向导', {
      confirmButtonText: '知道了',
      callback: action => {}
    });
  }

}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height:100%;
  overflow-x:hidden;

}

#container{
  height:100%;
  width: 100%;
}


/* Optional: Makes the sample page fill the window. */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

</style>
