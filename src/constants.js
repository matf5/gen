const DOMAIN_MAP = {
  '0APP': {
    st1: 'http://m-zl-st1.cfcmu.cn/vmuapp/#',
    st2: 'http://m-zl-st2.cfcmu.cn/vmuapp/#',
    uat: 'http://m-zl-uat.cfcmu.cn/vmuapp/#',
    prod: 'https://m-zl.mucfc.com/vmuapp/#'
  }
};
const URL_MAP = {
  '0APP': {
    XJGJJ01: '/provident-apply/intro?sceneType=XJGJJ01',
    XJYZ001: '/apply-owner/intro?sceneType=XJYZ001',
    XJCZ001: '/apply-car/intro?sceneType=XJCZ001',
    XJBL001: '/apply?sceneType=XJBL001'
  }
};
const OPTION_PRODUCT = [
  {
    value: 'XJGJJ01',
    label: '公积金贷',
  },
  {
    value: 'XJYZ001',
    label: '业主贷',
  },
  {
    value: 'XJCZ001',
    label: '车主贷',
  },
  {
    value: 'XJBL001',
    label: '白领贷',
  }
];
const OPTION_ENV = [
  {
    value: 'st1',
    label: 'st1'
  },
  {
    value: 'st2',
    label: 'st2'
  },
  {
    value: 'uat',
    label: 'uat'
  },
  {
    value: 'prod',
    label: '生产'
  }
];

export {
  DOMAIN_MAP,
  URL_MAP,
  OPTION_PRODUCT,
  OPTION_ENV
};
