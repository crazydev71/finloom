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
var __extends=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}();define(["require","exports","wijmo/wijmo.react.base","wijmo/wijmo.olap","wijmo/wijmo.react.olap"],function(n,t,i,r,u){"use strict";var f,e,o,s;Object.defineProperty(t,"__esModule",{value:!0});window.wijmo=window.wijmo||{};window.wijmo.react=window.wijmo.react||{};window.wijmo.react.olap=u;f=function(n){function t(t){return n.call(this,t,r.PivotGrid,{objectProps:['childItemsPath','mergeManager','itemsSource']})||this}return __extends(t,n),t}(i.ComponentBase);t.PivotGrid=f;e=function(n){function t(t){return n.call(this,t,r.PivotChart,{objectProps:['itemsSource']})||this}return __extends(t,n),t}(i.ComponentBase);t.PivotChart=e;o=function(n){function t(t){return n.call(this,t,r.PivotPanel,{objectProps:['engine','itemsSource']})||this}return __extends(t,n),t}(i.ComponentBase);t.PivotPanel=o;s=i})