<template>
  <div>
    <el-input-number
      v-model="initcount"
      @change="handleChange"
      size="small"
      :min="1"
      :max="10"
      label="描述文字"
    ></el-input-number>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1
    };
  },
  methods: {
    //   数量改变了
    //   console.log(value);
    // 每当数量的值改变,则立即把最新的数量同步到购物车中store中,覆盖之前的数量值
    handleChange(value) {
      console.log(value);
      this.$store.commit("updateGoodsInfo", {
        id: this.goodsid,
        count: value
      });
    }
  },
  props: ["initcount", "goodsid"]
};
</script>


<style lang="scss" scoped>
</style>