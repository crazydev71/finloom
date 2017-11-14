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
System.register(["wijmo/wijmo.chart.radar","@angular/core","@angular/common","@angular/forms","wijmo/wijmo.angular2.directiveBase"],function(n,t){"use strict";var y=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}(),k=t&&t.id,a,l,i,r,w,b,u,f,e,o,s,h,c,p,v;return{setters:[function(n){a=n},function(n){l=n;i=n;r=n},function(n){w=n},function(n){b=n},function(n){u=n}],execute:function(){n("wjFlexRadarMeta",f={selector:'wj-flex-radar',template:"<div><ng-content></ng-content></div>",inputs:['asyncBindings','wjModelProperty','isDisabled','binding','footer','header','selectionMode','palette','plotMargin','footerStyle','headerStyle','tooltipContent','itemsSource','bindingX','interpolateNulls','legendToggle','symbolSize','options','selection','itemFormatter','labelContent','chartType','startAngle','totalAngle','reversed','stacking',],outputs:['initialized','gotFocusNg: gotFocus','lostFocusNg: lostFocus','renderingNg: rendering','renderedNg: rendered','selectionChangedNg: selectionChanged','selectionChangePC: selectionChange','seriesVisibilityChangedNg: seriesVisibilityChanged',],providers:[{provide:b.NG_VALUE_ACCESSOR,useFactory:u.WjValueAccessorFactory,multi:!0,deps:['WjComponent']}]});e=function(n){function t(t,i,r){var f=n.call(this,u.WjDirectiveBehavior.getHostElement(t,i))||this,e;return f.isInitialized=!1,e=f._wjBehaviour=u.WjDirectiveBehavior.attach(f,t,i,r),f.created(),f}return y(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.prototype.addEventListener=function(t,i,r,f){var s=this,e,o;f===void 0&&(f=!1);e=u.WjDirectiveBehavior;o=e.ngZone;o&&e.outsideZoneEvents[i]?o.runOutsideAngular(function(){n.prototype.addEventListener.call(s,t,i,r,f)}):n.prototype.addEventListener.call(this,t,i,r,f)},Object.defineProperty(t.prototype,"tooltipContent",{get:function(){return this.tooltip.content},set:function(n){this.tooltip.content=n},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"labelContent",{get:function(){return this.dataLabel.content},set:function(n){this.dataLabel.content=n},enumerable:!0,configurable:!0}),t}(a.FlexRadar);e.meta={outputs:f.outputs,changeEvents:{selectionChanged:['selection']}};e.decorators=[{type:l.Component,args:[{selector:f.selector,template:f.template,inputs:f.inputs,outputs:f.outputs,providers:[{provide:'WjComponent',useExisting:i.forwardRef(function(){return e})}].concat(f.providers)},]},];e.ctorParameters=function(){return[{type:i.ElementRef,decorators:[{type:r.Inject,args:[i.ElementRef,]},]},{type:i.Injector,decorators:[{type:r.Inject,args:[i.Injector,]},]},{type:undefined,decorators:[{type:r.Inject,args:['WjComponent',]},{type:r.SkipSelf},{type:i.Optional},]},]};n("WjFlexRadar",e);n("wjFlexRadarAxisMeta",o={selector:'wj-flex-radar-axis',template:"",inputs:['wjProperty','axisLine','format','labels','majorGrid','majorTickMarks','majorUnit','max','min','position','reversed','title','labelAngle','minorGrid','minorTickMarks','minorUnit','origin','logBase','plotArea','labelAlign','name','overlappingLabels','labelPadding','itemFormatter','itemsSource','binding',],outputs:['initialized','rangeChangedNg: rangeChanged',],providers:[]});s=function(n){function t(t,i,r){var f=n.call(this)||this,e;return f.isInitialized=!1,f.wjProperty='axes',e=f._wjBehaviour=u.WjDirectiveBehavior.attach(f,t,i,r),f.created(),f}return y(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(a.FlexRadarAxis);s.meta={outputs:o.outputs};s.decorators=[{type:l.Component,args:[{selector:o.selector,template:o.template,inputs:o.inputs,outputs:o.outputs,providers:[{provide:'WjComponent',useExisting:i.forwardRef(function(){return s})}].concat(o.providers)},]},];s.ctorParameters=function(){return[{type:i.ElementRef,decorators:[{type:r.Inject,args:[i.ElementRef,]},]},{type:i.Injector,decorators:[{type:r.Inject,args:[i.Injector,]},]},{type:undefined,decorators:[{type:r.Inject,args:['WjComponent',]},{type:r.SkipSelf},{type:i.Optional},]},]};n("WjFlexRadarAxis",s);n("wjFlexRadarSeriesMeta",h={selector:'wj-flex-radar-series',template:"<div><ng-content></ng-content></div>",inputs:['asyncBindings','wjProperty','axisX','axisY','binding','bindingX','cssClass','name','style','altStyle','symbolMarker','symbolSize','symbolStyle','visibility','itemsSource','chartType',],outputs:['initialized','renderingNg: rendering','renderedNg: rendered','visibilityChangePC: visibilityChange',],providers:[]});c=function(n){function t(t,i,r){var f=n.call(this)||this,e;return f.isInitialized=!1,f.wjProperty='series',e=f._wjBehaviour=u.WjDirectiveBehavior.attach(f,t,i,r),f.created(),f}return y(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(a.FlexRadarSeries);c.meta={outputs:h.outputs,changeEvents:{'chart.seriesVisibilityChanged':['visibility']},siblingId:'series'};c.decorators=[{type:l.Component,args:[{selector:h.selector,template:h.template,inputs:h.inputs,outputs:h.outputs,providers:[{provide:'WjComponent',useExisting:i.forwardRef(function(){return c})}].concat(h.providers)},]},];c.ctorParameters=function(){return[{type:i.ElementRef,decorators:[{type:r.Inject,args:[i.ElementRef,]},]},{type:i.Injector,decorators:[{type:r.Inject,args:[i.Injector,]},]},{type:undefined,decorators:[{type:r.Inject,args:['WjComponent',]},{type:r.SkipSelf},{type:i.Optional},]},]};n("WjFlexRadarSeries",c);p=[e,s,c];v=function(){function n(){}return n}();v.decorators=[{type:l.NgModule,args:[{imports:[u.WjDirectiveBaseModule,w.CommonModule],declarations:p.slice(),exports:p.slice()},]},];v.ctorParameters=function(){return[]};n("WjChartRadarModule",v)}}})