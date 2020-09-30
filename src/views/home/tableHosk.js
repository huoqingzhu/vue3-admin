import {
  reactive,
} from "vue";
import { message } from 'ant-design-vue'
// import {
//   useStore
// } from "vuex";
import {
  search
} from "@/api/article.js";
const columns = [
  {
    title: "SN",
    key: "SN",
    dataIndex: "SN",
    width: '30%',
    align: "center",
  }, {
    title: "视频地址",
    key: "url",
    dataIndex: "url",
    width: '30%',
    align: "center",
  },

  {
    title: "编辑",
    key: "id",
    slots: {
      customRender: "id",
    },
    width: '40%',
    align: "center",
  },
];
const table = () => {
  let obj = reactive({
    listData: [],
    columns,
    loading: false,

  });
  // 获取数据
  const getDate = async () => {
    obj.loading = true;
    // const data = await search("face/result");
    obj.listData = [{ url: "196", SN: "123", id: "1" }];
    obj.loading = false;
  };
  return { obj, getDate }
}
export { table }