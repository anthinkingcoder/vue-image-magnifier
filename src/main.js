import ImageMagnifier from './components/ImageMagnifier.vue';
const install = function (Vue) {
  Vue.component('image-magnifier', ImageMagnifier);
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ImageMagnifier
}

export {
  ImageMagnifier
}

