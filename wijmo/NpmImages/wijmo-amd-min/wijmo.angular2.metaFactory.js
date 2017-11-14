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
var __extends=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}();define(["require","exports","wijmo/wijmo.metaFactory"],function(n,t,i){"use strict";var e,r,u,f;Object.defineProperty(t,"__esModule",{value:!0});e=function(n){function t(){return n!==null&&n.apply(this,arguments)||this}return __extends(t,n),t.CreateProp=function(n,t,i,u,f,e){return new r(n,t,i,u,f,e)},t.CreateEvent=function(n,t){return new u(n,t)},t.CreateComplexProp=function(n,t,i){return new f(n,t,i)},t.findProp=function(n,t){return i.ControlMetaFactory.findProp(n,t)},t.findEvent=function(n,t){return i.ControlMetaFactory.findEvent(n,t)},t.findComplexProp=function(n,t){return i.ControlMetaFactory.findComplexProp(n,t)},t}(i.ControlMetaFactory);t.MetaFactory=e;r=function(n){function t(){return n!==null&&n.apply(this,arguments)||this}return __extends(t,n),t}(i.PropDescBase);t.PropDesc=r;u=function(n){function t(){return n!==null&&n.apply(this,arguments)||this}return __extends(t,n),t}(i.EventDescBase);t.EventDesc=u;f=function(n){function t(){return n!==null&&n.apply(this,arguments)||this}return __extends(t,n),t}(i.ComplexPropDescBase);t.ComplexPropDesc=f})