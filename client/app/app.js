import angular from 'angular';

// shared modules

// container modules
// container is a major angular 'component' that renders a page, for example login, milestone, etc
import homeModule from './containers/home';
import thingModule from './containers/thing';

// app CSS
import './app.scss';

let app = angular.module('mpmApp', [
    // library dependencies
    'ui.router',
    'ngCookies',
    'ngResource',
    'ngAnimate',

    // shared modules

    // container modules
    homeModule,
    thingModule
  ])

  .config(($locationProvider, $urlRouterProvider) => {
    // disable html5 mode for chrome app
    $locationProvider.html5Mode(true);

    // default route
    $urlRouterProvider.otherwise('/home');
  });

export default app.name;