import { module } from 'angular';

export default module('myMeanApp.home', [])
  .config($stateProvider => {
    $stateProvider
      .state('home', {
        url: '/home',
        component: 'myHome'
      });
  })
  .component('myHome', require('./home.component').default)
  .name;