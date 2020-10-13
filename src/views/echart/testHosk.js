import { customRef, reactive, onMounted } from "vue"
import {
  article
} from "@/api/article.js";
const test = () => {
  const data = reactive({ name: "霍庆祝", listData: [], box: null })
  article().then(res => {
    data.listData = res
  })
  //自定义ref
  const a = myRef("http://123.56.85.24:5000/api/profile")
  onMounted(() => {
    console.log(data.box)
  })
  return { data, a }
}
// 自定义ref
function myRef(val) {
  return customRef((track, trigger) => {
    // fetch是获取资源的接口（包括跨域请求)
    article().then(res => {
      val = res
    })
    return {
      get() {
        track()
        console.log('get', val)
        return val
      },
      set(newVal) {
        console.log('set', newVal)
        val = newVal
        trigger()
      }
    }
  })
}
export { test }