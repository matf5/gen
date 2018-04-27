import Vue from 'vue';
import Router from 'vue-router';
import GenUrl from './GenUrl';

Vue.use(Router);

let routes = [{
  path: '/feteamdevnav',
  component: GenUrl,
  meta: {
    title: '开发导航',
  },
}];

[
  // add your pages under this line
/* eslint-disable no-return-assign */
].forEach(m => routes = routes.concat(require(`./pages/${m}/router`).default));

export default new Router({ routes });
