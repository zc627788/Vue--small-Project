<template>
  <div>
    <!-- 滑动导航头 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item',item.id==0?'mui-active':'']"
            v-for="item in cates"
            :key="item.id"
            @click="pictures(item.id)"
          >{{item.title}}</a>
        </div>
      </div>
    </div>
    <!-- 图片 -->
    <ul class="photo">
      <router-link v-for="item in list" :key="item.id" tag="li" :to="'/home/photoesinfo/'+item.id">
        <img v-lazy="item.img_url" />
        <div class="info">
          <h1 class="info-title">{{item.title}}</h1>
          <div class="info-body">{{item.zhaiyao}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min";
// 图片懒加载

export default {
  data() {
    return {
      cates: [], //导航样式
      list: [] //图片
    };
  },
  created() {
    this.secondbar();
    this.pictures(0);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    //导航栏api
    secondbar() {
      this.$http.get("api/getimgcategory").then(
        result => {
          if (result.body.status === 0) {
            result.body.message.unshift({
              title: "全部",
              id: 0
            });
            this.cates = result.body.message;
            console.log();
          }
        },
        result => {}
      );
    },
    //图片加载
    pictures(item) {
      this.$http.get("api/getimages/" + item).then(
        result => {
          if (result.body.status === 0) {
            this.list = result.body.message;
          }
        },

        result => {}
      );
    }
  }
};
</script>


<style lang="" scope >
/* 取消滑动时的警告 */
* {
  touch-action: pan-y;
}

/* 图片懒加载 */
img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
  text-align: center;
}
.photo {
  margin: 0;
  padding: 0;
  padding: 5px;
  padding-bottom: 0px;
}
.photo li {
  background-color: #ccc;
  list-style: none;
  margin-bottom: 10px;
  box-shadow: 0 0 9px #999;
  position: relative;
}
.photo li img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.info {
  position: absolute;
  bottom: 0px;
  background-color: rgba(0, 0, 0, 0.4);
}
.info-title {
  color: white;
  font-size: 14px;
  text-align: left;
  max-height: 39px;
}

.info-body {
  color: white;
  font-size: 13px;
  text-align: left;
  max-height: 39px;
}
</style>