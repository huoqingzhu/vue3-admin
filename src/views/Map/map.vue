<template>
<div class="home">
  <Table :columns="columns" :listData="listData" :name="name" :loading="loading" :baseUrl="baseUrl">
  </Table>
</div>
</template>

<script>
// face/result
import {
  search
} from "@/api/article.js";
import {
  reactive,
  toRefs
} from "vue";
import Table from "./Table.vue";
const columns = [{
    title: "识别姓名",
    key: "url",
    slots: {
      customRender: "url",
    },
    align: "center",
  },
  {
    title: "比对结果",
    key: "fraction",
    dataIndex: "fraction",
    align: "center",
  },
  {
    title: "时间",
    key: "time",
    dataIndex: "time",
    align: "center",
  },
];
export default {
  components: {
    Table,
  },
  data() {
    return {
      test: 12,
    };
  },
  computed: {
    sets() {
      return this.test * 2;
    },
  },
  created() {},
  methods: {
    testData() {
      this.test = 300;
      this.a = 800;

      return "huo";
    },
  },

  setup() {
    let obj = reactive({
      listData: [],
      columns,
      loading: false,
      a: 30,
      name: 20,
      baseUrl: "http://192.168.1.62/images/",
      async getData() {
        this.loading = true;
        const data = await search("face/result");
        let arr = data.split("\n");
        const date = new Date();
        let datas = [];
        arr.map((item) => {
          let obj = {
            time: null,
            url: "",
            fraction: null,
          };
          let arrs = item.split("|");
          if (arrs.length == 3) {
            obj.time = arrs[0];
            obj.url = arrs[1];
            obj.fraction = arrs[2];
            datas.push(obj);
          }
        });
        obj.listData = datas;

        console.log(`转化时间:${new Date() - date}毫秒`);
        console.log(`字符串长度:${data.length}`);
        console.log(`预计生成对象个数:${arr.length}`);
        console.log(`实际生成对象个数${datas.length}`);
        this.loading = false;
      },
    });
    obj.getData();
    return {
      ...toRefs(obj),
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  // width: 100%;
  // height: 900px;
  margin-top: 90px;
}
</style>
