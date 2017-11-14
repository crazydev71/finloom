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
"use strict";var __extends=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}(),WjFlexGridFilter,moduleExports,WjGridFilterModule;Object.defineProperty(exports,"__esModule",{value:!0});var wjcGridFilter=require("wijmo/wijmo.grid.filter"),core_1=require("@angular/core"),core_2=require("@angular/core"),core_3=require("@angular/core"),common_1=require("@angular/common"),wijmo_angular2_directiveBase_1=require("wijmo/wijmo.angular2.directiveBase");exports.wjFlexGridFilterMeta={selector:'wj-flex-grid-filter',template:"",inputs:['wjProperty','showFilterIcons','showSortButtons','defaultFilterType','filterColumns',],outputs:['initialized','filterChangingNg: filterChanging','filterChangedNg: filterChanged','filterAppliedNg: filterApplied',],providers:[]};WjFlexGridFilter=function(n){function t(t,i,r){var u=n.call(this,r)||this,f;return u.isInitialized=!1,f=u._wjBehaviour=wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(u,t,i,r),u.created(),u}return __extends(t,n),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t}(wjcGridFilter.FlexGridFilter);WjFlexGridFilter.meta={outputs:exports.wjFlexGridFilterMeta.outputs};WjFlexGridFilter.decorators=[{type:core_1.Component,args:[{selector:exports.wjFlexGridFilterMeta.selector,template:exports.wjFlexGridFilterMeta.template,inputs:exports.wjFlexGridFilterMeta.inputs,outputs:exports.wjFlexGridFilterMeta.outputs,providers:[{provide:'WjComponent',useExisting:core_2.forwardRef(function(){return WjFlexGridFilter})}].concat(exports.wjFlexGridFilterMeta.providers)},]},];WjFlexGridFilter.ctorParameters=function(){return[{type:core_2.ElementRef,decorators:[{type:core_3.Inject,args:[core_2.ElementRef,]},]},{type:core_2.Injector,decorators:[{type:core_3.Inject,args:[core_2.Injector,]},]},{type:undefined,decorators:[{type:core_3.Inject,args:['WjComponent',]},{type:core_3.SkipSelf},{type:core_2.Optional},]},]};exports.WjFlexGridFilter=WjFlexGridFilter;moduleExports=[WjFlexGridFilter];WjGridFilterModule=function(){function n(){}return n}();WjGridFilterModule.decorators=[{type:core_1.NgModule,args:[{imports:[wijmo_angular2_directiveBase_1.WjDirectiveBaseModule,common_1.CommonModule],declarations:moduleExports.slice(),exports:moduleExports.slice()},]},];WjGridFilterModule.ctorParameters=function(){return[]};exports.WjGridFilterModule=WjGridFilterModule