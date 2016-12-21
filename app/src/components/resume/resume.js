import template from './resume.html';
import styles from './resume.scss';

export default {
  template,
  controller
};

function controller() {
  this.styles = styles;

  this.projects = [
    { name: 'Project 1' },
    { name: 'Project 2' }
  ];
}