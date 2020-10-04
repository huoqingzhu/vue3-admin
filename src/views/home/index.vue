<template>
<div>
  <a-card>
    <a-button type="primary" @click="setTitle('新增')">+新增摄像头</a-button>
  </a-card>

  <a-table :columns="columns" :data-source="listData" :loading="loading" :rowKey="(record) => record.name" bordered>
    <template v-slot:id="{ text: id }">
      <a @click="setTitle('编辑')">编辑</a>|| <a>查看</a> ||<a>删除</a>
    </template>
  </a-table>
  <a-drawer :title="title" placement="right" :closable="false" width="420" v-model:visible="visible" :after-visible-change="afterVisibleChange">
    <div class="table">
      <p>SN:</p>
      <a-input v-model:value="fromData.SN" style="width: 250px"></a-input>
    </div>
    <div class="table">
      <p>地址:</p>
      <a-input v-model:value="fromData.url" style="width: 250px"> </a-input>
    </div>
    <div>
      <a-button type="primary" @click="getFrom">提交</a-button>
    </div>
  </a-drawer>
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
  table,
  drawer
} from "./tableHosk.js";
export default {
  name: "首页",

  data() {
    return {};
  },
  methods: {},
  setup() {
    const {
      obj,
      getDate
    } = table();
    const {
      that,
      setTitle,
      afterVisibleChange,
      getFrom
    } = drawer();
    // 请求数据
    getDate();
    return {
      ...toRefs(obj),
      ...toRefs(that),
      setTitle,
      afterVisibleChange,
      getFrom,
    };
  },
};
</script>

<style lang="scss" scoped>
.table {
  display: flex;
  justify-content: space-between;
}
</style>
