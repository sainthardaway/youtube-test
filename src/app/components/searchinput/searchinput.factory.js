let searchinputFactory = function () {

    let getYoutubeVideos = (query) => {
        let request = gapi.client.youtube.search.list({
            maxResults: 10,
            part: 'snippet',
            q: query,
            type: 'video'
        });

        return request;
    };

    return { getYoutubeVideos };
};

export default searchinputFactory;
