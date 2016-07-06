import { module } from 'angular';

export default module('myMeanApp.thing', [])
  .config($stateProvider => {
    $stateProvider
      .state('thing', {
        url: '/thing',
        component: 'myThing'
      });
  })
  .component('myThing', require('./thing.component').default)
  .name;