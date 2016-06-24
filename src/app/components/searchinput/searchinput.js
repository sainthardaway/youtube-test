import angular from 'angular';
import searchinputComponent from './searchinput.component';

let searchinputModule = angular.module('searchinput', [])

.component('searchinput', searchinputComponent);

export default searchinputModule;
