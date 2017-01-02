routes.$inject = [ '$stateProvider', '$urlRouterProvider' ];

export default function routes($stateProvider, $urlRouterProvider) {

  $stateProvider.state({
    name: 'profile',
    url: '/profile',
    component: 'profile'
  });

  $stateProvider.state({
    name: 'skills',
    url: '/skills',
    component: 'skills'
  });

  $stateProvider.state({
    name: 'employment',
    url: '/employment',
    component: 'employment'
  });

  $stateProvider.state({
    name: 'education',
    url: '/education',
    component: 'education'
  });

  $urlRouterProvider.otherwise('/profile');
}