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
define(["require","exports","wijmo/wijmo.vue2.base","wijmo/wijmo.grid","wijmo/wijmo.grid.filter","wijmo/wijmo.vue2.grid","vue","vue"],function(n,t,i,r,u,f,e,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});window.wijmo=window.wijmo||{};window.wijmo.vue2=window.wijmo.vue2||{};window.wijmo.vue2.grid=f;t.Vue=e.default||o;t.WjFlexGrid=t.Vue.component('wj-flex-grid',{template:'<div><slot/></div>',props:i._getProps('wijmo.grid.FlexGrid'),mounted:function(){var f=this,t=!0,n;this.$children.forEach(function(n){switch(n.$options.name){case'wj-flex-grid-column':t=!1}});n=new r.FlexGrid(this.$el,{autoGenerateColumns:t});this.$children.forEach(function(t){var e,o;switch(t.$options.name){case'wj-flex-grid-column':e=i._initialize(t,new r.Column);n.columns.push(e);break;case'wj-flex-grid-filter':o=i._initialize(t,new u.FlexGridFilter(n))}f.$el.removeChild(t.$el)});i._initialize(this,n)}});t.WjFlexGridColumn=t.Vue.component('wj-flex-grid-column',{template:'<div/>',props:i._getProps('wijmo.grid.Column')})})