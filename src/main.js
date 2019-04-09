import ImageMagnifier from './components/ImageMagnifier.vue';
const install = function (Vue) {
  Vue.component('image-magnifier', ImageMagnifier);
}

export default {
  install,
  ImageMagnifier
}

export {
  ImageMagnifier
}

