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
"use strict";var __extends=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}(),React,ComboBox,AutoComplete,Calendar,ColorPicker,InputMask,InputColor,MultiSelect,MultiAutoComplete,InputNumber,InputDate,InputTime,InputDateTime,ListBox,Menu,Popup,Wj;Object.defineProperty(exports,"__esModule",{value:!0});var wjcReactBase=require("wijmo/wijmo.react.base"),wjcInput=require("wijmo/wijmo.input"),wjcSelf=require("wijmo/wijmo.react.input");window.wijmo=window.wijmo||{};window.wijmo.react=window.wijmo.react||{};window.wijmo.react.input=wjcSelf;React=require("react");ComboBox=function(n){function t(t){return n.call(this,t,wjcInput.ComboBox,{objectProps:['itemsSource','selectedItem','selectedValue']})||this}return __extends(t,n),t}(wjcReactBase.ComponentBase);exports.ComboBox=ComboBox;AutoComplete=function(n){function t(t){return n.call(this,t,wjcInput.AutoComplete,{objectProps:['itemsSource','selectedItem','selectedValue']})||this}return __extends(t,n),t}(wjcReactBase.ComponentBase);exports.AutoComplete=AutoComplete;Calendar=function(n){function t(t){return n.call(this,t,wjcInput.Calendar)||this}return __extends(t,n),t}(wjcReactBase.ComponentBase);exports.Calendar=Calendar;ColorPicker=function(n){function t(t){return n.call(this,t,wjcInput.ColorPicker,{objectProps:['palette']})||this}return __extends(t,n),t}(wjcReactBase.ComponentBase);exports.ColorPicker=ColorPicker;InputMask=function(n){function t(t){return n.call(this,t,wjcInput.InputMask)||this}return __extends(t,n),t}(wjcReactBase.ComponentBase);exports.InputMask=InputMask;InputColor=function(n){function t(t){return n.call(this,t,wjcInput.InputColor)||this}return __extends(t,n),t}(wjcReactBase.ComponentBase);exports.InputColor=InputColor;MultiSelect=function(n){function t(t){return n.call(this,t,wjcInput.MultiSelect,{objectProps:['itemsSource','selectedItem','selectedValue','checkedItems']})||this}return __extends(t,n),t}(wjcReactBase.ComponentBase);exports.MultiSelect=MultiSelect;MultiAutoComplete=function(n){function t(t){return n.call(this,t,wjcInput.MultiAutoComplete,{objectProps:['itemsSource','selectedItem','selectedValue','selectedItems']})||this}return __extends(t,n),t}(wjcReactBase.ComponentBase);exports.MultiAutoComplete=MultiAutoComplete;InputNumber=function(n){function t(t){return n.call(this,t,wjcInput.InputNumber)||this}return __extends(t,n),t}(wjcReactBase.ComponentBase);exports.InputNumber=InputNumber;InputDate=function(n){function t(t){return n.call(this,t,wjcInput.InputDate)||this}return __extends(t,n),t}(wjcReactBase.ComponentBase);exports.InputDate=InputDate;InputTime=function(n){function t(t){return n.call(this,t,wjcInput.InputTime,{objectProps:['itemsSource','selectedItem','selectedValue']})||this}return __extends(t,n),t}(wjcReactBase.ComponentBase);exports.InputTime=InputTime;InputDateTime=function(n){function t(t){return n.call(this,t,wjcInput.InputDateTime)||this}return __extends(t,n),t}(wjcReactBase.ComponentBase);exports.InputDateTime=InputDateTime;ListBox=function(n){function t(t){return n.call(this,t,wjcInput.ListBox,{objectProps:['itemsSource','selectedItem','selectedValue','checkedItems']})||this}return __extends(t,n),t}(wjcReactBase.ComponentBase);exports.ListBox=ListBox;Menu=function(n){function t(t){return n.call(this,t,wjcInput.Menu,{objectProps:['itemsSource','selectedItem','selectedValue','value']})||this}return __extends(t,n),t}(wjcReactBase.ComponentBase);exports.Menu=Menu;Popup=function(n){function t(t){return n.call(this,t,wjcInput.Popup)||this}return __extends(t,n),t.prototype.render=function(){return React.createElement('div',null,this.props.children)},t}(wjcReactBase.ComponentBase);exports.Popup=Popup;Wj=wjcReactBase