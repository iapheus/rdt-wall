<template>
  
</template>

<script>
import { inject,onBeforeMount,provide } from 'vue'

export default {
    setup() {
        const sortValue = inject('sortValue');
        const selectedSubreddit = inject('selectedSubreddit');
        const query = '';
        const videoData = [];
        const galleryData = [];
        const imageData = [];

        provide('videoData',videoData);
        provide('galleryData', galleryData);
        provide('imageData', imageData);

        onBeforeMount = () => {
            fetchApiData();
        };

        const fetchApiData = () => {
            if (["all", "year", "month", "week", "day"].some(option => sortValue.includes(option))) {
                query = `https://www.reddit.com/r/${selectedSubreddit}/top/.json?limit=100&t=${sortValue}&count=100`;
            }
            if(["hot", "new"].some(option => sortValue.includes(option))){
                query = `https://www.reddit.com/r/${selectedSubreddit}/${sortValue}/.json?limit=100&t=day&count=100`;
            }
            fetch(query).then((res) => res.json()).then((res) => {
                for(const [index,object] of Object.entries(res['data']['children'])){
                    if(["discord", "patreon", "redgif", "instagram"].some(option => object['data']['url'].includes(option))){}
                    else
                    {
                        if(object['data']['is_video'] == true){
                            this.videoData.push({url:object['data']['media']['reddit_video']['fallback_url']})
                        }
                        if(res['data']['crosspost_parent_list']['is_gallery'] || res['data']['is_gallery']  ){
                            for(const object of Object.entries(object['data']['crosspost_parent_list']["media_metadata"])){
                                this.galleryData.push({url:object['p']['u']})
                            }
                        }
                        else{
                            this.imageData.push({url:object['data']['preview']['images']['source']['url']})
                        }
                    }
                }
                    }
                )};

                fetchApiData();
            },
    data() {
        return {
            items:[]
        }
    }
}
</script>

<style>

</style>