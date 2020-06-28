<template>
  <div>
    <el-input-number
      v-model="num"
      size="small"
      @change="handleChange"
      :min="1"
      :max="max"
      label="描述文字"
    ></el-input-number>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 2
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
      //   console.log(max);
      this.$emit("func", value);
    }
  },
  props: ["max"]
};
</script>


<style lang="css" scoped>
</style>