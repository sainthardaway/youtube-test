import angular from 'angular';
import rootholderComponent from './rootholder.component';

let rootholderModule = angular.module('rootholder', [])

.component('rootholder', rootholderComponent);

export default rootholderModule;
