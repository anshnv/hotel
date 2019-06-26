// JS - 
import './js/'
// SCSS
import './index.scss'
//import './pages/page0.scss'
// CSS 
//import './css/main.css'
// PUG 
//import './pug/main.pug'

//import img
//import Icon from './icon.png'

//const img = new Image()
//img.src = Icon
//element.appendChild(img)
//require('../dist/index.html');
import $ from 'jquery';
window.$ = window.jQuery = $;
global.jQuery = $;
global.$ = $;

require('webpack-jquery-ui');
import 'jquery-ui/ui/widgets/datepicker.js';
//var $ = require("jquery"),
        //require("jquery-ui");
				
$('.datepicker').datepicker()