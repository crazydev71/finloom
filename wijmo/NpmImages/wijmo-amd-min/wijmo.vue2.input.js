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
define(["require","exports","wijmo/wijmo.vue2.base","wijmo/wijmo.input","wijmo/wijmo.vue2.input","vue","vue"],function(n,t,i,r,u,f,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});window.wijmo=window.wijmo||{};window.wijmo.vue2=window.wijmo.vue2||{};window.wijmo.vue2.input=u;t.Vue=f.default||e;t.WjComboBox=t.Vue.component('wj-combo-box',{template:'<div/>',props:i._getProps('wijmo.input.ComboBox'),mounted:function(){i._initialize(this,new r.ComboBox(this.$el))}});t.WjAutoComplete=t.Vue.component('wj-auto-complete',{template:'<div/>',props:i._getProps('wijmo.input.AutoComplete'),mounted:function(){i._initialize(this,new r.AutoComplete(this.$el))}});t.WjCalendar=t.Vue.component('wj-calendar',{template:'<div/>',props:i._getProps('wijmo.input.Calendar'),mounted:function(){i._initialize(this,new r.Calendar(this.$el))}});t.WjColorPicker=t.Vue.component('wj-color-picker',{template:'<div/>',props:i._getProps('wijmo.input.ColorPicker'),mounted:function(){i._initialize(this,new r.ColorPicker(this.$el))}});t.WjInputMask=t.Vue.component('wj-input-mask',{template:'<div/>',props:i._getProps('wijmo.input.InputMask'),mounted:function(){i._initialize(this,new r.InputMask(this.$el))}});t.WjInputColor=t.Vue.component('wj-input-color',{template:'<div/>',props:i._getProps('wijmo.input.InputColor'),mounted:function(){i._initialize(this,new r.InputColor(this.$el))}});t.WjMultiSelect=t.Vue.component('wj-multi-select',{template:'<div/>',props:i._getProps('wijmo.input.MultiSelect'),mounted:function(){i._initialize(this,new r.MultiSelect(this.$el))}});t.WjMultiAutoComplete=t.Vue.component('wj-multi-auto-complete',{template:'<div/>',props:i._getProps('wijmo.input.MultiAutoComplete'),mounted:function(){i._initialize(this,new r.MultiAutoComplete(this.$el))}});t.WjInputNumber=t.Vue.component('wj-input-number',{template:'<div/>',props:i._getProps('wijmo.input.InputNumber'),mounted:function(){i._initialize(this,new r.InputNumber(this.$el))}});t.WjInputDate=t.Vue.component('wj-input-date',{template:'<div/>',props:i._getProps('wijmo.input.InputDate'),mounted:function(){i._initialize(this,new r.InputDate(this.$el))}});t.WjInputTime=t.Vue.component('wj-input-time',{template:'<div/>',props:i._getProps('wijmo.input.InputTime'),mounted:function(){i._initialize(this,new r.InputTime(this.$el))}});t.WjInputDateTime=t.Vue.component('wj-input-date-time',{template:'<div/>',props:i._getProps('wijmo.input.InputDateTime'),mounted:function(){i._initialize(this,new r.InputDateTime(this.$el))}});t.WjListBox=t.Vue.component('wj-list-box',{template:'<div/>',props:i._getProps('wijmo.input.ListBox'),mounted:function(){i._initialize(this,new r.ListBox(this.$el))}});t.WjMenu=t.Vue.component('wj-menu',{template:'<div/>',props:i._getProps('wijmo.input.Menu'),mounted:function(){i._initialize(this,new r.Menu(this.$el))}});t.WjPopup=t.Vue.component('wj-popup',{template:'<div><slot/></div>',props:i._getProps('wijmo.input.Popup'),mounted:function(){i._initialize(this,new r.Popup(this.$el))}})})