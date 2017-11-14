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
System.register(["wijmo/wijmo.vue2.base","wijmo/wijmo.grid","wijmo/wijmo.grid.filter","wijmo/wijmo.vue2.grid","vue"],function(n,t){"use strict";var l=t&&t.id,i,r,f,e,o,s,u,h,c;return{setters:[function(n){i=n},function(n){r=n},function(n){f=n},function(n){e=n},function(n){o=n;s=n}],execute:function(){window.wijmo=window.wijmo||{};window.wijmo.vue2=window.wijmo.vue2||{};window.wijmo.vue2.grid=e;n("Vue",u=o.default||s);n("WjFlexGrid",h=u.component('wj-flex-grid',{template:'<div><slot/></div>',props:i._getProps('wijmo.grid.FlexGrid'),mounted:function(){var u=this,t=!0,n;this.$children.forEach(function(n){switch(n.$options.name){case'wj-flex-grid-column':t=!1}});n=new r.FlexGrid(this.$el,{autoGenerateColumns:t});this.$children.forEach(function(t){var e,o;switch(t.$options.name){case'wj-flex-grid-column':e=i._initialize(t,new r.Column);n.columns.push(e);break;case'wj-flex-grid-filter':o=i._initialize(t,new f.FlexGridFilter(n))}u.$el.removeChild(t.$el)});i._initialize(this,n)}}));n("WjFlexGridColumn",c=u.component('wj-flex-grid-column',{template:'<div/>',props:i._getProps('wijmo.grid.Column')}))}}})