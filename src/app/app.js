import angular from 'angular';
import Components from './components/components';

// Main Styles
import '../style/app.styl';


// Main Directive
let mainAppDirective = () => {
    return {
        template: require('./app.html')
    }
};

// AUTH
let authHandler = () => {
    gapi.client.setApiKey('AIzaSyA82e1OTaTGGnCAa8GBeLr_aj3glACpR7s');
    gapi.client.load('youtube', 'v3');
}

window.addEventListener('load', authHandler);


const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [Components.name]).directive(MODULE_NAME, mainAppDirective).config( ($compileProvider, $httpProvider) => {
    $compileProvider.debugInfoEnabled(false);
    $httpProvider.useApplyAsync(true);
});;

export default MODULE_NAME;
