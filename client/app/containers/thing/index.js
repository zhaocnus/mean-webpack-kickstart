import { module as ngModule } from 'angular';

export default ngModule('myApp.thing', [])
  .config($stateProvider => {
    $stateProvider
      .state('thing', {
        url: '/thing',
        component: 'myThing'
      });
  })
  .component('myThing', require('./thing.component').default)
  .name;