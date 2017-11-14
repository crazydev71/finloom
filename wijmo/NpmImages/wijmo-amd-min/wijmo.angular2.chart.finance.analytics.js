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
var __extends=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}();define(["require","exports","wijmo/wijmo.chart.finance.analytics","@angular/core","@angular/core","@angular/core","@angular/common","wijmo/wijmo.angular2.directiveBase"],function(n,t,i,r,u,f,e,o){"use strict";var s,h,c,l,a,v,y,p,w,b,k,d,g,tt,nt;Object.defineProperty(t,"__esModule",{value:!0});t.wjFlexChartFibonacciMeta={selector:'wj-flex-chart-fibonacci',template:"",inputs:['asyncBindings','wjProperty','axisX','axisY','binding','bindingX','cssClass','name','style','altStyle','symbolMarker','symbolSize','symbolStyle','visibility','itemsSource','high','low','labelPosition','levels','minX','maxX','uptrend',],outputs:['initialized','renderingNg: rendering','renderedNg: rendered','visibilityChangePC: visibilityChange',],providers:[]};s=function(n){function t(t,i,r){var u=n.call(this)||this,f;return u.isInitialized=!1,u.wjProperty='series',f=u._wjBehaviour=o.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(i.Fibonacci);s.meta={outputs:t.wjFlexChartFibonacciMeta.outputs,changeEvents:{'chart.seriesVisibilityChanged':['visibility']},siblingId:'series'};s.decorators=[{type:r.Component,args:[{selector:t.wjFlexChartFibonacciMeta.selector,template:t.wjFlexChartFibonacciMeta.template,inputs:t.wjFlexChartFibonacciMeta.inputs,outputs:t.wjFlexChartFibonacciMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return s})}].concat(t.wjFlexChartFibonacciMeta.providers)},]},];s.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjFlexChartFibonacci=s;t.wjFlexChartFibonacciArcsMeta={selector:'wj-flex-chart-fibonacci-arcs',template:"",inputs:['asyncBindings','wjProperty','axisX','axisY','binding','bindingX','cssClass','name','style','altStyle','symbolMarker','symbolSize','symbolStyle','visibility','itemsSource','start','end','labelPosition','levels',],outputs:['initialized','renderingNg: rendering','renderedNg: rendered','visibilityChangePC: visibilityChange',],providers:[]};h=function(n){function t(t,i,r){var u=n.call(this)||this,f;return u.isInitialized=!1,u.wjProperty='series',f=u._wjBehaviour=o.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(i.FibonacciArcs);h.meta={outputs:t.wjFlexChartFibonacciArcsMeta.outputs,changeEvents:{'chart.seriesVisibilityChanged':['visibility']},siblingId:'series'};h.decorators=[{type:r.Component,args:[{selector:t.wjFlexChartFibonacciArcsMeta.selector,template:t.wjFlexChartFibonacciArcsMeta.template,inputs:t.wjFlexChartFibonacciArcsMeta.inputs,outputs:t.wjFlexChartFibonacciArcsMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return h})}].concat(t.wjFlexChartFibonacciArcsMeta.providers)},]},];h.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjFlexChartFibonacciArcs=h;t.wjFlexChartFibonacciFansMeta={selector:'wj-flex-chart-fibonacci-fans',template:"",inputs:['asyncBindings','wjProperty','axisX','axisY','binding','bindingX','cssClass','name','style','altStyle','symbolMarker','symbolSize','symbolStyle','visibility','itemsSource','start','end','labelPosition','levels',],outputs:['initialized','renderingNg: rendering','renderedNg: rendered','visibilityChangePC: visibilityChange',],providers:[]};c=function(n){function t(t,i,r){var u=n.call(this)||this,f;return u.isInitialized=!1,u.wjProperty='series',f=u._wjBehaviour=o.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(i.FibonacciFans);c.meta={outputs:t.wjFlexChartFibonacciFansMeta.outputs,changeEvents:{'chart.seriesVisibilityChanged':['visibility']},siblingId:'series'};c.decorators=[{type:r.Component,args:[{selector:t.wjFlexChartFibonacciFansMeta.selector,template:t.wjFlexChartFibonacciFansMeta.template,inputs:t.wjFlexChartFibonacciFansMeta.inputs,outputs:t.wjFlexChartFibonacciFansMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return c})}].concat(t.wjFlexChartFibonacciFansMeta.providers)},]},];c.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjFlexChartFibonacciFans=c;t.wjFlexChartFibonacciTimeZonesMeta={selector:'wj-flex-chart-fibonacci-time-zones',template:"",inputs:['asyncBindings','wjProperty','axisX','axisY','binding','bindingX','cssClass','name','style','altStyle','symbolMarker','symbolSize','symbolStyle','visibility','itemsSource','startX','endX','labelPosition','levels',],outputs:['initialized','renderingNg: rendering','renderedNg: rendered','visibilityChangePC: visibilityChange',],providers:[]};l=function(n){function t(t,i,r){var u=n.call(this)||this,f;return u.isInitialized=!1,u.wjProperty='series',f=u._wjBehaviour=o.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(i.FibonacciTimeZones);l.meta={outputs:t.wjFlexChartFibonacciTimeZonesMeta.outputs,changeEvents:{'chart.seriesVisibilityChanged':['visibility']},siblingId:'series'};l.decorators=[{type:r.Component,args:[{selector:t.wjFlexChartFibonacciTimeZonesMeta.selector,template:t.wjFlexChartFibonacciTimeZonesMeta.template,inputs:t.wjFlexChartFibonacciTimeZonesMeta.inputs,outputs:t.wjFlexChartFibonacciTimeZonesMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return l})}].concat(t.wjFlexChartFibonacciTimeZonesMeta.providers)},]},];l.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjFlexChartFibonacciTimeZones=l;t.wjFlexChartAtrMeta={selector:'wj-flex-chart-atr',template:"",inputs:['asyncBindings','wjProperty','axisX','axisY','binding','bindingX','cssClass','name','style','altStyle','symbolMarker','symbolSize','symbolStyle','visibility','itemsSource','period',],outputs:['initialized','renderingNg: rendering','renderedNg: rendered','visibilityChangePC: visibilityChange',],providers:[]};a=function(n){function t(t,i,r){var u=n.call(this)||this,f;return u.isInitialized=!1,u.wjProperty='series',f=u._wjBehaviour=o.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(i.ATR);a.meta={outputs:t.wjFlexChartAtrMeta.outputs,changeEvents:{'chart.seriesVisibilityChanged':['visibility']},siblingId:'series'};a.decorators=[{type:r.Component,args:[{selector:t.wjFlexChartAtrMeta.selector,template:t.wjFlexChartAtrMeta.template,inputs:t.wjFlexChartAtrMeta.inputs,outputs:t.wjFlexChartAtrMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return a})}].concat(t.wjFlexChartAtrMeta.providers)},]},];a.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjFlexChartAtr=a;t.wjFlexChartCciMeta={selector:'wj-flex-chart-cci',template:"",inputs:['asyncBindings','wjProperty','axisX','axisY','binding','bindingX','cssClass','name','style','altStyle','symbolMarker','symbolSize','symbolStyle','visibility','itemsSource','period','constant',],outputs:['initialized','renderingNg: rendering','renderedNg: rendered','visibilityChangePC: visibilityChange',],providers:[]};v=function(n){function t(t,i,r){var u=n.call(this)||this,f;return u.isInitialized=!1,u.wjProperty='series',f=u._wjBehaviour=o.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(i.CCI);v.meta={outputs:t.wjFlexChartCciMeta.outputs,changeEvents:{'chart.seriesVisibilityChanged':['visibility']},siblingId:'series'};v.decorators=[{type:r.Component,args:[{selector:t.wjFlexChartCciMeta.selector,template:t.wjFlexChartCciMeta.template,inputs:t.wjFlexChartCciMeta.inputs,outputs:t.wjFlexChartCciMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return v})}].concat(t.wjFlexChartCciMeta.providers)},]},];v.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjFlexChartCci=v;t.wjFlexChartRsiMeta={selector:'wj-flex-chart-rsi',template:"",inputs:['asyncBindings','wjProperty','axisX','axisY','binding','bindingX','cssClass','name','style','altStyle','symbolMarker','symbolSize','symbolStyle','visibility','itemsSource','period',],outputs:['initialized','renderingNg: rendering','renderedNg: rendered','visibilityChangePC: visibilityChange',],providers:[]};y=function(n){function t(t,i,r){var u=n.call(this)||this,f;return u.isInitialized=!1,u.wjProperty='series',f=u._wjBehaviour=o.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(i.RSI);y.meta={outputs:t.wjFlexChartRsiMeta.outputs,changeEvents:{'chart.seriesVisibilityChanged':['visibility']},siblingId:'series'};y.decorators=[{type:r.Component,args:[{selector:t.wjFlexChartRsiMeta.selector,template:t.wjFlexChartRsiMeta.template,inputs:t.wjFlexChartRsiMeta.inputs,outputs:t.wjFlexChartRsiMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return y})}].concat(t.wjFlexChartRsiMeta.providers)},]},];y.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjFlexChartRsi=y;t.wjFlexChartWilliamsRMeta={selector:'wj-flex-chart-williams-r',template:"",inputs:['asyncBindings','wjProperty','axisX','axisY','binding','bindingX','cssClass','name','style','altStyle','symbolMarker','symbolSize','symbolStyle','visibility','itemsSource','period',],outputs:['initialized','renderingNg: rendering','renderedNg: rendered','visibilityChangePC: visibilityChange',],providers:[]};p=function(n){function t(t,i,r){var u=n.call(this)||this,f;return u.isInitialized=!1,u.wjProperty='series',f=u._wjBehaviour=o.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(i.WilliamsR);p.meta={outputs:t.wjFlexChartWilliamsRMeta.outputs,changeEvents:{'chart.seriesVisibilityChanged':['visibility']},siblingId:'series'};p.decorators=[{type:r.Component,args:[{selector:t.wjFlexChartWilliamsRMeta.selector,template:t.wjFlexChartWilliamsRMeta.template,inputs:t.wjFlexChartWilliamsRMeta.inputs,outputs:t.wjFlexChartWilliamsRMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return p})}].concat(t.wjFlexChartWilliamsRMeta.providers)},]},];p.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjFlexChartWilliamsR=p;t.wjFlexChartMacdMeta={selector:'wj-flex-chart-macd',template:"",inputs:['asyncBindings','wjProperty','axisX','axisY','binding','bindingX','cssClass','name','style','altStyle','symbolMarker','symbolSize','symbolStyle','visibility','itemsSource','fastPeriod','slowPeriod','smoothingPeriod','styles',],outputs:['initialized','renderingNg: rendering','renderedNg: rendered','visibilityChangePC: visibilityChange',],providers:[]};w=function(n){function t(t,i,r){var u=n.call(this)||this,f;return u.isInitialized=!1,u.wjProperty='series',f=u._wjBehaviour=o.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(i.Macd);w.meta={outputs:t.wjFlexChartMacdMeta.outputs,changeEvents:{'chart.seriesVisibilityChanged':['visibility']},siblingId:'series'};w.decorators=[{type:r.Component,args:[{selector:t.wjFlexChartMacdMeta.selector,template:t.wjFlexChartMacdMeta.template,inputs:t.wjFlexChartMacdMeta.inputs,outputs:t.wjFlexChartMacdMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return w})}].concat(t.wjFlexChartMacdMeta.providers)},]},];w.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjFlexChartMacd=w;t.wjFlexChartMacdHistogramMeta={selector:'wj-flex-chart-macd-histogram',template:"",inputs:['asyncBindings','wjProperty','axisX','axisY','binding','bindingX','cssClass','name','style','altStyle','symbolMarker','symbolSize','symbolStyle','visibility','itemsSource','fastPeriod','slowPeriod','smoothingPeriod',],outputs:['initialized','renderingNg: rendering','renderedNg: rendered','visibilityChangePC: visibilityChange',],providers:[]};b=function(n){function t(t,i,r){var u=n.call(this)||this,f;return u.isInitialized=!1,u.wjProperty='series',f=u._wjBehaviour=o.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(i.MacdHistogram);b.meta={outputs:t.wjFlexChartMacdHistogramMeta.outputs,changeEvents:{'chart.seriesVisibilityChanged':['visibility']},siblingId:'series'};b.decorators=[{type:r.Component,args:[{selector:t.wjFlexChartMacdHistogramMeta.selector,template:t.wjFlexChartMacdHistogramMeta.template,inputs:t.wjFlexChartMacdHistogramMeta.inputs,outputs:t.wjFlexChartMacdHistogramMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return b})}].concat(t.wjFlexChartMacdHistogramMeta.providers)},]},];b.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjFlexChartMacdHistogram=b;t.wjFlexChartStochasticMeta={selector:'wj-flex-chart-stochastic',template:"",inputs:['asyncBindings','wjProperty','axisX','axisY','binding','bindingX','cssClass','name','style','altStyle','symbolMarker','symbolSize','symbolStyle','visibility','itemsSource','dPeriod','kPeriod','smoothingPeriod','styles',],outputs:['initialized','renderingNg: rendering','renderedNg: rendered','visibilityChangePC: visibilityChange',],providers:[]};k=function(n){function t(t,i,r){var u=n.call(this)||this,f;return u.isInitialized=!1,u.wjProperty='series',f=u._wjBehaviour=o.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(i.Stochastic);k.meta={outputs:t.wjFlexChartStochasticMeta.outputs,changeEvents:{'chart.seriesVisibilityChanged':['visibility']},siblingId:'series'};k.decorators=[{type:r.Component,args:[{selector:t.wjFlexChartStochasticMeta.selector,template:t.wjFlexChartStochasticMeta.template,inputs:t.wjFlexChartStochasticMeta.inputs,outputs:t.wjFlexChartStochasticMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return k})}].concat(t.wjFlexChartStochasticMeta.providers)},]},];k.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjFlexChartStochastic=k;t.wjFlexChartBollingerBandsMeta={selector:'wj-flex-chart-bollinger-bands',template:"",inputs:['asyncBindings','wjProperty','axisX','axisY','binding','bindingX','cssClass','name','style','altStyle','symbolMarker','symbolSize','symbolStyle','visibility','itemsSource','period','multiplier',],outputs:['initialized','renderingNg: rendering','renderedNg: rendered','visibilityChangePC: visibilityChange',],providers:[]};d=function(n){function t(t,i,r){var u=n.call(this)||this,f;return u.isInitialized=!1,u.wjProperty='series',f=u._wjBehaviour=o.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(i.BollingerBands);d.meta={outputs:t.wjFlexChartBollingerBandsMeta.outputs,changeEvents:{'chart.seriesVisibilityChanged':['visibility']},siblingId:'series'};d.decorators=[{type:r.Component,args:[{selector:t.wjFlexChartBollingerBandsMeta.selector,template:t.wjFlexChartBollingerBandsMeta.template,inputs:t.wjFlexChartBollingerBandsMeta.inputs,outputs:t.wjFlexChartBollingerBandsMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return d})}].concat(t.wjFlexChartBollingerBandsMeta.providers)},]},];d.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjFlexChartBollingerBands=d;t.wjFlexChartEnvelopesMeta={selector:'wj-flex-chart-envelopes',template:"",inputs:['asyncBindings','wjProperty','axisX','axisY','binding','bindingX','cssClass','name','style','altStyle','symbolMarker','symbolSize','symbolStyle','visibility','itemsSource','period','size','type',],outputs:['initialized','renderingNg: rendering','renderedNg: rendered','visibilityChangePC: visibilityChange',],providers:[]};g=function(n){function t(t,i,r){var u=n.call(this)||this,f;return u.isInitialized=!1,u.wjProperty='series',f=u._wjBehaviour=o.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(i.Envelopes);g.meta={outputs:t.wjFlexChartEnvelopesMeta.outputs,changeEvents:{'chart.seriesVisibilityChanged':['visibility']},siblingId:'series'};g.decorators=[{type:r.Component,args:[{selector:t.wjFlexChartEnvelopesMeta.selector,template:t.wjFlexChartEnvelopesMeta.template,inputs:t.wjFlexChartEnvelopesMeta.inputs,outputs:t.wjFlexChartEnvelopesMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return g})}].concat(t.wjFlexChartEnvelopesMeta.providers)},]},];g.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjFlexChartEnvelopes=g;tt=[s,h,c,l,a,v,y,p,w,b,k,d,g];nt=function(){function n(){}return n}();nt.decorators=[{type:r.NgModule,args:[{imports:[o.WjDirectiveBaseModule,e.CommonModule],declarations:tt.slice(),exports:tt.slice()},]},];nt.ctorParameters=function(){return[]};t.WjChartFinanceAnalyticsModule=nt})