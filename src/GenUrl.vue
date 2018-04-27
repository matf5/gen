<template>
  <div>
    <h1>注意：本页面仅适用于app相关产品链接的生成</h1>
    <p>
     <span>选择环境：</span>
   <el-select v-model="env">
     <el-option
       v-for="item in optionEnv"
       :key="item.value"
       :label="item.label"
       :value="item.value">
     </el-option>
   </el-select>
    </p>
   <p>
     <span>选择产品：</span>
   <el-select v-model="sceneType" @change="onChange">
      <el-option
        v-for="item in optionProduct"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
   </p>
    <el-input v-model="sceneSource" placeholder="请输入申请来源">
    <span slot="prepend">申请来源</span>
    </el-input>
    <el-input v-model="mtagi" placeholder="请输入mtagi">
    <span slot="prepend">mtagi</span>
    </el-input>
    <el-button type="text" @click="genUrl">生成链接</el-button>
    <el-input
     type="textarea"
     v-show="showHref"
     :rows="3"
     v-model="resultHref">
    </el-input>
  </div>

</template>
<script>

// const URL_MAP = {
//   XJGJJ01: 'https://m-zl.mucfc.com/provident-apply/intro?sceneType=XJGJJ01',
// }
import { URL_MAP, DOMAIN_MAP, OPTION_ENV, OPTION_PRODUCT } from './constants';

export default {
  components: {
  },
  data() {
    return {
      sceneSource: '',
      mtagi: '',
      optionProduct: OPTION_PRODUCT,
      optionEnv: OPTION_ENV,
      resultHref: '',
      showHref: false,
      sceneType: '',
      env: 'prod',
      href: ''
    };
  },
  methods: {
    genUrl() {
      if (!this.sceneType.length > 0) {
        this.$message({
          message: '请选择产品',
          duration: 3000
        });
        return;
      }
      const domain = DOMAIN_MAP['0APP'][this.env];
      const url = URL_MAP['0APP'][this.sceneType] || '';
      this.href = `${domain}${url}`;
      if (this.sceneType === 'XJGJJ01') {
        this.genGJJUrl();
        return;
      }
      let hashUrl = '';
      if (this.sceneSource.length > 0) {
        hashUrl = `${hashUrl}&sceneSource=${this.sceneSource}`;
      }
      if (this.mtagi.length > 0) {
        hashUrl = `${hashUrl}&mtagi=${this.mtagi}`;
      }
      this.resultHref = `${this.href}${hashUrl}`;
      this.showHref = true;
    },
    genGJJUrl() {
      let hashUrl = '';
      if (this.sceneSource.length > 0) {
        const sbdSceneSource = this.sceneSource.replace('gjj', 'sbd');
        hashUrl = `${hashUrl}&gjjSceneSource=${this.sceneSource}&sbdSceneSource=${sbdSceneSource}`;
      }
      if (this.mtagi.length > 0) {
        hashUrl = `${hashUrl}&mtagi=${this.mtagi}`;
      }
      this.resultHref = `${this.href}${hashUrl}`;
      this.showHref = true;
    },
    onChange(value) {
      if (value === 'XJGJJ01') {
        this.$message({
          message: '公积金贷只需输入公积金申请来源,社保贷会自动生成',
          duration: 10000
        });
      }
    }
  }
};
</script>
