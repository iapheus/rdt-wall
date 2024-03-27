<template>
<video v-for="item in items" :key="item" class="w-full h-auto max-w-full" muted loop autoplay>
  <source :src=item.video.url type="video/mp4">
  Your browser does not support the video tag.
</video>
</template>

<script>
export default {
  props:['items'],
  data() {
    return {

    }
  },
  methods:{

  }
}
</script>

<style>

</style>