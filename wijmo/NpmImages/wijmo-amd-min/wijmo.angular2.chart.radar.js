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
var __extends=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}();define(["require","exports","wijmo/wijmo.chart.radar","@angular/core","@angular/core","@angular/core","@angular/common","@angular/forms","wijmo/wijmo.angular2.directiveBase"],function(n,t,i,r,u,f,e,o,s){"use strict";var h,c,l,v,a;Object.defineProperty(t,"__esModule",{value:!0});t.wjFlexRadarMeta={selector:'wj-flex-radar',template:"<div><ng-content></ng-content></div>",inputs:['asyncBindings','wjModelProperty','isDisabled','binding','footer','header','selectionMode','palette','plotMargin','footerStyle','headerStyle','tooltipContent','itemsSource','bindingX','interpolateNulls','legendToggle','symbolSize','options','selection','itemFormatter','labelContent','chartType','startAngle','totalAngle','reversed','stacking',],outputs:['initialized','gotFocusNg: gotFocus','lostFocusNg: lostFocus','renderingNg: rendering','renderedNg: rendered','selectionChangedNg: selectionChanged','selectionChangePC: selectionChange','seriesVisibilityChangedNg: seriesVisibilityChanged',],providers:[{provide:o.NG_VALUE_ACCESSOR,useFactory:s.WjValueAccessorFactory,multi:!0,deps:['WjComponent']}]};h=function(n){function t(t,i,r){var u=n.call(this,s.WjDirectiveBehavior.getHostElement(t,i))||this,f;return u.isInitialized=!1,f=u._wjBehaviour=s.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.prototype.addEventListener=function(t,i,r,u){var o=this,f,e;u===void 0&&(u=!1);f=s.WjDirectiveBehavior;e=f.ngZone;e&&f.outsideZoneEvents[i]?e.runOutsideAngular(function(){n.prototype.addEventListener.call(o,t,i,r,u)}):n.prototype.addEventListener.call(this,t,i,r,u)},Object.defineProperty(t.prototype,"tooltipContent",{get:function(){return this.tooltip.content},set:function(n){this.tooltip.content=n},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"labelContent",{get:function(){return this.dataLabel.content},set:function(n){this.dataLabel.content=n},enumerable:!0,configurable:!0}),t}(i.FlexRadar);h.meta={outputs:t.wjFlexRadarMeta.outputs,changeEvents:{selectionChanged:['selection']}};h.decorators=[{type:r.Component,args:[{selector:t.wjFlexRadarMeta.selector,template:t.wjFlexRadarMeta.template,inputs:t.wjFlexRadarMeta.inputs,outputs:t.wjFlexRadarMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return h})}].concat(t.wjFlexRadarMeta.providers)},]},];h.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjFlexRadar=h;t.wjFlexRadarAxisMeta={selector:'wj-flex-radar-axis',template:"",inputs:['wjProperty','axisLine','format','labels','majorGrid','majorTickMarks','majorUnit','max','min','position','reversed','title','labelAngle','minorGrid','minorTickMarks','minorUnit','origin','logBase','plotArea','labelAlign','name','overlappingLabels','labelPadding','itemFormatter','itemsSource','binding',],outputs:['initialized','rangeChangedNg: rangeChanged',],providers:[]};c=function(n){function t(t,i,r){var u=n.call(this)||this,f;return u.isInitialized=!1,u.wjProperty='axes',f=u._wjBehaviour=s.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(i.FlexRadarAxis);c.meta={outputs:t.wjFlexRadarAxisMeta.outputs};c.decorators=[{type:r.Component,args:[{selector:t.wjFlexRadarAxisMeta.selector,template:t.wjFlexRadarAxisMeta.template,inputs:t.wjFlexRadarAxisMeta.inputs,outputs:t.wjFlexRadarAxisMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return c})}].concat(t.wjFlexRadarAxisMeta.providers)},]},];c.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjFlexRadarAxis=c;t.wjFlexRadarSeriesMeta={selector:'wj-flex-radar-series',template:"<div><ng-content></ng-content></div>",inputs:['asyncBindings','wjProperty','axisX','axisY','binding','bindingX','cssClass','name','style','altStyle','symbolMarker','symbolSize','symbolStyle','visibility','itemsSource','chartType',],outputs:['initialized','renderingNg: rendering','renderedNg: rendered','visibilityChangePC: visibilityChange',],providers:[]};l=function(n){function t(t,i,r){var u=n.call(this)||this,f;return u.isInitialized=!1,u.wjProperty='series',f=u._wjBehaviour=s.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(i.FlexRadarSeries);l.meta={outputs:t.wjFlexRadarSeriesMeta.outputs,changeEvents:{'chart.seriesVisibilityChanged':['visibility']},siblingId:'series'};l.decorators=[{type:r.Component,args:[{selector:t.wjFlexRadarSeriesMeta.selector,template:t.wjFlexRadarSeriesMeta.template,inputs:t.wjFlexRadarSeriesMeta.inputs,outputs:t.wjFlexRadarSeriesMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return l})}].concat(t.wjFlexRadarSeriesMeta.providers)},]},];l.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjFlexRadarSeries=l;v=[h,c,l];a=function(){function n(){}return n}();a.decorators=[{type:r.NgModule,args:[{imports:[s.WjDirectiveBaseModule,e.CommonModule],declarations:v.slice(),exports:v.slice()},]},];a.ctorParameters=function(){return[]};t.WjChartRadarModule=a})