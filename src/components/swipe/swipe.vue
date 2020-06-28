<template>
  <!-- 因为轮播lunbo不能够写死,所以要父组件向子组件传值 -->
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbo" :key="item.id">
        <img :class="[{'full':iffull},'swing']" :src="item.img" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  props: ["lunbo", "iffull"]
};
</script>


<style lang="scss" scope>
.swing {
  //   width: 100%;
  height: 100%;
}
.full {
  width: 100%;
  height: 100%;
}

.mint-swipe {
  height: 250px;
  text-align: center;
}
</style>