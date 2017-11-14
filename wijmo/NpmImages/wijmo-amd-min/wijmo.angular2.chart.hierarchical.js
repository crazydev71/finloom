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
var __extends=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}();define(["require","exports","wijmo/wijmo.chart.hierarchical","@angular/core","@angular/core","@angular/core","@angular/common","@angular/forms","wijmo/wijmo.angular2.directiveBase"],function(n,t,i,r,u,f,e,o,s){"use strict";var h,c,a,l;Object.defineProperty(t,"__esModule",{value:!0});t.wjSunburstMeta={selector:'wj-sunburst',template:"<div><ng-content></ng-content></div>",inputs:['wjModelProperty','isDisabled','binding','footer','header','selectionMode','palette','plotMargin','footerStyle','headerStyle','tooltipContent','itemsSource','bindingName','innerRadius','isAnimated','offset','reversed','startAngle','selectedItemPosition','selectedItemOffset','itemFormatter','labelContent','childItemsPath',],outputs:['initialized','gotFocusNg: gotFocus','lostFocusNg: lostFocus','renderingNg: rendering','renderedNg: rendered','selectionChangedNg: selectionChanged',],providers:[{provide:o.NG_VALUE_ACCESSOR,useFactory:s.WjValueAccessorFactory,multi:!0,deps:['WjComponent']}]};h=function(n){function t(t,i,r){var u=n.call(this,s.WjDirectiveBehavior.getHostElement(t,i))||this,f;return u.isInitialized=!1,f=u._wjBehaviour=s.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.prototype.addEventListener=function(t,i,r,u){var o=this,f,e;u===void 0&&(u=!1);f=s.WjDirectiveBehavior;e=f.ngZone;e&&f.outsideZoneEvents[i]?e.runOutsideAngular(function(){n.prototype.addEventListener.call(o,t,i,r,u)}):n.prototype.addEventListener.call(this,t,i,r,u)},Object.defineProperty(t.prototype,"tooltipContent",{get:function(){return this.tooltip.content},set:function(n){this.tooltip.content=n},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"labelContent",{get:function(){return this.dataLabel.content},set:function(n){this.dataLabel.content=n},enumerable:!0,configurable:!0}),t}(i.Sunburst);h.meta={outputs:t.wjSunburstMeta.outputs};h.decorators=[{type:r.Component,args:[{selector:t.wjSunburstMeta.selector,template:t.wjSunburstMeta.template,inputs:t.wjSunburstMeta.inputs,outputs:t.wjSunburstMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return h})}].concat(t.wjSunburstMeta.providers)},]},];h.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjSunburst=h;t.wjTreeMapMeta={selector:'wj-tree-map',template:"",inputs:['wjModelProperty','isDisabled','binding','footer','header','selectionMode','palette','plotMargin','footerStyle','headerStyle','tooltipContent','itemsSource','bindingName','maxDepth','type','labelContent','childItemsPath',],outputs:['initialized','gotFocusNg: gotFocus','lostFocusNg: lostFocus','renderingNg: rendering','renderedNg: rendered','selectionChangedNg: selectionChanged',],providers:[{provide:o.NG_VALUE_ACCESSOR,useFactory:s.WjValueAccessorFactory,multi:!0,deps:['WjComponent']}]};c=function(n){function t(t,i,r){var u=n.call(this,s.WjDirectiveBehavior.getHostElement(t,i))||this,f;return u.isInitialized=!1,f=u._wjBehaviour=s.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.prototype.addEventListener=function(t,i,r,u){var o=this,f,e;u===void 0&&(u=!1);f=s.WjDirectiveBehavior;e=f.ngZone;e&&f.outsideZoneEvents[i]?e.runOutsideAngular(function(){n.prototype.addEventListener.call(o,t,i,r,u)}):n.prototype.addEventListener.call(this,t,i,r,u)},Object.defineProperty(t.prototype,"tooltipContent",{get:function(){return this.tooltip.content},set:function(n){this.tooltip.content=n},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"labelContent",{get:function(){return this.dataLabel.content},set:function(n){this.dataLabel.content=n},enumerable:!0,configurable:!0}),t}(i.TreeMap);c.meta={outputs:t.wjTreeMapMeta.outputs};c.decorators=[{type:r.Component,args:[{selector:t.wjTreeMapMeta.selector,template:t.wjTreeMapMeta.template,inputs:t.wjTreeMapMeta.inputs,outputs:t.wjTreeMapMeta.outputs,providers:[{provide:'WjComponent',useExisting:u.forwardRef(function(){return c})}].concat(t.wjTreeMapMeta.providers)},]},];c.ctorParameters=function(){return[{type:u.ElementRef,decorators:[{type:f.Inject,args:[u.ElementRef,]},]},{type:u.Injector,decorators:[{type:f.Inject,args:[u.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:u.Optional},]},]};t.WjTreeMap=c;a=[h,c];l=function(){function n(){}return n}();l.decorators=[{type:r.NgModule,args:[{imports:[s.WjDirectiveBaseModule,e.CommonModule],declarations:a.slice(),exports:a.slice()},]},];l.ctorParameters=function(){return[]};t.WjChartHierarchicalModule=l})