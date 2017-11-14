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
System.register(["wijmo/wijmo.react.base","wijmo/wijmo.chart.hierarchical","wijmo/wijmo.react.chart.hierarchical"],function(n,t){"use strict";var u=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}(),h=t&&t.id,i,r,f,e,o,s;return{setters:[function(n){i=n},function(n){r=n},function(n){f=n}],execute:function(){window.wijmo=window.wijmo||{};window.wijmo.react=window.wijmo.react||{};window.wijmo.react.chart=window.wijmo.react.chart||{};window.wijmo.react.chart.hierarchical=f;e=function(n){function t(t){return n.call(this,t,r.Sunburst,{objectProps:['palette','plotMargin','footerStyle','headerStyle','itemsSource','bindingName','childItemsPath']})||this}return u(t,n),t}(i.ComponentBase);n("Sunburst",e);o=function(n){function t(t){return n.call(this,t,r.TreeMap,{objectProps:['palette','plotMargin','footerStyle','headerStyle','itemsSource','bindingName','childItemsPath']})||this}return u(t,n),t}(i.ComponentBase);n("TreeMap",o);s=i}}})