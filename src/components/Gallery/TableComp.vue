<template>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div class="grid gap-4">
        <div v-if="imageData.length > 0">
          <img v-for="image in imageData" :key="image.url" class="h-auto max-w-full rounded-lg" :src="image.url" alt="">
        </div>
        <GalleryComp v-if="haveGallery" :items="galleryData" />
        <VideoComp v-if="haveVideo" :items="videoData" />
      </div>
    </div>
  </template>
  
  <script>
  import GalleryComp from './GalleryComp.vue';
  import VideoComp from './VideoComp.vue';
  import { inject, onMounted, ref } from 'vue';
  import fetchApiData from '../composables/fetchApiData';
  
  export default {
    components: { GalleryComp, VideoComp },
    
    setup() {
      const subreddit = inject('selectedSubreddit');
      const sort = inject('sortValue');
      
      const { imageData, galleryData, videoData, fetchDatas } = fetchApiData();
      console.log(sort);
      fetchDatas(sort, subreddit, videoData, galleryData, imageData);
  
      const haveVideo = ref(false);
      const haveGallery = ref(false);
      const haveImage = ref(false);
  
      onMounted(() => {
        if (videoData.length !== 0) {
          haveVideo.value = true;
        }
  
        if (imageData.length !== 0) {
          haveImage.value = true;
        }
  
        if (galleryData.length !== 0) {
          haveGallery.value = true;
        }
      });
  
      return { videoData, galleryData, imageData, haveVideo, haveGallery, haveImage };
    },
  };
  </script>
  
  <style>
  /* CSS styles can be added here if needed */
  </style>
  