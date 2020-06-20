<template>
  <div>
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <router-link :to="'/newlist/newsinfo/?id=' +item.id" class="mui-navigate-right">
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>发表时间:{{item.add_time|dateFormat}}</span>
              <span>点击次数: {{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newslist: []
    };
  },
  created() {
    this.list();
  },
  methods: {
    list() {
      this.$http.get("api/getnewslist").then(
        result => {
          console.log(result);
          if (result.body.status === 0) {
            this.newslist = result.body.message;
            console.log(this.newslist);
          }
        },
        result => {
          this.newslist = [
            {
              id: 0,
              title: "天涯",
              add_time: "2020-12-12 12:42",
              click: "0",
              img_url:
                "https://pbs.twimg.com/profile_images/1194414703457361920/8N8w56AS_400x400.jpg"
            },
            {
              id: 1,
              title: "ABC",
              add_time: "2020-12-12 12:42",
              click: "0",
              img_url:
                "https://pbs.twimg.com/profile_images/1266375950117158912/Oai_ONvC_400x400.jpg"
            },
            {
              id: 2,
              title: "遥远",
              add_time: "2020-12-12 12:42",
              click: "0",
              img_url:
                "https://pbs.twimg.com/profile_images/660346360827412480/jbhMA44p_400x400.jpg"
            },
            {
              id: 3,
              title: "眺望",
              add_time: "2020-12-12 12:42",
              click: "0",
              img_url:
                "https://pbs.twimg.com/profile_images/1158375257633374209/_5kjxQIu_400x400.jpg"
            },
            {
              id: 4,
              title: "幸福",
              add_time: "2020-12-12 12:42",
              click: "0",
              img_url:
                "https://pbs.twimg.com/profile_images/1199657990955192321/wKC-R4A9_400x400.png"
            }
          ];
        }
      );
    }
  }
};
</script>

<style  scope>
.mui-media-body h1 {
  font-size: 13px;
}
.mui-media-body span {
  font-size: 5px;
}
.mui-ellipsis {
  color: darkcyan;
  display: flex;
}
span:nth-of-type(1) {
  flex: 2;
}
</style>