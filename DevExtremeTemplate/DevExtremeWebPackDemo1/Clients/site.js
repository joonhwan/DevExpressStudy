// css files - 순서가 중요함.
import 'devextreme/dist/css/dx.light.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'select2/dist/css/select2.css';
import './site.css';

// js files - jquery 가 맨앞에.
import * as $ from 'jquery';
window.$ = $;
window.jQuery = $;
import '@popperjs/core';
import 'bootstrap';
import 'select2/dist/js/select2';

console.log('site.js 로드됨 🚀 ');
