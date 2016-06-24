import template from './searchinput.html';
import searchinputFactory from './searchinput.factory';
import './searchinput.styl';

class searchinputController {
    constructor() {
    };

    searchVideo(root) {
        let searchinput = new searchinputFactory();
        let userinput = this.userinput;
        let searchinputResult = new Promise((resolve, reject) => {
            searchinput.getYoutubeVideos(userinput).execute( response => resolve(response.result));
        });


        let succesSearchinputResult = (response) => {
            this.parent.result = response;
            root.$apply();
        };

        let errorSearchinputResult = (error) => {
            console.log(error);
        };

        searchinputResult.then(succesSearchinputResult, errorSearchinputResult)
    };
};

export default searchinputController;

let searchinputComponent = {
    restrict: 'E',
    bindings: {
        userinput: '@'
    },
    require: {
      parent: '^rootholder'
    },
    template,
    controller: searchinputController,
    controllerAs: 'vm'
};

export default searchinputComponent;
