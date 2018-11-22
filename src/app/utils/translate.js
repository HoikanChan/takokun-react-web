import md5 from "blueimp-md5";

const transUrl = "http://openapi.youdao.com/api?";

function param(data) {
  const params = Object.keys(data).map(key => `${key}=${data[key]}`);
  return transUrl + params.join("&");
}

export default word => {
  const appKey = "4c097bf42fc5dae3";
  const key = "8zv3vkVkE0KhtsU5vdnyIpsJominHv85";
  const salt = new Date().getTime();
  const from = "";
  const to = "en";
  const str1 = appKey + word + salt + key;
  const sign = md5(str1);
  const url = param({
    q: word,
    appKey: appKey,
    salt: salt,
    from: from,
    to: to,
    sign: sign
  });
  return fetch(url);
};
