// rootholder for sharing data between two 'sister' components
import angular from 'angular';
import rootholderComponent from './rootholder.component';

let rootholderModule = angular.module('rootholder', [])

.component('rootholder', rootholderComponent);

export default rootholderModule;
