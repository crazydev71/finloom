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
define(["require","exports","wijmo/wijmo.vue2.base","wijmo/wijmo.chart","wijmo/wijmo.vue2.chart","vue","vue"],function(n,t,i,r,u,f,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});window.wijmo=window.wijmo||{};window.wijmo.vue2=window.wijmo.vue2||{};window.wijmo.vue2.chart=u;t.Vue=f.default||e;t.WjFlexChart=t.Vue.component('wj-flex-chart',{template:'<div><slot/></div>',props:i._getProps('wijmo.chart.FlexChart',['tooltipContent']),mounted:function(){var t=this,n=new r.FlexChart(this.$el);this.$children.forEach(function(u){var f,e,s,o;switch(u.$options.name){case'wj-flex-chart-series':f=i._initialize(u,new r.Series);u.$el.style.cssText.length&&(e={},u.$el.style.cssText.split(';').forEach(function(n){var t=n.split(':');t.length==2&&(e[t[0].trim()]=t[1].trim())}),f.style=e);n.series.push(f);break;case'wj-flex-chart-legend':s=i._initialize(u,new r.Legend(null));n.legend=s;break;case'wj-flex-chart-axis':o=i._initialize(u,new r.Axis);u.wjProperty?n[u.wjProperty]=o:n.axes.push(o)}t.$el.removeChild(u.$el)});this.tooltipContent&&(n.tooltip.content=this.tooltipContent);i._initialize(this,n)}});t.WjFlexChartAxis=t.Vue.component('wj-flex-chart-axis',{template:'<div/>',props:i._getProps('wijmo.chart.Axis',['wjProperty'])});t.WjFlexChartLegend=t.Vue.component('wj-flex-chart-legend',{template:'<div/>',props:i._getProps('wijmo.chart.Legend')});t.WjFlexChartSeries=t.Vue.component('wj-flex-chart-series',{template:'<div/>',props:i._getProps('wijmo.chart.Series')})})