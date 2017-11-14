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
System.register(["wijmo/wijmo.vue2.base","wijmo/wijmo.olap","wijmo/wijmo.vue2.olap","vue"],function(n,t){"use strict";var l=t&&t.id,i,r,f,e,o,u,s,h,c;return{setters:[function(n){i=n},function(n){r=n},function(n){f=n},function(n){e=n;o=n}],execute:function(){window.wijmo=window.wijmo||{};window.wijmo.vue2=window.wijmo.vue2||{};window.wijmo.vue2.olap=f;n("Vue",u=e.default||o);n("WjPivotGrid",s=u.component('wj-pivot-grid',{template:'<div/>',props:i._getProps('wijmo.olap.PivotGrid'),mounted:function(){i._initialize(this,new r.PivotGrid(this.$el))}}));n("WjPivotChart",h=u.component('wj-pivot-chart',{template:'<div/>',props:i._getProps('wijmo.olap.PivotChart'),mounted:function(){i._initialize(this,new r.PivotChart(this.$el))}}));n("WjPivotPanel",c=u.component('wj-pivot-panel',{template:'<div/>',props:i._getProps('wijmo.olap.PivotPanel'),mounted:function(){i._initialize(this,new r.PivotPanel(this.$el))}}))}}})