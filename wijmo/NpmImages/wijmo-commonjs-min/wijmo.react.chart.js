﻿/*
    *
    * Wijmo Library 5.20172.359
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */
"use strict";var __extends=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}(),FlexChart,FlexPie,Wj;Object.defineProperty(exports,"__esModule",{value:!0});var wjcReactBase=require("wijmo/wijmo.react.base"),wjcChart=require("wijmo/wijmo.chart"),wjcSelf=require("wijmo/wijmo.react.chart");window.wijmo=window.wijmo||{};window.wijmo.react=window.wijmo.react||{};window.wijmo.react.chart=wjcSelf;FlexChart=function(n){function t(t){return n.call(this,t,wjcChart.FlexChart,{objectProps:['palette','plotMargin','footerStyle','headerStyle','itemsSource','options','selection']})||this}return __extends(t,n),t}(wjcReactBase.ComponentBase);exports.FlexChart=FlexChart;FlexPie=function(n){function t(t){return n.call(this,t,wjcChart.FlexPie,{objectProps:['palette','plotMargin','footerStyle','headerStyle','itemsSource']})||this}return __extends(t,n),t}(wjcReactBase.ComponentBase);exports.FlexPie=FlexPie;Wj=wjcReactBase