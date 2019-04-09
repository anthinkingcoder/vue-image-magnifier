(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["magnifier"] = factory();
	else
		root["magnifier"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"553e40dc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ImageMagnifier.vue?vue&type=template&id=3f31e7e9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"image-magnifier",style:(_vm.style)},[_c('img',{ref:"img",staticClass:"image-magnifier__img",attrs:{"width":_vm.width,"height":_vm.height,"src":_vm.src},on:{"mouseover":_vm.handleOver,"mousemove":_vm.handleMove,"mouseout":_vm.handleOut}}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.zoomShow),expression:"zoomShow"}],ref:"mask",staticClass:"image-magnifier__mask",class:_vm.maskClass,style:(_vm.maskStyle)}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.zoomShow),expression:"zoomShow"}],staticClass:"image-magnifier__zoom",class:_vm.zoomClass,style:(_vm.zoomStyle)},[_c('img',{style:(_vm.zoomImgStyle),attrs:{"src":_vm.zoomSrc}})])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ImageMagnifier.vue?vue&type=template&id=3f31e7e9&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ImageMagnifier.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ImageMagnifiervue_type_script_lang_js_ = ({
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
    maskClass: {}
  },
  data: function data() {
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
      }
    };
  },
  computed: {
    style: function style() {
      return {
        position: 'relative',
        cursor: 'move'
      };
    },
    maskStyle: function maskStyle() {
      return {
        position: 'absolute',
        width: "".concat(this.maskWidth, "px"),
        height: "".concat(this.maskHeight, "px"),
        opacity: this.maskOpacity,
        backgroundColor: this.maskBgColor,
        left: 0,
        top: 0,
        transform: "translate(".concat(this.maskX, "px, ").concat(this.maskY, "px)"),
        pointerEvents: 'none'
      };
    },
    zoomStyle: function zoomStyle() {
      return {
        width: "".concat(this.zoomWidth, "px"),
        height: "".concat(this.zoomHeight, "px"),
        position: 'absolute',
        left: "".concat(this.zoomLeft, "px"),
        top: 0,
        overflow: 'hidden'
      };
    },
    zoomImgStyle: function zoomImgStyle() {
      return {
        width: "".concat(this.zoomImgWidth, "px"),
        height: "".concat(this.zoomImgHeight, "px"),
        transform: "translate(-".concat(this.zoomPosition.x, "px, -").concat(this.zoomPosition.y, "px)")
      };
    }
  },
  created: function created() {},
  methods: {
    handleOver: function handleOver() {
      var _this = this;

      this.zoomShow = true;
      this.imgRect = this.$refs.img && this.$refs.img.getBoundingClientRect();
      this.$nextTick(function () {
        _this.maskRect = _this.$refs.mask && _this.$refs.mask.getBoundingClientRect(); //计算大图宽高

        _this.zoomImgWidth = _this.imgRect.width / _this.maskRect.width * _this.zoomWidth;
        _this.zoomImgHeight = _this.imgRect.height / _this.maskRect.height * _this.zoomHeight;
      });
    },
    handleMove: function handleMove(e) {
      this.maskX = this.outXCheck(e.pageX - this.imgRect.left);
      this.maskY = this.outYCheck(e.pageY - this.imgRect.top);
      this.zoomLeft = this.imgRect.width + 10; //计算大图偏移量

      this.zoomPosition.x = this.maskX * (this.zoomImgWidth / this.imgRect.width);
      this.zoomPosition.y = this.maskY * (this.zoomImgHeight / this.imgRect.height);
    },
    handleOut: function handleOut() {
      this.zoomShow = false;
    },
    outXCheck: function outXCheck(x) {
      x = x - this.maskRect.width / 2;

      if (x < 0) {
        return 0;
      }

      if (x + this.maskRect.width > this.imgRect.width) {
        return this.imgRect.width - this.maskRect.width;
      }

      return x;
    },
    outYCheck: function outYCheck(y) {
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
});
// CONCATENATED MODULE: ./src/components/ImageMagnifier.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ImageMagnifiervue_type_script_lang_js_ = (ImageMagnifiervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/ImageMagnifier.vue





/* normalize component */

var component = normalizeComponent(
  components_ImageMagnifiervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ImageMagnifier = (component.exports);
// CONCATENATED MODULE: ./src/main.js


var main_install = function install(Vue) {
  Vue.component('image-magnifier', ImageMagnifier);
};

if (typeof window !== 'undefined' && window.Vue) {
  main_install(window.Vue);
}

/* harmony default export */ var main = ({
  install: main_install,
  ImageMagnifier: ImageMagnifier
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport ImageMagnifier */__webpack_require__.d(__webpack_exports__, "ImageMagnifier", function() { return ImageMagnifier; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (main);



/***/ })

/******/ });
});
//# sourceMappingURL=magnifier.umd.js.map