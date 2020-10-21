/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/04-extended/index.js":
/*!**********************************!*\
  !*** ./src/04-extended/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yt_logo_rgb_light_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../yt_logo_rgb_light.svg */ "./src/yt_logo_rgb_light.svg");

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockControls = _wp$editor.BlockControls,
    InspectorControls = _wp$editor.InspectorControls,
    RichText = _wp$editor.RichText,
    URLInputButton = _wp$editor.URLInputButton;
var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
    PanelBody = _wp$components.PanelBody;

var youTubeURL = "https://www.youtube-nocookie.com/embed/jyImWMzQw88?modestbranding=1&#038;rel=0&#038;showinfo=0";
registerBlockType("wpme/extended", {
  title: __("GDPR Compliant YouTube Player", "wpme"),
  icon: {
    src: _yt_logo_rgb_light_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
  },
  category: "wpme",
  attributes: {
    episodeURL: {
      type: "string",
      source: "attribute",
      selector: ".wpme-cta a",
      attribute: "href"
    },
    youTubeURL: {
      type: "string",
      source: "attribute",
      selector: ".wp-block-embed iframe",
      attribute: "src",
      default: youTubeURL
    }
  },
  supports: {
    align: ["left", "right", "center"]
  },
  edit: function edit(props) {
    // Lift info from props and populate various constants.
    var _props$attributes = props.attributes,
        episodeImage = _props$attributes.episodeImage,
        episodeURL = _props$attributes.episodeURL,
        youTubeURL = _props$attributes.youTubeURL,
        className = props.className,
        setAttributes = props.setAttributes; // Grab imageObject, set the value of episodeImage to imageObject.sizes.wpmeFeatImg.url.

    var onImageSelect = function onImageSelect(imageObject) {
      setAttributes({
        episodeImage: imageObject.sizes.wpmeFeatImg.url
      });
    }; // Grab newEpisodeURL, set the value of episodeURL to newEpisodeURL.


    var onChangeEpisodeURL = function onChangeEpisodeURL(newEpisodeURL) {
      setAttributes({
        episodeURL: newEpisodeURL
      });
      var youTubeVideoID = newEpisodeURL.replace("https://youtu.be/", '');
      var youTubeVideoID = youTubeVideoID.replace("watch?v=", '');
      var youTubeVideoID = youTubeVideoID.replace("https://www.youtube.com/", '');
      var youTubeVideoID = youTubeVideoID.replace("feature=youtu.be", '');
      var youTubeVideoID = youTubeVideoID.replace("amp;", '');
      var youTubeVideoID = youTubeVideoID.replace("&#038;", '');
      var youTubeVideoID = youTubeVideoID.replace("&", '');
      var newYouTubeURL = "https://www.youtube-nocookie.com/embed/" + youTubeVideoID + "?modestbranding=1&#038;rel=0&#038;showinfo=0";
      setAttributes({
        youTubeURL: newYouTubeURL
      });
    };

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "".concat(className, " wpme-block wpme-expanded")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", {
      class: "wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "wp-block-embed__wrapper"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("iframe", {
      src: youTubeURL,
      class: "resp-iframe",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowfullscreen: "",
      width: "500",
      height: "281",
      frameborder: "0"
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "wpme-cta"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: "#"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInputButton, {
      className: "wpme-dropdown__input",
      label: __("Episode URL", "wpme"),
      onChange: onChangeEpisodeURL,
      url: episodeURL
    })))];
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        episodeImage = _props$attributes2.episodeImage,
        episodeURL = _props$attributes2.episodeURL,
        youTubeURL = _props$attributes2.youTubeURL;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "wpme-block wpme-expanded"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", {
      class: "wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "wp-block-embed__wrapper"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("iframe", {
      src: youTubeURL,
      class: "resp-iframe",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowfullscreen: "",
      width: "500",
      height: "281",
      align: "middle",
      frameborder: "0"
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "wpme-cta"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: episodeURL
    })));
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _04_extended__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./04-extended */ "./src/04-extended/index.js");
/**
 * Import blocks as components.
 */


