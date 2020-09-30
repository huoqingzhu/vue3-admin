<template>
<div>
  <a-card>
    <a-button type="primary" @click="showDrawer">+新增摄像头</a-button>
  </a-card>
  <Table :columns="columns" :listData="listData" :name="name" :loading="loading" :baseUrl="baseUrl">
  </Table>
  <a-drawer title="Basic Drawer" placement="right" :closable="false" width="420" v-model:visible="visible" :after-visible-change="afterVisibleChange">
    <div class="table">
      <p>SN:</p>
      <a-input style="width: 250px"></a-input>
    </div>
    <div class="table">
      <p>地址:</p>
      <a-input style="width: 250px"> </a-input>
    </div>
  </a-drawer>
</div>
</template>

<script>
import Table from "./Table.vue";
import {
  search
} from "@/api/article.js";
import {
  reactive,
  toRefs
} from "vue";
// 引入tableHosk
import {
  table
} from "./tableHosk.js";
export default {
  components: {
    Table,
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    afterVisibleChange(val) {
      console.log("visible", val);
    },
    showDrawer() {
      this.visible = true;
    },
  },
  setup() {
    const {
      obj,
      getDate
    } = table();
    // 请求数据
    getDate();
    return {
      ...toRefs(obj),
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
