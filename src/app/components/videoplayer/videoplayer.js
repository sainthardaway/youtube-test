import angular from 'angular';
import videoplayerComponent from './videoplayer.component';

let videoplayerModule = angular.module('videoplayer', [])

.component('videoplayer', videoplayerComponent);

export default videoplayerModule;
