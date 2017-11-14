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
var __extends=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}();define(["require","exports","wijmo/wijmo","wijmo/wijmo.react.base","react-dom","react"],function(n,t,i,r,u,f){"use strict";Object.defineProperty(t,"__esModule",{value:!0});window.wijmo=window.wijmo||{};window.wijmo.react=window.wijmo.react||{};window.wijmo.react.base=r;var e=function(n){function t(t,i,r){var u=n.call(this,t)||this,f,e,o;for(u._objPropHash={},u.props=t,u.controlType=i,f=0,e=r&&r.objectProps||[];f<e.length;f++)o=e[f],u._objPropHash[o]=!0;return u}return __extends(t,n),t.prototype.render=function(){return f.createElement('div')},t.prototype.componentDidMount=function(){var r=u.findDOMNode(this),f=new this.controlType(r),n=this.props,e={};for(var t in n)if(t in f)e[t]=n[t];else switch(t){case'className':i.addClass(r,n.className);break;case'style':i.setCss(r,n.style);break;default:r[t]!=null&&(r[t]=n[t])}return f.initialize(e),i.isFunction(n.initialized)&&n.initialized(f),f},t.prototype.componentWillUnmount=function(){this._getControl(this).dispose()},t.prototype.shouldComponentUpdate=function(n){var t=this._getControl(this);return this._copy(t,n),!0},t.prototype._getControl=function(n){var t=u.findDOMNode(n);return i.Control.getControl(t)},t.prototype._copy=function(n,t){var s,r,u,h,o,e,f;if(n&&t)for(r in t)if(u=t[r],h=r in n||r=='className'||r=='style',h&&!this._isEvent(n,r)&&!this._sameValue(n[r],u))if(u==null)n[r]=u;else if(r=='className')n.hostElement&&i.addClass(n.hostElement,t[r]);else if(r=='style')n.hostElement&&i.setCss(n.hostElement,t[r]);else if(i.isPrimitive(u)||this._objPropHash[r]&&n===(s||(s=this._getControl(this))))n[r]=u;else if(i.isArray(u)&&i.isArray(n[r])){if(o=n[r],e=u,e.length==o.length)for(f=0;f<e.length;f++)this._copy(o[f],e[f])}else i.isObject(u)&&this._copy(n[r],t[r])},t.prototype._sameValue=function(n,t){return n==t||i.DateTime.equals(n,t)},t.prototype._isEvent=function(n,t){var r=n&&n[t];return r!=null&&r instanceof i.Event},t}(f.Component);t.ComponentBase=e})