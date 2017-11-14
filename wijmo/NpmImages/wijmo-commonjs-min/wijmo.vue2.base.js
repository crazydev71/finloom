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
"use strict";function _getProps(n,t){for(var e,u,o,f=window,s=n.split('.'),r=0;r<s.length&&f!=null;r++)f=f[s[r]];if(!f)return null;for(e=['control','initialized'],u=f.prototype;u!=Object.prototype;u=Object.getPrototypeOf(u))for(o=Object.getOwnPropertyNames(u),r=0;r<o.length;r++){var i=o[r],c=Object.getOwnPropertyDescriptor(u,i),h=i.match(/^on[A-Z]/);(c.set||h)&&(h&&(i=i[2].toLowerCase()+i.substr(3)),e.indexOf(i)<0&&!i.match(/disabled|required/)&&e.push(i))}return t&&Array.prototype.push.apply(e,t),e}function _initialize(n,t){function u(n){this.ctl[this.prop]=n}var i=[];for(var r in n.$options.propsData)i.push(r);return i.sort(),i.forEach(function(i){!(i in t)||t[i]instanceof wjcCore.Event||wjcCore.isUndefined(n[i])||(t[i]=n[i],n.$watch(i,u.bind({ctl:t,prop:i})))}),i.forEach(function(i){if(t[i]instanceof wjcCore.Event){var r=t[i];wjcCore.isFunction(n[i])&&r.addHandler(n[i],t)}}),n.control&&n.$parent&&(n.$parent[n.control]=t),wjcCore.isFunction(n.initialized)&&n.initialized(t),t}Object.defineProperty(exports,"__esModule",{value:!0});var wjcCore=require("wijmo/wijmo"),wjcSelf=require("wijmo/wijmo.vue2.base");window.wijmo=window.wijmo||{};window.wijmo.vue2=window.wijmo.vue2||{};window.wijmo.vue2.base=wjcSelf;exports._getProps=_getProps;exports._initialize=_initialize