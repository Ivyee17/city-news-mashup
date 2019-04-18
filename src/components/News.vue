<template>
  <div id="slide-window">
    <div id="collapse-element">
      <el-collapse id="main">
        <el-collapse-item title=" News" name="1">
          <div id="item">
            <div class="transition-box" v-for="(statistic, index) in statistics"
                 :key="index">{{statistic.num}}</div>
            <div class="transition-box-name" v-for="(statistic, index) in statistics"
                 :key="index">{{statistic.name}}</div>
            <el-row   v-for="(article, index) in articles" :key="index">

            <el-col  :gutter="12" style="margin-bottom: 7px">
              <el-card shadow="hover">
                <div style="" @click="setnum(index)"> {{article.title}}</div>
              </el-card>
            </el-col>

            </el-row>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>

    <div id="detail">
      <NewsDetail :newsitem="this.articles[clickitem]"></NewsDetail>
    </div>

  </div>
</template>

<script>
  import NewsDetail from '@/components/NewsDetail'
  export default {
    data(){
      return {
        citypinyin: 'Beijing',
        statistics: [{
          name: '新闻数',
          num: 0
        }],
        articles: null,
        clickitem: 0,
        isclick:false
      }
    },
    props: {
      cityname: {
        type: String,
        require: true,
      }
    },
    methods:{
      setnum:function(k){
        if(this.clickitem==k) this.isclick=!this.isclick;
        else {this.isclick=true;this.clickitem=k;}
        if(this.isclick) {
          var a = document.getElementById('collapse-element');
          var b=document.getElementById('detail');
          a.style.setProperty("transform", "translateX(-400%)");
          b.style.setProperty('transform', 'translateX(-100%)')
        }
        else{
          var a = document.getElementById('collapse-element');
          var b=document.getElementById('detail');
          a.style.setProperty("transform", "translateX(0%)");
          b.style.setProperty('transform', 'translateX(0%)')
        }

      },
      getCityNumByName:function () {
        var _this=this;
        var jsondata;
        this.$jsonp('http://v.juhe.cn/movie/citys?dtype=&key=MKEY',{})
          .then(response => {
            jsondata = response.result;
              console.log(jsondata);
            for (var ele of jsondata) {
              //console.log(ele.city_pinyin);
              if ( _this.cityname.toString().indexOf(ele.city_name)!=-1) {
                _this.citypinyin =ele.city_pinyin;
                break;
              }
            }
          })
          .catch();

      },
      getNewsList:function(){
        var jsondata;
        var _this=this;
        this.$ajax
          // .get('http://v.juhe.cn/movie/xc?dtype=&key=74e71bbbe0db9de4824cacfccf4c4800')
          .get('https://newsapi.org/v2/everything?q='+this.cityname+
            '&apiKey=NKEY&language=zh')
          .then(response => {
            jsondata=response.data;
            //console.log(jsondata);
            _this.statistics[0].num=jsondata.totalResults;
            _this.articles=jsondata.articles;
          })
          .catch()

        //this.totalnum;

      }
    },
    mounted:function(){
      let name = this.$route.query.id;
      this.getCityNumByName();
      this.getNewsList()
    },
    watch:{
      cityname:{
         immediate: true,
         handler(val) {
           this.getCityNumByName();
           this.getNewsList();
         }
      }
    },
    components:{NewsDetail}
  }
</script>

<style scoped>
  #main{
    /*margin-right:0px;*/
    /*float: right;*/
height:100%;


  }
  #item{
    margin-right: 2%;
    margin-left: 2%;
  }
  #slide-window{
    /*overflow-x: hidden;*/
  }


 .transition-box {
    margin-bottom: 10px;
    width: 40%;
    margin-right:10%;
    border-radius: 4px;
    background-color: #fff;
    text-align: center;
    color: #409eff;
    padding: 10px 0px;
    box-sizing: border-box;
    display:inline;
    /*float:left;*/
    position: absolute;
   border: #409eff solid 1px;
  }
  .transition-box-name {

    margin-bottom: 10px;
    width: 40%;
    margin-right:10%;
    border-radius: 4px;
    background-color: #409eff;
    text-align: center;
    color: #fff;
    padding: 10px 0px;
    box-sizing: border-box;
    /*display:inline;*/
    position:relative;
    /*right:0;*/
    height: 40px;
  }
  #collapse-element{
    /*transform:translateX(-400%);!**左移元素**!*/
    width:20%;
    max-height:100%;
    top:0;
    right:0;
    position:absolute;
    z-index:9000;
    overflow-x:hidden;
    overflow-y: scroll;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    transition: transform 2s;
  }
  #detail {
    transition: transform 2s;
    float:left;
    position: absolute;
    right:-80%;
    top:0;
    width:80%;
    background-color: #fff;
    height: 100%;
    /*scroll-y: hidden;*/
    /*animation: fade-in 2s;*/
  }

</style>
