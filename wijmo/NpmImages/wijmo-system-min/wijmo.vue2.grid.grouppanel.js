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
System.register(["wijmo/wijmo.vue2.base","wijmo/wijmo.grid.grouppanel","wijmo/wijmo.vue2.grid.grouppanel","vue"],function(n,t){"use strict";var h=t&&t.id,i,r,u,f,e,o,s;return{setters:[function(n){i=n},function(n){r=n},function(n){u=n},function(n){f=n;e=n}],execute:function(){window.wijmo=window.wijmo||{};window.wijmo.vue2=window.wijmo.vue2||{};window.wijmo.vue2.grid=window.wijmo.vue2.grid||{};window.wijmo.vue2.grid.grouppanel=u;n("Vue",o=f.default||e);n("WjGroupPanel",s=o.component('wj-group-panel',{template:'<div/>',props:i._getProps('wijmo.grid.grouppanel.GroupPanel'),mounted:function(){i._initialize(this,new r.GroupPanel(this.$el))}}))}}})