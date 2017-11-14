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
define(["require","exports","wijmo/wijmo.vue2.base","wijmo/wijmo.olap","wijmo/wijmo.vue2.olap","vue","vue"],function(n,t,i,r,u,f,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});window.wijmo=window.wijmo||{};window.wijmo.vue2=window.wijmo.vue2||{};window.wijmo.vue2.olap=u;t.Vue=f.default||e;t.WjPivotGrid=t.Vue.component('wj-pivot-grid',{template:'<div/>',props:i._getProps('wijmo.olap.PivotGrid'),mounted:function(){i._initialize(this,new r.PivotGrid(this.$el))}});t.WjPivotChart=t.Vue.component('wj-pivot-chart',{template:'<div/>',props:i._getProps('wijmo.olap.PivotChart'),mounted:function(){i._initialize(this,new r.PivotChart(this.$el))}});t.WjPivotPanel=t.Vue.component('wj-pivot-panel',{template:'<div/>',props:i._getProps('wijmo.olap.PivotPanel'),mounted:function(){i._initialize(this,new r.PivotPanel(this.$el))}})})