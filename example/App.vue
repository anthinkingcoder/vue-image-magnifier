<template>
    <ImageMagnifier :src="image"
                    :zoom-src="image"
                    width="400"
                    height="300"
                    zoom-width="400"
                    zoom-height="300"></ImageMagnifier>
</template>

<script>
  import ImageMagnifier from '../src/components/ImageMagnifier.vue'
  import image from './img/DA2D9393-4081-4384-B493-95DA1620C26D.png'
  export default {
    components: {
      ImageMagnifier
    },
    data() {
      return {
        image,
        config: {
          width:400,
          height:300,
          maskWidth:100,
          maskHeight:100,
          maskColor:'#fff',
          maskOpacity:0.5
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>