<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbo" :key="item.id">
        <img class="swing" :src="item.img" />
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/menu1.png" alt />

          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photoes">
          <img src="../../images/menu2.png" alt />

          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/shopping" href="#">
          <img src="../../images/menu3.png" alt />

          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png" alt />

          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" alt />

          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" alt />

          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return { lunbo: [] };
  },
  created() {
    this.swing();
  },
  methods: {
    swing() {
      this.$http.get("api/getlunbo").then(result => {
        if (result.body.status === 0) {
          this.lunbo = result.body.message;
          console.log(this.lunbo);
        } else {
          console.log("falie");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 300px;
}
.mint-swipe-item {
  &:nth-of-type(1) {
    background-color: red;
  }
  &:nth-of-type(2) {
    background-color: blue;
  }
  &:nth-of-type(3) {
    background-color: green;
  }
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  //   border-right: 0;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}
img {
  width: 60px;
  height: 60px;
}
.swing {
  width: 100%;
  height: 100%;
}
</style>

