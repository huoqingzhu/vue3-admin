<template>
<div>
  <h1>ecahrts</h1>
  <cahrt ref="chart" :option="option" :style="sty"></cahrt>
</div>
</template>

<script>
import cahrt from "./ecahrt";
export default {
  components: {
    cahrt,
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
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.chart.init();
    });
  },
};
</script>
