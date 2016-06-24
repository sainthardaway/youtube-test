import angular from 'angular';
import searchinputComponent from './searchinput.component';
import searchinputFactory from './searchinput.factory';

let searchinputModule = angular.module('searchinput', [])

.component('searchinput', searchinputComponent).factory('searchinput', searchinputFactory);

export default searchinputModule;
