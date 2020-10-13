<template>
<div>
  我是子组件
  {{ name }}
  {{ a.length }}
  <div ref="box">子子组件</div>
  <button>++</button>
</div>
</template>

<script>
import {
  toRefs
} from "vue";
import {
  test
} from "./testHosk.js";
export default {
  setup() {
    const {
      data,
      a
    } = test();
    console.log(data);
    return {
      ...toRefs(data),
      a,
    };
  },
};
</script>
