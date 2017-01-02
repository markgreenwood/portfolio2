import template from './skills.html';
import styles from './skills.scss';

export default {
  template,
  controller
};

controller.$inject = [ '$mdDialog' ];

function controller($mdDialog) {
  this.styles = styles;

  this.showDetails = function(ev, skill) {

    $mdDialog.show({
      controller: DialogController,
      template: `<md-dialog>${ skill.details }</md-dialog>`,
      // parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      // fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    });
  };

  function DialogController($scope, $mdDialog) {
    this.closeDialog = function() {
      $mdDialog.hide();
    };

    // $scope.cancel = function() {
    //   $mdDialog.cancel();
    // };

    // $scope.answer = function(answer) {
    //   $mdDialog.hide(answer);
    // };
  }

  this.skills = [
    {
      item: 'AngularJS',
      logo: 'angularjs.png',
      details:
        '<li>This application uses AngularJS!</li>' +
        '<li>Image Gallery</li>'
    },
    {
      item: 'JavaScript',
      logo: 'js-logo-badge.png',
      details: 
        '<li>This application uses JavaScript!</li>' + 
        '<li>PDX Tech Hub - a job search website for Portlanders</li>' +
        '<li>Time Tracker - an app for people wanting to be mindful of how they spend their time</li>'
    },
    {
      item: 'Node.js',
      logo: 'node-js-logo.png'
    },
    {
      item: 'git/GitHub',
      logo: 'Octocat.png',
      details:
        '<li>Set up and managed the GitHub repos for all my code school team projects</li>'
    },
    {
      item: 'Python',
      logo: 'pythonlogo.jpg'
    },
    {
      item: 'MongoDB',
      logo: 'mongodb_icon.png'
    },
    {
      item: 'SQL',
      logo: 'sql-mini-logo.png'
    },
    {
      item: 'C/C++',
      logo: 'cplusplus.gif'
    },
    {
      item: 'Perl',
      logo: 'Perl_logo.jpg'
    },
    {
      item: 'Django',
      logo: 'django_logo.jpg'
    }
  ];
}