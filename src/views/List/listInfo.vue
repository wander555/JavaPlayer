<template lang="">
  <div>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-space direction="vertical" fill>
          <div class="video-content" v-for="item in list" :key="item">
            <div class="ribbon1">New</div>
            <van-image
              lazy-load
              show-loading
              show-error
              width="100%"
              height="100"
              fit="cover"
              position="center"
              src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
            >
            </van-image>
          </div>
        </van-space>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const list = ref([]);
    const loading = ref(false);
    const finished = ref(false);
    const refreshing = ref(false);

    const onLoad = () => {
      console.log("onLoad");
      setTimeout(() => {
        if (refreshing.value) {
          list.value = [];
          refreshing.value = false;
        }

        //获取数据
        for (let i = 0; i < 10; i++) {
          list.value.push(list.value.length + 1);
        }

        //结束loading
        loading.value = false;
        if (list.value.length >= 40) {
          finished.value = true;
        }
      }, 1000);
    };

    const onRefresh = () => {
      console.log("onRefresh");
      // 清空列表数据
      finished.value = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      loading.value = true;
      onLoad();
    };

    return {
      list,
      onLoad,
      loading,
      finished,
      onRefresh,
      refreshing,
    };
  },
};
</script>
<style>
body {
  height: 100% !important;
  background-color: #f2f3f5 !important;
}
.video-content {
  height: 150px;
  border-radius: 5%;
  margin: 8px 12px;
  background: #ffffff;
}
.ribbon1 {
  position: absolute;
  border-radius: 4px 4px 4px 0px;
  color: #fff;
  padding: 2px 6px;
  font-size: 10px;
  line-height: 20px;
  background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.4),
      transparent
    )
    var(--bg, #ea3447);
  background-blend-mode: soft-light;
  width: 50px;
  text-align: center;
  z-index: 1;
  left: 9px;
  margin-top: -5px;
}
.ribbon1::before {
  content: "";
  position: absolute;
  width: 3px;
  height: 3px;
  left: 0;
  bottom: -3px;
  background-color: inherit;
  filter: brightness(0.7);
  clip-path: polygon(0 0, 100% 0, 100% 100%);
}
</style>
