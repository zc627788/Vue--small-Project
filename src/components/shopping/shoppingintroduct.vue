<template>
  <div class="good-container">
    <h3>{{info.title}}</h3>
    <hr />
    <div class="content" v-html="info.content"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: []
    };
  },
  created() {
    this.getGoodDesc();
  },
  methods: {
    getGoodDesc() {
      this.$http
        .get("api/goods/getdesc/" + this.$route.params.id)
        .then(result => {
          if (result.body.status === 0) {
            this.info = result.body.message[0];
          }
        });
    }
  }
};
</script>

<style lang="" scope>
.good-container h3 {
  font-size: 14px;
  font-weight: 500;
  height: 15px;
  margin: 20px;
  text-align: center;
  color: rgb(12, 128, 236);
}
.content p:nth-of-type(1) {
  height: 100%;
  width: 100%;
  line-height: 30px;
}
.content p:nth-of-type(2) {
  height: 100%;
  width: 100%;
  line-height: 30px;
}
.content p:nth-of-type(3) {
  height: 100%;
  width: 100%;
  line-height: 30px;
}
.content img {
  height: 100%;
  width: 100%;
}
.content p {
  margin: -4px 0;
  padding: 0;
}
</style>