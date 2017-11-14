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
System.register(["wijmo/wijmo.react.base","wijmo/wijmo.gauge","wijmo/wijmo.react.gauge"],function(n,t){"use strict";var u=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}(),c=t&&t.id,i,r,f,e,o,s,h;return{setters:[function(n){i=n},function(n){r=n},function(n){f=n}],execute:function(){window.wijmo=window.wijmo||{};window.wijmo.react=window.wijmo.react||{};window.wijmo.react.gauge=f;e=function(n){function t(t){return n.call(this,t,r.LinearGauge)||this}return u(t,n),t}(i.ComponentBase);n("LinearGauge",e);o=function(n){function t(t){return n.call(this,t,r.BulletGraph)||this}return u(t,n),t}(i.ComponentBase);n("BulletGraph",o);s=function(n){function t(t){return n.call(this,t,r.RadialGauge)||this}return u(t,n),t}(i.ComponentBase);n("RadialGauge",s);h=i}}})