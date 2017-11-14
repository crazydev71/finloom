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
System.register(["wijmo/wijmo.vue2.base","wijmo/wijmo.chart","wijmo/wijmo.vue2.chart","vue"],function(n,t){"use strict";var a=t&&t.id,i,r,f,e,o,u,s,h,c,l;return{setters:[function(n){i=n},function(n){r=n},function(n){f=n},function(n){e=n;o=n}],execute:function(){window.wijmo=window.wijmo||{};window.wijmo.vue2=window.wijmo.vue2||{};window.wijmo.vue2.chart=f;n("Vue",u=e.default||o);n("WjFlexChart",s=u.component('wj-flex-chart',{template:'<div><slot/></div>',props:i._getProps('wijmo.chart.FlexChart',['tooltipContent']),mounted:function(){var t=this,n=new r.FlexChart(this.$el);this.$children.forEach(function(u){var f,e,s,o;switch(u.$options.name){case'wj-flex-chart-series':f=i._initialize(u,new r.Series);u.$el.style.cssText.length&&(e={},u.$el.style.cssText.split(';').forEach(function(n){var t=n.split(':');t.length==2&&(e[t[0].trim()]=t[1].trim())}),f.style=e);n.series.push(f);break;case'wj-flex-chart-legend':s=i._initialize(u,new r.Legend(null));n.legend=s;break;case'wj-flex-chart-axis':o=i._initialize(u,new r.Axis);u.wjProperty?n[u.wjProperty]=o:n.axes.push(o)}t.$el.removeChild(u.$el)});this.tooltipContent&&(n.tooltip.content=this.tooltipContent);i._initialize(this,n)}}));n("WjFlexChartAxis",h=u.component('wj-flex-chart-axis',{template:'<div/>',props:i._getProps('wijmo.chart.Axis',['wjProperty'])}));n("WjFlexChartLegend",c=u.component('wj-flex-chart-legend',{template:'<div/>',props:i._getProps('wijmo.chart.Legend')}));n("WjFlexChartSeries",l=u.component('wj-flex-chart-series',{template:'<div/>',props:i._getProps('wijmo.chart.Series')}))}}})