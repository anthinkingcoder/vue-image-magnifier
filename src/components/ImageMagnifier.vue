<template>
    <div class="image-magnifier" :style="style">
        <img :width="width"
             :height="height"
             :src="src"
             class="image-magnifier__img"
             @mouseenter="handleOver"
             @mousemove="handleMove"
             @mouseleave="handleOut"
             ref="img"
        />
        <div class="image-magnifier__mask" :class="maskClass" :style="maskStyle" ref="mask">
        </div>
        <div class="image-magnifier__zoom" :class="zoomClass" :style="zoomStyle" v-show="zoomShow">
            <img :src="zoomSrc" :style="zoomImgStyle"/>
        </div>
    </div>
</template>

<script>
  export default {
    name: "ImageMagnifier",
    props: {
      width: {
        default: 'auto'
      },
      height: {
        default: 'auto'
      },
      src: {},
      zoomSrc: {},
      zoomWidth: {
        default: 'auto'
      },
      zoomHeight: {
        default: 'auto'
      },
      zoomClass: {},
      maskWidth: {
        default: 100
      },
      maskHeight: {
        default: 100
      },
      maskBgColor: {
        default: '#409eff'
      },
      maskOpacity: {
        default: .5
      },
      maskClass: {},
      delayIn: {
        type: Number,
        default: 0
      },
      delayOut: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        zoomShow: false,
        imgRect: '',
        maskRect: '',
        maskX: 0,
        maskY: 0,
        zoomImage: '',
        zoomLeft: '',
        zoomImgWidth: 0,
        zoomImgHeight: 0,
        zoomPosition: {
          x: 0,
          y: 0
        },
        zoomInTimeoutId: null,
        zoomOutTimeoutId: null,
      }
    },
    computed: {
      style() {
        return {
          position: 'relative',
          cursor: 'move'
        }
      },
      maskStyle() {
        return {
          position: 'absolute',
          width: `${this.maskWidth}px`,
          height: `${this.maskHeight}px`,
          opacity: this.maskOpacity,
          backgroundColor: this.maskBgColor,
          left: 0,
          top: 0,
          transform: `translate(${this.maskX}px, ${this.maskY}px)`,
          willChange: 'transform',
          pointerEvents: 'none',
          zIndex: 1000,
          visibility: this.zoomShow ? 'visible' : 'hidden',
        }
      },
      zoomStyle() {
        return {
          width: `${this.zoomWidth}px`,
          height: `${this.zoomHeight}px`,
          position: 'absolute',
          left: `${this.zoomLeft}px`,
          top: 0,
          overflow: 'hidden',
          zIndex: 1000
        }
      },
      zoomImgStyle() {
        return {
          width: `${this.zoomImgWidth}px`,
          height: `${this.zoomImgHeight}px`,
          willChange: 'transform',
          transform: `translate(-${this.zoomPosition.x}px, -${this.zoomPosition.y}px)`,
        }
      }

    },
    created() {

    },
    methods: {
      handleOver() {
        clearTimeout(this.zoomOutTimeoutId);
        this.calcZoomSize();
        if (this.delayIn === 0) {
          this.zoomShow = true;
        } else {
          this.zoomInTimeoutId = setTimeout(() => {
            this.zoomShow = true;
          }, this.delayIn)
        }
      },
      calcZoomSize() {
        this.imgRect = this.$refs.img && this.$refs.img.getBoundingClientRect();
        this.maskRect = this.$refs.mask && this.$refs.mask.getBoundingClientRect();
        //计算大图宽高
        if (this.imgRect && this.maskRect) {
          this.zoomImgWidth = (this.imgRect.width / this.maskRect.width) * this.zoomWidth;
          this.zoomImgHeight = (this.imgRect.height / this.maskRect.height) * this.zoomHeight;
        }
      },
      handleMove(e) {
        if (!this.imgRect || !this.maskRect) {
          return;
        }
        this.maskX = this.outXCheck(e.clientX - this.imgRect.left);
        this.maskY = this.outYCheck(e.clientY - this.imgRect.top);
        this.zoomLeft = this.imgRect.width + 10;

        //计算大图偏移量
        this.zoomPosition.x = this.maskX * (this.zoomImgWidth / this.imgRect.width)
        this.zoomPosition.y = this.maskY * (this.zoomImgHeight / this.imgRect.height)
      },
      handleOut() {
        clearTimeout(this.zoomInTimeoutId);
        if (this.delayOut === 0) {
          this.zoomShow = false;
        } else {
          this.zoomOutTimeoutId = setTimeout(() => {
            this.zoomShow = false;
          }, this.delayOut);
        }
      },
      outXCheck(x) {
        x = x - this.maskRect.width / 2;
        if (x < 0) {
          return 0;
        }
        if (x + this.maskRect.width > this.imgRect.width) {
          return this.imgRect.width - this.maskRect.width;
        }
        return x;
      },
      outYCheck(y) {
        y = y - this.maskRect.height / 2;
        if (y < 0) {
          return 0;
        }
        if (y + this.maskRect.height > this.imgRect.height) {
          return this.imgRect.height - this.maskRect.height;
        }
        return y;
      }
    }
  }
</script>
