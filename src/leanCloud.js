import AV from "../node_modules/leancloud-storage/dist/av-min";
const appId = "wdjHsUMNKESeQ45BCySBVT2n-gzGzoHsz";
const appKey = "Vtblp8GMeEK9FHPm11XN9uIV";
AV.init({ appId, appKey });
const User = AV.Object.extend("User");
const user = new User();


export  function saveUser(info) {
  let {id} = AV.User.current()
  let user = AV.Object.createWithoutData('User', id);
  // 修改属性
  user.set('resume', info);
  // 保存到云端
  user.save();
}

export function signUp(info, res, rej) {
  let user = new AV.User();
  // 设置用户名
  user.setUsername(info.email);
  // 设置密码
  user.setPassword(info.password);
  // 设置邮箱
  user.setEmail(info.email);
  user.signUp().then(
    function(loginedUser) {
      res();
    },
    function(error) {
      rej();
    }
  );
}

export function signIn(info, res, rej) {
  AV.User.logIn(info.email, info.password).then(
    function(loginedUser) {
      res();
    },
    function(error) {
      rej();
    }
  );
}

export function hasLogin(){
    let user = AV.User.current()
    if(user)return true;
    return false
}

export function quitUser(){
    AV.User.logOut();
}