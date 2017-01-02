import angular from 'angular';
import './scss/main.scss';
import components from './components';
// import services from './services';

import uiRouter from 'angular-ui-router';
// import 'angular-ui-router/release/stateEvents';

import dialog from 'ng-dialog';
import 'ng-dialog/css/ngDialog.css';
import 'ng-dialog/css/ngDialog-theme-default.css';

import ngMaterial from 'angular-material';
import 'angular-material/angular-material.min.css';
import 'angular-material/layouts/angular-material.layouts.min.css';
import 'angular-aria';
import 'angular-animate';

import routes from './routes';

const app = angular.module('portfolio2', [ 
  components, 
  /*services,*/ 
  uiRouter,
  dialog,
  ngMaterial
]);

const dev = 'http://localhost:3000/api';
app.value('apiUrl', dev);

app.factory(function() { return dev; });

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('amber')
    .accentPalette('indigo');
});
app.config(routes);