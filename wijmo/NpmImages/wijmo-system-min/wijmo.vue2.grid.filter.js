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
System.register(["wijmo/wijmo.vue2.base","wijmo/wijmo.vue2.grid.filter","vue"],function(n,t){"use strict";var s=t&&t.id,i,r,u,f,e,o;return{setters:[function(n){i=n},function(n){r=n},function(n){u=n;f=n}],execute:function(){window.wijmo=window.wijmo||{};window.wijmo.vue2=window.wijmo.vue2||{};window.wijmo.vue2.grid=window.wijmo.vue2.grid||{};window.wijmo.vue2.grid.filter=r;n("Vue",e=u.default||f);n("WjFlexGridFilter",o=e.component('wj-flex-grid-filter',{template:'<div/>',props:i._getProps('wijmo.grid.filter.FlexGridFilter')}))}}})