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
System.register(["wijmo/wijmo.react.base","wijmo/wijmo.input","wijmo/wijmo.react.input","react"],function(n,t){"use strict";var u=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}(),it=t&&t.id,i,r,f,e,o,s,h,c,l,a,v,y,p,w,b,k,d,g,nt,tt;return{setters:[function(n){i=n},function(n){r=n},function(n){f=n},function(n){e=n}],execute:function(){window.wijmo=window.wijmo||{};window.wijmo.react=window.wijmo.react||{};window.wijmo.react.input=f;o=function(n){function t(t){return n.call(this,t,r.ComboBox,{objectProps:['itemsSource','selectedItem','selectedValue']})||this}return u(t,n),t}(i.ComponentBase);n("ComboBox",o);s=function(n){function t(t){return n.call(this,t,r.AutoComplete,{objectProps:['itemsSource','selectedItem','selectedValue']})||this}return u(t,n),t}(i.ComponentBase);n("AutoComplete",s);h=function(n){function t(t){return n.call(this,t,r.Calendar)||this}return u(t,n),t}(i.ComponentBase);n("Calendar",h);c=function(n){function t(t){return n.call(this,t,r.ColorPicker,{objectProps:['palette']})||this}return u(t,n),t}(i.ComponentBase);n("ColorPicker",c);l=function(n){function t(t){return n.call(this,t,r.InputMask)||this}return u(t,n),t}(i.ComponentBase);n("InputMask",l);a=function(n){function t(t){return n.call(this,t,r.InputColor)||this}return u(t,n),t}(i.ComponentBase);n("InputColor",a);v=function(n){function t(t){return n.call(this,t,r.MultiSelect,{objectProps:['itemsSource','selectedItem','selectedValue','checkedItems']})||this}return u(t,n),t}(i.ComponentBase);n("MultiSelect",v);y=function(n){function t(t){return n.call(this,t,r.MultiAutoComplete,{objectProps:['itemsSource','selectedItem','selectedValue','selectedItems']})||this}return u(t,n),t}(i.ComponentBase);n("MultiAutoComplete",y);p=function(n){function t(t){return n.call(this,t,r.InputNumber)||this}return u(t,n),t}(i.ComponentBase);n("InputNumber",p);w=function(n){function t(t){return n.call(this,t,r.InputDate)||this}return u(t,n),t}(i.ComponentBase);n("InputDate",w);b=function(n){function t(t){return n.call(this,t,r.InputTime,{objectProps:['itemsSource','selectedItem','selectedValue']})||this}return u(t,n),t}(i.ComponentBase);n("InputTime",b);k=function(n){function t(t){return n.call(this,t,r.InputDateTime)||this}return u(t,n),t}(i.ComponentBase);n("InputDateTime",k);d=function(n){function t(t){return n.call(this,t,r.ListBox,{objectProps:['itemsSource','selectedItem','selectedValue','checkedItems']})||this}return u(t,n),t}(i.ComponentBase);n("ListBox",d);g=function(n){function t(t){return n.call(this,t,r.Menu,{objectProps:['itemsSource','selectedItem','selectedValue','value']})||this}return u(t,n),t}(i.ComponentBase);n("Menu",g);nt=function(n){function t(t){return n.call(this,t,r.Popup)||this}return u(t,n),t.prototype.render=function(){return e.createElement('div',null,this.props.children)},t}(i.ComponentBase);n("Popup",nt);tt=i}}})