import template from './videoplayer.html';
import videoplayerFactory from './videoplayer.factory';
import './videoplayer.styl';

var params = {
    videoThumb: 'video-thumb',
    videoContainerImgSelector: '.video-thumb__img',
    videoContainerTitleSelector: '.video-container__title'
}

class videoplayerComponentController {
    constructor() {
        var videoplayer = new videoplayerFactory();
        this.sortObj = videoplayer.getOptions();
        this.selected = '';
    }

    setAsActive(event, item) {
        let target = event.target;
        if (target && (target.classList.contains(params.videoThumb) || target.parentElement.classList.contains(params.videoThumb))) {
            let videoContainerImg = document.querySelector(params.videoContainerImgSelector);
            let videoContainerTitle = document.querySelector(params.videoContainerTitleSelector);
            if (videoContainerImg && videoContainerTitle) {
                videoContainerTitle.innerHTML = item.snippet.title;
                videoContainerImg.src = item.snippet.thumbnails.high.url;
            }
        }
    }
}

let videoplayerComponent = {
    restrict: 'E',
    require: {
      parent: '^rootholder'
    },
    template,
    controller: videoplayerComponentController,
    controllerAs: 'vm'
};

export default videoplayerComponent;