/***/ }),

/***/ "./src/yt_logo_rgb_light.svg":
/*!***********************************!*\
  !*** ./src/yt_logo_rgb_light.svg ***!
  \***********************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgYtLogoRgbLight; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, ".yt_logo_rgb_light_svg__st2{fill:#282828}");

var _ref2 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M171.2 87.9c-2-7.4-7.8-13.3-15.3-15.3C142.5 69 88.4 69 88.4 69s-54.1 0-67.5 3.6c-7.4 2-13.3 7.8-15.3 15.3C2 101.3 2 129.5 2 129.5s0 28.1 3.6 41.6c2 7.4 7.8 13.3 15.3 15.3 13.5 3.6 67.5 3.6 67.5 3.6s54.1 0 67.5-3.6c7.4-2 13.3-7.8 15.3-15.3 3.6-13.5 3.6-41.6 3.6-41.6s0-28.2-3.6-41.6z",
  fill: "red"
});

var _ref3 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#fff",
  d: "M71.1 155.4l44.9-25.9-44.9-26z"
});

var _ref4 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "yt_logo_rgb_light_svg__st2",
  d: "M252.9 179c-3.4-2.3-5.8-5.9-7.3-10.8-1.4-4.9-2.2-11.3-2.2-19.4v-11c0-8.2.8-14.7 2.5-19.6 1.7-4.9 4.2-8.6 7.7-10.8 3.5-2.3 8.1-3.4 13.8-3.4 5.6 0 10.1 1.2 13.5 3.5 3.4 2.3 5.8 5.9 7.4 10.8 1.6 4.9 2.3 11.4 2.3 19.6v11c0 8.1-.8 14.6-2.3 19.5-1.5 4.9-4 8.5-7.4 10.8s-8.1 3.4-13.9 3.4c-6-.1-10.7-1.3-14.1-3.6zm19.1-11.8c.9-2.5 1.4-6.5 1.4-12.1v-23.6c0-5.4-.5-9.4-1.4-11.9-1-2.5-2.6-3.8-5-3.8-2.3 0-3.9 1.3-4.9 3.8-1 2.5-1.4 6.5-1.4 11.9v23.6c0 5.6.5 9.6 1.4 12.1.9 2.5 2.5 3.7 4.9 3.7s4.1-1.3 5-3.7zM515.4 149.1v3.8c0 4.9.1 8.5.4 10.9.3 2.4.9 4.2 1.8 5.3.9 1.1 2.3 1.7 4.2 1.7 2.5 0 4.3-1 5.3-3s1.5-5.3 1.6-9.9l14.7.9c.1.7.1 1.6.1 2.7 0 7-1.9 12.2-5.7 15.7-3.8 3.5-9.2 5.2-16.2 5.2-8.4 0-14.3-2.6-17.7-7.9-3.4-5.3-5.1-13.4-5.1-24.5v-13.2c0-11.4 1.8-19.7 5.3-24.9 3.5-5.2 9.5-7.9 18-7.9 5.8 0 10.3 1.1 13.5 3.2s5.3 5.5 6.6 10c1.3 4.5 1.9 10.8 1.9 18.8v13l-28.7.1zm2.2-31.9c-.9 1.1-1.4 2.8-1.7 5.3-.3 2.4-.4 6.1-.4 11.1v5.4H528v-5.4c0-4.9-.2-8.6-.5-11.1s-.9-4.3-1.8-5.3-2.2-1.6-4-1.6c-1.9 0-3.3.5-4.1 1.6zM211.3 147.6l-19.4-70.1h16.9l6.8 31.8c1.7 7.8 3 14.5 3.8 20h.5c.6-4 1.8-10.6 3.8-19.9l7-31.9h16.9L228 147.6v33.6h-16.8l.1-33.6zM345.7 105.5v75.8h-13.3l-1.5-9.3h-.4c-3.6 7-9.1 10.5-16.3 10.5-5 0-8.7-1.7-11.1-4.9-2.4-3.3-3.6-8.5-3.6-15.5v-56.6h17.1v55.6c0 3.4.4 5.8 1.1 7.2.7 1.4 2 2.2 3.7 2.2 1.5 0 2.9-.5 4.3-1.4s2.4-2.1 3-3.5v-60.2l17 .1zM433.2 105.5v75.8h-13.3l-1.5-9.3h-.4c-3.6 7-9.1 10.5-16.3 10.5-5 0-8.7-1.7-11.1-4.9-2.4-3.3-3.6-8.5-3.6-15.5v-56.6h17.1v55.6c0 3.4.4 5.8 1.1 7.2.7 1.4 2 2.2 3.7 2.2 1.5 0 2.9-.5 4.3-1.4s2.4-2.1 3-3.5v-60.2l17 .1z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "yt_logo_rgb_light_svg__st2",
  d: "M392.1 91.3h-16.9v90h-16.7v-90h-16.9V77.6h50.6v13.7zM489.7 117.6c-1-4.8-2.7-8.2-5-10.4-2.3-2.1-5.5-3.2-9.5-3.2-3.1 0-6.1.9-8.8 2.7s-4.8 4.1-6.3 7h-.1v-40h-16.4v107.5h14.1l1.7-7.2h.4c1.3 2.6 3.3 4.6 5.9 6.1 2.6 1.5 5.6 2.2 8.8 2.2 5.8 0 10-2.7 12.7-8 2.7-5.3 4.1-13.6 4.1-24.9v-12c-.1-8.4-.6-15-1.6-19.8zM474 148.5c0 5.5-.2 9.8-.7 13s-1.2 5.4-2.3 6.7c-1.1 1.3-2.5 2-4.3 2-1.4 0-2.7-.3-3.9-1-1.2-.7-2.2-1.7-2.9-3v-43c.6-2.1 1.6-3.7 3-5.1 1.4-1.3 2.9-2 4.6-2 1.7 0 3.1.7 4 2 1 1.4 1.6 3.6 2 6.9.4 3.2.6 7.8.6 13.7l-.1 9.8z"
}));

var SvgYtLogoRgbLight = function SvgYtLogoRgbLight(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    id: "yt_logo_rgb_light_svg__Layer_1",
    x: 0,
    y: 0,
    viewBox: "0 0 550 255.1",
    xmlSpace: "preserve"
  }, props), _ref, _ref2, _ref3, _ref4);
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjMuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1NTAgMjU1LjEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU1MCAyNTUuMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRjAwMDA7fQoJLnN0MXtmaWxsOiNGRkZGRkY7fQoJLnN0MntmaWxsOiMyODI4Mjg7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNzEuMiw4Ny45Yy0yLTcuNC03LjgtMTMuMy0xNS4zLTE1LjNDMTQyLjUsNjksODguNCw2OSw4OC40LDY5cy01NC4xLDAtNjcuNSwzLjZjLTcuNCwyLTEzLjMsNy44LTE1LjMsMTUuMwoJCUMyLDEwMS4zLDIsMTI5LjUsMiwxMjkuNXMwLDI4LjEsMy42LDQxLjZjMiw3LjQsNy44LDEzLjMsMTUuMywxNS4zYzEzLjUsMy42LDY3LjUsMy42LDY3LjUsMy42czU0LjEsMCw2Ny41LTMuNgoJCWM3LjQtMiwxMy4zLTcuOCwxNS4zLTE1LjNjMy42LTEzLjUsMy42LTQxLjYsMy42LTQxLjZTMTc0LjgsMTAxLjMsMTcxLjIsODcuOXoiLz4KCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iNzEuMSwxNTUuNCAxMTYsMTI5LjUgNzEuMSwxMDMuNSAJIi8+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjUyLjksMTc5Yy0zLjQtMi4zLTUuOC01LjktNy4zLTEwLjhjLTEuNC00LjktMi4yLTExLjMtMi4yLTE5LjR2LTExYzAtOC4yLDAuOC0xNC43LDIuNS0xOS42CgkJCWMxLjctNC45LDQuMi04LjYsNy43LTEwLjhjMy41LTIuMyw4LjEtMy40LDEzLjgtMy40YzUuNiwwLDEwLjEsMS4yLDEzLjUsMy41YzMuNCwyLjMsNS44LDUuOSw3LjQsMTAuOGMxLjYsNC45LDIuMywxMS40LDIuMywxOS42CgkJCXYxMWMwLDguMS0wLjgsMTQuNi0yLjMsMTkuNWMtMS41LDQuOS00LDguNS03LjQsMTAuOHMtOC4xLDMuNC0xMy45LDMuNEMyNjEsMTgyLjUsMjU2LjMsMTgxLjMsMjUyLjksMTc5eiBNMjcyLDE2Ny4yCgkJCWMwLjktMi41LDEuNC02LjUsMS40LTEyLjF2LTIzLjZjMC01LjQtMC41LTkuNC0xLjQtMTEuOWMtMS0yLjUtMi42LTMuOC01LTMuOGMtMi4zLDAtMy45LDEuMy00LjksMy44Yy0xLDIuNS0xLjQsNi41LTEuNCwxMS45CgkJCXYyMy42YzAsNS42LDAuNSw5LjYsMS40LDEyLjFjMC45LDIuNSwyLjUsMy43LDQuOSwzLjdTMjcxLjEsMTY5LjYsMjcyLDE2Ny4yeiIvPgoJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik01MTUuNCwxNDkuMXYzLjhjMCw0LjksMC4xLDguNSwwLjQsMTAuOWMwLjMsMi40LDAuOSw0LjIsMS44LDUuM2MwLjksMS4xLDIuMywxLjcsNC4yLDEuN2MyLjUsMCw0LjMtMSw1LjMtMwoJCQljMS0yLDEuNS01LjMsMS42LTkuOWwxNC43LDAuOWMwLjEsMC43LDAuMSwxLjYsMC4xLDIuN2MwLDctMS45LDEyLjItNS43LDE1LjdjLTMuOCwzLjUtOS4yLDUuMi0xNi4yLDUuMgoJCQljLTguNCwwLTE0LjMtMi42LTE3LjctNy45Yy0zLjQtNS4zLTUuMS0xMy40LTUuMS0yNC41di0xMy4yYzAtMTEuNCwxLjgtMTkuNyw1LjMtMjQuOWMzLjUtNS4yLDkuNS03LjksMTgtNy45CgkJCWM1LjgsMCwxMC4zLDEuMSwxMy41LDMuMnM1LjMsNS41LDYuNiwxMGMxLjMsNC41LDEuOSwxMC44LDEuOSwxOC44djEzTDUxNS40LDE0OS4xTDUxNS40LDE0OS4xeiBNNTE3LjYsMTE3LjIKCQkJYy0wLjksMS4xLTEuNCwyLjgtMS43LDUuM2MtMC4zLDIuNC0wLjQsNi4xLTAuNCwxMS4xdjUuNGgxMi41di01LjRjMC00LjktMC4yLTguNi0wLjUtMTEuMXMtMC45LTQuMy0xLjgtNS4zCgkJCWMtMC45LTEtMi4yLTEuNi00LTEuNkM1MTkuOCwxMTUuNiw1MTguNCwxMTYuMSw1MTcuNiwxMTcuMnoiLz4KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjExLjMsMTQ3LjZsLTE5LjQtNzAuMWgxNi45bDYuOCwzMS44YzEuNyw3LjgsMywxNC41LDMuOCwyMGgwLjVjMC42LTQsMS44LTEwLjYsMy44LTE5LjlsNy0zMS45aDE2LjkKCQkJbC0xOS42LDcwLjF2MzMuNmgtMTYuOEwyMTEuMywxNDcuNkwyMTEuMywxNDcuNnoiLz4KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMzQ1LjcsMTA1LjV2NzUuOGgtMTMuM2wtMS41LTkuM2gtMC40Yy0zLjYsNy05LjEsMTAuNS0xNi4zLDEwLjVjLTUsMC04LjctMS43LTExLjEtNC45CgkJCWMtMi40LTMuMy0zLjYtOC41LTMuNi0xNS41di01Ni42aDE3LjF2NTUuNmMwLDMuNCwwLjQsNS44LDEuMSw3LjJjMC43LDEuNCwyLDIuMiwzLjcsMi4yYzEuNSwwLDIuOS0wLjUsNC4zLTEuNHMyLjQtMi4xLDMtMy41CgkJCXYtNjAuMkwzNDUuNywxMDUuNUwzNDUuNywxMDUuNXoiLz4KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNDMzLjIsMTA1LjV2NzUuOGgtMTMuM2wtMS41LTkuM0g0MThjLTMuNiw3LTkuMSwxMC41LTE2LjMsMTAuNWMtNSwwLTguNy0xLjctMTEuMS00LjkKCQkJYy0yLjQtMy4zLTMuNi04LjUtMy42LTE1LjV2LTU2LjZoMTcuMXY1NS42YzAsMy40LDAuNCw1LjgsMS4xLDcuMmMwLjcsMS40LDIsMi4yLDMuNywyLjJjMS41LDAsMi45LTAuNSw0LjMtMS40czIuNC0yLjEsMy0zLjUKCQkJdi02MC4yTDQzMy4yLDEwNS41TDQzMy4yLDEwNS41eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0zOTIuMSw5MS4zaC0xNi45djkwaC0xNi43di05MGgtMTYuOVY3Ny42aDUwLjZWOTEuM3oiLz4KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNDg5LjcsMTE3LjZjLTEtNC44LTIuNy04LjItNS0xMC40Yy0yLjMtMi4xLTUuNS0zLjItOS41LTMuMmMtMy4xLDAtNi4xLDAuOS04LjgsMi43cy00LjgsNC4xLTYuMyw3aC0wLjEKCQkJVjczLjdoLTE2LjR2MTA3LjVoMTQuMWwxLjctNy4yaDAuNGMxLjMsMi42LDMuMyw0LjYsNS45LDYuMWMyLjYsMS41LDUuNiwyLjIsOC44LDIuMmM1LjgsMCwxMC0yLjcsMTIuNy04CgkJCWMyLjctNS4zLDQuMS0xMy42LDQuMS0yNC45di0xMkM0OTEuMiwxMjksNDkwLjcsMTIyLjQsNDg5LjcsMTE3LjZ6IE00NzQsMTQ4LjVjMCw1LjUtMC4yLDkuOC0wLjcsMTNzLTEuMiw1LjQtMi4zLDYuNwoJCQljLTEuMSwxLjMtMi41LDItNC4zLDJjLTEuNCwwLTIuNy0wLjMtMy45LTFjLTEuMi0wLjctMi4yLTEuNy0yLjktM3YtNDNjMC42LTIuMSwxLjYtMy43LDMtNS4xYzEuNC0xLjMsMi45LTIsNC42LTIKCQkJYzEuNywwLDMuMSwwLjcsNCwyYzEsMS40LDEuNiwzLjYsMiw2LjljMC40LDMuMiwwLjYsNy44LDAuNiwxMy43TDQ3NCwxNDguNUw0NzQsMTQ4LjV6Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==");


/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ })

/******/ });
//# sourceMappingURL=index.js.map