<template>
  <div>
    <div class="main">
      <h1 class="title">{{photoinfo.title}}</h1>
      <p>
        <span>发表时间:{{photoinfo.add_time}}</span>
        <span>点击:{{photoinfo.click}}次</span>
      </p>
      <hr />
      <div class="preview">
        <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
      </div>
      <div v-html="photoinfo.content" class="content"></div>
    </div>
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
import comment from "../comment/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id, //从路由中获取的图片id
      photoinfo: [],
      slide1: [
        {
          src:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg",
          msrc:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg",

          w: 600,
          h: 400
        },
        {
          src:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
          msrc:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
          w: 1200,
          h: 900
        }
      ]
    };
  },
  created() {
    this.getinfo();
    this.getslide();
  },

  methods: {
    getinfo() {
      //图片详情
      this.$http.get("api/getimageInfo/" + this.id).then(
        result => {
          if (result.body.status === 0) {
            this.photoinfo = result.body.message[0];
          }
        },
        result => {}
      );
    },
    getslide() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          // 加元素
          //因为缩略版版本有改动,多了一个msrc,少了for in
          result.body.message.forEach(item => {
            item.w = 600;
            item.h = 600;
            item.msrc = result.body.message[0].src;
          });
          //   数组对象foreach src赋值给msrc
          result.body.message.forEach(element => {
            console.log(element.src);
            element.msrc = element.src;
            console.log(element.msrc);
          });
          this.slide1 = result.body.message;
        }
      });
    },

    handleClose() {
      console.log("close event");
    }
  },
  components: { "comment-box": comment }
};
</script>


<style lang="scss" scope>
.main h1 {
  text-align: center;
  margin: 20px 0;
  font-size: 14px;
  color: cornflowerblue;
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
.content {
  font-size: 13px;
  line-height: 30px;
}
.preview img {
  height: 90px;
  width: 90px;
  box-shadow: rgba(0, 0, 0, 0.7) 0 4px 5px 3px;
}
figure {
  margin: 0;
  padding: 0;
  height: 90px;
  width: 90px;
  display: inline;
  box-shadow: 0, 10px, 10px, #999;
}
</style>