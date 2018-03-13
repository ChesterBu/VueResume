import AV from '../node_modules/leancloud-storage/dist/av-min'

const appId = 'wdjHsUMNKESeQ45BCySBVT2n-gzGzoHsz';
const appKey = 'Vtblp8GMeEK9FHPm11XN9uIV';

AV.init({appId, appKey});

const User = AV.Object.extend('User');
const user = new User();
export  async function saveUser(info={}) {
    //await user.save(info);
    console.log(info);
}
