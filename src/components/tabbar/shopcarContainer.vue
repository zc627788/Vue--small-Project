<template>
  <div class="body">
    <!-- 头 -->
    <div class="mui-card" v-for="(item,index) in goodlist" :key="item.id">
      <div class="mui-card-content">
        <mt-switch
          v-model="$store.getters.getGoodsSelected[item.id]"
          @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"
        ></mt-switch>
        <img class="car_img" :src="item.thumb_path" alt />
        <div>
          <div class="mui-card-content-inner">{{item.title}}</div>
          <div class="flex_1">
            <h3 class="car_price">${{item.sell_price}}</h3>
            <numbox :initcount="$store.getters.getGoodCount[item.id]" :goodsid="item.id"></numbox>
            <h3 class="car_del" @click="del(item.id,index)">删除</h3>
          </div>
        </div>
      </div>
    </div>
    <!-- 尾部 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div>总计(不含运费)</div>
          <div>
            已勾商品
            <h3 class="count_h3">{{$store.getters.getAmount.count}}</h3>件,总价:
            <h3 class="count_h3">${{$store.getters.getAmount.amount}}</h3>
          </div>
        </div>
        <mt-button type="danger">结算</mt-button>
      </div>
      <p>{{$store.getters.getGoodsSelected}}</p>
    </div>
  </div>
</template>

<script>
import numbox from "../numbox/shopcar_Numbox.vue";
export default {
  data() {
    return {
      goodlist: []
    };
  },
  created() {
    this.getGoodlist();
  },
  methods: {
    getGoodlist() {
      // 1获取到store中所以的商品的id,然后拼接处一个用逗号分隔的字符串

      var idArr = [];
      this.$store.state.car.forEach(item => {
        idArr.push(item.id);
      });
      //   因为方法自己调用,防止报错,如果没有商品,不需要请求接口
      if (idArr.length <= 0) {
        return;
      }
      //获取购物车的列表
      this.$http
        .get(
          "http://api.cms.liulongbin.top/api/goods/getshopcarlist/" +
            idArr.join(",")
        )
        .then(result => {
          if (result.body.status === 0) {
            this.goodlist = result.body.message;
            console.log(result.body.message);
          }
        });
    },
    // 删除
    del(local, i) {
      this.goodlist.splice(i, 1);
      this.$store.commit("removeFormCar", local);
    },
    selectedChanged(id, val) {
      console.log(id + "-------" + val);
      this.$store.commit("updateGoodsSelected", { id, select: val });
    }
  },
  components: { numbox }
};
</script>

<style lang="" scoped>
.body {
  background-color: #ccc;
  overflow: hidden;
}
.mui-card-content {
  padding: 5px;
}
/* 商品页面开始 */

.mui-card-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 116px;
}
.mui-card-content-inner {
  font-size: 11px;
}

.car_img {
  width: 60px;
  height: 60px;
}
.flex_1 {
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
}
.car_price {
  font-size: 13px;
  color: red;
  margin: 0 7px 15px 0;
}
.car_del {
  font-size: 13px;
  color: #2c80ff;
  margin: 0 0 15px 10px;
}
/* 商品页面结束 */

/* 结算界面开始 */
.count_flex1 {
  display: flex;
  justify-content: space-around;
}
.count_h3 {
  display: inline-block;
  font-size: 13px;
  color: red;
}
.mint-button {
  margin-right: 20px;
}
</style>
