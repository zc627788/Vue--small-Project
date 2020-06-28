<template>
  <div class="flex1">
    <div class="list1" v-for="item in  shopping" :key="item.id" @click="shoppinginfo(item.id)">
      <img :src="item.img_url" alt />
      <h1>{{item.title}}</h1>
      <div class="bg">
        <div class="filex2">
          <p>{{item.sell_price}}</p>
          <p>{{item.market_price}}</p>
        </div>
        <div class="filex3">
          <p>热卖中</p>
          <p>剩余{{item.stock_quantity}}件</p>
        </div>
      </div>
    </div>
    <mt-button size="large" type="danger" @click="next()">加载更多</mt-button>

    <!-- <div class="list1">
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg"
        alt
      />
      <h1>小米node5 16G</h1>
      <div class="bg">
        <div class="filex2">
          <p>$899</p>
          <p>$999</p>
        </div>
        <div class="filex3">
          <p>热卖中</p>
          <p>剩余60件</p>
        </div>
      </div>
    </div>
    <div class="list1">
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg"
        alt
      />
      <h1>小米node5 16G</h1>
      <div class="bg">
        <div class="filex2">
          <p>$899</p>
          <p>$ 999</p>
        </div>
        <div class="filex3">
          <p>热卖中</p>
          <p>剩余60件</p>
        </div>
      </div>
    </div>-->
  </div>
</template>


<script>
export default {
  data() {
    return {
      item: 1,
      shopping: []
    };
  },
  created() {
    this.getshopping();
  },
  methods: {
    getshopping() {
      //从api获取每一张图片
      this.$http.get("api/getgoods?pageindex=" + this.item).then(
        result => {
          if (result.body.status === 0) {
            this.shopping = this.shopping.concat(result.body.message);
          }
        },
        // 为什么防止api失效返回的值
        result => {}
      );
    },
    next() {
      this.item++;
      this.getshopping();
    },
    shoppinginfo(id) {
      // 可以通过两种方式去跳转页面
      // 1通过a链接 在vue中就是 改变 router-link
      // 2.通过js的形式 在函数中调用this.$router.push("路由路径"+参数)
      // $route是处理 $route.params $route.query 这两种去查找 url路径的参数的
      // $router是解决相关路由跳转页面的
      // 第一种
      this.$router.push("/home/shopping/shoppinginfo/" + id);
      //   第二种
      //   this.$router.push({ path: "/home/shopping/shoppinginfo/" + id });
    }
  }
};
</script>

<style lang="" scope>
.flex1 {
  display: flex;
  flex-wrap: wrap;
}
.list1 {
  width: 47%;
  border: 1px solid #ccc;
  margin: 4px;
  text-align: center;
  box-shadow: 0px 0px 2px rgba(1, 10, 27, 0.8);
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  min-height: 120px;
}
.list1 img {
  width: 120px;
  height: 138px;
  position: relative;
  left: 10px;
}
.list1 h1 {
  font-size: 15px;
}
.filex2 {
  display: flex;
}
.filex2 p {
  margin: 5px;
}
.filex2 p:nth-of-type(1) {
  font-size: 14px;
  color: red;
}
.filex2 p:nth-of-type(2) {
  font-size: 10px;
  text-decoration: line-through;
}
.filex3 {
  display: flex;
  justify-content: space-between;
}
.filex3 p {
  font-size: 10px;
  margin: 10px 5px 0 5px;
}
.bg {
  background-color: rgb(214, 211, 211);
}
.mint-button {
  margin-top: 10px !important;
}
</style>