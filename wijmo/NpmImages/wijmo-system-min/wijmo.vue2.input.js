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
System.register(["wijmo/wijmo.vue2.base","wijmo/wijmo.input","wijmo/wijmo.vue2.input","vue"],function(n,t){"use strict";var it=t&&t.id,i,r,f,e,o,u,s,h,c,l,a,v,y,p,w,b,k,d,g,nt,tt;return{setters:[function(n){i=n},function(n){r=n},function(n){f=n},function(n){e=n;o=n}],execute:function(){window.wijmo=window.wijmo||{};window.wijmo.vue2=window.wijmo.vue2||{};window.wijmo.vue2.input=f;n("Vue",u=e.default||o);n("WjComboBox",s=u.component('wj-combo-box',{template:'<div/>',props:i._getProps('wijmo.input.ComboBox'),mounted:function(){i._initialize(this,new r.ComboBox(this.$el))}}));n("WjAutoComplete",h=u.component('wj-auto-complete',{template:'<div/>',props:i._getProps('wijmo.input.AutoComplete'),mounted:function(){i._initialize(this,new r.AutoComplete(this.$el))}}));n("WjCalendar",c=u.component('wj-calendar',{template:'<div/>',props:i._getProps('wijmo.input.Calendar'),mounted:function(){i._initialize(this,new r.Calendar(this.$el))}}));n("WjColorPicker",l=u.component('wj-color-picker',{template:'<div/>',props:i._getProps('wijmo.input.ColorPicker'),mounted:function(){i._initialize(this,new r.ColorPicker(this.$el))}}));n("WjInputMask",a=u.component('wj-input-mask',{template:'<div/>',props:i._getProps('wijmo.input.InputMask'),mounted:function(){i._initialize(this,new r.InputMask(this.$el))}}));n("WjInputColor",v=u.component('wj-input-color',{template:'<div/>',props:i._getProps('wijmo.input.InputColor'),mounted:function(){i._initialize(this,new r.InputColor(this.$el))}}));n("WjMultiSelect",y=u.component('wj-multi-select',{template:'<div/>',props:i._getProps('wijmo.input.MultiSelect'),mounted:function(){i._initialize(this,new r.MultiSelect(this.$el))}}));n("WjMultiAutoComplete",p=u.component('wj-multi-auto-complete',{template:'<div/>',props:i._getProps('wijmo.input.MultiAutoComplete'),mounted:function(){i._initialize(this,new r.MultiAutoComplete(this.$el))}}));n("WjInputNumber",w=u.component('wj-input-number',{template:'<div/>',props:i._getProps('wijmo.input.InputNumber'),mounted:function(){i._initialize(this,new r.InputNumber(this.$el))}}));n("WjInputDate",b=u.component('wj-input-date',{template:'<div/>',props:i._getProps('wijmo.input.InputDate'),mounted:function(){i._initialize(this,new r.InputDate(this.$el))}}));n("WjInputTime",k=u.component('wj-input-time',{template:'<div/>',props:i._getProps('wijmo.input.InputTime'),mounted:function(){i._initialize(this,new r.InputTime(this.$el))}}));n("WjInputDateTime",d=u.component('wj-input-date-time',{template:'<div/>',props:i._getProps('wijmo.input.InputDateTime'),mounted:function(){i._initialize(this,new r.InputDateTime(this.$el))}}));n("WjListBox",g=u.component('wj-list-box',{template:'<div/>',props:i._getProps('wijmo.input.ListBox'),mounted:function(){i._initialize(this,new r.ListBox(this.$el))}}));n("WjMenu",nt=u.component('wj-menu',{template:'<div/>',props:i._getProps('wijmo.input.Menu'),mounted:function(){i._initialize(this,new r.Menu(this.$el))}}));n("WjPopup",tt=u.component('wj-popup',{template:'<div><slot/></div>',props:i._getProps('wijmo.input.Popup'),mounted:function(){i._initialize(this,new r.Popup(this.$el))}}))}}})