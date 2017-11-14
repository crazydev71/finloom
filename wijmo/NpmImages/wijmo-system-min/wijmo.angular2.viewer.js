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
System.register(["wijmo/wijmo.viewer","wijmo/wijmo","@angular/core","@angular/common","@angular/forms","wijmo/wijmo.angular2.directiveBase"],function(n,t){"use strict";var p=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}(),b=t&&t.id,l,a,h,i,u,w,v,r,f,e,o,s,y,c;return{setters:[function(n){l=n},function(n){a=n},function(n){h=n;i=n;u=n},function(n){w=n},function(n){v=n},function(n){r=n}],execute:function(){n("wjReportViewerMeta",f={selector:'wj-report-viewer',template:"",inputs:['asyncBindings','wjModelProperty','serviceUrl','filePath','fullScreen','zoomFactor','mouseMode','selectMouseMode','viewMode','paginated','reportName',],outputs:['initialized','pageIndexChangedNg: pageIndexChanged','viewModeChangedNg: viewModeChanged','viewModeChangePC: viewModeChange','mouseModeChangedNg: mouseModeChanged','mouseModeChangePC: mouseModeChange','selectMouseModeChangedNg: selectMouseModeChanged','selectMouseModeChangePC: selectMouseModeChange','fullScreenChangedNg: fullScreenChanged','fullScreenChangePC: fullScreenChange','zoomFactorChangedNg: zoomFactorChanged','zoomFactorChangePC: zoomFactorChange','queryLoadingDataNg: queryLoadingData',],providers:[{provide:v.NG_VALUE_ACCESSOR,useFactory:r.WjValueAccessorFactory,multi:!0,deps:['WjComponent']}]});e=function(n){function t(t,i,u){var f=n.call(this,r.WjDirectiveBehavior.getHostElement(t,i))||this,e;return f.isInitialized=!1,e=f._wjBehaviour=r.WjDirectiveBehavior.attach(f,t,i,u),f.created(),f}return p(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.prototype.addEventListener=function(t,i,u,f){var s=this,e,o;f===void 0&&(f=!1);e=r.WjDirectiveBehavior;o=e.ngZone;o&&e.outsideZoneEvents[i]?o.runOutsideAngular(function(){n.prototype.addEventListener.call(s,t,i,u,f)}):n.prototype.addEventListener.call(this,t,i,u,f)},t.prototype.onSelectMouseModeChanged=function(n){(this.selectMouseModeChanged._handlers.length>1||this.selectMouseModeChangedNg.observers.length>0)&&a._deprecated('selectMouseModeChanged','mouseModeChanged');this.selectMouseModeChanged.raise(this,n)},t}(l.ReportViewer);e.meta={outputs:f.outputs,changeEvents:{viewModeChanged:['viewMode'],mouseModeChanged:['mouseMode'],selectMouseModeChanged:['selectMouseMode'],fullScreenChanged:['fullScreen'],zoomFactorChanged:['zoomFactor']}};e.decorators=[{type:h.Component,args:[{selector:f.selector,template:f.template,inputs:f.inputs,outputs:f.outputs,providers:[{provide:'WjComponent',useExisting:i.forwardRef(function(){return e})}].concat(f.providers)},]},];e.ctorParameters=function(){return[{type:i.ElementRef,decorators:[{type:u.Inject,args:[i.ElementRef,]},]},{type:i.Injector,decorators:[{type:u.Inject,args:[i.Injector,]},]},{type:undefined,decorators:[{type:u.Inject,args:['WjComponent',]},{type:u.SkipSelf},{type:i.Optional},]},]};n("WjReportViewer",e);n("wjPdfViewerMeta",o={selector:'wj-pdf-viewer',template:"",inputs:['asyncBindings','wjModelProperty','serviceUrl','filePath','fullScreen','zoomFactor','mouseMode','selectMouseMode','viewMode',],outputs:['initialized','pageIndexChangedNg: pageIndexChanged','viewModeChangedNg: viewModeChanged','viewModeChangePC: viewModeChange','mouseModeChangedNg: mouseModeChanged','mouseModeChangePC: mouseModeChange','selectMouseModeChangedNg: selectMouseModeChanged','selectMouseModeChangePC: selectMouseModeChange','fullScreenChangedNg: fullScreenChanged','fullScreenChangePC: fullScreenChange','zoomFactorChangedNg: zoomFactorChanged','zoomFactorChangePC: zoomFactorChange','queryLoadingDataNg: queryLoadingData',],providers:[{provide:v.NG_VALUE_ACCESSOR,useFactory:r.WjValueAccessorFactory,multi:!0,deps:['WjComponent']}]});s=function(n){function t(t,i,u){var f=n.call(this,r.WjDirectiveBehavior.getHostElement(t,i))||this,e;return f.isInitialized=!1,e=f._wjBehaviour=r.WjDirectiveBehavior.attach(f,t,i,u),f.created(),f}return p(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.prototype.addEventListener=function(t,i,u,f){var s=this,e,o;f===void 0&&(f=!1);e=r.WjDirectiveBehavior;o=e.ngZone;o&&e.outsideZoneEvents[i]?o.runOutsideAngular(function(){n.prototype.addEventListener.call(s,t,i,u,f)}):n.prototype.addEventListener.call(this,t,i,u,f)},t.prototype.onSelectMouseModeChanged=function(n){(this.selectMouseModeChanged._handlers.length>1||this.selectMouseModeChangedNg.observers.length>0)&&a._deprecated('selectMouseModeChanged','mouseModeChanged');this.selectMouseModeChanged.raise(this,n)},t}(l.PdfViewer);s.meta={outputs:o.outputs,changeEvents:{viewModeChanged:['viewMode'],mouseModeChanged:['mouseMode'],selectMouseModeChanged:['selectMouseMode'],fullScreenChanged:['fullScreen'],zoomFactorChanged:['zoomFactor']}};s.decorators=[{type:h.Component,args:[{selector:o.selector,template:o.template,inputs:o.inputs,outputs:o.outputs,providers:[{provide:'WjComponent',useExisting:i.forwardRef(function(){return s})}].concat(o.providers)},]},];s.ctorParameters=function(){return[{type:i.ElementRef,decorators:[{type:u.Inject,args:[i.ElementRef,]},]},{type:i.Injector,decorators:[{type:u.Inject,args:[i.Injector,]},]},{type:undefined,decorators:[{type:u.Inject,args:['WjComponent',]},{type:u.SkipSelf},{type:i.Optional},]},]};n("WjPdfViewer",s);y=[e,s];c=function(){function n(){}return n}();c.decorators=[{type:h.NgModule,args:[{imports:[r.WjDirectiveBaseModule,w.CommonModule],declarations:y.slice(),exports:y.slice()},]},];c.ctorParameters=function(){return[]};n("WjViewerModule",c)}}})