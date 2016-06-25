let videoplayerFactory = function () {
// emulation of getting the obj from somewhere, no ajax request, just hardcoding
    let getOptions = () => {
        let sortOptions = {
            'snippet.title': 'Title'
        };

        return sortOptions;
    };

    return { getOptions };
};

export default videoplayerFactory;
