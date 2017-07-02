import template from './employment.html';

export default {
  template,
  controller
};

function controller() {
  this.jobs = [
    {
      title: 'Product Development Engineer',
      company: 'Summit Wireless',
      location: 'Beaverton, OR',
      start: 'April 2014',
      finish: 'September 2016',
      description: 'I did things.',
      logo: 'Summit-Logo.png'
    },
    {
      title: 'Product Development Engineering Manager',
      company: 'TriQuint',
      location: 'Hillsboro, OR',
      start: '2001',
      finish: 'March 2014',
      description: 'Did lots of cool things, developed lots of modules, and analyzed tons of data.',
      logo: 'triquint-logo.svg'
    },
    {
      title: 'Design Engineer',
      company: 'TriQuint',
      location: 'Hillsboro, OR',
      start: '1996',
      finish: '2001',
      description: 'Designed modules (RFICs) for mobile phones and other wireless devices.',
      logo: 'triquint-logo.svg'

    },
    {
      title: 'Product Development Engineer',
      company: 'TriQuint',
      location: 'Hillsboro, OR',
      start: '1992',
      finish: '1996',
      description: 'Wrote lots of test code for production test of integrated circuits.',
      logo: 'triquint-logo.svg'
    },
    {
      title: 'Senior Systems Engineer',
      company: 'McDonnell Douglas',
      location: 'St. Louis, MO',
      start: '1986',
      finish: '1991',
      description: 'Designed, developed, and tested electronic warfare systems for aircraft.',
      logo: 'McDonnell_Douglas_logo.png'
    }
  ];
}