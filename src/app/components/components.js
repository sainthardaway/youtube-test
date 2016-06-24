import angular from 'angular';
import searchinput from './searchinput/searchinput';
import videoplayer from './videoplayer/videoplayer';
import rootholder from './rootholder/rootholder';

let componentModule = angular.module('app.components', [
    rootholder.name,
    searchinput.name,
    videoplayer.name
]);

export default componentModule;
