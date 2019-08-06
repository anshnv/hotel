// JS - 
import './js/'
// SCSS
import './index.scss'
//import './pages/page0.scss'
// CSS 
//import './css/main.css'
// PUG 
//import './pug/main.pug'

import $ from 'jquery';
window.$ = window.jQuery = $;
global.jQuery = $;
global.$ = $;

require('webpack-jquery-ui');
require('webpack-jquery-ui/css');
//import 'jquery-ui/ui/widgets/datepicker.js';
//var $ = require("jquery"),
        //require("jquery-ui");
				
//$('.datepicker').datepicker({inline: true})
//$('. my-element').datepicker({inline: true})

//import airDatapicker from 'air-datepicker';

import 'air-datepicker/dist/css/datepicker.min.css'
import 'air-datepicker/dist/js/datepicker.min.js'

import 'jquery/dist/jquery.min.js'
//import 'jquery/dist/js/datepicker.min.js'