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
"use strict";var vue_1,VueModule;Object.defineProperty(exports,"__esModule",{value:!0});var wjcVue2Base=require("wijmo/wijmo.vue2.base"),wjcChart=require("wijmo/wijmo.chart"),wjcSelf=require("wijmo/wijmo.vue2.chart");window.wijmo=window.wijmo||{};window.wijmo.vue2=window.wijmo.vue2||{};window.wijmo.vue2.chart=wjcSelf;vue_1=require("vue");VueModule=require("vue");exports.Vue=vue_1.default||VueModule;exports.WjFlexChart=exports.Vue.component('wj-flex-chart',{template:'<div><slot/></div>',props:wjcVue2Base._getProps('wijmo.chart.FlexChart',['tooltipContent']),mounted:function(){var t=this,n=new wjcChart.FlexChart(this.$el);this.$children.forEach(function(i){var r,u,e,f;switch(i.$options.name){case'wj-flex-chart-series':r=wjcVue2Base._initialize(i,new wjcChart.Series);i.$el.style.cssText.length&&(u={},i.$el.style.cssText.split(';').forEach(function(n){var t=n.split(':');t.length==2&&(u[t[0].trim()]=t[1].trim())}),r.style=u);n.series.push(r);break;case'wj-flex-chart-legend':e=wjcVue2Base._initialize(i,new wjcChart.Legend(null));n.legend=e;break;case'wj-flex-chart-axis':f=wjcVue2Base._initialize(i,new wjcChart.Axis);i.wjProperty?n[i.wjProperty]=f:n.axes.push(f)}t.$el.removeChild(i.$el)});this.tooltipContent&&(n.tooltip.content=this.tooltipContent);wjcVue2Base._initialize(this,n)}});exports.WjFlexChartAxis=exports.Vue.component('wj-flex-chart-axis',{template:'<div/>',props:wjcVue2Base._getProps('wijmo.chart.Axis',['wjProperty'])});exports.WjFlexChartLegend=exports.Vue.component('wj-flex-chart-legend',{template:'<div/>',props:wjcVue2Base._getProps('wijmo.chart.Legend')});exports.WjFlexChartSeries=exports.Vue.component('wj-flex-chart-series',{template:'<div/>',props:wjcVue2Base._getProps('wijmo.chart.Series')})