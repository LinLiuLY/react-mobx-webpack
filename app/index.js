import _ from 'lodash';

import css from 'bootstrap/dist/css/bootstrap.css';

var moment = require('moment');

const t = 1 + 5;

function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());

