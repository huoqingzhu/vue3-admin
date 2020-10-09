import {
  reactive,
} from "vue";
import { message } from 'ant-design-vue'
// import {
//   useStore
// } from "vuex";
import {
  camera
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
    const data = await camera();
    // const data = [{ SN: 90, url: "123", id: 3 }]
    obj.listData = data
    obj.loading = false;
  };
  return { obj, getDate }
}
/**
 * 抽屉逻辑代码
 */
const drawer = () => {
  let that = reactive({
    title: "新增流媒体地址",
    visible: false,
    fromData: {
      SN: "",
      url: ""
    },

  })
  // a为true代表新增 a为false代表编辑
  const setTitle = (a, b) => {

    if (a) {
      that.title = "新增流媒体地址"
      that.fromData = {
        SN: "",
        url: ""
      }
    } else {
      that.title = "编辑流媒体地址"
      that.fromData.SN = b.SN
      that.fromData.url = b.url
      that.fromData.id = b.id
    }
    that.visible = true;
  }
  const showDrawer = () => {
    that.visible = true;
  }
  const afterVisibleChange = (val) => {

  }
  // 新增 编辑摄像头
  const getFrom = () => {
    if (that.title === "新增流媒体地址") {
      camera("/camera/insert", that.fromData, "post").then(res => {
        message.success("新增成功")
      })
        .catch(err => {
          message.error("服务器错误")
        })
    } else {
      camera("/camera/update", that.fromData, "post").then(res => {
        message.success("修改成功")
      })
        .catch(err => {
          message.error("服务器错误")
        })
    }
  }
  // 删除摄像头
  const remove = (id) => {
    camera("/camera/delete", { id: id }, "post",).then(res => {
      message.success("删除成功")
    })
      .catch(err => {
        message.error("服务器错误")
      })
  }

  return { that, setTitle, showDrawer, afterVisibleChange, getFrom, remove }
}
/**
 * 视频对话框
 */
const model = () => {
  let data = reactive({
    visibleModel: false,
    src: ""
  })
  const showModel = (url) => {
    data.src = `${window.location.host}/${url}`
    console.log(data.src)
    data.visibleModel = true;
  }
  const handleOk = () => {
    data.visibleModel = false;
  }
  return { data, showModel, handleOk }
}
export { table, drawer, model }