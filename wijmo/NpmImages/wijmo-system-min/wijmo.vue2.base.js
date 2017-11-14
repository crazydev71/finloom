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
System.register(["wijmo/wijmo","wijmo/wijmo.vue2.base"],function(n,t){"use strict";function u(n,t){for(var e,u,o,f=window,s=n.split('.'),r=0;r<s.length&&f!=null;r++)f=f[s[r]];if(!f)return null;for(e=['control','initialized'],u=f.prototype;u!=Object.prototype;u=Object.getPrototypeOf(u))for(o=Object.getOwnPropertyNames(u),r=0;r<o.length;r++){var i=o[r],c=Object.getOwnPropertyDescriptor(u,i),h=i.match(/^on[A-Z]/);(c.set||h)&&(h&&(i=i[2].toLowerCase()+i.substr(3)),e.indexOf(i)<0&&!i.match(/disabled|required/)&&e.push(i))}return t&&Array.prototype.push.apply(e,t),e}function f(n,t){function f(n){this.ctl[this.prop]=n}var r=[];for(var u in n.$options.propsData)r.push(u);return r.sort(),r.forEach(function(r){!(r in t)||t[r]instanceof i.Event||i.isUndefined(n[r])||(t[r]=n[r],n.$watch(r,f.bind({ctl:t,prop:r})))}),r.forEach(function(r){if(t[r]instanceof i.Event){var u=t[r];i.isFunction(n[r])&&u.addHandler(n[r],t)}}),n.control&&n.$parent&&(n.$parent[n.control]=t),i.isFunction(n.initialized)&&n.initialized(t),t}var e=t&&t.id,i,r;return n("_getProps",u),n("_initialize",f),{setters:[function(n){i=n},function(n){r=n}],execute:function(){window.wijmo=window.wijmo||{};window.wijmo.vue2=window.wijmo.vue2||{};window.wijmo.vue2.base=r}}})