import request from "../utils/request.js";

// 文章列表
export function article() {
  return request({
    url: "/profile ",
    method: "get",
  });
}
export function search(url = "/face/search ", data = null, method = "get", params = null,) {
  return request({
    url,
    params,
    data,
    method,
  });
}

