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
/**
 * 返回表格用的数据和获取数据的方法
 */
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
// 返回对话框所用到的数据
const drawer = () => {
  let that = reactive({
    title: "新增流媒体地址",
    visible: false,
    fromData: {
      SN: "",
      url: ""
    }
  })
  const setTitle = (a) => {
    that.title = `${a}流媒体地址`
    that.visible = true;
  }
  const showDrawer = () => {
    that.visible = true;
  }
  const afterVisibleChange = (val) => {
    console.log("visible", val);
  }
  const getFrom = () => {
    console.log(that.fromData)
  }
  return { that, setTitle, showDrawer, afterVisibleChange, getFrom }
}
export { table, drawer }