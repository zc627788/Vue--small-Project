<template>
  <!-- 整个页面用到了 mui-card模块 -->

  <!-- 商品轮播 -->
  <div class="infostyle">
    <div class="mui-card">
      <div class="mui-card-content">
        <!-- 利用到swipe.vue -->

        <swipe :lunbo="img_info" :iffull="false"></swipe>
      </div>
    </div>
    <!-- 小球 -->
    <transition
      mode="out-in"
      appear
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
    >
      <div class="circle" ref="ball" v-if="flag"></div>
    </transition>
    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品的名称标题</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="perice">
            市场价:
            <del>{{good_info.market_price}}</del>&nbsp;&nbsp;销售价
            <span class="now_price">{{good_info.sell_price}}</span>
          </p>
          <div class="flex3">
            <p>购买数量:</p>
            <!-- 利用到numbox.vue -->
            <numbox @func="getselectCount" :max="good_info.stock_quantity"></numbox>
          </div>

          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="shoppingcar()">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号:{{good_info.goods_no}}</p>
          <p>库存情况:{{good_info.stock_quantity}}</p>
          <p>上架时间:{{good_info.add_time|dateFormat}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="Graphic_introduction(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="Commodity_evaluation(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import swipe from "../swipe/swipe.vue";
import numbox from "../numbox/numbox.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      //   轮播图片
      img_info: [],
      //   商品详情
      good_info: [],
      flag: false,
      selectCount: 1
    };
  },

  created() {
    this.get_img();
    this.goodinfo();
  },
  methods: {
    // 拿到轮播的图片
    get_img() {
      this.$http.get("api/getthumimages/" + this.id).then(
        result => {
          if (result.body.status === 0) {
            result.body.message.forEach(item => {
              item.img = item.src;
            });
            this.img_info = result.body.message;
          }
        },
        result => {}
      );
    },
    goodinfo() {
      this.$http.get("api/goods/getinfo/" + this.id).then(
        result => {
          if (result.body.status === 0) {
            this.good_info = result.body.message[0];
          }
        },
        result => {}
      );
    },
    Graphic_introduction() {
      this.$router.push("/home/shopping/shoppingintroduct/" + this.id);
    },
    Commodity_evaluation() {
      this.$router.push("/home/shopping/shoppingcomment/" + this.id);
    },
    shoppingcar() {
      // 小球动画
      this.flag = !this.flag;

      //3 把得到的数据传递到vuex的store的mutations
      var goodinfo = {
        id: this.id,
        count: this.selectCount,
        price: this.good_info.sell_price,
        select: true
      };
      //   这个参数是store里面的,参数传递是当前方法的属性
      this.$store.commit("addToCar", goodinfo);
    },
    beforeEnter(el) {
      // beforeEnter表示动画入场之前,中，设置元素开始动画之前的起始样式
      // 设置小球开始动画之前的起始位置
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      //   需求因为小球位置不能写死translate,所以需要用到getBoundingClient() 来获取当前位置到整个窗口额距离,然后互相减去就可以得到位移距离

      let ball = this.$refs.ball.getBoundingClientRect();

      let badge = document.getElementById("badge").getBoundingClientRect();

      let x = badge.left - ball.left;

      let y = badge.top - ball.top;

      // 这句话,没什么实际的作用,但是如果你不写,出不来动画效果
      // 可以认为,el.offsetWidth,会强制动画刷新
      el.offsetWidth;
      // enter表示动画开始之后的样式,这里可以设置小球完成动画之后的,结束状态
      //   el.style.transform = "translate(77px,480px)";
      el.style.transform = `translate(${x}px,${y}px)`;
      el.style.transition = "all 1s  cubic-bezier(0,-0.31,1,-0.13)";

      // 这里的done 起始就是oferEnter 这个函数,也就是说done是afterEnter函数的引用
      done();
    },
    afterEnter(el) {
      // 动画完成之后,
      // 会调用afterEnter
      this.flag = false;
    },
    // 这是获取控件买东西的数量
    getselectCount(count) {
      //   1 从子类numbox.vue的this.$refs.numbox.value就是count
      // 2 传给selectCount
      this.selectCount = count;
      console.log(this.selectCount);
    }
  },
  components: {
    swipe,
    numbox
  }
};
</script>


<style lang="scss" scope>
.infostyle {
  background-color: #ccc;
  overflow: hidden;
}
.now_price {
  color: red;
  font-size: 16px;
  font-weight: bold;
}
.flex3 {
  display: flex;
}
.flex3 div:nth-of-type(1) {
  margin: 0px 0 10px 10px;
}
.flex3 p:nth-of-type(1) {
  margin-top: 8px;
}
.mui-card-footer {
  display: block;
}
.mint-button {
  margin: 15px 0px;
}
.circle {
  height: 15px;
  width: 15px;
  position: absolute;
  border-radius: 50%;
  background-color: red;
  z-index: 9999999;
  right: 200px;
  top: 410px;
  //   transform: translate(77px, 480px);
}
</style>

