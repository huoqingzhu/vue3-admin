<template>
<div class="center">
  <div class="center ft hiddens">
    <img class="im" src="@/assets/logo2.png" alt />
    <div>流媒体服务器</div>
  </div>
  <meau></meau>
  <div class="center" @click="userChange">
    <UserSwitchOutlined :style="{ fontSize: '30px', color: '#08c' }" />
  </div>
</div>
</template>

<script>
import {
  UserSwitchOutlined
} from "@ant-design/icons-vue";
import meau from "./Header2";

import {
  useRouter
} from "vue-router";
export default {
  components: {
    meau,
    UserSwitchOutlined,
  },
  setup() {
    const router = useRouter();
    const userChange = function () {
      router.push("/login").catch(() => {});
    };
    return {
      userChange,
    };
  },
};
</script>

<style lang="scss" scoped>
.im {
  height: 50px;
  margin: 0 0.1rem;
  max-width: 120px;
  max-height: 40px;
}

.ft {
  width: 20%;
  min-width: 280px;
  font-size: 20px;
}
</style>
