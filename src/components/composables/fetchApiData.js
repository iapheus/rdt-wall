const fetchApiData = () => {
    let query = '';
    let videoData = ref([]);
    let galleryData = ref([]);
    let imageData = ref([]);

    const fetchDatas = (sort, subreddit, videoData, galleryData, imageData) => {
        console.log(sort);
        if (["all", "year", "month", "week", "day"].some(option => sort.includes(option))) {
            query = `https://www.reddit.com/r/${subreddit}/top/.json?limit=100&t=${sort}&count=100`;
        }
        if (["hot", "new"].some(option => sort.includes(option))) {
            query = `https://www.reddit.com/r/${subreddit}/${sort}/.json?limit=100&t=day&count=100`;
        }
        fetch(query)
            .then((res) => res.json())
            .then((res) => {
                for (const [index, object] of Object.entries(res['data']['children'])) {
                    if (["discord", "patreon", "redgif", "instagram"].some(option => object['data']['url'].includes(option))) {}
                    else {
                        if (object['data']['is_video'] == true) {
                            videoData.push({ url: object['data']['media']['reddit_video']['fallback_url'] });
                        }
                        if (res['data']['crosspost_parent_list']['is_gallery'] || res['data']['is_gallery']) {
                            for (const object of Object.entries(object['data']['crosspost_parent_list']["media_metadata"])) {
                                galleryData.push({ url: object['p']['u'] });
                            }
                        }
                        else {
                            imageData.push({ url: object['data']['preview']['images']['source']['url'] });
                        }
                    }
                }
                console.log('IT WORKS');
            });
    };

    return { videoData, galleryData, imageData, fetchDatas };
};

export default fetchApiData;
