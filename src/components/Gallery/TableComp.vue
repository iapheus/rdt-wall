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
// TableComp.vue

import GalleryComp from './GalleryComp.vue';
import VideoComp from './VideoComp.vue';
import { inject, onMounted, ref } from 'vue';
import fetchApiData from '../composables/fetchApiData';

export default {
  components: { GalleryComp, VideoComp },
  
  setup() {
    const subreddit = inject('selectedSubreddit');
    const sort = inject('sortValue');
    
    const { fetchDatas } = fetchApiData();
    console.log(sort);
    fetchDatas(sort.value, subreddit.value);

    const haveVideo = ref(false); // ref fonksiyonunu kullan
    const haveGallery = ref(false);
    const haveImage = ref(false);
    const videoData = ref([]); // Ref olarak tanımla
    const galleryData = ref([]);
    const imageData = ref([]);

    onMounted(() => {
      if (videoData.value.length !== 0) { // value özelliğini kullan
        haveVideo.value = true;
      }

      if (imageData.value.length !== 0) { // value özelliğini kullan
        haveImage.value = true;
      }

      if (galleryData.value.length !== 0) { // value özelliğini kullan
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
  