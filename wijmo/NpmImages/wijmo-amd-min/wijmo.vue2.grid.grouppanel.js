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
define(["require","exports","wijmo/wijmo.vue2.base","wijmo/wijmo.grid.grouppanel","wijmo/wijmo.vue2.grid.grouppanel","vue","vue"],function(n,t,i,r,u,f,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});window.wijmo=window.wijmo||{};window.wijmo.vue2=window.wijmo.vue2||{};window.wijmo.vue2.grid=window.wijmo.vue2.grid||{};window.wijmo.vue2.grid.grouppanel=u;t.Vue=f.default||e;t.WjGroupPanel=t.Vue.component('wj-group-panel',{template:'<div/>',props:i._getProps('wijmo.grid.grouppanel.GroupPanel'),mounted:function(){i._initialize(this,new r.GroupPanel(this.$el))}})})