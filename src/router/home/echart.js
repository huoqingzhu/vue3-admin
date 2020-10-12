export default [
  {
    path: "/ecahrt",
    name: "图表管理",
    component: () => import("../../views/echart/index.vue"),
    meta: {
      auth: true,
      title: "图表",
      keepAlive: true,
      iocn: "AppstoreOutlined",
    }
  }
];
