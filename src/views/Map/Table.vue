<template>
<div>
  <a-table :columns="columns" :data-source="listData" :loading="loading" :rowKey="(record) => record.name" bordered>
    <template v-slot:url="{ text: url }">
      <img :src="baseUrl + url.url" alt="图片" class="mg" />
    </template>
  </a-table>
</div>
</template>

<script>
export default {
  name: "TownTable",
  props: {
    columns: {
      type: Array,
    },
    listData: {
      type: Array,
    },
    loading: {
      type: Boolean,
    },
    baseUrl: String,
  },
};
</script>

<style scoped>
.mg {
  width: 30px;
  height: 30px;
}
</style>
