<template>
  <div id="main">
    <div>
    <h1> {{newsitem.title}}</h1>
    <h2> {{newsitem.author}}</h2>
    </div>
    <el-button plain @click="tourl" id="urlbutton">查看原网页</el-button>
    <hr/>
    <h3>{{newsitem.source.name}} at {{time}}</h3>


    <p>{{newsitem.description}}</p>
    <div id="imgdiv">
    <img :src="newsitem.urlToImage"/>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        time: null
      }
    },
    props:{
      newsitem: Object
    },
    mounted(){
      var originalTime=this.newsitem.publishedAt.toString();
      originalTime=originalTime.replace('T',' ');
      originalTime=originalTime.replace('Z',' ');
      console.log(originalTime);
      this.time=originalTime;
    },
    methods: {
      tourl:function (e) {
        window.open(this.newsitem.url);
      }
    }
  }
</script>

<style scoped>
  #main{
    margin-right: 20px;
    margin-left: 20px;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    text-align: left;
    overflow-y: hidden;
  }
  #urlbutton{
    right:20px;
    top:25px;
    position: absolute;
  }
  h1{
    width:85%;
    font-size:20px;

    /*margin-right: ;*/
  }
  h2{
    font-size: 14px;
    color: darkgrey;
    font-weight: 100;
  }
  h3{
    font-size: 10px;
    color: black;
    font-weight: 100;
  }
  p{
    font-size: 16px;
    color: #000;
    font-weight: 100;
  }
  img {
    height:60%;
    max-width: 100%;
    align:center;
  }
  #imgdiv{
    width:100%;
    align:center;
  }
</style>
