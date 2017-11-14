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
System.register(["wijmo/wijmo.chart.animation","@angular/core","@angular/common","wijmo/wijmo.angular2.directiveBase"],function(n,t){"use strict";var a=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}(),v=t&&t.id,c,o,i,f,l,s,r,u,h,e;return{setters:[function(n){c=n},function(n){o=n;i=n;f=n},function(n){l=n},function(n){s=n}],execute:function(){n("wjFlexChartAnimationMeta",r={selector:'wj-flex-chart-animation',template:"",inputs:['wjProperty','animationMode','easing','duration','axisAnimation',],outputs:['initialized',],providers:[]});u=function(n){function t(t,i,r){var u=n.call(this,r)||this,f;return u.isInitialized=!1,f=u._wjBehaviour=s.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return a(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(c.ChartAnimation);u.meta={outputs:r.outputs};u.decorators=[{type:o.Component,args:[{selector:r.selector,template:r.template,inputs:r.inputs,outputs:r.outputs,providers:[{provide:'WjComponent',useExisting:i.forwardRef(function(){return u})}].concat(r.providers)},]},];u.ctorParameters=function(){return[{type:i.ElementRef,decorators:[{type:f.Inject,args:[i.ElementRef,]},]},{type:i.Injector,decorators:[{type:f.Inject,args:[i.Injector,]},]},{type:undefined,decorators:[{type:f.Inject,args:['WjComponent',]},{type:f.SkipSelf},{type:i.Optional},]},]};n("WjFlexChartAnimation",u);h=[u];e=function(){function n(){}return n}();e.decorators=[{type:o.NgModule,args:[{imports:[s.WjDirectiveBaseModule,l.CommonModule],declarations:h.slice(),exports:h.slice()},]},];e.ctorParameters=function(){return[]};n("WjChartAnimationModule",e)}}})