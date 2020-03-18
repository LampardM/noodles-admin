import request from "@/utils/request";

export function login(data) {
  console.log(data, "data login");
  return request({
    // url: "/vue-admin-template/user/login",
    url: "/admin/login",
    method: "post",
    data
  });
}

export function getInfo(token) {
  return request({
    // url: "/vue-admin-template/user/info",
    url: "/admin/userInfo",
    method: "get",
    params: { token }
  });
}

export function logout() {
  return request({
    // url: "/vue-admin-template/user/logout",
    url: "/admin/logout",
    method: "post"
  });
}
