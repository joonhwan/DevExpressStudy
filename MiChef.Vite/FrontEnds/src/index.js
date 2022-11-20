// devextreme 등 asp net core 관련 스크립트를 사용하려면
// vite 로 bundle된 script를 사용하기 어려움(방법 못 찾음)
// --> webpack 으로 번들링하고, 나머지 대부분?의 frontend 코드는 vite로 번들
// vite가 너무 빠르다..
import "devextreme/dist/css/dx.dark.compact.css";
// import "devextreme/dist/css/dx.dark.css";

import jQuery from "jquery";
window.jQuery = jQuery;
window.$ = jQuery;

import "select2/dist/js/select2";
import "select2/dist/css/select2.css";

console.log("Done!");
// require("./dx.bundle.js");
// window.DevExpress = DevExpress;
// import DevExpress from "devextreme/bundles/modules/core";
// window.DevExpress = DevExpress;

// require("devextreme/integration/jquery");
