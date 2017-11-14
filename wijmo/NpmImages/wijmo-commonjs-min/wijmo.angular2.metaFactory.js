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
"use strict";var __extends=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}(),wjcMetafactory,MetaFactory,PropDesc,EventDesc,ComplexPropDesc;Object.defineProperty(exports,"__esModule",{value:!0});wjcMetafactory=require("wijmo/wijmo.metaFactory");MetaFactory=function(n){function t(){return n!==null&&n.apply(this,arguments)||this}return __extends(t,n),t.CreateProp=function(n,t,i,r,u,f){return new PropDesc(n,t,i,r,u,f)},t.CreateEvent=function(n,t){return new EventDesc(n,t)},t.CreateComplexProp=function(n,t,i){return new ComplexPropDesc(n,t,i)},t.findProp=function(n,t){return wjcMetafactory.ControlMetaFactory.findProp(n,t)},t.findEvent=function(n,t){return wjcMetafactory.ControlMetaFactory.findEvent(n,t)},t.findComplexProp=function(n,t){return wjcMetafactory.ControlMetaFactory.findComplexProp(n,t)},t}(wjcMetafactory.ControlMetaFactory);exports.MetaFactory=MetaFactory;PropDesc=function(n){function t(){return n!==null&&n.apply(this,arguments)||this}return __extends(t,n),t}(wjcMetafactory.PropDescBase);exports.PropDesc=PropDesc;EventDesc=function(n){function t(){return n!==null&&n.apply(this,arguments)||this}return __extends(t,n),t}(wjcMetafactory.EventDescBase);exports.EventDesc=EventDesc;ComplexPropDesc=function(n){function t(){return n!==null&&n.apply(this,arguments)||this}return __extends(t,n),t}(wjcMetafactory.ComplexPropDescBase);exports.ComplexPropDesc=ComplexPropDesc