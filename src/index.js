import _ from 'lodash';
import { cube } from './math.js';

if(process.env.NODE_ENV !== 'production') {
	console.log('looks like we are in development mode!');
}

function getComponent() {
  // Lodash, now imported by this script
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
  	var element = document.createElement('div');

  	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  	return element;
  }).catch(error => 'An error occurred while loading the component');
}

getComponent().then(component => {
  document.body.appendChild(component);
})
