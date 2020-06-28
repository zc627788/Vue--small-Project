<template>
  <div class="app-container">
    <!-- 顶部header区域 -->
    <mt-header fixed title="Vue项目"></mt-header>
    <button v-if="flag" class="btn" @click="back()"><</button>
    <!-- 中间的路由 router-view -->
    <transition mode="out-in" appear>
      <router-view></router-view>
    </transition>

    <!-- 尾部 tabbar区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-zzc" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-zzc" to="/VIP">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-zzc" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">{{$store.getters.getAll}}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-zzc" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false
    };
  },
  updated() {
    this.btn();
  },

  methods: {
    btn() {
      if (
        this.$route.fullPath == "/home" ||
        this.$route.fullPath == "/VIP" ||
        this.$route.fullPath == "/shopcar" ||
        this.$route.fullPath == "/search"
      ) {
        this.flag = false;
      } else {
        this.flag = true;
      }
    },
    back() {
      this.$router.back();
    }
  }
};
</script>


<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
  padding-bottom: 60px;
  overflow-x: hidden;
}

.v-enter {
  opacity: 0.2;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0.2;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
//因为mui和mint-ui样式冲突,需要给 下导航栏改样式

.mui-bar-tab .mui-tab-item-zzc.mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-item-zzc {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item-zzc .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-zzc .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mint-header {
  z-index: 999999;
}
.btn {
  position: fixed;
  top: 0px;

  height: 40px;
  width: 45px;
  border-radius: 10%;
  z-index: 9999999;
  background: #26a2ff;

  border: none;
  outline: none;
}
</style>
