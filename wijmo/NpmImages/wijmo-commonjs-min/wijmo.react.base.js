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
"use strict";var __extends=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}(),wjcCore,wjcSelf;Object.defineProperty(exports,"__esModule",{value:!0});wjcCore=require("wijmo/wijmo");wjcSelf=require("wijmo/wijmo.react.base");window.wijmo=window.wijmo||{};window.wijmo.react=window.wijmo.react||{};window.wijmo.react.base=wjcSelf;var ReactDOM=require("react-dom"),React=require("react"),ComponentBase=function(n){function t(t,i,r){var u=n.call(this,t)||this,f,e,o;for(u._objPropHash={},u.props=t,u.controlType=i,f=0,e=r&&r.objectProps||[];f<e.length;f++)o=e[f],u._objPropHash[o]=!0;return u}return __extends(t,n),t.prototype.render=function(){return React.createElement('div')},t.prototype.componentDidMount=function(){var i=ReactDOM.findDOMNode(this),r=new this.controlType(i),n=this.props,u={};for(var t in n)if(t in r)u[t]=n[t];else switch(t){case'className':wjcCore.addClass(i,n.className);break;case'style':wjcCore.setCss(i,n.style);break;default:i[t]!=null&&(i[t]=n[t])}return r.initialize(u),wjcCore.isFunction(n.initialized)&&n.initialized(r),r},t.prototype.componentWillUnmount=function(){this._getControl(this).dispose()},t.prototype.shouldComponentUpdate=function(n){var t=this._getControl(this);return this._copy(t,n),!0},t.prototype._getControl=function(n){var t=ReactDOM.findDOMNode(n);return wjcCore.Control.getControl(t)},t.prototype._copy=function(n,t){var o,i,r,s,e,f,u;if(n&&t)for(i in t)if(r=t[i],s=i in n||i=='className'||i=='style',s&&!this._isEvent(n,i)&&!this._sameValue(n[i],r))if(r==null)n[i]=r;else if(i=='className')n.hostElement&&wjcCore.addClass(n.hostElement,t[i]);else if(i=='style')n.hostElement&&wjcCore.setCss(n.hostElement,t[i]);else if(wjcCore.isPrimitive(r)||this._objPropHash[i]&&n===(o||(o=this._getControl(this))))n[i]=r;else if(wjcCore.isArray(r)&&wjcCore.isArray(n[i])){if(e=n[i],f=r,f.length==e.length)for(u=0;u<f.length;u++)this._copy(e[u],f[u])}else wjcCore.isObject(r)&&this._copy(n[i],t[i])},t.prototype._sameValue=function(n,t){return n==t||wjcCore.DateTime.equals(n,t)},t.prototype._isEvent=function(n,t){var i=n&&n[t];return i!=null&&i instanceof wjcCore.Event},t}(React.Component);exports.ComponentBase=ComponentBase