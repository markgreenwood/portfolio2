import template from './education.html';

export default {
  template,
  controller
};

function controller() {
  this.educations = [
    {
      school: 'Code Fellows PDX',
      cert: 'Advanced Software Development in Full-Stack JavaScript',
      start: 'Sep 2016',
      finish: 'Jan 2017',
      logo: 'code-fellows-logo-only.png'
    },
    {
      school: 'Portland State University / Oregon Graduate Institute',
      cert: 'Post-graduate Coursework in Engineering and Technology Management',
      start: '1992',
      finish: '2002',
      logo: 'psu_logo.jpg'
    },
    {
      school: 'Washington University in St. Louis',
      cert: 'Master of Science in Electrical Engineering',
      start: '1987',
      finish: '1991',
      logo: 'WashUShielding.png'
    },
    {
      school: 'Virginia Tech',
      cert: 'Bachelor of Science in Electrical Engineering',
      start: '1982',
      finish: '1986',
      logo: 'VT_logo.png'
    }
  ];
}