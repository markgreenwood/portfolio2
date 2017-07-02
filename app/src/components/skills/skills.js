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
      logo: 'angular-color.svg',
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
      logo: 'nodejs-color.svg'
    },
    {
      item: 'git',
      logo: 'git-logo.svg'
    },
    {
      item: 'GitHub',
      logo: 'Octocat.png',
      details:
        '<li>Set up and managed the GitHub repos for all my code school team projects</li>'
    },
    {
      item: 'Python',
      logo: 'python-logo-notext.svg'
    },
    {
      item: 'MongoDB',
      logo: 'mongodb-original-wordmark.svg'
    },
    {
      item: 'SQL',
      logo: 'sql-icon.svg'
    },
    {
      item: 'C/C++',
      logo: 'cplusplus-logo.svg'
    },
    {
      item: 'Perl',
      logo: 'perl-logo.svg'
    },
    {
      item: 'Django',
      logo: 'django-logo.svg'
    },
    {
      item: 'Jasmine',
      logo: 'jasmine-logo.svg'
    },
    {
      item: 'Mocha',
      logo: 'mocha-logo.svg'
    },
    {
      item: 'ChaiJS',
      logo: 'chai-logo.svg'
    },
    {
      item: 'Karma',
      logo: 'karma-logo.svg'
    },
    {
      item: 'Selenium',
      logo: 'selenium-logo.svg'
    }
  ];
}