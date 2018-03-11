import AV from '../node_modules/leancloud-storage/dist/av-min'

const appId = 'wdjHsUMNKESeQ45BCySBVT2n-gzGzoHsz';
const appKey = 'Vtblp8GMeEK9FHPm11XN9uIV';

AV.init({appId, appKey});

const TestObject = AV.Object.extend('TestObject');
const testObject = new TestObject();
export default async function () {
    await testObject.save({words: 'Hello World!'});
    alert('LeanCloud Rocks!');
}
