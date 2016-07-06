import { module as ngModule } from 'angular';

export default ngModule('myApp.home', [])
  .config($stateProvider => {
    $stateProvider
      .state('home', {
        url: '/home',
        component: 'myHome'
      });
  })
  .component('myHome', require('./home.component').default)
  .name;