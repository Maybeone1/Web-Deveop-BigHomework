import { EnemyDataObj, EnemyName, EnemyStaticItem } from "@/type/enemy";
import { requireCDN } from "@/utils/handleImg";
const  _requireCDN = (url: string) => requireCDN(url, 'zombies')

const enemyObj: EnemyDataObj = {
  'zombie-flag': {
    name: 'zombie-flag', w: 1.5, h: 1.5, curSpeed: 0.03, speed: 0.03, reward: 50, hp: {cur: 10, sum: 10}, 
    imgType: 'gif', imgSource: _requireCDN('zombie_0_move.gif'), isForward: true, isFlip: false
  },
  'zombie-1': {
    name: 'zombie-1', w: 1.5, h: 1.5, curSpeed: 0.03, speed: 0.03, reward: 10, hp: {cur: 10, sum: 10}, 
    imgType: 'gif', imgSource: _requireCDN('zombie_1_move.gif'), isForward: true, isFlip: false
  },
  'zombie-2': {
    name: 'zombie-2', w: 1.5, h: 1.5, curSpeed: 0.03, speed: 0.03, reward: 15, hp: {cur: 25, sum: 25}, 
    imgType: 'gif', imgSource: _requireCDN('zombie_2_move.gif'), isForward: true, isFlip: false},
  'zombie-3': {
    name: 'zombie-3', w: 1.5, h: 1.5, curSpeed: 0.03, speed: 0.03, reward: 20, hp: {cur: 40, sum: 40}, 
    imgType: 'gif', imgSource: _requireCDN('zombie_3_move.gif'), isForward: true, isFlip: false},
  'iron-gate': { // 铁门
    name: 'iron-gate', w: 1.5, h: 1.5, curSpeed: 0.04, speed: 0.04, reward: 30, hp: {cur: 60, sum: 60}, 
    imgType: 'gif', imgSource: _requireCDN('zombie_4_move.gif'), isForward: true, isFlip: false},
  'rugby': { // 橄榄球
    name: 'rugby', w: 1.7, h: 1.7, curSpeed: 0.06, speed: 0.06, reward: 40, hp: {cur: 120, sum: 120}, 
    imgType: 'gif', imgSource: _requireCDN('zombie_5_move.gif'), isForward: true, isFlip: false},
  'newspaper': {
    name: 'newspaper', w: 1.7, h: 1.7,  curSpeed: 0.06, speed: 0.06, reward: -100, hp: {cur: 30, sum: 30}, 
    imgType: 'gif', imgSource: _requireCDN('zombie_6_move.gif'), isForward: true, isFlip: false
  },
  'zombie-dance': {
    name: 'zombie-dance', w: 1.7, h: 1.7, curSpeed: 0.04, speed: 0.04, reward: 80, hp: {cur: 350, sum: 350}, skill: {time: 8000}, audioKey: 'pvz-dance', 
    imgType: 'gif', imgSource: _requireCDN('zombie_7_move.gif'), isForward: true, isFlip: false
  },
  'pole-vault': { // 撑杆跳
    name: 'pole-vault', w: 2, h: 1.7, curSpeed: 0.08, speed: 0.08, reward: 30, hp: {cur: 30, sum: 30}, 
    imgType: 'gif', imgSource: _requireCDN('zombie_8_move.gif'), isForward: true, isFlip: false
  },
}
export default enemyObj

export const enemyNameListData: EnemyName[] = [
  'zombie-flag','zombie-1','zombie-2','zombie-3','iron-gate',
  'rugby','newspaper','zombie-dance','pole-vault',
]

export const enemyStaticData: {[key in EnemyName]: EnemyStaticItem} = {
  'zombie-flag': {name: '旗子僵尸', explain: '作者很懒没写什么...'},
  'zombie-1': {name: '普通僵尸', explain: 'NPC的命也是命'},
  'zombie-2': {name: '路障僵尸', explain: 'NPC变强了'},
  'zombie-3': {name: '铁桶僵尸', explain: 'NPC最终形态'},
  'iron-gate': {name: '铁门僵尸', explain: '恐惧吗？'},
  'rugby': {name: '橄榄球僵尸', explain: '黑皮体育生'},
  'newspaper': {name: '报纸僵尸', explain: '穷鬼一个，击杀它你将损失100金币'},
  'zombie-dance': {
    name: '舞王僵尸', explain: '技能: 能召唤4个傀儡僵尸', 
    towerList: [
      {x: 3, y: 3, towerName: 'nanqiang'},
      {x: 4, y: 3, towerName: 'nanqiang'},
      {x: 5, y: 3, towerName: 'nanqiang'},
    ]
  },
  'pole-vault': {name: '撑杆跳僵尸', explain: '他跑得很快...'},
  // 'ice-car': {
  //   name: '冰车', explain: '技能: 范围内释放冷气，冰冻塔防(塔防将无法攻击并受到少量伤害)',
  //   towerList: [
  //     {x: 2, y: 2, towerName: 'jin'},
  //     {x: 2, y: 3, towerName: 'jin'},
  //     {x: 4, y: 3, towerName: 'jin'},
  //     {x: 6, y: 3, towerName: 'jin'},
  //     {x: 6, y: 4, towerName: 'jin'},
  //   ]
  // },
  // 'afu': {name: '阿福', explain: '乌鸦坐飞机，有待开发...'},
  // 'fulisha': {
  //   name: '弗利萨', explain: '技能: 召唤两个小鬼僵尸',
  //   towerList: [
  //     {x: 3, y: 3, towerName: 'jin'},
  //     {x: 4, y: 3, towerName: 'jin'},
  //   ]
  // },
  // 'zombie-little': {name: '小鬼僵尸', explain: '作者很懒没写什么...'},
  // 'kunkun': {name: '坤坤', explain: '技能: 播放“鸡你太美”回复200生命值'},
  // 'rabbish': {name: '兔子', explain: '兔兔很可爱，请不要击杀...'},
  // 'rabbish-2': {
  //   name: '带帽兔子', explain: '技能: 回复一格范围内所有僵尸10%的生命值',
  //   enemyNameList: ['zombie-3','rabbish-2','zombie-3'],
  //   towerList: [{x: 4, y: 3,towerName: 'nanqiang'}]
  // },
  // 'godzilla': {name: '哥斯拉', explain: '技能: 往最近的敌人方向释放原子吐息，该方向上的所有塔防都将收到巨量伤害'},
  // 'zombie-boom': {
  //   name: '炸弹僵尸', explain: '技能: 当生命值低于50%时，会进入自爆状态，如果在时间内未能击杀它，两格范围内的塔防都将被它炸掉',
  //   towerList: [
  //     {x: 2, y: 3,towerName: 'jin'},
  //     {x: 4, y: 3,towerName: 'jin'},
  //     {x: 6, y: 3,towerName: 'jin'},
  //   ]
  // },
}

/** 敌人的最高等级 */
export const ENEMY_MAX_LEVEL = 10;

export const enemyHpColors = ['#0066a1', '#49ca00', '#409756', '#eedf96', '#f8d501', '#cb732a', '#e5a4ac', '#be3f41', '#e047db', '#c0c0cb', '#eaeaea']