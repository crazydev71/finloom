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
System.register(["wijmo/wijmo.metaFactory"],function(n,t){"use strict";var r=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}(),s=t&&t.id,i,o,u,f,e;return{setters:[function(n){i=n}],execute:function(){o=function(n){function t(){return n!==null&&n.apply(this,arguments)||this}return r(t,n),t.CreateProp=function(n,t,i,r,f,e){return new u(n,t,i,r,f,e)},t.CreateEvent=function(n,t){return new f(n,t)},t.CreateComplexProp=function(n,t,i){return new e(n,t,i)},t.findProp=function(n,t){return i.ControlMetaFactory.findProp(n,t)},t.findEvent=function(n,t){return i.ControlMetaFactory.findEvent(n,t)},t.findComplexProp=function(n,t){return i.ControlMetaFactory.findComplexProp(n,t)},t}(i.ControlMetaFactory);n("MetaFactory",o);u=function(n){function t(){return n!==null&&n.apply(this,arguments)||this}return r(t,n),t}(i.PropDescBase);n("PropDesc",u);f=function(n){function t(){return n!==null&&n.apply(this,arguments)||this}return r(t,n),t}(i.EventDescBase);n("EventDesc",f);e=function(n){function t(){return n!==null&&n.apply(this,arguments)||this}return r(t,n),t}(i.ComplexPropDescBase);n("ComplexPropDesc",e)}}})