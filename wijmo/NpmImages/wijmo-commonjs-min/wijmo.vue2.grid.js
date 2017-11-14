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
"use strict";var vue_1,VueModule;Object.defineProperty(exports,"__esModule",{value:!0});var wjcVue2Base=require("wijmo/wijmo.vue2.base"),wjcGrid=require("wijmo/wijmo.grid"),wjcGridFilter=require("wijmo/wijmo.grid.filter"),wjcSelf=require("wijmo/wijmo.vue2.grid");window.wijmo=window.wijmo||{};window.wijmo.vue2=window.wijmo.vue2||{};window.wijmo.vue2.grid=wjcSelf;vue_1=require("vue");VueModule=require("vue");exports.Vue=vue_1.default||VueModule;exports.WjFlexGrid=exports.Vue.component('wj-flex-grid',{template:'<div><slot/></div>',props:wjcVue2Base._getProps('wijmo.grid.FlexGrid'),mounted:function(){var i=this,t=!0,n;this.$children.forEach(function(n){switch(n.$options.name){case'wj-flex-grid-column':t=!1}});n=new wjcGrid.FlexGrid(this.$el,{autoGenerateColumns:t});this.$children.forEach(function(t){var r,u;switch(t.$options.name){case'wj-flex-grid-column':r=wjcVue2Base._initialize(t,new wjcGrid.Column);n.columns.push(r);break;case'wj-flex-grid-filter':u=wjcVue2Base._initialize(t,new wjcGridFilter.FlexGridFilter(n))}i.$el.removeChild(t.$el)});wjcVue2Base._initialize(this,n)}});exports.WjFlexGridColumn=exports.Vue.component('wj-flex-grid-column',{template:'<div/>',props:wjcVue2Base._getProps('wijmo.grid.Column')})