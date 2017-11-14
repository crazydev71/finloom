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
var __extends=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}();define(["require","exports","wijmo/wijmo.chart.analytics","@angular/core","@angular/core","@angular/core","@angular/common","wijmo/wijmo.angular2.directiveBase"],function(n,t,i,r,u,f,e,o){"use strict";var s,h,c,l,a,v,y,w,p;Object.defineProperty(t,"__esModule",{value:!0});t.wjFlexChartTrendLineMeta={selector:'wj-flex-chart-trend-line',template:"",inputs:['asyncBindings','wjProperty','axisX','axisY','binding','bindingX','cssClass','name','style','altStyle','symbolMarker','symbolSize','symbolStyle','visibility','itemsSource','sampleCount','order','fitType',],outputs:['initialized','renderingNg: rendering','renderedNg: rendered','visibilityChangePC: visibilityChange',],providers:[]};s=function(n){function t(t,i,r){var u=n.call(this)||this,f;return u.isInitialized=!1,u.wjProperty='series',f=u._wjBehaviour=o.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(i.TrendLine);s.meta={outputs:t.wjFlexChartTrendLineMeta.outputs,changeEvents:{'chart.seriesVisibilityChanged':['visibility']},siblingId:'series'};s.decorators=[{type:r.Component,args:[{selector:t.wjFlexChartTrendLineMeta.selector,template:t.wjFlexChartTrendLineMeta.template,inputs:t.wjFlexChartTrendLineMeta.inputs,outputs:t.wjFlexChartTrendLineMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return s})}].concat(t.wjFlexChartTrendLineMeta.providers)},]},];s.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjFlexChartTrendLine=s;t.wjFlexChartMovingAverageMeta={selector:'wj-flex-chart-moving-average',template:"",inputs:['asyncBindings','wjProperty','axisX','axisY','binding','bindingX','cssClass','name','style','altStyle','symbolMarker','symbolSize','symbolStyle','visibility','itemsSource','sampleCount','period','type',],outputs:['initialized','renderingNg: rendering','renderedNg: rendered','visibilityChangePC: visibilityChange',],providers:[]};h=function(n){function t(t,i,r){var u=n.call(this)||this,f;return u.isInitialized=!1,u.wjProperty='series',f=u._wjBehaviour=o.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(i.MovingAverage);h.meta={outputs:t.wjFlexChartMovingAverageMeta.outputs,changeEvents:{'chart.seriesVisibilityChanged':['visibility']},siblingId:'series'};h.decorators=[{type:r.Component,args:[{selector:t.wjFlexChartMovingAverageMeta.selector,template:t.wjFlexChartMovingAverageMeta.template,inputs:t.wjFlexChartMovingAverageMeta.inputs,outputs:t.wjFlexChartMovingAverageMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return h})}].concat(t.wjFlexChartMovingAverageMeta.providers)},]},];h.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjFlexChartMovingAverage=h;t.wjFlexChartYFunctionSeriesMeta={selector:'wj-flex-chart-y-function-series',template:"",inputs:['asyncBindings','wjProperty','axisX','axisY','binding','bindingX','cssClass','name','style','altStyle','symbolMarker','symbolSize','symbolStyle','visibility','itemsSource','sampleCount','min','max','func',],outputs:['initialized','renderingNg: rendering','renderedNg: rendered','visibilityChangePC: visibilityChange',],providers:[]};c=function(n){function t(t,i,r){var u=n.call(this)||this,f;return u.isInitialized=!1,u.wjProperty='series',f=u._wjBehaviour=o.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(i.YFunctionSeries);c.meta={outputs:t.wjFlexChartYFunctionSeriesMeta.outputs,changeEvents:{'chart.seriesVisibilityChanged':['visibility']},siblingId:'series'};c.decorators=[{type:r.Component,args:[{selector:t.wjFlexChartYFunctionSeriesMeta.selector,template:t.wjFlexChartYFunctionSeriesMeta.template,inputs:t.wjFlexChartYFunctionSeriesMeta.inputs,outputs:t.wjFlexChartYFunctionSeriesMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return c})}].concat(t.wjFlexChartYFunctionSeriesMeta.providers)},]},];c.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjFlexChartYFunctionSeries=c;t.wjFlexChartParametricFunctionSeriesMeta={selector:'wj-flex-chart-parametric-function-series',template:"",inputs:['asyncBindings','wjProperty','axisX','axisY','binding','bindingX','cssClass','name','style','altStyle','symbolMarker','symbolSize','symbolStyle','visibility','itemsSource','sampleCount','min','max','func','xFunc','yFunc',],outputs:['initialized','renderingNg: rendering','renderedNg: rendered','visibilityChangePC: visibilityChange',],providers:[]};l=function(n){function t(t,i,r){var u=n.call(this)||this,f;return u.isInitialized=!1,u.wjProperty='series',f=u._wjBehaviour=o.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(i.ParametricFunctionSeries);l.meta={outputs:t.wjFlexChartParametricFunctionSeriesMeta.outputs,changeEvents:{'chart.seriesVisibilityChanged':['visibility']},siblingId:'series'};l.decorators=[{type:r.Component,args:[{selector:t.wjFlexChartParametricFunctionSeriesMeta.selector,template:t.wjFlexChartParametricFunctionSeriesMeta.template,inputs:t.wjFlexChartParametricFunctionSeriesMeta.inputs,outputs:t.wjFlexChartParametricFunctionSeriesMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return l})}].concat(t.wjFlexChartParametricFunctionSeriesMeta.providers)},]},];l.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjFlexChartParametricFunctionSeries=l;t.wjFlexChartWaterfallMeta={selector:'wj-flex-chart-waterfall',template:"",inputs:['asyncBindings','wjProperty','axisX','axisY','binding','bindingX','cssClass','name','style','altStyle','symbolMarker','symbolSize','symbolStyle','visibility','itemsSource','relativeData','start','startLabel','showTotal','totalLabel','showIntermediateTotal','intermediateTotalPositions','intermediateTotalLabels','connectorLines','styles',],outputs:['initialized','renderingNg: rendering','renderedNg: rendered','visibilityChangePC: visibilityChange',],providers:[]};a=function(n){function t(t,i,r){var u=n.call(this)||this,f;return u.isInitialized=!1,u.wjProperty='series',f=u._wjBehaviour=o.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(i.Waterfall);a.meta={outputs:t.wjFlexChartWaterfallMeta.outputs,changeEvents:{'chart.seriesVisibilityChanged':['visibility']},siblingId:'series'};a.decorators=[{type:r.Component,args:[{selector:t.wjFlexChartWaterfallMeta.selector,template:t.wjFlexChartWaterfallMeta.template,inputs:t.wjFlexChartWaterfallMeta.inputs,outputs:t.wjFlexChartWaterfallMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return a})}].concat(t.wjFlexChartWaterfallMeta.providers)},]},];a.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjFlexChartWaterfall=a;t.wjFlexChartBoxWhiskerMeta={selector:'wj-flex-chart-box-whisker',template:"",inputs:['asyncBindings','wjProperty','axisX','axisY','binding','bindingX','cssClass','name','style','altStyle','symbolMarker','symbolSize','symbolStyle','visibility','itemsSource','quartileCalculation','groupWidth','gapWidth','showMeanLine','meanLineStyle','showMeanMarker','meanMarkerStyle','showInnerPoints','showOutliers',],outputs:['initialized','renderingNg: rendering','renderedNg: rendered','visibilityChangePC: visibilityChange',],providers:[]};v=function(n){function t(t,i,r){var u=n.call(this)||this,f;return u.isInitialized=!1,u.wjProperty='series',f=u._wjBehaviour=o.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(i.BoxWhisker);v.meta={outputs:t.wjFlexChartBoxWhiskerMeta.outputs,changeEvents:{'chart.seriesVisibilityChanged':['visibility']},siblingId:'series'};v.decorators=[{type:r.Component,args:[{selector:t.wjFlexChartBoxWhiskerMeta.selector,template:t.wjFlexChartBoxWhiskerMeta.template,inputs:t.wjFlexChartBoxWhiskerMeta.inputs,outputs:t.wjFlexChartBoxWhiskerMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return v})}].concat(t.wjFlexChartBoxWhiskerMeta.providers)},]},];v.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjFlexChartBoxWhisker=v;t.wjFlexChartErrorBarMeta={selector:'wj-flex-chart-error-bar',template:"",inputs:['asyncBindings','wjProperty','axisX','axisY','binding','bindingX','cssClass','name','style','altStyle','symbolMarker','symbolSize','symbolStyle','visibility','itemsSource','chartType','errorBarStyle','value','errorAmount','endStyle','direction',],outputs:['initialized','renderingNg: rendering','renderedNg: rendered','visibilityChangePC: visibilityChange',],providers:[]};y=function(n){function t(t,i,r){var u=n.call(this)||this,f;return u.isInitialized=!1,u.wjProperty='series',f=u._wjBehaviour=o.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(i.ErrorBar);y.meta={outputs:t.wjFlexChartErrorBarMeta.outputs,changeEvents:{'chart.seriesVisibilityChanged':['visibility']},siblingId:'series'};y.decorators=[{type:r.Component,args:[{selector:t.wjFlexChartErrorBarMeta.selector,template:t.wjFlexChartErrorBarMeta.template,inputs:t.wjFlexChartErrorBarMeta.inputs,outputs:t.wjFlexChartErrorBarMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return y})}].concat(t.wjFlexChartErrorBarMeta.providers)},]},];y.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjFlexChartErrorBar=y;w=[s,h,c,l,a,v,y];p=function(){function n(){}return n}();p.decorators=[{type:r.NgModule,args:[{imports:[o.WjDirectiveBaseModule,e.CommonModule],declarations:w.slice(),exports:w.slice()},]},];p.ctorParameters=function(){return[]};t.WjChartAnalyticsModule=p})