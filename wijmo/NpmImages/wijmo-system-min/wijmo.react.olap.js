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
System.register(["wijmo/wijmo.react.base","wijmo/wijmo.olap","wijmo/wijmo.react.olap"],function(n,t){"use strict";var u=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}(),c=t&&t.id,i,r,f,e,o,s,h;return{setters:[function(n){i=n},function(n){r=n},function(n){f=n}],execute:function(){window.wijmo=window.wijmo||{};window.wijmo.react=window.wijmo.react||{};window.wijmo.react.olap=f;e=function(n){function t(t){return n.call(this,t,r.PivotGrid,{objectProps:['childItemsPath','mergeManager','itemsSource']})||this}return u(t,n),t}(i.ComponentBase);n("PivotGrid",e);o=function(n){function t(t){return n.call(this,t,r.PivotChart,{objectProps:['itemsSource']})||this}return u(t,n),t}(i.ComponentBase);n("PivotChart",o);s=function(n){function t(t){return n.call(this,t,r.PivotPanel,{objectProps:['engine','itemsSource']})||this}return u(t,n),t}(i.ComponentBase);n("PivotPanel",s);h=i}}})