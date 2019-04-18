<template>
  <div id="app">
    <div id="container"/>
    <News v-if='showdetail' :cityname="cityname" />
    <!--<router-view/>-->
  </div>
</template>

<script>
import News from "@/components/News.vue";
  export default {
    data() {
      return {
        name: 'App',
        map: null,
        cityname: 'shanghai',
        showdetail: true
      }
    },
    components: {News},
    methods: {
      initBMap: function () {
        let map = new BMap.Map("container");          // 创建地图实例
        let point = new BMap.Point(121, 31);  // 创建点坐标
        map.centerAndZoom(point, 10);                 // 初始化地图，设置中心点坐标和地图级别
        map.enableScrollWheelZoom(true);
        map.addControl(new BMap.NavigationControl({
          anchor: BMAP_ANCHOR_TOP_RIGHT,
          type: BMAP_NAVIGATION_CONTROL_PAN,
          offset: new BMap.Size(20, 20)
        }));
        map.addControl(new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_RIGHT, offset: new BMap.Size(20, 5)}));
        map.addControl(new BMap.OverviewMapControl());
        //map.addControl(new BMap.MapTypeControl());
        map.setCurrentCity("上海"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用
        return map;
      },
      myclick:function(e){
        this.showdetail=true;
      },
      clickEvent: function (e) {
        var marker = new BMap.Marker(new BMap.Point(e.point.lng,e.point.lat));  // 创建标注
        this.map.addOverlay(marker);
        var geoc=new BMap.Geocoder();
        var pt=e.point;
        var _this=this;
        geoc.getLocation(pt, function(rs) {
          var addComp=rs.addressComponents;
          _this.cityname=addComp.city;
          //var cn=addComp.province;
          var contents;
          _this.$ajax.get('https://free-api.heweather.net/s6/weather/forecast?location=beijing&key=WKEY')
            .then(response => {
              console.log(response.data.HeWeather6[0]);
              var use=response.data.HeWeather6[0];
              contents='<table><tr><td>明天天气：'+use.daily_forecast[0].cond_txt_d+'</br>'
              +'湿度：'+use.daily_forecast[0].hum+'</br>风力：'+use.daily_forecast[0].cond_txt_d
                + use.daily_forecast[0].wind_sc+'级</br>'+'能见度：'+use.daily_forecast[0].vis+'</br></td>' +

                '<td>后天天气：'+use.daily_forecast[1].cond_txt_d+'</br>'
              +'湿度：'+use.daily_forecast[1].hum+'</br>风力：'+use.daily_forecast[1].cond_txt_d
              + use.daily_forecast[1].wind_sc+'级</br>'+'能见度：'+use.daily_forecast[1].vis+'</br></td>' +

                '<td>三天后天气：'+use.daily_forecast[2].cond_txt_d+'</br>'
                +'湿度：'+use.daily_forecast[2].hum+'</br>风力：'+use.daily_forecast[2].cond_txt_d
                + use.daily_forecast[2].wind_sc+'级</br>'+'能见度：'+use.daily_forecast[2].vis+'</br></td>' +
               '</tr></table>'
              ;
              var searchInfoWindow3 = new BMapLib.SearchInfoWindow(_this.map,
                contents,
                // addComp.district + ", " + addComp.street + ", " + addComp.streetNumber,
                {
                  title: addComp.province + " "+addComp.city,
                  width: 290, //宽度
                  height: 60, //高度
                  panel : "panel", //检索结果面板
                  enableAutoPan : true, //自动平移
                  searchTypes :[
                  ]
                });
              searchInfoWindow3.open(pt);
            })
            .catch();



        })
      }
    },
    mounted: function() {
      this.map = this.initBMap();
      var point=this.map.addEventListener("click", this.clickEvent);
    }


  }


</script>

<style scoped>

  /* Optional: Makes the sample page fill the window. */
  html, body {
    height: 100%;
    width:100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;


    width: 100%;
    height:100%;
    position:absolute;
    margin-top:0px;
  }


  #container{
    height:100%;
    width: 100%;
    top:0;
    overflow-x: hidden;
  }



</style>
