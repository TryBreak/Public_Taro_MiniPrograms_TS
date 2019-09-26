import { ajax } from "@/utils/http";
import Taro from "@tarojs/taro";
import { setStore, removeStore, getStore } from "@/utils/utils.js";

export const wechatCallback = (data) => {
  return ajax({
    url: "/api/passport/wechatCallback",
    data,
    method: "get",
  });
};

export const wx_login = (e) => {
  const { rawData } = e.detail;
  const userInfo = JSON.parse(rawData);
  return new Promise((resolve, reject) => {
    Taro.login().then((res) => {
      const registerWayId = getStore("registerWayId");
      const jsCode = res.code;
      const nickName = userInfo.nickName;
      const avatar = userInfo.avatarUrl;
      wechatCallback({
        jsCode,
        nickName,
        avatar,
        registerWayId,
      }).then((data) => {
        if (data.data) {
          setStore("userToken", data.data);
          setStore("userInfo", {
            nickName,
            avatar,
          });
          resolve({
            token: data.data,
            nickName,
            avatar,
          });
        } else {
          removeStore("userToken");
          removeStore("userInfo");
          reject(new Error("Token 返回不正确!"));
        }
      });
    });
  });
};

export const getUserInfo = () => {
  return ajax({
    url: "/api/u/user/info",
    method: "get",
  });
};
