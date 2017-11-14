/*
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
var __extends=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}();define(["require","exports","wijmo/wijmo.react.base","wijmo/wijmo.chart.hierarchical","wijmo/wijmo.react.chart.hierarchical"],function(n,t,i,r,u){"use strict";var f,e,o;Object.defineProperty(t,"__esModule",{value:!0});window.wijmo=window.wijmo||{};window.wijmo.react=window.wijmo.react||{};window.wijmo.react.chart=window.wijmo.react.chart||{};window.wijmo.react.chart.hierarchical=u;f=function(n){function t(t){return n.call(this,t,r.Sunburst,{objectProps:['palette','plotMargin','footerStyle','headerStyle','itemsSource','bindingName','childItemsPath']})||this}return __extends(t,n),t}(i.ComponentBase);t.Sunburst=f;e=function(n){function t(t){return n.call(this,t,r.TreeMap,{objectProps:['palette','plotMargin','footerStyle','headerStyle','itemsSource','bindingName','childItemsPath']})||this}return __extends(t,n),t}(i.ComponentBase);t.TreeMap=e;o=i})