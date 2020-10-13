<template>
<div>
  <h1>ecahrts</h1>
  <child @person="person" ref="boxs"></child>
  <cahrt ref="chart" :option="option" :style="sty"></cahrt>
</div>
</template>

<script>
import cahrt from "./ecahrt";
import child from "./child.vue";
export default {
  components: {
    cahrt,
    child,
  },
  data() {
    return {
      option: {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          areaStyle: {},
        }, ],
      },
      sty: {
        height: "500px",
        width: "100%",
      },
      boxs: null,
    };
  },
  mounted() {
    console.log(this.$refs.boxs.a.length);
    this.$nextTick(() => {
      this.$refs.chart.init();
    });
  },
  methods: {
    person() {
      console.log("父组件调用了我");
    },
  },
};
</script>
