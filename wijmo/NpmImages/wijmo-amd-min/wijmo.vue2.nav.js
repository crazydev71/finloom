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
define(["require","exports","wijmo/wijmo.vue2.base","wijmo/wijmo.nav","wijmo/wijmo.vue2.nav","vue","vue"],function(n,t,i,r,u,f,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});window.wijmo=window.wijmo||{};window.wijmo.vue2=window.wijmo.vue2||{};window.wijmo.vue2.nav=u;t.Vue=f.default||e;t.WjTreeView=t.Vue.component('wj-tree-view',{template:'<div/>',props:i._getProps('wijmo.nav.TreeView'),mounted:function(){i._initialize(this,new r.TreeView(this.$el))}})})