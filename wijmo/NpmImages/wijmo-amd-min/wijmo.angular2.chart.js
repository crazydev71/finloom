﻿/*
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
var __extends=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}();define(["require","exports","wijmo/wijmo.chart","@angular/core","@angular/core","@angular/core","@angular/common","@angular/forms","wijmo/wijmo.angular2.directiveBase"],function(n,t,i,r,u,f,e,o,s){"use strict";var h,c,l,a,v,y,p,w,b,k,g,d;Object.defineProperty(t,"__esModule",{value:!0});t.wjFlexChartMeta={selector:'wj-flex-chart',template:"<div><ng-content></ng-content></div>",inputs:['asyncBindings','wjModelProperty','isDisabled','binding','footer','header','selectionMode','palette','plotMargin','footerStyle','headerStyle','tooltipContent','itemsSource','bindingX','interpolateNulls','legendToggle','symbolSize','options','selection','itemFormatter','labelContent','chartType','rotated','stacking',],outputs:['initialized','gotFocusNg: gotFocus','lostFocusNg: lostFocus','renderingNg: rendering','renderedNg: rendered','selectionChangedNg: selectionChanged','selectionChangePC: selectionChange','seriesVisibilityChangedNg: seriesVisibilityChanged',],providers:[{provide:o.NG_VALUE_ACCESSOR,useFactory:s.WjValueAccessorFactory,multi:!0,deps:['WjComponent']}]};h=function(n){function t(t,i,r){var u=n.call(this,s.WjDirectiveBehavior.getHostElement(t,i))||this,f;return u.isInitialized=!1,f=u._wjBehaviour=s.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.prototype.addEventListener=function(t,i,r,u){var o=this,f,e;u===void 0&&(u=!1);f=s.WjDirectiveBehavior;e=f.ngZone;e&&f.outsideZoneEvents[i]?e.runOutsideAngular(function(){n.prototype.addEventListener.call(o,t,i,r,u)}):n.prototype.addEventListener.call(this,t,i,r,u)},Object.defineProperty(t.prototype,"tooltipContent",{get:function(){return this.tooltip.content},set:function(n){this.tooltip.content=n},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"labelContent",{get:function(){return this.dataLabel.content},set:function(n){this.dataLabel.content=n},enumerable:!0,configurable:!0}),t}(i.FlexChart);h.meta={outputs:t.wjFlexChartMeta.outputs,changeEvents:{selectionChanged:['selection']}};h.decorators=[{type:r.Component,args:[{selector:t.wjFlexChartMeta.selector,template:t.wjFlexChartMeta.template,inputs:t.wjFlexChartMeta.inputs,outputs:t.wjFlexChartMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return h})}].concat(t.wjFlexChartMeta.providers)},]},];h.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjFlexChart=h;t.wjFlexPieMeta={selector:'wj-flex-pie',template:"<div><ng-content></ng-content></div>",inputs:['wjModelProperty','isDisabled','binding','footer','header','selectionMode','palette','plotMargin','footerStyle','headerStyle','tooltipContent','itemsSource','bindingName','innerRadius','isAnimated','offset','reversed','startAngle','selectedItemPosition','selectedItemOffset','itemFormatter','labelContent',],outputs:['initialized','gotFocusNg: gotFocus','lostFocusNg: lostFocus','renderingNg: rendering','renderedNg: rendered','selectionChangedNg: selectionChanged',],providers:[{provide:o.NG_VALUE_ACCESSOR,useFactory:s.WjValueAccessorFactory,multi:!0,deps:['WjComponent']}]};c=function(n){function t(t,i,r){var u=n.call(this,s.WjDirectiveBehavior.getHostElement(t,i))||this,f;return u.isInitialized=!1,f=u._wjBehaviour=s.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.prototype.addEventListener=function(t,i,r,u){var o=this,f,e;u===void 0&&(u=!1);f=s.WjDirectiveBehavior;e=f.ngZone;e&&f.outsideZoneEvents[i]?e.runOutsideAngular(function(){n.prototype.addEventListener.call(o,t,i,r,u)}):n.prototype.addEventListener.call(this,t,i,r,u)},Object.defineProperty(t.prototype,"tooltipContent",{get:function(){return this.tooltip.content},set:function(n){this.tooltip.content=n},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"labelContent",{get:function(){return this.dataLabel.content},set:function(n){this.dataLabel.content=n},enumerable:!0,configurable:!0}),t}(i.FlexPie);c.meta={outputs:t.wjFlexPieMeta.outputs};c.decorators=[{type:r.Component,args:[{selector:t.wjFlexPieMeta.selector,template:t.wjFlexPieMeta.template,inputs:t.wjFlexPieMeta.inputs,outputs:t.wjFlexPieMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return c})}].concat(t.wjFlexPieMeta.providers)},]},];c.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjFlexPie=c;t.wjFlexChartAxisMeta={selector:'wj-flex-chart-axis',template:"",inputs:['wjProperty','axisLine','format','labels','majorGrid','majorTickMarks','majorUnit','max','min','position','reversed','title','labelAngle','minorGrid','minorTickMarks','minorUnit','origin','logBase','plotArea','labelAlign','name','overlappingLabels','labelPadding','itemFormatter','itemsSource','binding',],outputs:['initialized','rangeChangedNg: rangeChanged',],providers:[]};l=function(n){function t(t,i,r){var u=n.call(this)||this,f;return u.isInitialized=!1,u.wjProperty='axes',f=u._wjBehaviour=s.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(i.Axis);l.meta={outputs:t.wjFlexChartAxisMeta.outputs};l.decorators=[{type:r.Component,args:[{selector:t.wjFlexChartAxisMeta.selector,template:t.wjFlexChartAxisMeta.template,inputs:t.wjFlexChartAxisMeta.inputs,outputs:t.wjFlexChartAxisMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return l})}].concat(t.wjFlexChartAxisMeta.providers)},]},];l.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjFlexChartAxis=l;t.wjFlexChartLegendMeta={selector:'wj-flex-chart-legend',template:"",inputs:['wjProperty','position',],outputs:['initialized',],providers:[]};a=function(n){function t(t,i,r){var u=n.call(this,r)||this,f;return u.isInitialized=!1,u.wjProperty='legend',f=u._wjBehaviour=s.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(i.Legend);a.meta={outputs:t.wjFlexChartLegendMeta.outputs};a.decorators=[{type:r.Component,args:[{selector:t.wjFlexChartLegendMeta.selector,template:t.wjFlexChartLegendMeta.template,inputs:t.wjFlexChartLegendMeta.inputs,outputs:t.wjFlexChartLegendMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return a})}].concat(t.wjFlexChartLegendMeta.providers)},]},];a.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjFlexChartLegend=a;t.wjFlexChartDataLabelMeta={selector:'wj-flex-chart-data-label',template:"",inputs:['wjProperty','content','border','offset','connectingLine','position',],outputs:['initialized','renderingNg: rendering',],providers:[]};v=function(n){function t(t,i,r){var u=n.call(this)||this,f;return u.isInitialized=!1,u.wjProperty='dataLabel',f=u._wjBehaviour=s.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(i.DataLabel);v.meta={outputs:t.wjFlexChartDataLabelMeta.outputs};v.decorators=[{type:r.Component,args:[{selector:t.wjFlexChartDataLabelMeta.selector,template:t.wjFlexChartDataLabelMeta.template,inputs:t.wjFlexChartDataLabelMeta.inputs,outputs:t.wjFlexChartDataLabelMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return v})}].concat(t.wjFlexChartDataLabelMeta.providers)},]},];v.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjFlexChartDataLabel=v;t.wjFlexPieDataLabelMeta={selector:'wj-flex-pie-data-label',template:"",inputs:['wjProperty','content','border','offset','connectingLine','position',],outputs:['initialized','renderingNg: rendering',],providers:[]};y=function(n){function t(t,i,r){var u=n.call(this)||this,f;return u.isInitialized=!1,u.wjProperty='dataLabel',f=u._wjBehaviour=s.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(i.PieDataLabel);y.meta={outputs:t.wjFlexPieDataLabelMeta.outputs};y.decorators=[{type:r.Component,args:[{selector:t.wjFlexPieDataLabelMeta.selector,template:t.wjFlexPieDataLabelMeta.template,inputs:t.wjFlexPieDataLabelMeta.inputs,outputs:t.wjFlexPieDataLabelMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return y})}].concat(t.wjFlexPieDataLabelMeta.providers)},]},];y.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjFlexPieDataLabel=y;t.wjFlexChartSeriesMeta={selector:'wj-flex-chart-series',template:"<div><ng-content></ng-content></div>",inputs:['asyncBindings','wjProperty','axisX','axisY','binding','bindingX','cssClass','name','style','altStyle','symbolMarker','symbolSize','symbolStyle','visibility','itemsSource','chartType',],outputs:['initialized','renderingNg: rendering','renderedNg: rendered','visibilityChangePC: visibilityChange',],providers:[]};p=function(n){function t(t,i,r){var u=n.call(this)||this,f;return u.isInitialized=!1,u.wjProperty='series',f=u._wjBehaviour=s.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(i.Series);p.meta={outputs:t.wjFlexChartSeriesMeta.outputs,changeEvents:{'chart.seriesVisibilityChanged':['visibility']},siblingId:'series'};p.decorators=[{type:r.Component,args:[{selector:t.wjFlexChartSeriesMeta.selector,template:t.wjFlexChartSeriesMeta.template,inputs:t.wjFlexChartSeriesMeta.inputs,outputs:t.wjFlexChartSeriesMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return p})}].concat(t.wjFlexChartSeriesMeta.providers)},]},];p.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjFlexChartSeries=p;t.wjFlexChartLineMarkerMeta={selector:'wj-flex-line-marker',template:"",inputs:['wjProperty','isVisible','seriesIndex','horizontalPosition','content','verticalPosition','alignment','lines','interaction','dragLines','dragThreshold','dragContent',],outputs:['initialized','positionChangedNg: positionChanged',],providers:[]};w=function(n){function t(t,i,r){var u=n.call(this,r)||this,f;return u.isInitialized=!1,f=u._wjBehaviour=s.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(i.LineMarker);w.meta={outputs:t.wjFlexChartLineMarkerMeta.outputs};w.decorators=[{type:r.Component,args:[{selector:t.wjFlexChartLineMarkerMeta.selector,template:t.wjFlexChartLineMarkerMeta.template,inputs:t.wjFlexChartLineMarkerMeta.inputs,outputs:t.wjFlexChartLineMarkerMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return w})}].concat(t.wjFlexChartLineMarkerMeta.providers)},]},];w.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjFlexChartLineMarker=w;t.wjFlexChartDataPointMeta={selector:'wj-flex-chart-data-point',template:"",inputs:['wjProperty','x','y',],outputs:['initialized',],providers:[]};b=function(n){function t(t,i,r){var u=n.call(this)||this,f;return u.isInitialized=!1,u.wjProperty='',f=u._wjBehaviour=s.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(i.DataPoint);b.meta={outputs:t.wjFlexChartDataPointMeta.outputs};b.decorators=[{type:r.Component,args:[{selector:t.wjFlexChartDataPointMeta.selector,template:t.wjFlexChartDataPointMeta.template,inputs:t.wjFlexChartDataPointMeta.inputs,outputs:t.wjFlexChartDataPointMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return b})}].concat(t.wjFlexChartDataPointMeta.providers)},]},];b.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjFlexChartDataPoint=b;t.wjFlexChartPlotAreaMeta={selector:'wj-flex-chart-plot-area',template:"",inputs:['wjProperty','column','height','name','row','style','width',],outputs:['initialized',],providers:[]};k=function(n){function t(t,i,r){var u=n.call(this)||this,f;return u.isInitialized=!1,u.wjProperty='plotAreas',f=u._wjBehaviour=s.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(i.PlotArea);k.meta={outputs:t.wjFlexChartPlotAreaMeta.outputs};k.decorators=[{type:r.Component,args:[{selector:t.wjFlexChartPlotAreaMeta.selector,template:t.wjFlexChartPlotAreaMeta.template,inputs:t.wjFlexChartPlotAreaMeta.inputs,outputs:t.wjFlexChartPlotAreaMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return k})}].concat(t.wjFlexChartPlotAreaMeta.providers)},]},];k.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjFlexChartPlotArea=k;g=[h,c,l,a,v,y,p,w,b,k];d=function(){function n(){}return n}();d.decorators=[{type:r.NgModule,args:[{imports:[s.WjDirectiveBaseModule,e.CommonModule],declarations:g.slice(),exports:g.slice()},]},];d.ctorParameters=function(){return[]};t.WjChartModule=d})