<template>
  <div>
    <div class="main">
      <h1 class="title">{{newsinfo.title}}</h1>
      <p>
        <span>发表时间:{{newsinfo.add_time}}</span>
        <span>点击:{{newsinfo.id}}次</span>
      </p>
      <hr />
      <div v-html="newsinfo.content"></div>
    </div>
    <comment-box :id="this.id"></comment-box>
  </div>
</template>
<script>
import comment from "../comment/comment.vue";
export default {
  data() {
    return {
      id: this.$route.query.id,
      newsinfo: []
    };
  },
  created() {
    this.new();
  },
  methods: {
    new() {
      this.$http.get("api/getnew/" + this.id).then(
        result => {
          if (result.body.status === 0) {
            this.newsinfo = result.body.message[0];
            console.log(this.newsinfo);
          }
        },
        result => {}
      );
    }
  },
  components: { "comment-box": comment }
};
</script>


<style lang="" scope>
.main h1 {
  text-align: center;
  margin: 20px 0;
  font-size: 16px;
  color: red;
}
.main p {
  display: flex;
}
.main span:nth-of-type(1) {
  font-size: 10px;
  flex: 2;
  color: cadetblue;
}
.main span:nth-of-type(2) {
  font-size: 10px;
  color: cadetblue;
}
</style>