<template>
  <div class="contaniner">
    <h3 class="pl_title">发表评论</h3>
    <br />
    <textarea name id cols="10" rows="6" placeholder="请输入你想评论的内容"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div>
      <div v-for="(item, index) in commentes" :key="item.add_time" class="container_c">
        <div>第{{index+1}}楼 用户:{{item.user_name}} 发表时间:{{item.add_time|dateFormat}}</div>
        <p class="comment_p">{{item.content}}</p>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="more">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commentes: [],
      pageIndex: 1
    };
  },
  created() {
    this.getComment();
  },
  methods: {
    getComment() {
      this.$http
        .get(
          "http://api.cms.liulongbin.top/api/getcomments/" +
            this.id +
            "?pageindex=" +
            this.pageIndex
        )
        .then(
          result => {
            if (result.body.status === 0) {
              //   this.commentes = result.body.message;
              // concat可以保存老数据+加新数据
              this.commentes = this.commentes.concat(result.body.message);
              //   console.log(this.commentes);
            }
          },
          result => {
            this.commentes = [
              {
                user_name: "匿名用户",
                add_time: "2020-06-20T06:57:49.000Z",
                content: "锄禾日当午,汗滴"
              },
              {
                user_name: "匿名用户2",
                add_time: "2020-06-20T06:57:49.000Z",
                content: "锄禾日当午,河下"
              },
              {
                user_name: "匿名用户3",
                add_time: "2020-06-20T06:57:49.000Z",
                content: "锄禾日当午,下土"
              }
            ];
          }
        );
    },
    more() {
      this.pageIndex = this.pageIndex + 1;
      this.getComment();
    }
  },
  props: ["id"]
};
</script>


<style lang="" >
.pl_title {
  padding: 0;
  margin-left: 5px;
  /* padding-top: 10px; */
  padding-bottom: 0;
}
.contaniner textarea {
  padding: 20px;
}
.container_c div {
  background-color: #ccc;
  margin-top: 10px;
  line-height: 30px;
  font-size: 15px;
}
.container_c p {
  line-height: 35px;
  font-size: 18px;
  margin-top: 10px;
  padding-left: 20px;
}
</style>