<template>
<div>
  <a-card>
    <a-button type="primary" @click="setTitle(true, {})">+新增摄像头</a-button>
  </a-card>

  <a-table :columns="columns" :data-source="listData" :loading="loading" :rowKey="(record) => record.name" bordered>
    <template v-slot:id="{ text: id }">
      <a @click="setTitle(false, id)">编辑</a>||
      <a @click="showModel(id.url)">查看</a>||
      <a @click="remove(id.id)">删除</a>
    </template>
  </a-table>
  <!-- 抽屉 -->
  <a-drawer :title="title" placement="right" :closable="false" width="420" v-model:visible="visible" :after-visible-change="afterVisibleChange">
    <div class="table">
      <p>SN:</p>
      <a-input v-model:value="fromData.SN" style="width: 250px"></a-input>
    </div>
    <div class="table">
      <p>地址:</p>
      <a-input v-model:value="fromData.url" style="width: 250px"> </a-input>
    </div>
    <div class="but">
      <a-button type="primary" @click="getFrom">提交</a-button>
    </div>
  </a-drawer>
  <!--视频对话框-->
  <a-modal v-model:visible="visibleModel" ok-text="确认" cancel-text="取消" title="视频播放" @ok="handleOk" width="600px">
    <video width="550" height="340" controls autoplay>
      <source :src="src" type="video/mp4" />
      您的浏览器不支持 video 标签。
    </video>
  </a-modal>
</div>
</template>

<script>
import {
  search
} from "@/api/article.js";
import {
  reactive,
  toRefs
} from "vue";
// 引入tableHosk
import {
  drawer,
  model
} from "./tableHosk.js";
export default {
  name: "首页",

  data() {
    return {};
  },
  methods: {},
  setup() {
    // 抽屉逻辑代码
    const {
      that,
      setTitle,
      afterVisibleChange,
      getFrom,
      remove,
      getDate,
    } = drawer();
    const {
      data,
      showModel,
      handleOk
    } = model();
    // 请求数据
    getDate();
    // 视频弹窗

    return {
      ...toRefs(that),
      ...toRefs(data),
      setTitle,
      getDate,
      afterVisibleChange,
      getFrom,
      remove,
      showModel,
      handleOk,
    };
  },
};
</script>

<style lang="scss" scoped>
.table {
  display: flex;
  justify-content: space-between;
}

.but {
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
